import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 3.4, ease: [0.19, 1, 0.22, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4"
    >
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-stroke bg-surface px-2 py-2 transition-shadow duration-300 ${
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

        <div className="w-px h-5 bg-stroke mx-1" />

        <button
          onClick={onToggleLang}
          title="Switch language"
          className="text-xs text-muted rounded-full px-2 sm:px-3 py-1.5 hover:text-text-primary hover:bg-stroke/50 transition-colors"
        >
          {lang === "en" ? "ខ្មែរ" : "EN"}
        </button>

        <button
          onClick={onToggleTheme}
          title="Switch theme"
          className="text-xs text-muted rounded-full px-2 sm:px-3 py-1.5 hover:text-text-primary hover:bg-stroke/50 transition-colors"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <a
          href="#order"
          className="relative inline-flex items-center text-xs rounded-full px-3 sm:px-4 py-1.5 text-text-primary overflow-hidden"
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
      </div>
    </motion.nav>
  );
}
