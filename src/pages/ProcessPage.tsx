import { ArrowDown, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import Icon from "../components/Icon";
import PageHero from "../components/PageHero";
import { EXPO_OUT } from "../constants/colors";
import { useLanguage } from "../i18n/LanguageContext";
import { getProcessSteps } from "../i18n/localizedContent";

export default function ProcessPage() {
  const reduced = useReducedMotion();
  const { t, locale } = useLanguage();
  const processSteps = getProcessSteps(locale);
  return (
    <main>
      <PageHero
        eyebrow={t("process.eyebrow")}
        title={t("process.title")}
        subtitle={t("process.subtitle")}
      />

      <section className="bg-white py-14 md:py-20">
        <div className="section-shell">
          <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-0" aria-label="Ten-step process overview">
            {processSteps.map((step, index) => (
              <div key={step.title} className="contents">
                <div className="flex min-w-0 flex-1 items-center gap-3 lg:flex-col lg:text-center">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-yellow text-xs font-bold">{index + 1}</span>
                  <span className="text-xs font-bold leading-4">{step.title}</span>
                </div>
                {index < processSteps.length - 1 && (
                  <span className="ml-4 text-brand-dark/25 lg:ml-0 lg:w-4">
                    <ArrowDown size={16} className="lg:hidden" />
                    <ArrowRight size={16} className="hidden lg:block" />
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-24 md:py-32">
        <div className="section-shell grid gap-5">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.title}
              className="grid overflow-hidden rounded-[14px] border border-brand-dark/12 bg-white md:grid-cols-[180px_1fr]"
              initial={{ opacity: reduced ? 1 : 0.72, y: reduced ? 0 : 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.54, ease: EXPO_OUT }}
            >
              <div className="flex items-center justify-between bg-brand-dark p-6 text-white md:flex-col md:items-start md:justify-between md:p-8">
                <span className="font-display text-4xl uppercase text-brand-yellow">{t("process.step")} {String(index + 1).padStart(2, "0")}</span>
                <Icon name={step.icon} size={34} strokeWidth={1.5} className="text-white/65" />
              </div>
              <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[1fr_0.8fr] lg:p-10">
                <div>
                  <h2 className="font-display text-4xl uppercase md:text-5xl">{step.title}</h2>
                  <p className="body-copy mt-4 leading-7 text-brand-dark/68">{step.description}</p>
                  {step.chinese && <p className="mt-4 text-sm font-medium leading-6 text-brand-blue">{step.chinese}</p>}
                </div>
                <ul className="grid content-start gap-3 border-t border-brand-dark/10 pt-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                  {step.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm font-semibold">
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CTASection compact />
      <Footer />
    </main>
  );
}
