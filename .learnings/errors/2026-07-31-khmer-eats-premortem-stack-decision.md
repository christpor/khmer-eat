# Pre-mortem: Khmer Eats React stack rebuild (2026-07-31)

## Context
Christ pasted an "elite web designer" prompt (dark React portfolio) and asked to adapt it
to Khmer Eats with food images + white/orange theme. Ran the pushback pre-mortem gate on
the plan before executing.

## Failure modes identified before build
1. **Machine/data risk** — npm install + Vite build on a 2-core / 3.8GB WSL2 box.
   Mitigated: single install (139 pkgs, 2 min), single build (13s), served static dist,
   no long-lived dev server.
2. **Broken live URL** — Vercel flips from static to Vite build; stale alias risk.
   Mitigated: preview deploy first (all 200s verified) → then `--prod` → re-pointed the
   `khmer-eating.vercel.app` alias (it WAS pointing at the old deployment — caught it).
3. **Silent feature loss** — bilingual/theme toggles, no-flash script.
   Mitigated: kept both toggles + localStorage keys; deliberately dropped cart + live
   tracking (app-demo features, not landing-page features).

## Lesson
A plan isn't done when it looks right — it's done when its three biggest risks each have
a tested mitigation. The preview-first deploy + alias re-check caught a real stale-alias
bug that would have shipped the old site to the live URL.

## File
`.learnings/errors/2026-07-31-khmer-eats-premortem-stack-decision.md`
