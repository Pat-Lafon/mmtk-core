window.SIDEBAR_ITEMS = {"enum":[["MathOp","An internal enum to enhance code style for add/sub"]],"fn":[["align_to_region_start",""],["truncate_value",""],["verify_bset","Commits a side metadata bulk set operation (set the related bits to all 1s). Panics if the metadata spec is not valid."],["verify_bzero","Commits a side metadata bulk zero operation. Panics if the metadata spec is not valid."],["verify_global_specs","Checks whether a slice of global specifications fit within the memory limits and don’t overlap."],["verify_global_specs_total_size","Checks whether the input global specifications fit within the current upper bound for all global metadata (limited by `metadata::constants::LOG_GLOBAL_SIDE_METADATA_WORST_CASE_RATIO`)."],["verify_load","Ensures a side metadata load operation returns the correct side metadata content. Panics if: 1 - the metadata spec is not valid, 2 - data address is not valid, 3 - the loaded side metadata content is not equal to the correct content."],["verify_local_specs_size","(For 64-bits targets) Checks whether the input local specifications fit within the current upper bound for each local metadata (limited for each local metadata by `metadata::constants::LOG_LOCAL_SIDE_METADATA_WORST_CASE_RATIO`)."],["verify_metadata_address_bound","This verifies two things:"],["verify_no_overlap_contiguous","(For contiguous metadata) Checks whether two input specifications overlap, considering their offsets and maximum size."],["verify_store","Commits a side metadata store operation. Panics if: 1 - the loaded side metadata content is not equal to the correct content."],["verify_update","Commits an update operation and ensures it returns the correct old side metadata content. Panics if: 1 - the metadata spec is not valid, 2 - the old side metadata content is not equal to the correct old content."]],"static":[["GLOBAL_META_NAME","An internal str used as a name for global side metadata (policy-specific metadata is named after the policy who own it)"]],"struct":[["CONTENT_SANITY_MAP","This is a two-level hashmap to store the metadata content for verification purposes. It keeps a map from side metadata specifications to a second hashmap which maps data addresses to their current metadata content. Use u64 to store side metadata values, as u64 is the max length of side metadata we support."],["SANITY_LOCK",""],["SideMetadataSanity","This struct includes a hashmap to store the metadata specs information for policy-specific and global metadata for each plan. It uses policy name (or GLOBAL_META_NAME for globals) as the key and keeps a vector of specs as the value. Each plan needs its exclusive instance of this struct to use side metadata specification and content sanity checker."]]};