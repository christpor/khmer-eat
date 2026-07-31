# Agent Brain — Khmer Eats Demo

## Project
Bilingual (EN/ខ្មែរ) landing page for a Khmer street-food delivery app demo.
React 18 + Vite + TypeScript + Tailwind CSS + GSAP + Framer Motion. No backend.

## Stack
- `src/App.tsx` — lang/theme state (localStorage), mounts all sections
- `src/i18n.ts` — EN/KH copy dictionary, DISHES (6 dishes), STORIES (4 stories)
- `src/index.css` — Tailwind + design tokens (orange `#EA580C` → `#FB923C` gradient), keyframes
- `src/components/` — LoadingScreen (rAF counter), Navbar (pill, hover gradient border, mobile hamburger dropdown), Hero (GSAP timeline, rotating role word), Works (bento 4 cards), Journal (4 pills), Explorations (sticky + parallax ≥768px, lightbox modal), Stats (3), Footer (GSAP marquee + flipped image)
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
- **Canonical spec:** `docs/recreate-prompt.md` must stay in sync with the code — whenever site
  behavior changes, update the prompt so any AI can recreate the site (verified: Gemini 3.6 Flash
  rebuilt it). Includes Responsive + Performance MANDATORY rules + Definition of Done.

## ⚠️ Known Pitfalls (from .learnings)
- SVG icon-atlas edits (old v1 site): duplicate `<symbol id>` corruption — verify IDs after edits. Legacy concern, removed with v2 rebuild.
- Always point the `khmer-eating.vercel.app` alias at the newest production deployment — stale aliases serve the old build.

## LAST SESSION STATE (2026-07-31)
**Accomplished (round 2 — responsiveness + lightbox):**
- Explorations: fixed dead lightbox (click did nothing — `open` state was never rendered) → fullscreen info modal (image, area, name, desc, price/ETA; Esc + backdrop close, scroll lock); restored missing `md:min-h-[300vh]`; swapped fragile GSAP pin for CSS sticky + `gsap.matchMedia()` scrub that only runs ≥768px — phones get a smooth scrolling 2-col grid (cards scale 150px→320px, no horizontal overflow)
- Navbar: added mobile hamburger → dropdown (3 links + lang/theme/order), click-outside close; lang/theme/order now hidden below sm (pill stays clean)
- Hero: `h-screen`→`h-svh` (no mobile address-bar jump); title `text-5xl` base
- Works/Journal: `mono`→`font-mono`; Works "View" pill gained `isolation:isolate` so the orange gradient ring actually shows
- Recreate prompt (`docs/recreate-prompt.md`) updated to the responsive spec (Gemini 3.6 Flash reproduced the site from it — user-verified)
- Deployed: preview → `vercel --prod` (`khmer-eating-oz0rmzwd6-...`) → re-pointed `khmer-eating.vercel.app` alias (verified 200s)

**Accomplished (round 3 — prompt upgrade):**
- `docs/recreate-prompt.md`: added MANDATORY Responsive Rules (mobile-first, h-svh, matchMedia ≥768px for heavy effects, hamburger below sm, touch targets, scale-down headings), MANDATORY Performance Rules (lazy images except hero, aspect boxes to kill CLS, no heavy deps, font preconnect, gsap.context cleanup, prefers-reduced-motion), and a 7-point Definition of Done checklist (build gates, 320–1440px widths, lightbox/nav/parallax behaviors, no-flash toggles)
- `context/AGENT.md`: documented `docs/recreate-prompt.md` as the canonical in-sync spec

**Next step:** only if user requests — dark-theme polish pass, checkout flow, or connect GitHub repo to Vercel for auto-deploys.
