import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { COPY, GALLERY, t, type Dish, type Lang } from "../i18n";

gsap.registerPlugin(ScrollTrigger);

export default function Explorations({ lang }: { lang: Lang }) {
  const section = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<Dish | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
        tl.fromTo(
          ".parallax-col",
          { yPercent: 12 },
          { yPercent: -12, stagger: 0.2, ease: "none" }
        );
      });
    }, section);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const left = GALLERY.filter((_, i) => i % 2 === 0);
  const right = GALLERY.filter((_, i) => i % 2 === 1);

  const renderCol = (items: Dish[]) => (
    <>
      {items.map((d, i) => (
        <button
          key={d.name}
          onClick={() => setOpen(d)}
          aria-label={lang === "en" ? d.name : d.nameKh}
          className="group relative aspect-square w-full max-w-[150px] sm:max-w-[200px] md:max-w-[320px] overflow-hidden rounded-2xl mx-auto"
          style={{ rotate: `${i % 2 === 0 ? -3 : 3}deg` }}
        >
          <img
            src={d.img}
            alt={d.alt}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <span className="absolute bottom-3 left-3 text-xs text-white bg-black/50 backdrop-blur px-2 py-1 rounded-full">
            {lang === "en" ? d.name : d.nameKh}
          </span>
        </button>
      ))}
    </>
  );

  return (
    <div ref={section} className="relative md:min-h-[300vh]">
      <section className="h-svh flex items-center justify-center z-10 relative bg-bg md:sticky md:top-0">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4">
              {t(lang, COPY.explorations.eyebrow.en, COPY.explorations.eyebrow.kh)}
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-display text-text-primary mb-6">
              {t(lang, COPY.explorations.heading1.en, COPY.explorations.heading1.kh)}{" "}
              <em className="font-display italic accent-gradient-text">
                {t(lang, COPY.explorations.heading2.en, COPY.explorations.heading2.kh)}
              </em>
            </h2>
            <p className="text-sm text-muted max-w-md mx-auto mb-8">
              {t(lang, COPY.explorations.subtext.en, COPY.explorations.subtext.kh)}
            </p>
            <a
              href="#order"
              className="inline-flex items-center gap-2 rounded-full text-sm px-6 py-3 border border-stroke text-text-primary hover:border-transparent transition-all relative overflow-hidden group"
            >
              <span
                aria-hidden
                className="absolute rounded-full accent-gradient animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ inset: -2, zIndex: -1 }}
              />
              {t(lang, COPY.explorations.dribbble.en, COPY.explorations.dribbble.kh)}
            </a>
          </motion.div>
        </div>
      </section>

      <div className="relative z-20 bg-bg md:bg-transparent md:absolute md:inset-0 md:pointer-events-none">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-4 md:gap-12 lg:gap-40 px-4 py-12 md:px-8 md:py-24">
          <div className="parallax-col flex flex-col gap-4 md:gap-12 md:pointer-events-auto">
            {renderCol(left)}
          </div>
          <div className="parallax-col flex flex-col gap-4 md:gap-12 md:mt-40 md:pointer-events-auto">
            {renderCol(right)}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setOpen(null)}
            className="fixed inset-0 z-[9998] bg-black/90 flex items-center justify-center p-4 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-bg cursor-default"
            >
              <div className="relative">
                <img
                  src={open.img}
                  alt={open.alt}
                  className="w-full h-[45vh] md:h-[60vh] object-cover"
                />
                <button
                  onClick={() => setOpen(null)}
                  aria-label="Close"
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white text-lg flex items-center justify-center hover:bg-black/70 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-xs text-muted uppercase tracking-[0.2em] mb-2">
                  {lang === "en" ? open.area : open.areaKh}
                </p>
                <h3 className="text-3xl md:text-4xl font-display italic text-text-primary mb-3">
                  {lang === "en" ? open.name : open.nameKh}
                </h3>
                <p className="text-sm text-muted mb-5 max-w-md">
                  {lang === "en" ? open.desc : open.descKh}
                </p>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs px-3 py-1.5 rounded-full border border-stroke text-text-primary">
                    {open.price}
                  </span>
                  <span className="font-mono text-xs px-3 py-1.5 rounded-full border border-stroke text-text-primary">
                    {open.eta} min
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
