# Prompt to recreate this landing page: Khmer Eats

> A single-page **white + orange** bilingual (EN/ខ្មែរ) restaurant landing page.
> Paste this into any AI coding tool to recreate https://khmer-eating.vercel.app.

---

```
Prompt to recreate this landing page:

Build a single-page WHITE + ORANGE bilingual (EN/ខ្មែរ) restaurant landing page using
React + Vite + Tailwind CSS + TypeScript + GSAP + Framer Motion.
It MUST be fully responsive (zero horizontal scroll at 320px, mobile-first) and fast
(~140KB gzipped, no layout shift). Follow the Responsive + Performance Rules below.

---

## Global Design System

### Fonts
Google Fonts import: Inter (300–700), Instrument Serif (italic, 400), Kantumruy Pro (400,500,700),
Noto Sans Khmer (400,500,700), JetBrains Mono (400,500).
- --font-body: 'Inter', 'Kantumruy Pro', sans-serif → Tailwind font-body
- --font-display: 'Instrument Serif', 'Fraunces', serif → Tailwind font-display
- Khmer mode override: html[data-lang="kh"] switches body AND every .font-display element to
  'Kantumruy Pro', 'Noto Sans Khmer', sans-serif with font-style: normal.

### CSS Custom Properties (HSL, no hsl() wrapper — Tailwind adds it)
--bg: 30 20% 98%;        /* warm white */
--surface: 0 0% 100%;    /* white cards */
--text: 24 10% 10%;      /* near-black text */
--muted: 25 6% 42%;
--stroke: 30 12% 88%;    /* light borders */

Dark mode (optional toggle via html[data-theme="dark"]):
--bg: 24 10% 4%;  --surface: 24 8% 8%;  --text: 30 20% 96%;  --muted: 25 6% 55%;  --stroke: 24 8% 14%;

### Tailwind Custom Colors
bg: "hsl(var(--bg))", surface: "hsl(var(--surface))",
"text-primary": "hsl(var(--text))", muted: "hsl(var(--muted))", stroke: "hsl(var(--stroke))".

### Accent Gradient
linear-gradient(90deg, #EA580C 0%, #FB923C 100%) — used on logo ring, hover borders, progress bars,
heading emphasis words, animated gradient border pills. CSS utility class .accent-gradient.
Also .accent-gradient-text for gradient-clipped italic headings.

### Custom Animations (in index.css)
- @keyframes scroll-down — translateY(-100%) → translateY(200%), 1.5s ease-in-out infinite
- @keyframes role-fade-in — opacity 0 + translateY(8px) → opacity 1 + translateY(0), 0.4s ease-out
- @keyframes gradient-shift — background-position 0% 50% → 100% 50% → 0% 50%, 6s ease infinite
  (animated gradient borders)
- .halftone utility: radial-gradient(circle, #000 1px, transparent 1px) at 4×4px

### Bilingual System
html[data-lang="en"|"kh"]. No-flash inline script in index.html head reads localStorage
key "khmer-eats-lang" before first paint. Every text node goes through t(lang, en, kh).
Khmer font switch via html[data-lang="kh"]. Theme key "khmer-eats-theme" (light default).

### Images (local, in public/images/)
hero.jpg (grilled skewers) + amok.jpg, loklak.jpg, nombanhchok.jpg, kuyteav.jpg,
numpang.jpg, grill.jpg — 6 Khmer dish photos.

### Responsive Rules (MANDATORY)
- Mobile-first: every class is a mobile base, upscaled with sm:/md:/lg: prefixes. No desktop-first hacks.
- Zero horizontal overflow at 320px: never use fixed widths wider than the viewport; grids that can't
  fit collapse to fewer columns (grid-cols-1) or cards shrink via max-w (e.g. 150px→200px→320px).
- Viewport-tall sections use h-svh (not h-screen) so mobile address bars don't cause jumps.
- Heavy scroll effects (pinning, parallax, scrub) run ONLY inside gsap.matchMedia("(min-width: 768px)")
  — phones get a plain scrolling layout. Respect prefers-reduced-motion (skip loader/marquee/parallax).
- Navigation: below sm, collapse links into a hamburger dropdown (AnimatePresence) with the 3 links +
  language + theme + "Order now". The pill stays logo + hamburger on phones; links/lang/theme/order
  show inline from sm up. Close dropdown on tap, outside click, or link tap.
- Touch: interactive targets ≥ 36–40px (w-9/h-9 minimum); never hover-only actions on phones.
- Headings scale down at the smallest widths (text-5xl base, not text-6xl) so nothing clips.

### Performance Rules (MANDATORY)
- Images: all local in public/, compressed (total ≈1.6MB), loading="lazy" EXCEPT the hero which is
  eager — and the hero has width/height set so LCP doesn't shift.
- No layout shift: every image sits in a fixed aspect box (aspect-square / aspect-[4/3]) — never a
  bare <img> that reflows the page.
- No heavy deps: no hls.js, no react-router, no UI kit, no image CDN. Bundle stays ≈400KB raw /
  ≈140KB gzip.
- Fonts: Google Fonts with preconnect + crossorigin, display=swap, only the weights used. No font
  files committed.
- GSAP: one gsap.context() per component with ctx.revert() cleanup; ScrollTrigger through matchMedia;
  kill marquee tweens on unmount. No long-running rAF loops after load.
- Sections below the fold are simple; only the hero uses entrance animations that block first paint.

---

## Page Structure (App.tsx)

{isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
Then: Navbar, Hero, Works, Journal, Explorations, Stats, Footer.

---

## Section 1: Loading Screen

Full-screen overlay (fixed inset-0 z-[9999] bg-bg). requestAnimationFrame counter 000→100 over 2700ms.

- Top-left: "Khmer Eats" label — text-xs text-muted uppercase tracking-[0.3em], motion y:-20→0 opacity 0→1.
- Center: Rotating words ["Fresh", "Hot", "Fast", "Khmer"] (Khmer: ["ស្រស់","ក្តៅ","លឿន","ខ្មែរ"])
  cycling every 900ms. AnimatePresence mode="wait", y:20→0→-20. text-4xl md:text-6xl lg:text-7xl
  font-display italic text-text-primary/80.
- Bottom-right: Counter — text-7xl md:text-8xl lg:text-9xl font-display tabular-nums,
  String(count).padStart(3, "0").
- Bottom progress bar: h-[3px] bg-stroke/50, inner .accent-gradient scaleX(count/100),
  box-shadow: 0 0 8px rgba(234, 88, 12, 0.35).
- On 100: 400ms delay → onComplete.

---

## Section 2: Hero

Full-viewport section (h-svh — uses Tailwind's svh so mobile address bars don't jump), centered
content over a food photo (NO video).

### Background
- <img src="/images/hero.jpg"> absolutely positioned, min-w-full min-h-full object-cover
  -translate-x-1/2 -translate-y-1/2.
- Overlay bg-black/20. Bottom fade: h-48 bg-gradient-to-t from-bg to-transparent.

### Navbar (fixed, floats top center) — fully responsive
fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4.
Inner pill: relative inline-flex rounded-full backdrop-blur-md border border-stroke bg-surface px-2 py-2,
shadow-md shadow-black/10 when scrollY > 100.

1. Logo: 9×9 circle, accent-gradient border ring (multi-stop, reverses on hover), inner bg-white
   circle, "KE" font-display italic text-[13px].
2. Divider: w-px h-5 bg-stroke mx-1 (hidden below sm).
3. Nav links: ["Home", "Dishes", "Stories"] (Khmer: ទំព័រដើម / ម្ហូប / រឿងរ៉ាវ) — text-xs rounded-full
   px-3 px-4 py-1.5. Active: text-text-primary bg-stroke/50. Inactive: text-muted hover states.
   **hidden below sm**.
4. Hamburger button (sm:hidden): 2-line icon (rotates to ✕ when open) toggling a dropdown panel
   (absolute top-full mt-2 left-1/2 -translate-x-1/2 w-56 rounded-3xl border bg-surface shadow-lg)
   with the 3 links + language toggle + theme toggle + "Order now" (Khmer: បញ្ជាទិញឥឡូវ).
   Closes on tap, on outside click, and animates via AnimatePresence.
5. Language toggle button (EN ⇄ ខ្មែរ) + theme toggle (🌙/☀️) — hidden below sm (lives in the dropdown).
6. "Order now" button (Khmer: បញ្ជាទិញឥឡូវ) — hidden below sm: on hover shows animated accent-gradient
   border behind (absolute span inset:-2px), inner content bg-surface rounded-full backdrop-blur-md, ↗ arrow.

### Hero Content (centered, z-10)
- Eyebrow: text-xs text-white uppercase tracking-[0.3em] mb-8 — "PHNOM PENH · SIEM REAP · BATTAMBANG".
  Class blur-in.
- Name: text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight
  text-white mb-6 — "Khmer Eats" (Khmer: ខ្មែរអ៊ីត). Class name-reveal.
- Role line: "A {role} lives in Phnom Penh." — roles cycle every 2s, Khmer:
  ["ម្ហូបតាមផ្លូវ","ក្តៅ","ស្រស់","លឿន"], EN: ["street food","hot","fresh","fast"]. Role word:
  font-display italic text-white, AnimatePresence mode="wait", key={roleIndex}.
- Description: text-sm md:text-base text-white/85 max-w-md mb-12 — "Real Khmer hawkers. Cooked to
  order, packed hot, and at your door in under 30 minutes. No cold noodles. No excuses."
- CTAs (inline-flex gap-4): "Order now" solid bg-text-primary text-bg; "How it works" outlined
  border-2 border-white/60 bg-transparent text-white. Both rounded-full text-sm px-7 py-3.5 hover:scale-105.

### GSAP Entrance
Timeline, ease "power3.out", delay 3.4s (after loader):
- .name-reveal: opacity 0→1, y 50→0, duration 1.2, delay 0.1
- .blur-in: opacity 0→1, filter blur(10px)→0, y 20→0, duration 1, stagger 0.1, delay 0.3

### Scroll Indicator
Bottom-center: "SCROLL" text-[10px] white/80 uppercase tracking-[0.2em] above w-px h-10 bg-white/40
line with animated white highlight .animate-scroll-down.

---

## Section 3: Selected Works → "Featured *dishes*" Bento Grid

bg-bg py-12 md:py-16. Inner: max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16.

### Header
Framer Motion whileInView opacity 0→1 y 30→0 duration 1s ease [0.25,0.1,0.25,1] once margin "-100px".
- Eyebrow: w-8 h-px bg-stroke + "The menu" (Khmer: ម៉ឺនុយ) text-xs text-muted uppercase tracking-[0.3em]
- Heading: "Featured *dishes*" — italic word accent-gradient-text font-display italic
- Subtext: "A selection of dishes from today's hawkers, from flame to doorstep."
- "View all dishes" button (desktop only) — rounded-full gradient hover border ring + →

### Bento Grid
grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6. Column spans alternate: 7/5/5/7.
4 dish cards: Fish Amok, Beef Lok Lak, Nom Banh Chok, Kuy Teav (bilingual names).

Each card: bg-surface border border-stroke rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto.
- Background dish image object-cover group-hover:scale-105
- .halftone overlay opacity-20 mix-blend-multiply
- Hover: bg-bg/70 opacity-0→1 backdrop-blur-lg
- Hover label: pill, white bg, animated accent-gradient border, "View — *DishName*" italic
- Bottom-left: text-xs white font-mono "$price · XX min"

---

## Section 4: Journal → "Recent *stories*"

bg-bg py-16 md:py-24. Same header pattern (eyebrow "The story" + heading + subtext + "View all stories").

4 horizontal pill entries (rounded-[40px] sm:rounded-full), flex items-center gap-6 p-4
bg-surface/30 hover:bg-surface border border-stroke:
- 20×20 rounded-full overflow-hidden image
- Title (font-display, truncate, bilingual)
- Right: date + "X min read" font-mono
- → arrow on hover

Stories: "The 4am noodle run with Vibol", "Bopha's 20-year green curry",
"Charcoal, smoke, and Rith's platter", "Num Pang at the Psar Thmei rush" (all bilingual).

---

## Section 5: Explorations (Parallax Gallery)

**Responsive rule:** the parallax + sticky pin run ONLY at ≥768px (gsap.matchMedia "(min-width: 768px)").
Below that, the gallery is a plain scrolling grid — smooth on phones, no pinning.

Wrapper: relative md:min-h-[300vh] (the tall scroll room for the desktop effect only).

### Layer 1: Sticky Center (z-10)
h-svh flex items-center justify-center relative bg-bg md:sticky md:top-0 (CSS sticky replaces GSAP
pin — no pinSpacer issues).
- Eyebrow "Gallery", Heading "Visual *playground*" (accent-gradient-text italic), subtext,
  "See more on the street" button with gradient hover ring.

### Layer 2: Parallax Columns (z-20)
relative bg-bg md:absolute md:inset-0 md:pointer-events-none.
max-w-[1400px] mx-auto grid grid-cols-2 gap-4 md:gap-12 lg:gap-40 px-4 py-12 md:px-8 md:py-24.
6 dish images split into 2 columns (each .parallax-col flex flex-col gap-4 md:gap-12, right column
md:mt-40, pointer-events-auto on md+). GSAP scrub timeline yPercent 12→-12 stagger 0.2.
Cards: aspect-square w-full max-w-[150px] sm:max-w-[200px] md:max-w-[320px] rounded-2xl mx-auto,
rotate ±3deg alternating, label pill (bg-black/50 white text, dish name), click → lightbox.

### Lightbox (click any gallery card)
Fullscreen fixed inset-0 z-[9998] bg-black/90, AnimatePresence. Scroll locked
(document.body.style.overflow = "hidden") while open; closes on backdrop tap or Escape key.
Inner card: max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-bg — image (h-[45vh] md:h-[60vh]
object-cover) with a ✕ close button, then dish area label (uppercase eyebrow), name (font-display
italic, bilingual), description, and price + "X min" pills (font-mono, border-stroke).

---

## Section 6: Stats

bg-bg py-16 md:py-24 border-t border-stroke. 3-column grid, whileInView reveals, stagger 0.1:
"2,400+ hawkers on board" · "30 min avg. delivery" · "4.9 rating from diners"
(bilingual labels). Values: text-5xl md:text-6xl font-display accent-gradient-text.

---

## Section 7: Contact / Footer

bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden.

### CTA Card
Rounded-3xl overflow-hidden: <img src="/images/grill.jpg"> w-full h-[320px] md:h-[420px]
object-cover with -scale-y-100 (flipped). Overlay bg-black/60 centered:
"Hungry yet?" (Khmer: ឃ្លានហើយមែនទេ?) text-4xl md:text-6xl font-display italic text-white,
email button mailto:hello@khmereats.com rounded-full bg-text-primary text-bg hover:scale-105.

### GSAP Marquee
"HOT FRESH FAST • " (Khmer: ក្តៅ ស្រស់ លឿន •) repeated 10×, text-6xl md:text-8xl font-display
italic text-text-primary/10. GSAP xPercent -50, duration 40, ease "none", repeat -1.

### Footer Bar
Socials [Twitter, Instagram, Facebook, TikTok] + green pulsing dot (animate-ping) +
"Available in Phnom Penh" + "© {year} Khmer Eats · Made in Phnom Penh 🇰🇭" (bilingual).

---

## Dependencies
gsap, framer-motion, react, react-dom, vite, typescript, tailwindcss (NO hls.js, NO react-router —
single page, no video).

Add smooth scroll nav and IntersectionObserver active-link highlighting.

---

## Definition of Done (verify before shipping)
1. `npm run build` → zero TypeScript errors.
2. Test at 320px / 375px / 768px / 1440px: no horizontal scrollbar at any width.
3. Mobile: hamburger opens the dropdown; tapping a link closes it; gallery taps open the lightbox;
   lightbox closes on backdrop tap + Escape; body scroll locks while it's open.
4. Desktop: parallax scrubs with scroll and nothing overlaps the section below.
5. Lazy images load as you scroll; the hero paints immediately (no LCP shift).
6. Khmer (ខ្មែរ) toggle + dark mode work from a cold load with no flash.
7. Mobile: hero doesn't jump when the address bar hides; no content clipped by the top pill.
```
