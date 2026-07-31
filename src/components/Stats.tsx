import { motion } from "framer-motion";
import { COPY, t, type Lang } from "../i18n";

export default function Stats({ lang }: { lang: Lang }) {
  const stats = [
    { val: COPY.stats.s1.val, label: COPY.stats.s1.label },
    { val: COPY.stats.s2.val, label: COPY.stats.s2.label },
    { val: COPY.stats.s3.val, label: COPY.stats.s3.label },
  ];

  return (
    <section id="order" className="bg-bg py-16 md:py-24 scroll-mt-24 border-t border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((s, i) => (
            <motion.div
              key={s.val}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-display accent-gradient-text mb-2">
                {s.val}
              </div>
              <div className="text-sm text-muted">{t(lang, s.label.en, s.label.kh)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
