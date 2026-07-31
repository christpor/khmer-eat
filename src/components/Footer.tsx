import { useEffect, useRef } from "react";
import gsap from "gsap";
import { COPY, t, type Lang } from "../i18n";

export default function Footer({ lang }: { lang: Lang }) {
  const marquee = useRef<HTMLDivElement>(null);
  const marqueeText = t(lang, COPY.footer.marquee.en, COPY.footer.marquee.kh);

  useEffect(() => {
    if (!marquee.current) return;
    const el = marquee.current;
    const tl = gsap.to(el, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
    return () => {
      tl.kill();
    };
  }, [marqueeText]);

  const SOCIALS = [
    { label: "Twitter", href: "#order" },
    { label: "Instagram", href: "#order" },
    { label: "Facebook", href: "#order" },
    { label: "TikTok", href: "#order" },
  ];

  const now = new Date().getFullYear();

  return (
    <footer className="bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden">
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="relative rounded-3xl overflow-hidden mb-12">
          <img
            src="/images/grill.jpg"
            alt=""
            loading="lazy"
            className="w-full h-[320px] md:h-[420px] object-cover -scale-y-100"
          />
          <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-4xl md:text-6xl font-display italic text-white mb-6">
              {t(lang, COPY.footer.cta.en, COPY.footer.cta.kh)}
            </h2>
            <a
              href="mailto:hello@khmereats.com"
              className="inline-flex items-center gap-2 rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg hover:scale-105 transition-transform"
            >
              {t(lang, COPY.footer.email.en, COPY.footer.email.kh)} ↗
            </a>
          </div>
        </div>
      </div>

      <div className="overflow-hidden mb-10 select-none" aria-hidden>
        <div ref={marquee} className="flex whitespace-nowrap will-change-transform">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="text-6xl md:text-8xl font-display italic text-text-primary/10 pr-8"
            >
              {marqueeText} •
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="text-sm text-muted hover:text-text-primary transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2 text-sm text-muted">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            {t(lang, COPY.footer.available.en, COPY.footer.available.kh)}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stroke flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted">
          <span>
            © {now} Khmer Eats · {t(lang, COPY.footer.madeIn.en, COPY.footer.madeIn.kh)} 🇰🇭
          </span>
          <span>{t(lang, COPY.footer.footerNote.en, COPY.footer.footerNote.kh)}</span>
        </div>
      </div>
    </footer>
  );
}
