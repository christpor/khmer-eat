import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { COPY, GALLERY, t, type Lang } from "../i18n";

gsap.registerPlugin(ScrollTrigger);

export default function Explorations({ lang }: { lang: Lang }) {
  const section = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section.current,
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });

      tl.fromTo(
        ".parallax-col",
        { yPercent: 12 },
        { yPercent: -12, stagger: 0.2, ease: "none" }
      );
    }, section);
    return () => ctx.revert();
  }, []);

  const left = GALLERY.filter((_, i) => i % 2 === 0);
  const right = GALLERY.filter((_, i) => i % 2 === 1);

  const renderCol = (items: typeof left) => (
    <div className="flex flex-col gap-12 md:gap-40">
      {items.map((d, i) => (
        <button
          key={d.name}
          onClick={() => setOpen(open === i ? null : i)}
          className="group relative aspect-square max-w-[320px] w-full overflow-hidden rounded-2xl mx-auto"
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
    </div>
  );

  return (
    <div ref={section} className="relative">
      <section className="h-screen flex items-center justify-center z-10 relative bg-bg">
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
            <h2 className="text-5xl md:text-7xl font-display text-text-primary mb-6">
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

      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 gap-12 md:gap-40 px-8 py-24">
          <div className="parallax-col pointer-events-auto">{renderCol(left)}</div>
          <div className="parallax-col pointer-events-auto md:mt-40">{renderCol(right)}</div>
        </div>
      </div>
    </div>
  );
}
