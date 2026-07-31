# CLAUDE.md — Khmer Eats (Router File)

## What this is
Single-page bilingual (EN/ខ្មែរ) landing page for a Khmer street-food delivery app.
React + Vite + TypeScript + Tailwind CSS + GSAP + Framer Motion. No backend.

## Ponytail Lazy Dev mandate
- New Files = 0 by default. Use existing files. Do not split into modules without proof.
- Shortest working diff wins. YAGNI. Delete over add.
- Never commit secrets. Global gitignore blocks `.env*`, `*.key`, `credentials*`.

## Run
```bash
npm install && npm run dev   # → http://localhost:5173
npm run build                # → dist/
npm run preview              # preview the production build
```

## Files
- `src/App.tsx` — lang/theme state (localStorage, no-flash inline script in index.html head)
- `src/i18n.ts` — all EN/KH copy, DISHES + STORIES data
- `src/components/` — LoadingScreen, Navbar, Hero, Works, Journal, Explorations, Stats, Footer
- `src/index.css` — Tailwind layers, orange `#EA580C` design tokens, keyframes
- `public/images/` — local food photography

## Rules for the agent
1. Read `context/AGENT.md` + `.learnings/` before starting work.
2. Keep AGENT.md ≤ 100 lines. Update LAST SESSION STATE after each session.
3. Log mistakes to `.learnings/errors/` (filename: `YYYY-MM-DD-slug.md`).
4. Every text node must go through `t(lang, en, kh)` — never hardcode English.
5. Deploy: `vercel --prod` from project root → khmer-eating.vercel.app
