import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { AnimatePresence, motion } from "framer-motion";
import { COPY, ROLE_WORDS, t, type Lang } from "../i18n";

export default function Hero({ lang }: { lang: Lang }) {
  const root = useRef<HTMLElement>(null);
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 3.4, defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      );
      tl.fromTo(
        ".blur-in",
        { opacity: 0, y: 20, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1, stagger: 0.1, delay: 0.3 },
        "-=0.4"
      );
    }, root);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const id = setInterval(() => setRoleIdx((i) => (i + 1) % ROLE_WORDS[lang].length), 2000);
    return () => clearInterval(id);
  }, [lang]);

  const roles = ROLE_WORDS[lang];
  const roleText = t(lang, COPY.hero.roleLine.en, COPY.hero.roleLine.kh).replace(
    "{role}",
    roles[roleIdx]
  );
  const [beforeRole, afterRole] = roleText.split(roles[roleIdx]);

  return (
    <section ref={root} id="top" className="relative h-screen w-full overflow-hidden bg-bg">
      <div className="absolute inset-0">
        <img
          src="/images/hero.jpg"
          alt="Grilled Khmer skewers over open flame"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <p className="blur-in text-xs text-white uppercase tracking-[0.3em] mb-8">
          {t(lang, COPY.hero.eyebrow.en, COPY.hero.eyebrow.kh)}
        </p>

        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-white mb-6 opacity-0">
          {t(lang, COPY.hero.name.en, COPY.hero.name.kh)}
        </h1>

        <p className="blur-in text-sm md:text-base text-white/90 max-w-md mb-3 flex flex-wrap items-center justify-center gap-x-2">
          <span>{beforeRole}</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIdx}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="font-display italic text-white"
            >
              {roles[roleIdx]}
            </motion.span>
          </AnimatePresence>
          <span>{afterRole}</span>
        </p>

        <p className="blur-in text-sm md:text-base text-white/85 max-w-md mb-12">
          {t(lang, COPY.hero.desc.en, COPY.hero.desc.kh)}
        </p>

        <div className="blur-in flex items-center gap-4">
          <a
            href="#dishes"
            className="rounded-full text-sm px-7 py-3.5 font-medium bg-text-primary text-bg hover:scale-105 transition-transform"
          >
            {t(lang, COPY.hero.seeWorks.en, COPY.hero.seeWorks.kh)}
          </a>
          <a
            href="#stories"
            className="rounded-full text-sm px-7 py-3.5 border-2 border-white/60 bg-transparent text-white hover:scale-105 hover:border-white transition-transform"
          >
            {t(lang, COPY.hero.reachOut.en, COPY.hero.reachOut.kh)}
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-[10px] text-white/80 uppercase tracking-[0.2em]">
          {t(lang, COPY.hero.scroll.en, COPY.hero.scroll.kh)}
        </span>
        <div className="w-px h-10 bg-white/40 overflow-hidden">
          <div className="w-px h-full bg-white animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
