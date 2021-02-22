(function() {var implementors = {};
implementors["mmtk"] = [{"text":"impl UnwindSafe for Address","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ObjectReference","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for Allocators&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AllocatorSelector","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for BumpAllocator&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DumpLinearScan","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for LargeObjectAllocator&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GcCounter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ObjectCounter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PerSizeClassObjectCounter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GcHookWork","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; UnwindSafe for AnalysisManager&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HeaderByte","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FragmentedMapper","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Map64","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CommonFreeListPageResource","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for FreeListPageResource&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HeapMeta","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for MonotonePageResource&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MonotonePageResourceConditional","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for CommonPageResource&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SpaceDescriptor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VMRequest","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IntArrayFreeList","synthetic":true,"types":[]},{"text":"impl UnwindSafe for OpaquePointer","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NurseryZeroingOptions","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PlanSelector","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnsafeOptionsWrapper","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Options","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RawMemoryFreeList","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReferenceProcessors","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReferenceProcessor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Semantics","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SanityChecker","synthetic":true,"types":[]},{"text":"impl&lt;P, W&gt; UnwindSafe for ScheduleSanityGC&lt;P, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P, W&gt; UnwindSafe for SanityPrepare&lt;P, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P, W&gt; UnwindSafe for SanityRelease&lt;P, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for SanityGCProcessEdges&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SideMetadataScope","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SideMetadataSpec","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MappingState","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EventCounter","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for LongCounter&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Diffable&gt;::Val: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SizeCounter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MonotoneNanoTime","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SharedStats","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Stats","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SynchronizedCounter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TreadMill","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for MMTK&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BarrierSelector","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WriteTarget","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NoBarrier","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ModBuffer","synthetic":true,"types":[]},{"text":"impl&lt;E, S&gt; !UnwindSafe for FieldRememberingBarrier&lt;E, S&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; UnwindSafe for ControllerCollectorContext&lt;VM&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;VM: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; UnwindSafe for NoCopy&lt;VM&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;VM: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GcStatus","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for BasePlan&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for BaseUnsync&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for CommonPlan&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for CommonUnsync&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AllocationSemantics","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for MutatorConfig&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for Mutator&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PlanConstraints","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for GenCopy&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for NoGC&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for SemiSpace&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for SFTMap","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for CommonSpace&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SpaceOptions","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for CopySpace&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for ImmortalSpace&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for LargeObjectSpace&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; UnwindSafe for LockFreeImmortalSpace&lt;VM&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;VM: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; !UnwindSafe for CoordinatorMessage&lt;C&gt;","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; !UnwindSafe for Scheduler&lt;C&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SchedulerStat","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WorkStat","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WorkerLocalStat","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WorkBucketStage","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WorkerLocalPtr","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; !UnwindSafe for Worker&lt;C&gt;","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; !UnwindSafe for WorkerGroup&lt;C&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ScheduleCollection","synthetic":true,"types":[]},{"text":"impl&lt;P, W&gt; UnwindSafe for Prepare&lt;P, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for PrepareMutator&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;W&gt; UnwindSafe for PrepareCollector&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;P, W&gt; UnwindSafe for Release&lt;P, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; !UnwindSafe for ReleaseMutator&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;W&gt; UnwindSafe for ReleaseCollector&lt;W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;ScanEdges&gt; UnwindSafe for StopMutators&lt;ScanEdges&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;ScanEdges: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EndOfGC","synthetic":true,"types":[]},{"text":"impl&lt;Edges&gt; UnwindSafe for ScanStackRoots&lt;Edges&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Edges: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Edges&gt; !UnwindSafe for ScanStackRoot&lt;Edges&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Edges&gt; UnwindSafe for ScanVMSpecificRoots&lt;Edges&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Edges: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; !UnwindSafe for ProcessEdgesBase&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Edges&gt; UnwindSafe for ScanObjects&lt;Edges&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Edges: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; UnwindSafe for ProcessModBuf&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()