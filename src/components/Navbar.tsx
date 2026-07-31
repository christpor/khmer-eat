import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { COPY, t, type Lang } from "../i18n";

interface NavbarProps {
  lang: Lang;
  theme: string;
  onToggleLang: () => void;
  onToggleTheme: () => void;
}

const LINKS = [
  { key: "home", href: "#top" },
  { key: "work", href: "#dishes" },
  { key: "resume", href: "#stories" },
] as const;

export default function Navbar({ lang, theme, onToggleLang, onToggleTheme }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const pill = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.querySelector(l.href)).filter(Boolean) as Element[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const id = `#${e.target.id}`;
            const hit = LINKS.find((l) => l.href === id);
            if (hit) setActive(hit.key);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (pill.current && !pill.current.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [menuOpen]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 3.4, ease: [0.19, 1, 0.22, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4"
    >
      <div
        ref={pill}
        className={`relative inline-flex items-center rounded-full backdrop-blur-md border border-stroke bg-surface px-2 py-2 transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-black/10" : ""
        }`}
      >
        <a
          href="#top"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-white dark:bg-surface group"
          style={{
            boxShadow: "0 0 0 2px transparent",
            transition: "box-shadow 0.4s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 0 0 2px #ea580c, 0 0 0 4px #fb923c, 0 0 0 6px #ea580c";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "0 0 0 2px transparent";
          }}
        >
          <span className="font-display italic text-[13px] text-text-primary">KE</span>
        </a>

        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
          aria-expanded={menuOpen}
          className="sm:hidden flex items-center justify-center w-9 h-9 rounded-full text-text-primary hover:bg-stroke/50 transition-colors"
        >
          <span className="flex flex-col gap-[5px]">
            <span className={`block w-4 h-px bg-current transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[3px]" : ""}`} />
            <span className={`block w-4 h-px bg-current transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[3px]" : ""}`} />
          </span>
        </button>

        <div className="hidden sm:flex items-center">
          {LINKS.map((l) => (
            <a
              key={l.key}
              href={l.href}
              className={`text-xs rounded-full px-3 sm:px-4 py-1.5 transition-colors ${
                active === l.key
                  ? "text-text-primary bg-stroke/50"
                  : "text-muted hover:text-text-primary hover:bg-stroke/50"
              }`}
            >
              {t(lang, COPY.nav[l.key].en, COPY.nav[l.key].kh)}
            </a>
          ))}
        </div>

        <div className="w-px h-5 bg-stroke mx-1 hidden sm:block" />

        <button
          onClick={onToggleLang}
          title="Switch language"
          className="hidden sm:inline-flex text-xs text-muted rounded-full px-2 sm:px-3 py-1.5 hover:text-text-primary hover:bg-stroke/50 transition-colors"
        >
          {lang === "en" ? "ខ្មែរ" : "EN"}
        </button>

        <button
          onClick={onToggleTheme}
          title="Switch theme"
          className="hidden sm:inline-flex text-xs text-muted rounded-full px-2 sm:px-3 py-1.5 hover:text-text-primary hover:bg-stroke/50 transition-colors"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <a
          href="#order"
          className="hidden sm:relative sm:inline-flex items-center text-xs rounded-full px-3 sm:px-4 py-1.5 text-text-primary overflow-hidden"
          style={{ isolation: "isolate" }}
        >
          <span
            aria-hidden
            className="absolute rounded-full accent-gradient animate-gradient-shift"
            style={{ inset: -2, zIndex: -2 }}
          />
          <span
            className="relative inline-flex items-center gap-1 rounded-full bg-surface px-3 sm:px-4 py-1.5 backdrop-blur-md"
            style={{ zIndex: -1, margin: "-6px -4px" }}
          >
            {t(lang, COPY.nav.sayhi.en, COPY.nav.sayhi.kh)}
            <span aria-hidden>↗</span>
          </span>
        </a>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-56 rounded-3xl border border-stroke bg-surface backdrop-blur-md shadow-lg shadow-black/10 p-2 sm:hidden"
            >
              {LINKS.map((l) => (
                <a
                  key={l.key}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-full px-4 py-2.5 text-sm transition-colors ${
                    active === l.key
                      ? "text-text-primary bg-stroke/50"
                      : "text-muted hover:text-text-primary hover:bg-stroke/50"
                  }`}
                >
                  {t(lang, COPY.nav[l.key].en, COPY.nav[l.key].kh)}
                </a>
              ))}
              <div className="my-2 h-px bg-stroke mx-3" />
              <div className="flex items-center gap-1 px-2 pb-1">
                <button
                  onClick={() => {
                    onToggleLang();
                    setMenuOpen(false);
                  }}
                  className="text-xs text-muted rounded-full px-3 py-1.5 hover:text-text-primary hover:bg-stroke/50 transition-colors"
                >
                  {lang === "en" ? "ខ្មែរ" : "EN"}
                </button>
                <button
                  onClick={() => {
                    onToggleTheme();
                    setMenuOpen(false);
                  }}
                  className="text-xs text-muted rounded-full px-3 py-1.5 hover:text-text-primary hover:bg-stroke/50 transition-colors"
                >
                  {theme === "light" ? "🌙" : "☀️"}
                </button>
                <a
                  href="#order"
                  onClick={() => setMenuOpen(false)}
                  className="ml-auto text-xs font-medium rounded-full px-3 py-1.5 text-text-primary bg-stroke/50 hover:bg-stroke transition-colors"
                >
                  {t(lang, COPY.nav.sayhi.en, COPY.nav.sayhi.kh)} ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
