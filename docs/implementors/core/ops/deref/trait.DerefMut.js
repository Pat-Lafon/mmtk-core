(function() {var implementors = {};
implementors["mmtk"] = [{"text":"impl&lt;VM:&nbsp;<a class=\"trait\" href=\"mmtk/vm/trait.VMBinding.html\" title=\"trait mmtk::vm::VMBinding\">VMBinding</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"mmtk/plan/generational/copying/gc_work/struct.GenCopyMatureProcessEdges.html\" title=\"struct mmtk::plan::generational::copying::gc_work::GenCopyMatureProcessEdges\">GenCopyMatureProcessEdges</a>&lt;VM&gt;","synthetic":false,"types":["mmtk::plan::generational::copying::gc_work::GenCopyMatureProcessEdges"]},{"text":"impl&lt;VM:&nbsp;<a class=\"trait\" href=\"mmtk/vm/trait.VMBinding.html\" title=\"trait mmtk::vm::VMBinding\">VMBinding</a>, const KIND:&nbsp;<a class=\"enum\" href=\"mmtk/plan/immix/gc_work/enum.TraceKind.html\" title=\"enum mmtk::plan::immix::gc_work::TraceKind\">TraceKind</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"mmtk/plan/generational/immix/gc_work/struct.GenImmixMatureProcessEdges.html\" title=\"struct mmtk::plan::generational::immix::gc_work::GenImmixMatureProcessEdges\">GenImmixMatureProcessEdges</a>&lt;VM, KIND&gt;","synthetic":false,"types":["mmtk::plan::generational::immix::gc_work::GenImmixMatureProcessEdges"]},{"text":"impl&lt;VM:&nbsp;<a class=\"trait\" href=\"mmtk/vm/trait.VMBinding.html\" title=\"trait mmtk::vm::VMBinding\">VMBinding</a>, C:&nbsp;<a class=\"trait\" href=\"mmtk/plan/global/trait.CopyContext.html\" title=\"trait mmtk::plan::global::CopyContext\">CopyContext</a>&lt;VM = VM&gt; + <a class=\"trait\" href=\"mmtk/scheduler/worker/trait.GCWorkerLocal.html\" title=\"trait mmtk::scheduler::worker::GCWorkerLocal\">GCWorkerLocal</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"mmtk/plan/generational/gc_work/struct.GenNurseryProcessEdges.html\" title=\"struct mmtk::plan::generational::gc_work::GenNurseryProcessEdges\">GenNurseryProcessEdges</a>&lt;VM, C&gt;","synthetic":false,"types":["mmtk::plan::generational::gc_work::GenNurseryProcessEdges"]},{"text":"impl&lt;VM:&nbsp;<a class=\"trait\" href=\"mmtk/vm/trait.VMBinding.html\" title=\"trait mmtk::vm::VMBinding\">VMBinding</a>, const KIND:&nbsp;<a class=\"enum\" href=\"mmtk/plan/immix/gc_work/enum.TraceKind.html\" title=\"enum mmtk::plan::immix::gc_work::TraceKind\">TraceKind</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"mmtk/plan/immix/gc_work/struct.ImmixProcessEdges.html\" title=\"struct mmtk::plan::immix::gc_work::ImmixProcessEdges\">ImmixProcessEdges</a>&lt;VM, KIND&gt;","synthetic":false,"types":["mmtk::plan::immix::gc_work::ImmixProcessEdges"]},{"text":"impl&lt;VM:&nbsp;<a class=\"trait\" href=\"mmtk/vm/trait.VMBinding.html\" title=\"trait mmtk::vm::VMBinding\">VMBinding</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"mmtk/plan/markcompact/gc_work/struct.MarkingProcessEdges.html\" title=\"struct mmtk::plan::markcompact::gc_work::MarkingProcessEdges\">MarkingProcessEdges</a>&lt;VM&gt;","synthetic":false,"types":["mmtk::plan::markcompact::gc_work::MarkingProcessEdges"]},{"text":"impl&lt;VM:&nbsp;<a class=\"trait\" href=\"mmtk/vm/trait.VMBinding.html\" title=\"trait mmtk::vm::VMBinding\">VMBinding</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"mmtk/plan/markcompact/gc_work/struct.ForwardingProcessEdges.html\" title=\"struct mmtk::plan::markcompact::gc_work::ForwardingProcessEdges\">ForwardingProcessEdges</a>&lt;VM&gt;","synthetic":false,"types":["mmtk::plan::markcompact::gc_work::ForwardingProcessEdges"]},{"text":"impl&lt;VM:&nbsp;<a class=\"trait\" href=\"mmtk/vm/trait.VMBinding.html\" title=\"trait mmtk::vm::VMBinding\">VMBinding</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"mmtk/plan/marksweep/gc_work/struct.MSProcessEdges.html\" title=\"struct mmtk::plan::marksweep::gc_work::MSProcessEdges\">MSProcessEdges</a>&lt;VM&gt;","synthetic":false,"types":["mmtk::plan::marksweep::gc_work::MSProcessEdges"]},{"text":"impl&lt;VM:&nbsp;<a class=\"trait\" href=\"mmtk/vm/trait.VMBinding.html\" title=\"trait mmtk::vm::VMBinding\">VMBinding</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"mmtk/plan/pageprotect/gc_work/struct.PPProcessEdges.html\" title=\"struct mmtk::plan::pageprotect::gc_work::PPProcessEdges\">PPProcessEdges</a>&lt;VM&gt;","synthetic":false,"types":["mmtk::plan::pageprotect::gc_work::PPProcessEdges"]},{"text":"impl&lt;VM:&nbsp;<a class=\"trait\" href=\"mmtk/vm/trait.VMBinding.html\" title=\"trait mmtk::vm::VMBinding\">VMBinding</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"mmtk/plan/semispace/gc_work/struct.SSProcessEdges.html\" title=\"struct mmtk::plan::semispace::gc_work::SSProcessEdges\">SSProcessEdges</a>&lt;VM&gt;","synthetic":false,"types":["mmtk::plan::semispace::gc_work::SSProcessEdges"]},{"text":"impl&lt;VM:&nbsp;<a class=\"trait\" href=\"mmtk/vm/trait.VMBinding.html\" title=\"trait mmtk::vm::VMBinding\">VMBinding</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"mmtk/util/heap/freelistpageresource/struct.FreeListPageResource.html\" title=\"struct mmtk::util::heap::freelistpageresource::FreeListPageResource\">FreeListPageResource</a>&lt;VM&gt;","synthetic":false,"types":["mmtk::util::heap::freelistpageresource::FreeListPageResource"]},{"text":"impl&lt;VM:&nbsp;<a class=\"trait\" href=\"mmtk/vm/trait.VMBinding.html\" title=\"trait mmtk::vm::VMBinding\">VMBinding</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/deref/trait.DerefMut.html\" title=\"trait core::ops::deref::DerefMut\">DerefMut</a> for <a class=\"struct\" href=\"mmtk/util/sanity/sanity_checker/struct.SanityGCProcessEdges.html\" title=\"struct mmtk::util::sanity::sanity_checker::SanityGCProcessEdges\">SanityGCProcessEdges</a>&lt;VM&gt;","synthetic":false,"types":["mmtk::util::sanity::sanity_checker::SanityGCProcessEdges"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()