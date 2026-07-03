import { motion, useReducedMotion } from "motion/react";
import { EXPO_OUT } from "../constants/colors";
import Header from "./Header";
import { useLanguage } from "../i18n/LanguageContext";

export default function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  const reduced = useReducedMotion();
  const { locale } = useLanguage();
  return (
    <>
      <Header />
      <section className="relative overflow-hidden bg-brand-dark py-20 text-white md:py-28">
        <div className="hero-grid absolute inset-0 opacity-50" />
        <motion.div className="section-shell relative z-10" initial={{ opacity: 0, y: reduced ? 0 : 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.68, ease: EXPO_OUT }}>
          <p className="mb-5 text-sm font-bold text-brand-yellow">{eyebrow}</p>
          <h1 className={`${locale === "en" ? "page-title font-display uppercase" : "page-title-localized font-sans font-bold"} max-w-5xl`}>{title}</h1>
          <p className="body-copy mt-7 text-lg leading-8 text-white/70 md:text-xl">{subtitle}</p>
        </motion.div>
      </section>
    </>
  );
}
