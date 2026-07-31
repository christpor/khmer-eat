# Agent Brain — Khmer Eats Demo

## Project
Bilingual (EN/ខ្មែរ) landing page for a Khmer street-food delivery app demo.
React 18 + Vite + TypeScript + Tailwind CSS + GSAP + Framer Motion. No backend.

## Stack
- `src/App.tsx` — lang/theme state (localStorage), mounts all sections
- `src/i18n.ts` — EN/KH copy dictionary, DISHES (6 dishes), STORIES (4 stories)
- `src/index.css` — Tailwind + design tokens (orange `#EA580C` → `#FB923C` gradient), keyframes
- `src/components/` — LoadingScreen (rAF counter), Navbar (pill, hover gradient border), Hero (GSAP timeline, rotating role word), Works (bento 4 cards), Journal (4 pills), Explorations (ScrollTrigger pin + parallax), Stats (3), Footer (GSAP marquee + flipped image)
- `public/images/` — hero + 6 dish photos (local, ~1.6MB total)

## Design System
- Fonts: Inter + Instrument Serif (EN) · Kantumruy Pro + Noto Sans Khmer (KH)
- Light default: warm white `hsl(30 20% 98%)` + orange accent; dark via `html[data-theme="dark"]`
- Theme/lang keys: `khmer-eats-theme`, `khmer-eats-lang` (no-flash inline script in index.html head)
- Motion: `power3.out` GSAP entrances, `[0.25,0.1,0.25,1]` framer reveals, `.accent-gradient` on hovers
- Run: `npm install && npm run dev` → :5173 · build: `npm run build` → `dist/`

## Repository
- Remote: `origin main` → github.com/christpor/khmer-eat
- Live: https://khmer-eating.vercel.app (Vercel auto-builds Vite, out dir `dist`)
- Docs: README.md (badges, quick start), LICENSE = MIT

## ⚠️ Known Pitfalls (from .learnings)
- SVG icon-atlas edits (old v1 site): duplicate `<symbol id>` corruption — verify IDs after edits. Legacy concern, removed with v2 rebuild.
- Always point the `khmer-eating.vercel.app` alias at the newest production deployment — stale aliases serve the old build.

## LAST SESSION STATE (2026-07-31)
**Accomplished:**
- Full rebuild: pure HTML/CSS/JS → React 18 + Vite + TS + Tailwind + GSAP + Framer Motion
- Adapted the "Michael Smith" dark portfolio prompt to Khmer Eats: white/orange theme, local food photos, bilingual EN/KH, dropped hls.js + react-router-dom (no video, single page)
- 8 sections: LoadingScreen (rAF counter), Hero (food photo + rotating role), Works bento (4 dishes), Journal pills, Explorations (GSAP pin + parallax), Stats, Footer (marquee)
- Vercel: preview verified (all 200s) → promoted to prod → re-pointed `khmer-eating.vercel.app` alias to new deployment; old alias was serving stale build
- Deleted old `style.css`/`script.js`/`assets/` SVGs; updated README, CLAUDE.md, .gitignore (node_modules, dist)

**Ponytail delta:** justified — stack swap requires the Vite project structure; dropped 2 deps from prompt (hls.js, react-router-dom).

**Blockers:** none. Live and green at khmer-eating.vercel.app.

**Next step:** only if user requests — dark-theme polish pass, checkout flow, or connect GitHub repo to Vercel for auto-deploys.
