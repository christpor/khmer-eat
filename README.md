<p align="center">
  <strong>Khmer street food, delivered hot to your door — a bilingual landing page built with React, Vite, Tailwind &amp; GSAP.</strong>
</p>

<p align="center">
  <a href="https://khmer-eating.vercel.app">
    <img alt="Live demo" src="https://img.shields.io/badge/live_demo-khmer--eating.vercel.app-059669.svg" />
  </a>
  <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-green.svg" />
  <img alt="Stack" src="https://img.shields.io/badge/stack-React%20%2F%20Vite%20%2F%20Tailwind-059669.svg" />
  <img alt="Motion" src="https://img.shields.io/badge/motion-GSAP%20%2B%20Framer%20Motion-F97316.svg" />
</p>

---

## ✨ Highlights

- 🌐 **Bilingual** — flip between English and Khmer (ខ្មែរ) with one click, including the Khmer font (Kantumruy Pro)
- 🌙 **Light & dark themes** — warm white + orange by default, OLED black when you prefer; your choice is remembered
- ⏱️ **Cinematic loading screen** — 000→100 requestAnimationFrame counter with rotating words
- 🛵 **Hero with real food photography** — local Khmer street-food shots, no stock-portfolio images
- 🎬 **GSAP-driven** — scroll-pinned parallax gallery, infinite marquee, entrance timelines
- 🍜 **Real Khmer dishes** — Amok, Lok Lak, Nom Banh Chok, Kuy Teav, Num Pang, Grilled Platter in a bento grid

## 🚀 Quick Start

```bash
npm install
npm run dev        # → http://localhost:5173
```

Production build:

```bash
npm run build      # → dist/
npm run preview
```

## 🌐 Live demo

See it live on Vercel: **https://khmer-eating.vercel.app**

> Deploy your own: `vercel --prod` from the project root.

## 🏗️ How it works

| File | Job |
|------|-----|
| `src/App.tsx` | Language + theme state (localStorage, no-flash), section orchestration |
| `src/i18n.ts` | All EN/KH copy, dish data, story data |
| `src/components/` | LoadingScreen, Navbar, Hero, Works, Journal, Explorations, Stats, Footer |
| `public/images/` | Local food photography |

No backend, no database, no API keys — everything runs in the browser.

## 🤖 AI Agent Context

This repo ships agent-friendly context files:

- `context/AGENT.md` — session handoff + project brain for AI coding tools

## 📄 License

[MIT](LICENSE) © 2026 Christpor
