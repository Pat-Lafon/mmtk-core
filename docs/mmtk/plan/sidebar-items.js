initSidebarItems({"constant":[["GENCOPY_CONSTRAINTS",""],["IMMIX_CONSTRAINTS",""],["MARKCOMPACT_CONSTRAINTS",""],["MS_CONSTRAINTS",""],["NOGC_CONSTRAINTS",""],["PP_CONSTRAINTS",""],["SS_CONSTRAINTS",""]],"enum":[["AllocationSemantics","Allocation semantics that MMTk provides. Each allocation request requires a desired semantic for the object to allocate."],["BarrierSelector","BarrierSelector describes which barrier to use."]],"mod":[["barriers","Read/Write barrier implementations."],["controller_collector_context","The GC controller thread."],["generational",""],["global","The global part of a plan implementation."],["immix",""],["markcompact",""],["marksweep","Plan: marksweep (currently using malloc as its freelist allocator)"],["mutator_context","Mutator context for each application thread."],["nogc","Plan: nogc (allocation-only)"],["pageprotect","Plan: pageprotect"],["plan_constraints","Plan-specific constraints."],["semispace","Plan: semispace"],["tracelocal","Unsynchronized thread-local trace mechanism (superseded by ProcessEdgesWork)."],["transitive_closure","The fundamental mechanism for performing a transitive closure over an object graph."]],"struct":[["Mutator","A mutator is a per-thread data structure that manages allocations and barriers. It is usually highly coupled with the language VM. It is recommended for MMTk users 1) to have a mutator struct of the same layout in the thread local storage that can be accessed efficiently, and 2) to implement fastpath allocation and barriers for the mutator in the VM side."],["ObjectsClosure","A transitive closure visitor to collect all the edges of an object."],["PlanConstraints","This struct defines plan-specific constraints. Most of the constraints are constants. Each plan should declare a constant of this struct, and use the constant wherever possible. However, for plan-neutral implementations, these constraints are not constant."]],"trait":[["CopyContext","A GC worker’s context for copying GCs. Each GC plan should provide their implementation of a CopyContext. For non-copying GC, NoCopy can be used."],["MutatorContext","Each GC plan should provide their implementation of a MutatorContext. Note that this trait is no longer needed as we removed per-plan mutator implementation and we will remove this trait as well in the future."],["Plan","A plan describes the global core functionality for all memory management schemes. All global MMTk plans should implement this trait."],["TraceLocal","This trait and its global counterpart implement the core functionality for a transitive closure over the heap graph. This trait specifically implements the unsynchronized thread-local component (ie the ‘fast-path’) of the trace mechanism."],["TransitiveClosure","This trait is the fundamental mechanism for performing a transitive closure over an object graph."]]});