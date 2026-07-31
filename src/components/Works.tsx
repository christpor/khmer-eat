import { motion } from "framer-motion";
import { COPY, DISHES, t, type Lang } from "../i18n";

const SPANS = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

export default function Works({ lang }: { lang: Lang }) {
  return (
    <section id="dishes" className="bg-bg py-12 md:py-16 scroll-mt-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-end justify-between mb-10"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">
                {t(lang, COPY.works.eyebrow.en, COPY.works.eyebrow.kh)}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-text-primary">
              {t(lang, COPY.works.heading1.en, COPY.works.heading1.kh)}{" "}
              <em className="font-display italic accent-gradient-text">
                {t(lang, COPY.works.heading2.en, COPY.works.heading2.kh)}
              </em>
            </h2>
            <p className="text-sm text-muted mt-3 max-w-md">
              {t(lang, COPY.works.subtext.en, COPY.works.subtext.kh)}
            </p>
          </div>
          <a
            href="#order"
            className="hidden md:inline-flex items-center gap-2 rounded-full text-sm px-5 py-2.5 border border-stroke text-text-primary hover:border-transparent transition-all relative overflow-hidden group"
          >
            <span
              aria-hidden
              className="absolute rounded-full accent-gradient animate-gradient-shift opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ inset: -2, zIndex: -1 }}
            />
            {t(lang, COPY.works.viewAll.en, COPY.works.viewAll.kh)}
            <span aria-hidden>→</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {DISHES.slice(0, 4).map((dish, i) => (
            <motion.a
              key={dish.name}
              href="#order"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className={`group relative bg-surface border border-stroke rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto ${SPANS[i]}`}
            >
              <img
                src={dish.img}
                alt={dish.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 halftone opacity-20 mix-blend-multiply"
                aria-hidden
              />
              <div className="absolute inset-0 bg-bg/70 opacity-0 group-hover:opacity-100 backdrop-blur-lg transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span
                  className="inline-flex items-center gap-2 rounded-full bg-white text-text-primary px-5 py-2.5 text-sm relative"
                  style={{ isolation: "isolate" }}
                >
                  <span
                    aria-hidden
                    className="absolute rounded-full accent-gradient animate-gradient-shift"
                    style={{ inset: -2, zIndex: -1 }}
                  />
                  {t(lang, COPY.works.view.en, COPY.works.view.kh)} —{" "}
                  <em className="font-display italic">{lang === "en" ? dish.name : dish.nameKh}</em>
                </span>
              </div>
              <div className="absolute bottom-4 left-4 text-white text-xs font-mono">
                {dish.price} · {dish.eta} min
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
