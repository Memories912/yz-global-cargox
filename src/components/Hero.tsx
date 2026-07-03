import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { EXPO_OUT, HERO_VIDEO_URL, MAP_IMAGE_URL } from "../constants/colors";
import AnimatedMap from "./AnimatedMap";
import Header from "./Header";
import { useLanguage } from "../i18n/LanguageContext";
import { localizedQuickQuoteSteps } from "../i18n/localizedContent";

export default function Hero() {
  const [ready, setReady] = useState(false);
  const reduced = useReducedMotion();
  const { t, locale } = useLanguage();
  const quickSteps = localizedQuickQuoteSteps[locale];

  useEffect(() => {
    const fallback = window.setTimeout(() => setReady(true), 1200);
    return () => window.clearTimeout(fallback);
  }, []);

  const slide = (direction: number, delay: number) => ({
    initial: { opacity: 0, x: reduced ? 0 : direction * 900 },
    animate: ready ? { opacity: 1, x: 0 } : { opacity: 0, x: reduced ? 0 : direction * 900 },
    transition: { duration: reduced ? 0.25 : 0.85, delay, ease: EXPO_OUT },
  });

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#1A1A2E] text-white">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        src={HERO_VIDEO_URL}
        poster={MAP_IMAGE_URL}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setReady(true)}
      />
      <div className="absolute inset-0 z-[1] bg-[#002A35]/45" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#002A35]/80 via-[#002A35]/30 to-transparent" />
      <div className="hero-grid absolute inset-0 z-[3] opacity-50" />
      <Header overlay />

      <div className="section-shell relative z-10 flex min-h-screen flex-col pb-8 pt-28 lg:pb-10 lg:pt-32">
        <div className="grid flex-1 items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <div className="min-w-0 py-6 lg:py-10">
            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.17em] text-white/78">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow" /> {t("hero.eyebrow")}
            </p>
            <h1 className={`${locale === "en" ? "hero-title font-display uppercase" : "hero-title-localized font-sans"} font-extrabold`}>
              <motion.span className="block whitespace-nowrap" {...slide(-1, 0.06)}>{t("hero.title1")}</motion.span>
              <motion.span className="block text-brand-yellow" {...slide(1, 0.15)}>{t("hero.title2")}</motion.span>
            </h1>
            <motion.p
              className="mt-7 max-w-[34rem] text-lg font-medium leading-relaxed text-white/86 md:text-xl"
              initial={{ opacity: 0, y: reduced ? 0 : 24 }}
              animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 24 }}
              transition={{ delay: 0.42, duration: 0.6, ease: EXPO_OUT }}
            >
              {t("hero.promise")}
            </motion.p>
          </div>

          <motion.div
            className="grid gap-5 pb-6 lg:pb-0 lg:pl-10 xl:pl-14"
            initial={{ opacity: 0, y: reduced ? 0 : 28 }}
            animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 28 }}
            transition={{ delay: 0.38, duration: 0.72, ease: EXPO_OUT }}
          >
            <div>
              <p className="max-w-lg text-[clamp(1.75rem,3vw,3rem)] font-bold leading-[1.05] tracking-[-0.025em]">
                {t("hero.lead")}
              </p>
              <p className="mt-4 max-w-xl text-sm leading-6 text-white/76 md:text-base">
                {t("hero.detail")}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/contact" className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-brand-yellow px-6 py-4 font-bold text-brand-dark sm:w-auto">
                    {t("hero.primary")} <ArrowRight size={18} />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.97 }}>
                  <Link to="/process" className="flex w-full items-center justify-center gap-2 rounded-[10px] border border-white/60 px-6 py-4 font-bold text-white sm:w-auto">
                    {t("hero.secondary")}
                  </Link>
                </motion.div>
              </div>
            </div>
            <div className="hidden md:block">
              <AnimatedMap />
              <p className="mt-3 text-xs leading-5 text-white/68">{t("hero.map")}</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mb-5 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: EXPO_OUT }}
          aria-hidden="true"
        >
          <div className="relative h-9 w-5 rounded-full border-2 border-white/55">
            <motion.span
              className="absolute left-1/2 top-1.5 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brand-yellow"
              animate={reduced ? {} : { y: [0, 12, 0], opacity: [1, 0.35, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <motion.span
            animate={reduced ? {} : { y: [0, 4, 0], opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown size={16} className="text-white/70" />
          </motion.span>
        </motion.div>

        <motion.div
          className="border-t border-white/22 bg-brand-dark/35 px-4 py-4 backdrop-blur-xl md:px-6"
          initial={{ opacity: 0, y: reduced ? 0 : 24 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: reduced ? 0 : 24 }}
          transition={{ delay: 0.7, duration: 0.62, ease: EXPO_OUT }}
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.14em] text-brand-yellow">{t("hero.flow")}</p>
          <div className="grid gap-2 sm:grid-cols-3 lg:grid-cols-7">
            {quickSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-2 text-xs font-semibold text-white/86 lg:items-start">
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-yellow text-[10px] font-bold text-brand-dark">{index + 1}</span>
                <span className="leading-5">{step}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
