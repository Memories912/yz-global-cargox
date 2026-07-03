import { motion, useReducedMotion } from "motion/react";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import { EXPO_OUT } from "../constants/colors";
import { type IconName } from "../constants/content";
import { useLanguage } from "../i18n/LanguageContext";
import { getDetailedSolutions } from "../i18n/localizedContent";

export default function SolutionsPage() {
  const reduced = useReducedMotion();
  const { t, locale } = useLanguage();
  const detailedSolutions = getDetailedSolutions(locale);
  return (
    <main>
      <PageHero
        eyebrow={t("solutions.eyebrow")}
        title={t("solutions.title")}
        subtitle={t("solutions.subtitle")}
      />
      <section className="bg-brand-light py-24 md:py-32">
        <div className="section-shell">
          <div className="mb-8 hidden grid-cols-[72px_1fr_1fr] gap-8 border-b-2 border-brand-dark/25 pb-4 text-sm font-extrabold uppercase tracking-[0.12em] lg:grid">
            <span className="text-brand-dark/68">{t("solutions.number")}</span>
            <span className="text-[#C2410C]">{t("card.pain")}</span>
            <span className="text-brand-blue">{t("card.solution")}</span>
          </div>
          <div className="grid gap-4">
            {detailedSolutions.map(([title, pain, solution, icon], index) => (
              <motion.article
                key={title}
                className="grid gap-6 rounded-[12px] border border-brand-dark/12 bg-white p-6 lg:grid-cols-[72px_1fr_1fr] lg:gap-8 lg:p-8"
                initial={{ opacity: reduced ? 1 : 0.72, y: reduced ? 0 : 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: EXPO_OUT }}
              >
                <div className="flex items-center justify-between lg:block">
                  <span className="font-display text-3xl text-brand-dark/30">{String(index + 1).padStart(2, "0")}</span>
                  <Icon name={icon as IconName} size={24} className="mt-3 text-brand-dark lg:block" strokeWidth={1.8} />
                </div>
                <div>
                  <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.11em] text-[#C2410C] lg:hidden">{t("card.pain")}</p>
                  <h2 className="text-xl font-bold tracking-[-0.02em]">{title}</h2>
                  <p className="mt-3 text-sm leading-6 text-brand-dark/64">{pain}</p>
                </div>
                <div className="border-t border-brand-dark/10 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  <p className="mb-2 text-sm font-extrabold uppercase tracking-[0.11em] text-brand-blue lg:hidden">{t("card.solution")}</p>
                  <p className="font-medium leading-7">{solution}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
      <Footer />
    </main>
  );
}
