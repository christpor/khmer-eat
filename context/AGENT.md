# Agent Brain — Khmer Eats Demo

## Project
Single-page bilingual landing page for a Khmer street-food delivery app demo.
Pure HTML/CSS/JS. No framework, no build step, no dependencies.

## Stack
- `index.html` — structure, bilingual `data-en`/`data-kh` attrs, Lucide-style inline SVG icon atlas
- `style.css` — light/dark theme system (`html[data-theme]`), Khmer font switch (`html[data-lang="kh"]` → Kantumruy Pro)
- `script.js` — theme/lang toggles (localStorage, no-flash), cart counter, live tracking rider animation

## Design System
- Fonts: Fraunces + DM Sans (EN) · Kantumruy Pro + Noto Sans Khmer (KH) · JetBrains Mono (numbers)
- Accent orange `#EA580C` (light) / `#FF6B2C` (dark); light default, warm white `#FAFAF8`; dark = OLED black
- Motion: entrances `scale(0.97)`, snappy `cubic-bezier(0.19,1,0.22,1)`, buttons `scale(0.96)` on active
- Run: `python3 -m http.server 8080` from project root

## Repository
- Remote: `origin main` → github.com/christpor/khmer-eat
- Docs: README.md (hero + architecture SVGs in `assets/`), LICENSE = MIT

## ⚠️ Known Pitfall (from .learnings)
- Editing the SVG icon atlas: a bad multi-line edit can duplicate a `<symbol id>` and orphan one that's still referenced. Always re-verify icon IDs after edits.

## LAST SESSION STATE (2026-07-31)
**Accomplished:**
- v1: dark landing page (hero, menu grid, live tracking mock, cart)
- v2: EN/KH bilingual toggle, Kantumruy Pro Khmer font, light-mode default + dark toggle, Lucide icon set, trust badge
- README + MIT license + hero/architecture SVGs; all pushed to `origin main`
- Context files: CLAUDE.md router, AGENT.md brain, .learnings/errors/ initialized

**Ponytail delta:** net +6 files (3 site files + README/LICENSE/2 SVG + 3 context files). All justified — no dead code, no unused deps (zero deps).

**Blockers:** none. Demo complete and live at `localhost:8080`.

**Next step:** only if user requests — checkout mock, more dishes, or deploy to GitHub Pages/Vercel for a live URL.
