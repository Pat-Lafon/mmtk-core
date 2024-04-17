(function() {var type_impls = {
"mmtk":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-BitwiseOps-for-u8\" class=\"impl\"><a class=\"src rightside\" href=\"src/mmtk/util/metadata/metadata_val_traits.rs.html#58\">source</a><a href=\"#impl-BitwiseOps-for-u8\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"mmtk/util/metadata/metadata_val_traits/trait.BitwiseOps.html\" title=\"trait mmtk::util::metadata::metadata_val_traits::BitwiseOps\">BitwiseOps</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.bitand\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/util/metadata/metadata_val_traits.rs.html#58\">source</a><a href=\"#method.bitand\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"mmtk/util/metadata/metadata_val_traits/trait.BitwiseOps.html#tymethod.bitand\" class=\"fn\">bitand</a>(self, other: Self) -&gt; Self</h4></section></summary><div class='docblock'>Perform bitwise and for two values.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.bitor\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/util/metadata/metadata_val_traits.rs.html#58\">source</a><a href=\"#method.bitor\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"mmtk/util/metadata/metadata_val_traits/trait.BitwiseOps.html#tymethod.bitor\" class=\"fn\">bitor</a>(self, other: Self) -&gt; Self</h4></section></summary><div class='docblock'>Perform bitwise or for two values.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.bitxor\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/util/metadata/metadata_val_traits.rs.html#58\">source</a><a href=\"#method.bitxor\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"mmtk/util/metadata/metadata_val_traits/trait.BitwiseOps.html#tymethod.bitxor\" class=\"fn\">bitxor</a>(self, other: Self) -&gt; Self</h4></section></summary><div class='docblock'>Perform bitwise xor for two values.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.inv\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/util/metadata/metadata_val_traits.rs.html#58\">source</a><a href=\"#method.inv\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"mmtk/util/metadata/metadata_val_traits/trait.BitwiseOps.html#tymethod.inv\" class=\"fn\">inv</a>(self) -&gt; Self</h4></section></summary><div class='docblock'>Perform bitwise invert (not) for the value.</div></details></div></details>","BitwiseOps","mmtk::policy::gc_work::TraceKind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-MetadataValue-for-u8\" class=\"impl\"><a class=\"src rightside\" href=\"src/mmtk/util/metadata/metadata_val_traits.rs.html#201\">source</a><a href=\"#impl-MetadataValue-for-u8\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html\" title=\"trait mmtk::util::metadata::metadata_val_traits::MetadataValue\">MetadataValue</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.load\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/util/metadata/metadata_val_traits.rs.html#201\">source</a><a href=\"#method.load\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.load\" class=\"fn\">load</a>(addr: <a class=\"struct\" href=\"mmtk/util/address/struct.Address.html\" title=\"struct mmtk::util::address::Address\">Address</a>) -&gt; Self</h4></section></summary><div class='docblock'>Non atomic load <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.load\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.load_atomic\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/util/metadata/metadata_val_traits.rs.html#201\">source</a><a href=\"#method.load_atomic\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.load_atomic\" class=\"fn\">load_atomic</a>(addr: <a class=\"struct\" href=\"mmtk/util/address/struct.Address.html\" title=\"struct mmtk::util::address::Address\">Address</a>, order: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/sync/atomic/enum.Ordering.html\" title=\"enum core::sync::atomic::Ordering\">Ordering</a>) -&gt; Self</h4></section></summary><div class='docblock'>Atomic load <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.load_atomic\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.store\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/util/metadata/metadata_val_traits.rs.html#201\">source</a><a href=\"#method.store\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.store\" class=\"fn\">store</a>(addr: <a class=\"struct\" href=\"mmtk/util/address/struct.Address.html\" title=\"struct mmtk::util::address::Address\">Address</a>, value: Self)</h4></section></summary><div class='docblock'>Non atomic store <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.store\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.store_atomic\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/util/metadata/metadata_val_traits.rs.html#201\">source</a><a href=\"#method.store_atomic\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.store_atomic\" class=\"fn\">store_atomic</a>(addr: <a class=\"struct\" href=\"mmtk/util/address/struct.Address.html\" title=\"struct mmtk::util::address::Address\">Address</a>, value: Self, order: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/sync/atomic/enum.Ordering.html\" title=\"enum core::sync::atomic::Ordering\">Ordering</a>)</h4></section></summary><div class='docblock'>Atomic store <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.store_atomic\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.compare_exchange\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/util/metadata/metadata_val_traits.rs.html#201\">source</a><a href=\"#method.compare_exchange\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.compare_exchange\" class=\"fn\">compare_exchange</a>(\n    addr: <a class=\"struct\" href=\"mmtk/util/address/struct.Address.html\" title=\"struct mmtk::util::address::Address\">Address</a>,\n    current: Self,\n    new: Self,\n    success: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/sync/atomic/enum.Ordering.html\" title=\"enum core::sync::atomic::Ordering\">Ordering</a>,\n    failure: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/sync/atomic/enum.Ordering.html\" title=\"enum core::sync::atomic::Ordering\">Ordering</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, Self&gt;</h4></section></summary><div class='docblock'>Safety <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.compare_exchange\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fetch_add\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/util/metadata/metadata_val_traits.rs.html#201\">source</a><a href=\"#method.fetch_add\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.fetch_add\" class=\"fn\">fetch_add</a>(addr: <a class=\"struct\" href=\"mmtk/util/address/struct.Address.html\" title=\"struct mmtk::util::address::Address\">Address</a>, value: Self, order: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/sync/atomic/enum.Ordering.html\" title=\"enum core::sync::atomic::Ordering\">Ordering</a>) -&gt; Self</h4></section></summary><div class='docblock'>Safety <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.fetch_add\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fetch_sub\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/util/metadata/metadata_val_traits.rs.html#201\">source</a><a href=\"#method.fetch_sub\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.fetch_sub\" class=\"fn\">fetch_sub</a>(addr: <a class=\"struct\" href=\"mmtk/util/address/struct.Address.html\" title=\"struct mmtk::util::address::Address\">Address</a>, value: Self, order: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/sync/atomic/enum.Ordering.html\" title=\"enum core::sync::atomic::Ordering\">Ordering</a>) -&gt; Self</h4></section></summary><div class='docblock'>Safety <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.fetch_sub\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fetch_and\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/util/metadata/metadata_val_traits.rs.html#201\">source</a><a href=\"#method.fetch_and\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.fetch_and\" class=\"fn\">fetch_and</a>(addr: <a class=\"struct\" href=\"mmtk/util/address/struct.Address.html\" title=\"struct mmtk::util::address::Address\">Address</a>, value: Self, order: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/sync/atomic/enum.Ordering.html\" title=\"enum core::sync::atomic::Ordering\">Ordering</a>) -&gt; Self</h4></section></summary><div class='docblock'>Safety <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.fetch_and\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fetch_or\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/util/metadata/metadata_val_traits.rs.html#201\">source</a><a href=\"#method.fetch_or\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.fetch_or\" class=\"fn\">fetch_or</a>(addr: <a class=\"struct\" href=\"mmtk/util/address/struct.Address.html\" title=\"struct mmtk::util::address::Address\">Address</a>, value: Self, order: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/sync/atomic/enum.Ordering.html\" title=\"enum core::sync::atomic::Ordering\">Ordering</a>) -&gt; Self</h4></section></summary><div class='docblock'>Safety <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.fetch_or\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fetch_update\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/util/metadata/metadata_val_traits.rs.html#201\">source</a><a href=\"#method.fetch_update\" class=\"anchor\">§</a><h4 class=\"code-header\">unsafe fn <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.fetch_update\" class=\"fn\">fetch_update</a>&lt;F&gt;(\n    addr: <a class=\"struct\" href=\"mmtk/util/address/struct.Address.html\" title=\"struct mmtk::util::address::Address\">Address</a>,\n    set_order: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/sync/atomic/enum.Ordering.html\" title=\"enum core::sync::atomic::Ordering\">Ordering</a>,\n    fetch_order: <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/sync/atomic/enum.Ordering.html\" title=\"enum core::sync::atomic::Ordering\">Ordering</a>,\n    f: F\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, Self&gt;<div class=\"where\">where\n    F: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>(Self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/1.77.0/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self&gt;,</div></h4></section></summary><div class='docblock'>Safety <a href=\"mmtk/util/metadata/metadata_val_traits/trait.MetadataValue.html#tymethod.fetch_update\">Read more</a></div></details></div></details>","MetadataValue","mmtk::policy::gc_work::TraceKind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CBlockState%3E-for-u8\" class=\"impl\"><a class=\"src rightside\" href=\"src/mmtk/policy/immix/block.rs.html#48-57\">source</a><a href=\"#impl-From%3CBlockState%3E-for-u8\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mmtk/policy/immix/block/enum.BlockState.html\" title=\"enum mmtk::policy::immix::block::BlockState\">BlockState</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/policy/immix/block.rs.html#49-56\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(state: <a class=\"enum\" href=\"mmtk/policy/immix/block/enum.BlockState.html\" title=\"enum mmtk::policy::immix::block::BlockState\">BlockState</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<BlockState>","mmtk::policy::gc_work::TraceKind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CBlockState%3E-for-u8\" class=\"impl\"><a class=\"src rightside\" href=\"src/mmtk/policy/marksweepspace/native_ms/block.rs.html#420-428\">source</a><a href=\"#impl-From%3CBlockState%3E-for-u8\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"mmtk/policy/marksweepspace/native_ms/block/enum.BlockState.html\" title=\"enum mmtk::policy::marksweepspace::native_ms::block::BlockState\">BlockState</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/policy/marksweepspace/native_ms/block.rs.html#421-427\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/1.77.0/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(state: <a class=\"enum\" href=\"mmtk/policy/marksweepspace/native_ms/block/enum.BlockState.html\" title=\"enum mmtk::policy::marksweepspace::native_ms::block::BlockState\">BlockState</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<BlockState>","mmtk::policy::gc_work::TraceKind"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Bits-for-u8\" class=\"impl\"><a class=\"src rightside\" href=\"src/mmtk/util/metadata/metadata_val_traits.rs.html#22\">source</a><a href=\"#impl-Bits-for-u8\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"mmtk/util/metadata/metadata_val_traits/trait.Bits.html\" title=\"trait mmtk::util::metadata::metadata_val_traits::Bits\">Bits</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u8.html\">u8</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedconstant.BITS\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/util/metadata/metadata_val_traits.rs.html#22\">source</a><a href=\"#associatedconstant.BITS\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"mmtk/util/metadata/metadata_val_traits/trait.Bits.html#associatedconstant.BITS\" class=\"constant\">BITS</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a> = 8u32</h4></section></summary><div class='docblock'>The size of this atomic type in bits.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.LOG2\" class=\"associatedconstant trait-impl\"><a class=\"src rightside\" href=\"src/mmtk/util/metadata/metadata_val_traits.rs.html#22\">source</a><a href=\"#associatedconstant.LOG2\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a href=\"mmtk/util/metadata/metadata_val_traits/trait.Bits.html#associatedconstant.LOG2\" class=\"constant\">LOG2</a>: <a class=\"primitive\" href=\"https://doc.rust-lang.org/1.77.0/std/primitive.u32.html\">u32</a> = 3u32</h4></section></summary><div class='docblock'>The size (in log2) of this atomic type in bits.</div></details></div></details>","Bits","mmtk::policy::gc_work::TraceKind"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()