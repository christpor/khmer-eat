# CLAUDE.md — Khmer Eats (Router File)

## What this is
Single-page bilingual (EN/ខ្មែរ) landing page demo for a Khmer street-food delivery app.
Pure HTML/CSS/JS. No framework, no build step, no backend, no dependencies.

## Ponytail Lazy Dev mandate
- New Files = 0 by default. Use existing files. Do not split into modules without proof.
- Shortest working diff wins. YAGNI. Delete over add.
- Never commit secrets. Global gitignore blocks `.env*`, `*.key`, `credentials*`.

## Run
```bash
python3 -m http.server 8080   # from project root → http://localhost:8080
```

## Files
- `index.html` — structure, bilingual `data-en`/`data-kh` attrs, inline SVG icon atlas
- `style.css` — light/dark via `html[data-theme]`; Khmer font switch via `html[data-lang="kh"]` (Kantumruy Pro)
- `script.js` — theme/lang toggles (localStorage, no-flash inline script in head), cart, live tracking

## Rules for the agent
1. Read `context/AGENT.md` + `.learnings/` before starting work.
2. Keep AGENT.md ≤ 100 lines. Update LAST SESSION STATE after each session.
3. Log mistakes to `.learnings/errors/` (filename: `YYYY-MM-DD-slug.md`).
4. Verify icon-atlas edits: every `use href="#i-x"` must map to exactly one `symbol id` — no dupes.
5. Deploy target (if asked): GitHub Pages / Vercel.
