import { useEffect, useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";
import type { Lang } from "./i18n";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Works from "./components/Works";
import Journal from "./components/Journal";
import Explorations from "./components/Explorations";
import Stats from "./components/Stats";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [lang, setLang] = useState<Lang>(() => {
    try {
      return (localStorage.getItem("khmer-eats-lang") as Lang) || "en";
    } catch {
      return "en";
    }
  });
  const [theme, setTheme] = useState<string>(() => {
    try {
      return localStorage.getItem("khmer-eats-theme") || "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-lang", lang);
    document.documentElement.setAttribute("lang", lang);
    try {
      localStorage.setItem("khmer-eats-lang", lang);
    } catch {
      /* noop */
    }
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("khmer-eats-theme", theme);
    } catch {
      /* noop */
    }
  }, [theme]);

  const toggleLang = useCallback(() => setLang((l) => (l === "en" ? "kh" : "en")), []);
  const toggleTheme = useCallback(() => setTheme((t) => (t === "light" ? "dark" : "light")), []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <Navbar lang={lang} theme={theme} onToggleLang={toggleLang} onToggleTheme={toggleTheme} />
      <main>
        <Hero lang={lang} />
        <Works lang={lang} />
        <Journal lang={lang} />
        <Explorations lang={lang} />
        <Stats lang={lang} />
      </main>
      <Footer lang={lang} />
    </>
  );
}
