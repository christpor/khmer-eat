## Pattern: SVG icon atlas corrupted by a multi-line edit with a stale anchor string
## Root Cause: In `khmer-eats-demo/index.html`, an `edit` targeted a two-`<symbol>` block (`i-nav` + `i-hat`) but replaced it with a single `i-shield` opening tag. Result: duplicate `i-shield` symbols, and `i-hat` (still referenced by the stats strip) silently disappeared. The page kept rendering but showed missing icons.
## Prevention: After ANY edit inside an SVG symbol atlas (or any file with many repeated structural tags), re-run an ID check: every `use href="#i-x"` must map to exactly one `symbol id="i-x"`, with no duplicates. Do this before declaring done, not after the user reports it.
## Score delta: 5/10 → 10/10
## Project: Khmer Eats demo (/home/christ/projects/khmer-eats-demo)
