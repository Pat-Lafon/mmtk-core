use std::sync::atomic::AtomicUsize;

use atomic::Ordering;

use crate::{plan::PlanConstraints, util::{constants::BYTES_IN_ADDRESS, forwarding_word}};
use crate::plan::TransitiveClosure;
use crate::policy::space::SpaceOptions;
use crate::policy::space::{CommonSpace, Space, SFT};
use crate::util::constants::{BYTES_IN_PAGE, LOG_BYTES_IN_WORD};
use crate::util::header_byte::HeaderByte;
use crate::util::heap::layout::heap_layout::{Mmapper, VMMap};
use crate::util::heap::HeapMeta;
use crate::util::heap::{FreeListPageResource, PageResource, VMRequest};
use crate::util::opaque_pointer::*;
use crate::util::side_metadata::{SideMetadataContext, SideMetadataSpec};
use crate::util::treadmill::TreadMill;
use crate::util::{Address, ObjectReference};
use crate::vm::ObjectModel;
use crate::vm::VMBinding;

#[allow(unused)]
const PAGE_MASK: usize = !(BYTES_IN_PAGE - 1);
const MARK_BIT: usize = 0b01;
const NURSERY_BIT: usize = 0b10;
const LOS_BIT_MASK: usize = 0b11;

const USE_PRECEEDING_GC_HEADER: bool = true;
const PRECEEDING_GC_HEADER_WORDS: usize = 1;
const PRECEEDING_GC_HEADER_BYTES: usize = PRECEEDING_GC_HEADER_WORDS << LOG_BYTES_IN_WORD;

pub struct LargeObjectSpace<VM: VMBinding> {
    common: CommonSpace<VM>,
    pr: FreeListPageResource<VM>,
    mark_state: usize,
    in_nursery_gc: bool,
    treadmill: TreadMill,
    header_byte: HeaderByte,
}

impl<VM: VMBinding> SFT for LargeObjectSpace<VM> {
    fn name(&self) -> &str {
        self.get_name()
    }
    fn is_live(&self, object: ObjectReference) -> bool {
        self.test_mark_bit(object, self.mark_state)
    }
    fn is_movable(&self) -> bool {
        false
    }
    #[cfg(feature = "sanity")]
    fn is_sane(&self) -> bool {
        true
    }
    fn initialize_header(&self, object: ObjectReference, alloc: bool) {
        let old_value = Self::read_gc_word(object);
        let mut new_value = (old_value & (!LOS_BIT_MASK)) | self.mark_state;
        if alloc {
            new_value |= NURSERY_BIT;
        }
        Self::write_gc_word(object, new_value);
        let cell = VM::VMObjectModel::object_start_ref(object) - if USE_PRECEEDING_GC_HEADER { PRECEEDING_GC_HEADER_BYTES } else { 0 };
        self.treadmill.add_to_treadmill(cell, alloc);
        if self.header_byte.needs_unlogged_bit {
            unreachable!();
            // gc_byte::write_gc_byte::<VM>(
            //     object,
            //     gc_byte::read_gc_byte::<VM>(object) | self.header_byte.unlogged_bit,
            // );
        }
    }
}

impl<VM: VMBinding> Space<VM> for LargeObjectSpace<VM> {
    #[cfg(target_pointer_width = "32")]
    fn local_side_metadata_per_chunk(&self) -> usize {
        super::immix::ImmixSpace::<VM>::LOCAL_SIDE_METADATA_PER_CHUNK
    }
    fn as_space(&self) -> &dyn Space<VM> {
        self
    }
    fn as_sft(&self) -> &(dyn SFT + Sync + 'static) {
        self
    }
    fn get_page_resource(&self) -> &dyn PageResource<VM> {
        &self.pr
    }
    fn init(&mut self, _vm_map: &'static VMMap) {}

    fn common(&self) -> &CommonSpace<VM> {
        &self.common
    }

    fn release_multiple_pages(&mut self, start: Address) {
        self.pr.release_pages(start);
    }
}

impl<VM: VMBinding> LargeObjectSpace<VM> {
    #[allow(clippy::too_many_arguments)]
    pub fn new(
        name: &'static str,
        zeroed: bool,
        vmrequest: VMRequest,
        global_side_metadata_specs: Vec<SideMetadataSpec>,
        vm_map: &'static VMMap,
        mmapper: &'static Mmapper,
        heap: &mut HeapMeta,
        constraints: &'static PlanConstraints,
    ) -> Self {
        let common = CommonSpace::new(
            SpaceOptions {
                name,
                movable: false,
                immortal: false,
                zeroed,
                vmrequest,
                side_metadata_specs: SideMetadataContext {
                    global: global_side_metadata_specs,
                    local: vec![],
                },
            },
            vm_map,
            mmapper,
            heap,
        );
        LargeObjectSpace {
            pr: if vmrequest.is_discontiguous() {
                FreeListPageResource::new_discontiguous(0, vm_map)
            } else {
                FreeListPageResource::new_contiguous(common.start, common.extent, 0, vm_map)
            },
            common,
            mark_state: 0,
            in_nursery_gc: false,
            treadmill: TreadMill::new(),
            header_byte: HeaderByte::new(constraints),
        }
    }

    pub fn prepare(&mut self, full_heap: bool) {
        if full_heap {
            debug_assert!(self.treadmill.from_space_empty());
            self.mark_state = MARK_BIT - self.mark_state;
        }
        self.treadmill.flip(full_heap);
        self.in_nursery_gc = !full_heap;
    }

    pub fn release(&mut self, full_heap: bool) {
        self.sweep_large_pages(true);
        debug_assert!(self.treadmill.nursery_empty());
        if full_heap {
            self.sweep_large_pages(false);
        }
    }
    // Allow nested-if for this function to make it clear that test_and_mark() is only executed
    // for the outer condition is met.
    #[allow(clippy::collapsible_if)]
    pub fn trace_object<T: TransitiveClosure>(
        &self,
        trace: &mut T,
        object: ObjectReference,
    ) -> ObjectReference {
        let nursery_object = self.is_in_nursery(object);
        if !self.in_nursery_gc || nursery_object {
            // Note that test_and_mark() has side effects
            if self.test_and_mark(object, self.mark_state) {
                let cell = VM::VMObjectModel::object_start_ref(object)
                    - if USE_PRECEEDING_GC_HEADER {
                        PRECEEDING_GC_HEADER_BYTES
                    } else {
                        0
                    };
                self.treadmill.copy(cell, nursery_object);
                trace.process_node(object);
            }
        }
        object
    }

    fn sweep_large_pages(&mut self, sweep_nursery: bool) {
        // FIXME: borrow checker fighting
        // didn't call self.release_multiple_pages
        // so the compiler knows I'm borrowing two different fields
        if sweep_nursery {
            for cell in self.treadmill.collect_nursery() {
                // println!("- cn {}", cell);
                self.pr.release_pages(get_super_page(cell));
            }
        } else {
            for cell in self.treadmill.collect() {
                // println!("- ts {}", cell);
                self.pr.release_pages(get_super_page(cell));
            }
        }
    }

    pub fn allocate_pages(&self, tls: VMThread, pages: usize) -> Address {
        let start = self.acquire(tls, pages);
        if start.is_zero() {
            return start;
        }
        if USE_PRECEEDING_GC_HEADER {
            start + PRECEEDING_GC_HEADER_BYTES
        } else {
            start
        }
    }

    fn test_and_mark(&self, object: ObjectReference, value: usize) -> bool {
        let mask = if self.in_nursery_gc {
            LOS_BIT_MASK
        } else {
            MARK_BIT
        };
        let mut old_value = Self::read_gc_word(object);
        let mut mark_bit = old_value & mask;
        if mark_bit == value {
            return false;
        }
        while !Self::attempt_gc_word(
            object,
            old_value,
            old_value & !LOS_BIT_MASK | value,
        ) {
            old_value = Self::read_gc_word(object);
            mark_bit = old_value & mask;
            if mark_bit == value {
                return false;
            }
        }
        true
    }

    fn test_mark_bit(&self, object: ObjectReference, value: usize) -> bool {
        Self::read_gc_word(object) & MARK_BIT == value
    }

    fn is_in_nursery(&self, object: ObjectReference) -> bool {
        Self::read_gc_word(object) & NURSERY_BIT == NURSERY_BIT
    }

    fn gc_word_address(object: ObjectReference) -> Address {
        match forwarding_word::gc_byte_offset_in_forwarding_word::<VM>() {
            // forwarding word is located in the same word as gc byte
            Some(fw_offset) => object.to_address() + VM::VMObjectModel::GC_BYTE_OFFSET + fw_offset,
            None => {
                let obj_lowest_addr = VM::VMObjectModel::object_start_ref(object);
                debug_assert!(!cfg!(feature = "side_gc_header"));
                // if VM::VMObjectModel::HAS_GC_BYTE {
                    let abs_gc_byte_offset = (object.to_address() - obj_lowest_addr) as isize
                        + VM::VMObjectModel::GC_BYTE_OFFSET;
                    // e.g. there is more than 8 bytes from lowest object address to gc byte
                    if abs_gc_byte_offset >= BYTES_IN_ADDRESS as isize {
                        obj_lowest_addr // forwarding word at the lowest address of the object storage
                    } else {
                        obj_lowest_addr + BYTES_IN_ADDRESS // forwarding word at the first word after the lowest address of the object storage
                    }
                // } else {
                //     obj_lowest_addr // forwarding word at the lowest address of the object storage
                // }
            }
        }
    }

    fn read_gc_word(o: ObjectReference) -> usize {
        if USE_PRECEEDING_GC_HEADER {
            unsafe { (VM::VMObjectModel::object_start_ref(o) - PRECEEDING_GC_HEADER_BYTES).load::<usize>() }
        } else {
            unsafe { Self::gc_word_address(o).atomic_load::<AtomicUsize>(Ordering::SeqCst) }
        }
    }

    fn write_gc_word(o: ObjectReference, value: usize) {
        if USE_PRECEEDING_GC_HEADER {
            unsafe { (VM::VMObjectModel::object_start_ref(o) - PRECEEDING_GC_HEADER_BYTES).store::<usize>(value) };
        } else {
            unsafe { Self::gc_word_address(o).atomic_store::<AtomicUsize>(value, Ordering::SeqCst) }
        }
    }

    fn attempt_gc_word(o: ObjectReference, old: usize, new: usize) -> bool {
        if USE_PRECEEDING_GC_HEADER {
            unsafe {
                (VM::VMObjectModel::object_start_ref(o) - PRECEEDING_GC_HEADER_BYTES).compare_exchange::<AtomicUsize>(old, new, Ordering::SeqCst, Ordering::SeqCst).is_ok()
            }
        } else {
            unsafe { Self::gc_word_address(o).compare_exchange::<AtomicUsize>(old, new, Ordering::SeqCst, Ordering::SeqCst).is_ok() }
        }
    }
}

fn get_super_page(cell: Address) -> Address {
    cell.align_down(BYTES_IN_PAGE)
}
