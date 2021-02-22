(function() {var implementors = {};
implementors["mmtk"] = [{"text":"impl Send for Address","synthetic":true,"types":[]},{"text":"impl Send for ObjectReference","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for Allocators&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Send for AllocatorSelector","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for BumpAllocator&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Send for DumpLinearScan","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for LargeObjectAllocator&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Send for GcCounter","synthetic":true,"types":[]},{"text":"impl Send for ObjectCounter","synthetic":true,"types":[]},{"text":"impl Send for PerSizeClassObjectCounter","synthetic":true,"types":[]},{"text":"impl Send for GcHookWork","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for AnalysisManager&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Send for HeaderByte","synthetic":true,"types":[]},{"text":"impl Send for FragmentedMapper","synthetic":true,"types":[]},{"text":"impl Send for Map64","synthetic":true,"types":[]},{"text":"impl Send for CommonFreeListPageResource","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for FreeListPageResource&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Send for HeapMeta","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for MonotonePageResource&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Send for MonotonePageResourceConditional","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for CommonPageResource&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Send for SpaceDescriptor","synthetic":true,"types":[]},{"text":"impl Send for VMRequest","synthetic":true,"types":[]},{"text":"impl Send for IntArrayFreeList","synthetic":true,"types":[]},{"text":"impl Send for NurseryZeroingOptions","synthetic":true,"types":[]},{"text":"impl Send for PlanSelector","synthetic":true,"types":[]},{"text":"impl Send for UnsafeOptionsWrapper","synthetic":true,"types":[]},{"text":"impl Send for Options","synthetic":true,"types":[]},{"text":"impl Send for RawMemoryFreeList","synthetic":true,"types":[]},{"text":"impl Send for ReferenceProcessors","synthetic":true,"types":[]},{"text":"impl Send for ReferenceProcessor","synthetic":true,"types":[]},{"text":"impl Send for Semantics","synthetic":true,"types":[]},{"text":"impl Send for SanityChecker","synthetic":true,"types":[]},{"text":"impl&lt;P, W&gt; Send for ScheduleSanityGC&lt;P, W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;P, W&gt; Send for SanityPrepare&lt;P, W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;P, W&gt; Send for SanityRelease&lt;P, W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for SanityGCProcessEdges&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Send for SideMetadataScope","synthetic":true,"types":[]},{"text":"impl Send for SideMetadataSpec","synthetic":true,"types":[]},{"text":"impl Send for MappingState","synthetic":true,"types":[]},{"text":"impl Send for EventCounter","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; Send for LongCounter&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;T as Diffable&gt;::Val: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for SizeCounter","synthetic":true,"types":[]},{"text":"impl Send for MonotoneNanoTime","synthetic":true,"types":[]},{"text":"impl Send for SharedStats","synthetic":true,"types":[]},{"text":"impl Send for Stats","synthetic":true,"types":[]},{"text":"impl Send for SynchronizedCounter","synthetic":true,"types":[]},{"text":"impl Send for TreadMill","synthetic":true,"types":[]},{"text":"impl Send for BarrierSelector","synthetic":true,"types":[]},{"text":"impl Send for WriteTarget","synthetic":true,"types":[]},{"text":"impl Send for NoBarrier","synthetic":true,"types":[]},{"text":"impl Send for ModBuffer","synthetic":true,"types":[]},{"text":"impl&lt;E, S&gt; Send for FieldRememberingBarrier&lt;E, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;E as ProcessEdgesWork&gt;::VM: VMBinding,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for ControllerCollectorContext&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for NoCopy&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Send for GcStatus","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for BasePlan&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for BaseUnsync&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for CommonPlan&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for CommonUnsync&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Send for AllocationSemantics","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for Mutator&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Send for PlanConstraints","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for GenCopy&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for NoGC&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for SemiSpace&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl !Send for SFTMap","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for CommonSpace&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl Send for SpaceOptions","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for CopySpace&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for ImmortalSpace&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for LargeObjectSpace&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for LockFreeImmortalSpace&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; Send for CoordinatorMessage&lt;C&gt;","synthetic":true,"types":[]},{"text":"impl Send for SchedulerStat","synthetic":true,"types":[]},{"text":"impl Send for WorkStat","synthetic":true,"types":[]},{"text":"impl Send for WorkerLocalStat","synthetic":true,"types":[]},{"text":"impl Send for WorkBucketStage","synthetic":true,"types":[]},{"text":"impl !Send for WorkerLocalPtr","synthetic":true,"types":[]},{"text":"impl&lt;C&gt; Send for WorkerGroup&lt;C&gt;","synthetic":true,"types":[]},{"text":"impl Send for ScheduleCollection","synthetic":true,"types":[]},{"text":"impl&lt;P, W&gt; Send for Prepare&lt;P, W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for PrepareMutator&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;W&gt; Send for PrepareCollector&lt;W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;P, W&gt; Send for Release&lt;P, W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;VM&gt; Send for ReleaseMutator&lt;VM&gt;","synthetic":true,"types":[]},{"text":"impl&lt;W&gt; Send for ReleaseCollector&lt;W&gt;","synthetic":true,"types":[]},{"text":"impl&lt;ScanEdges&gt; Send for StopMutators&lt;ScanEdges&gt;","synthetic":true,"types":[]},{"text":"impl Send for EndOfGC","synthetic":true,"types":[]},{"text":"impl&lt;Edges&gt; Send for ScanStackRoots&lt;Edges&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Edges&gt; Send for ScanStackRoot&lt;Edges&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;Edges as ProcessEdgesWork&gt;::VM: VMBinding,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;Edges&gt; Send for ScanVMSpecificRoots&lt;Edges&gt;","synthetic":true,"types":[]},{"text":"impl&lt;Edges&gt; Send for ScanObjects&lt;Edges&gt;","synthetic":true,"types":[]},{"text":"impl&lt;E&gt; Send for ProcessModBuf&lt;E&gt;","synthetic":true,"types":[]},{"text":"impl Send for OpaquePointer","synthetic":false,"types":[]},{"text":"impl&lt;VM:&nbsp;VMBinding&gt; Send for MMTK&lt;VM&gt;","synthetic":false,"types":[]},{"text":"impl&lt;VM:&nbsp;VMBinding&gt; Send for MutatorConfig&lt;VM&gt;","synthetic":false,"types":[]},{"text":"impl&lt;C:&nbsp;Context&gt; Send for Scheduler&lt;C&gt;","synthetic":false,"types":[]},{"text":"impl&lt;C:&nbsp;Context&gt; Send for Worker&lt;C&gt;","synthetic":false,"types":[]},{"text":"impl&lt;E:&nbsp;ProcessEdgesWork&gt; Send for ProcessEdgesBase&lt;E&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()