import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import { EXPO_OUT } from "../constants/colors";
import { useLanguage } from "../i18n/LanguageContext";
import { getServices } from "../i18n/localizedContent";

export default function ServicesPage() {
  const reduced = useReducedMotion();
  const { locale, t } = useLanguage();
  const services = getServices(locale);
  const groups = [
    { title: t("services.group1"), items: services.slice(0, 4) },
    { title: t("services.group2"), items: services.slice(4, 8) },
    { title: t("services.group3"), items: services.slice(8, 12) },
  ];

  return (
    <main>
      <PageHero eyebrow={t("services.eyebrow")} title={t("services.pageTitle")} subtitle={t("services.pageSubtitle")} />
      <section className="bg-brand-light py-20 md:py-28">
        <div className="section-shell grid gap-20">
          {groups.map((group, groupIndex) => (
            <motion.section
              key={group.title}
              initial={{ opacity: reduced ? 1 : 0.76, y: reduced ? 0 : 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{ duration: 0.54, ease: EXPO_OUT }}
            >
              <div className="mb-8 flex items-end justify-between gap-6 border-b border-brand-dark/15 pb-5">
                <div className="flex items-center gap-4">
                  <span className="font-display text-3xl text-brand-dark/28">0{groupIndex + 1}</span>
                  <h2 className="font-display text-4xl uppercase md:text-5xl">{group.title}</h2>
                </div>
                <span className="hidden text-sm font-bold text-brand-dark/48 md:block">{t("services.outcome")}</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map(([icon, title, description], index) => (
                  <ServiceCard key={title} icon={icon} title={title} description={description} index={groupIndex * 4 + index} />
                ))}
              </div>
            </motion.section>
          ))}
          <Link to="/contact" className="inline-flex w-fit items-center gap-2 rounded-[10px] bg-brand-yellow px-6 py-4 font-bold text-brand-dark">
            {t("hero.primary")} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
      <CTASection />
      <Footer />
    </main>
  );
}
