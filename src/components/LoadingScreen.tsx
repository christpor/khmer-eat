import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LOADING_WORDS, type Lang } from "../i18n";

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [count, setCount] = useState(0);
  const [wordIdx, setWordIdx] = useState(0);
  const [lang] = useState<Lang>(() => {
    try {
      return (localStorage.getItem("khmer-eats-lang") as Lang) || "en";
    } catch {
      return "en";
    }
  });

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const dur = 2700;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setCount(Math.round(p * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(onComplete, 400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  useEffect(() => {
    const id = setInterval(() => setWordIdx((i) => (i + 1) % LOADING_WORDS[lang].length), 900);
    return () => clearInterval(id);
  }, [lang]);

  const words = LOADING_WORDS[lang];

  return (
    <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.19, 1, 0.22, 1] }}
      className="fixed inset-0 z-[9999] bg-bg"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
        className="absolute top-8 left-8 text-xs text-muted uppercase tracking-[0.3em]"
      >
        Khmer Eats
      </motion.div>

      <div className="absolute inset-0 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={wordIdx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.19, 1, 0.22, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
          >
            {words[wordIdx]}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute right-8 bottom-10 text-7xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums">
        {String(count).padStart(3, "0")}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-stroke/50">
        <div
          className="accent-gradient h-full origin-left"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: "0 0 8px rgba(234, 88, 12, 0.35)",
          }}
        />
      </div>
    </motion.div>
  );
}
