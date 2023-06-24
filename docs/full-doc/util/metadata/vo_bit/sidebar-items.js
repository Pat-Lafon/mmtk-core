window.SIDEBAR_ITEMS = {"constant":[["VO_BIT_SIDE_METADATA_ADDR",""],["VO_BIT_SIDE_METADATA_SPEC","A VO bit is required per min-object-size aligned address, rather than per object, and can only exist as side metadata."]],"fn":[["bcopy_vo_bit_from_mark_bit","Bulk copy VO bits from side mark bits. Some VMs require the VO bits to be available during tracing. However, some GC algorithms (such as Immix) cannot clear VO bits for dead objects only. As an alternative, this function copies the mark bits metadata to VO bits. The caller needs to ensure the mark bits are set exactly wherever VO bits need to be set before calling this function."],["bzero_vo_bit","Bulk zero the VO bit."],["is_vo_bit_set","Check if the VO bit is set for an object."],["is_vo_bit_set_for_addr","Check if an address can be turned directly into an object reference using the VO bit. If so, return `Some(object)`. Otherwise return `None`."],["is_vo_bit_set_unsafe","Check if an address can be turned directly into an object reference using the VO bit. If so, return `Some(object)`. Otherwise return `None`. The caller needs to ensure the side metadata for the VO bit for the object is accessed by only one thread."],["set_vo_bit","Atomically set the VO bit for an object."],["unset_vo_bit","Atomically unset the VO bit for an object."],["unset_vo_bit_nocheck","Atomically unset the VO bit for an object, regardless whether the bit is set or not."],["unset_vo_bit_unsafe","Non-atomically unset the VO bit for an object. The caller needs to ensure the side metadata for the VO bit for the object is accessed by only one thread."]],"mod":[["helper","This module updates of VO bits during GC.  It is used for spaces that do not clear the metadata of some dead objects during GC.  Currently, only ImmixSpace is affected."]]};