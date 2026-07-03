import { ArrowDown, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { EXPO_OUT } from "../constants/colors";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../i18n/LanguageContext";
import { localizedQuickQuoteSteps } from "../i18n/localizedContent";

export default function QuickQuoteProcess() {
  const reduced = useReducedMotion();
  const { t, locale } = useLanguage();
  const quickSteps = localizedQuickQuoteSteps[locale];
  return (
    <section className="bg-brand-light py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading title={t("quick.title")} subtitle={t("quick.subtitle")} />
        <div className="flex flex-col gap-3 lg:flex-row lg:items-stretch lg:gap-0">
          {quickSteps.map((step, index) => (
            <div key={step} className="contents">
              <motion.article
                className="group flex min-h-40 flex-1 flex-col justify-between border border-brand-dark/12 bg-white p-5"
                initial={{ opacity: reduced ? 1 : 0.72, y: reduced ? 0 : 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: index * 0.06, duration: 0.5, ease: EXPO_OUT }}
                whileHover={reduced ? undefined : { y: -5 }}
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-brand-yellow text-sm font-bold">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-6 text-base font-bold leading-5">{step}</h3>
              </motion.article>
              {index < quickSteps.length - 1 && (
                <div className="grid place-items-center py-1 text-brand-dark/35 lg:w-8 lg:py-0">
                  <ArrowDown className="lg:hidden" size={18} />
                  <ArrowRight className="hidden lg:block" size={18} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
