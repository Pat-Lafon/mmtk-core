(function() {var type_impls = {
"mmtk":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-DerefMut-for-PlanProcessEdges%3CVM,+P,+KIND%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mmtk/scheduler/gc_work.rs.html#985-991\">source</a><a href=\"#impl-DerefMut-for-PlanProcessEdges%3CVM,+P,+KIND%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;VM: <a class=\"trait\" href=\"mmtk/vm/trait.VMBinding.html\" title=\"trait mmtk::vm::VMBinding\">VMBinding</a>, P: <a class=\"trait\" href=\"mmtk/plan/global/trait.PlanTraceObject.html\" title=\"trait mmtk::plan::global::PlanTraceObject\">PlanTraceObject</a>&lt;VM&gt; + <a class=\"trait\" href=\"mmtk/plan/global/trait.Plan.html\" title=\"trait mmtk::plan::global::Plan\">Plan</a>&lt;VM = VM&gt;, const KIND: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"mmtk/scheduler/gc_work/struct.PlanProcessEdges.html\" title=\"struct mmtk::scheduler::gc_work::PlanProcessEdges\">PlanProcessEdges</a>&lt;VM, P, KIND&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref_mut\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/scheduler/gc_work.rs.html#988-990\">source</a><a href=\"#method.deref_mut\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/ops/deref/trait.DerefMut.html#tymethod.deref_mut\" class=\"fn\">deref_mut</a>(&amp;mut self) -&gt; &amp;mut Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/deref/trait.Deref.html#associatedtype.Target\" title=\"type core::ops::deref::Deref::Target\">Target</a></h4></section></summary><div class='docblock'>Mutably dereferences the value.</div></details></div></details>","DerefMut","mmtk::plan::markcompact::gc_work::MarkingProcessEdges","mmtk::plan::markcompact::gc_work::ForwardingProcessEdges"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-__Deref-for-PlanProcessEdges%3CVM,+P,+KIND%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mmtk/scheduler/gc_work.rs.html#976-983\">source</a><a href=\"#impl-__Deref-for-PlanProcessEdges%3CVM,+P,+KIND%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;VM: <a class=\"trait\" href=\"mmtk/vm/trait.VMBinding.html\" title=\"trait mmtk::vm::VMBinding\">VMBinding</a>, P: <a class=\"trait\" href=\"mmtk/plan/global/trait.PlanTraceObject.html\" title=\"trait mmtk::plan::global::PlanTraceObject\">PlanTraceObject</a>&lt;VM&gt; + <a class=\"trait\" href=\"mmtk/plan/global/trait.Plan.html\" title=\"trait mmtk::plan::global::Plan\">Plan</a>&lt;VM = VM&gt;, const KIND: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/deref/trait.Deref.html\" title=\"trait core::ops::deref::Deref\">Deref</a> for <a class=\"struct\" href=\"mmtk/scheduler/gc_work/struct.PlanProcessEdges.html\" title=\"struct mmtk::scheduler::gc_work::PlanProcessEdges\">PlanProcessEdges</a>&lt;VM, P, KIND&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Target\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Target\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/1.77.0/core/ops/deref/trait.Deref.html#associatedtype.Target\" class=\"associatedtype\">Target</a> = <a class=\"struct\" href=\"mmtk/scheduler/gc_work/struct.ProcessEdgesBase.html\" title=\"struct mmtk::scheduler::gc_work::ProcessEdgesBase\">ProcessEdgesBase</a>&lt;VM&gt;</h4></section></summary><div class='docblock'>The resulting type after dereferencing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.deref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/scheduler/gc_work.rs.html#980-982\">source</a><a href=\"#method.deref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/ops/deref/trait.Deref.html#tymethod.deref\" class=\"fn\">deref</a>(&amp;self) -&gt; &amp;Self::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/deref/trait.Deref.html#associatedtype.Target\" title=\"type core::ops::deref::Deref::Target\">Target</a></h4></section></summary><div class='docblock'>Dereferences the value.</div></details></div></details>","Deref","mmtk::plan::markcompact::gc_work::MarkingProcessEdges","mmtk::plan::markcompact::gc_work::ForwardingProcessEdges"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ProcessEdgesWork-for-PlanProcessEdges%3CVM,+P,+KIND%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/mmtk/scheduler/gc_work.rs.html#935-973\">source</a><a href=\"#impl-ProcessEdgesWork-for-PlanProcessEdges%3CVM,+P,+KIND%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;VM: <a class=\"trait\" href=\"mmtk/vm/trait.VMBinding.html\" title=\"trait mmtk::vm::VMBinding\">VMBinding</a>, P: <a class=\"trait\" href=\"mmtk/plan/global/trait.PlanTraceObject.html\" title=\"trait mmtk::plan::global::PlanTraceObject\">PlanTraceObject</a>&lt;VM&gt; + <a class=\"trait\" href=\"mmtk/plan/global/trait.Plan.html\" title=\"trait mmtk::plan::global::Plan\">Plan</a>&lt;VM = VM&gt;, const KIND: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a>&gt; <a class=\"trait\" href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html\" title=\"trait mmtk::scheduler::gc_work::ProcessEdgesWork\">ProcessEdgesWork</a> for <a class=\"struct\" href=\"mmtk/scheduler/gc_work/struct.PlanProcessEdges.html\" title=\"struct mmtk::scheduler::gc_work::PlanProcessEdges\">PlanProcessEdges</a>&lt;VM, P, KIND&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.VM\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.VM\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html#associatedtype.VM\" class=\"associatedtype\">VM</a> = VM</h4></section></summary><div class='docblock'>The associate type for the VM.</div></details><details class=\"toggle\" open><summary><section id=\"associatedtype.ScanObjectsWorkType\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.ScanObjectsWorkType\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html#associatedtype.ScanObjectsWorkType\" class=\"associatedtype\">ScanObjectsWorkType</a> = <a class=\"struct\" href=\"mmtk/scheduler/gc_work/struct.PlanScanObjects.html\" title=\"struct mmtk::scheduler::gc_work::PlanScanObjects\">PlanScanObjects</a>&lt;<a class=\"struct\" href=\"mmtk/scheduler/gc_work/struct.PlanProcessEdges.html\" title=\"struct mmtk::scheduler::gc_work::PlanProcessEdges\">PlanProcessEdges</a>&lt;VM, P, KIND&gt;, P&gt;</h4></section></summary><div class='docblock'>The work packet type for scanning objects when using this ProcessEdgesWork.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/scheduler/gc_work.rs.html#941-950\">source</a><a href=\"#method.new\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html#tymethod.new\" class=\"fn\">new</a>(\n    slots: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;&lt;&lt;Self as <a class=\"trait\" href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html\" title=\"trait mmtk::scheduler::gc_work::ProcessEdgesWork\">ProcessEdgesWork</a>&gt;::<a class=\"associatedtype\" href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html#associatedtype.VM\" title=\"type mmtk::scheduler::gc_work::ProcessEdgesWork::VM\">VM</a> as <a class=\"trait\" href=\"mmtk/vm/trait.VMBinding.html\" title=\"trait mmtk::vm::VMBinding\">VMBinding</a>&gt;::<a class=\"associatedtype\" href=\"mmtk/vm/trait.VMBinding.html#associatedtype.VMSlot\" title=\"type mmtk::vm::VMBinding::VMSlot\">VMSlot</a>&gt;,\n    roots: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a>,\n    mmtk: &amp;'static <a class=\"struct\" href=\"mmtk/mmtk/struct.MMTK.html\" title=\"struct mmtk::mmtk::MMTK\">MMTK</a>&lt;VM&gt;,\n    bucket: <a class=\"enum\" href=\"mmtk/scheduler/work_bucket/enum.WorkBucketStage.html\" title=\"enum mmtk::scheduler::work_bucket::WorkBucketStage\">WorkBucketStage</a>\n) -&gt; Self</h4></section></summary><div class='docblock'>Create a <a href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html\" title=\"trait mmtk::scheduler::gc_work::ProcessEdgesWork\"><code>ProcessEdgesWork</code></a>. <a href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html#tymethod.new\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.create_scan_work\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/scheduler/gc_work.rs.html#952-954\">source</a><a href=\"#method.create_scan_work\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html#tymethod.create_scan_work\" class=\"fn\">create_scan_work</a>(\n    &amp;self,\n    nodes: <a class=\"struct\" href=\"https://doc.rust-lang.org/1.77.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"mmtk/util/address/struct.ObjectReference.html\" title=\"struct mmtk::util::address::ObjectReference\">ObjectReference</a>&gt;\n) -&gt; Self::<a class=\"associatedtype\" href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html#associatedtype.ScanObjectsWorkType\" title=\"type mmtk::scheduler::gc_work::ProcessEdgesWork::ScanObjectsWorkType\">ScanObjectsWorkType</a></h4></section></summary><div class='docblock'>Create an object-scanning work packet to be used for this ProcessEdgesWork. <a href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html#tymethod.create_scan_work\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.trace_object\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/scheduler/gc_work.rs.html#956-961\">source</a><a href=\"#method.trace_object\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html#tymethod.trace_object\" class=\"fn\">trace_object</a>(&amp;mut self, object: <a class=\"struct\" href=\"mmtk/util/address/struct.ObjectReference.html\" title=\"struct mmtk::util::address::ObjectReference\">ObjectReference</a>) -&gt; <a class=\"struct\" href=\"mmtk/util/address/struct.ObjectReference.html\" title=\"struct mmtk::util::address::ObjectReference\">ObjectReference</a></h4></section></summary><div class='docblock'>Trace an MMTk object. The implementation should forward this call to the policy-specific\n<code>trace_object()</code> methods, depending on which space this object is in.\nIf the object is not in any MMTk space, the implementation should forward the call to\n<code>ActivePlan::vm_trace_object()</code> to let the binding handle the tracing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.process_slot\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/scheduler/gc_work.rs.html#963-972\">source</a><a href=\"#method.process_slot\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html#method.process_slot\" class=\"fn\">process_slot</a>(\n    &amp;mut self,\n    slot: &lt;&lt;Self as <a class=\"trait\" href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html\" title=\"trait mmtk::scheduler::gc_work::ProcessEdgesWork\">ProcessEdgesWork</a>&gt;::<a class=\"associatedtype\" href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html#associatedtype.VM\" title=\"type mmtk::scheduler::gc_work::ProcessEdgesWork::VM\">VM</a> as <a class=\"trait\" href=\"mmtk/vm/trait.VMBinding.html\" title=\"trait mmtk::vm::VMBinding\">VMBinding</a>&gt;::<a class=\"associatedtype\" href=\"mmtk/vm/trait.VMBinding.html#associatedtype.VMSlot\" title=\"type mmtk::vm::VMBinding::VMSlot\">VMSlot</a>\n)</h4></section></summary><div class='docblock'>Process a slot, including loading the object reference from the memory slot,\ntrace the object and store back the new object reference if necessary.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.CAPACITY\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/scheduler/gc_work.rs.html#547\">source</a><a href=\"#associatedconstant.CAPACITY\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html#associatedconstant.CAPACITY\" class=\"constant\">CAPACITY</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.usize.html\">usize</a> = 4_096usize</h4></section></summary><div class='docblock'>The maximum number of slots that should be put to one of this work packets.\nThe caller who creates a work packet of this trait should be responsible to\ncomply with this capacity.\nHigher capacity means the packet will take longer to finish, and may lead to\nbad load balancing. On the other hand, lower capacity would lead to higher cost\non scheduling many small work packets. It is important to find a proper capacity.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.OVERWRITE_REFERENCE\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/scheduler/gc_work.rs.html#549\">source</a><a href=\"#associatedconstant.OVERWRITE_REFERENCE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html#associatedconstant.OVERWRITE_REFERENCE\" class=\"constant\">OVERWRITE_REFERENCE</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a> = true</h4></section></summary><div class='docblock'>Do we update object reference? This has to be true for a moving GC.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.SCAN_OBJECTS_IMMEDIATELY\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/scheduler/gc_work.rs.html#552\">source</a><a href=\"#associatedconstant.SCAN_OBJECTS_IMMEDIATELY\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html#associatedconstant.SCAN_OBJECTS_IMMEDIATELY\" class=\"constant\">SCAN_OBJECTS_IMMEDIATELY</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.bool.html\">bool</a> = true</h4></section></summary><div class='docblock'>If true, we do object scanning in this work packet with the same worker without scheduling overhead.\nIf false, we will add object scanning work packets to the global queue and allow other workers to work on it.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.cache_roots_for_sanity_gc\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/scheduler/gc_work.rs.html#577-584\">source</a><a href=\"#method.cache_roots_for_sanity_gc\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html#method.cache_roots_for_sanity_gc\" class=\"fn\">cache_roots_for_sanity_gc</a>(&amp;mut self)</h4></section></summary><div class='docblock'>If the work includes roots, we will store the roots somewhere so for sanity GC, we can do another\ntransitive closure from the roots.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.start_or_dispatch_scan_work\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/scheduler/gc_work.rs.html#588-600\">source</a><a href=\"#method.start_or_dispatch_scan_work\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html#method.start_or_dispatch_scan_work\" class=\"fn\">start_or_dispatch_scan_work</a>(&amp;mut self, work_packet: impl <a class=\"trait\" href=\"mmtk/scheduler/work/trait.GCWork.html\" title=\"trait mmtk::scheduler::work::GCWork\">GCWork</a>&lt;Self::<a class=\"associatedtype\" href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html#associatedtype.VM\" title=\"type mmtk::scheduler::gc_work::ProcessEdgesWork::VM\">VM</a>&gt;)</h4></section></summary><div class='docblock'>Start the a scan work packet. If SCAN_OBJECTS_IMMEDIATELY, the work packet will be executed immediately, in this method.\nOtherwise, the work packet will be added the Closure work bucket and will be dispatched later by the scheduler.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.flush\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/scheduler/gc_work.rs.html#610-615\">source</a><a href=\"#method.flush\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html#method.flush\" class=\"fn\">flush</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Flush the nodes in ProcessEdgesBase, and create a ScanObjects work packet for it. If the node set is empty,\nthis method will simply return with no work packet created.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.process_slots\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/scheduler/gc_work.rs.html#631-636\">source</a><a href=\"#method.process_slots\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"mmtk/scheduler/gc_work/trait.ProcessEdgesWork.html#method.process_slots\" class=\"fn\">process_slots</a>(&amp;mut self)</h4></section></summary><div class='docblock'>Process all the slots in the work packet.</div></details></div></details>","ProcessEdgesWork","mmtk::plan::markcompact::gc_work::MarkingProcessEdges","mmtk::plan::markcompact::gc_work::ForwardingProcessEdges"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()