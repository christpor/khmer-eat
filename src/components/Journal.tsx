import { motion } from "framer-motion";
import { COPY, STORIES, t, type Lang } from "../i18n";

export default function Journal({ lang }: { lang: Lang }) {
  return (
    <section id="stories" className="bg-bg py-16 md:py-24 scroll-mt-24">
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
                {t(lang, COPY.journal.eyebrow.en, COPY.journal.eyebrow.kh)}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display text-text-primary">
              {t(lang, COPY.journal.heading1.en, COPY.journal.heading1.kh)}{" "}
              <em className="font-display italic accent-gradient-text">
                {t(lang, COPY.journal.heading2.en, COPY.journal.heading2.kh)}
              </em>
            </h2>
            <p className="text-sm text-muted mt-3 max-w-md">
              {t(lang, COPY.journal.subtext.en, COPY.journal.subtext.kh)}
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
            {t(lang, COPY.journal.viewAll.en, COPY.journal.viewAll.kh)}
            <span aria-hidden>→</span>
          </a>
        </motion.div>

        <div className="flex flex-col gap-4">
          {STORIES.map((s, i) => (
            <motion.a
              key={s.title}
              href="#order"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-center gap-6 p-4 bg-surface/30 hover:bg-surface border border-stroke rounded-[40px] sm:rounded-full transition-colors group"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0">
                <img
                  src={s.img}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-display text-text-primary truncate">
                  {lang === "en" ? s.title : s.titleKh}
                </h3>
              </div>
              <div className="hidden sm:flex flex-col items-end gap-1 shrink-0">
                <span className="text-xs text-muted">{s.date}</span>
                <span className="text-xs font-mono text-muted">
                  {s.time} {t(lang, COPY.journal.min.en, COPY.journal.min.kh)}
                </span>
              </div>
              <span aria-hidden className="text-muted shrink-0 group-hover:text-text-primary transition-colors">
                →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
