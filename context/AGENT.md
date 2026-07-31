# Agent Brain — Khmer Eats Demo

## Project
Single-page bilingual landing page for a Khmer street-food delivery app demo.
Pure HTML/CSS/JS. No framework, no build step, no dependencies.

## Stack
- `index.html` — structure + Lucide-style inline SVG icon atlas + bilingual data attrs
- `style.css` — light/dark theme system (`html[data-theme]`), Khmer font switch (`html[data-lang="kh"]` → Kantumruy Pro)
- `script.js` — theme/lang toggles (localStorage, no-flash), cart counter, live tracking rider animation

## Design System
- Fonts: Fraunces + DM Sans (EN) · Kantumruy Pro + Noto Sans Khmer (KH) · JetBrains Mono (numbers)
- Accent orange `#EA580C` (light) / `#FF6B2C` (dark), OLED black + 8-tier grays (dark) / warm white `#FAFAF8` (dark of it)
- Motion: entrances at `scale(0.97)`, snappy `cubic-bezier(0.19,1,0.22,1)`, buttons `scale(0.96)` on active
- Runs via: `python3 -m http.server 8080` in project root

## Last Session State
**Accomplished (2026-07-31):**
- v1: dark landing page built (hero, menu grid, live tracking mock, cart)
- v2: EN/KH bilingual toggle, Kantumruy Pro Khmer font, light-mode default + dark toggle, Lucide icon set, trust badge
- Lesson logged: `.learnings/errors/2026-07-31-khmer-eats-svg-atlas-edit-corruption.md` (verify icon atlas IDs after edits)
- Committed + pushed to `origin main` → github.com/christpor/khmer-eat

**Blockers:** none. Demo complete.

**Next step (if continuing):** user-chosen direction — e.g. a checkout mock, more dishes, or deploy to GitHub Pages/Vercel for a live URL.
