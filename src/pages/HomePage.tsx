import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { EXPO_OUT } from "../constants/colors";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import GuaranteeCard from "../components/GuaranteeCard";
import Hero from "../components/Hero";
import MarketFocus from "../components/MarketFocus";
import QuickQuoteProcess from "../components/QuickQuoteProcess";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import SolutionCard from "../components/SolutionCard";
import { useLanguage } from "../i18n/LanguageContext";
import { getGuarantees, getHomeSolutions, getServices } from "../i18n/localizedContent";

export default function HomePage() {
  const reduced = useReducedMotion();
  const { t, locale } = useLanguage();
  const homeSolutions = getHomeSolutions(locale);
  const guarantees = getGuarantees(locale);
  const services = getServices(locale);
  return (
    <main>
      <Hero />
      <QuickQuoteProcess />

      <section className="bg-white py-24 md:py-32">
        <div className="section-shell">
          <SectionHeading title={t("solve.title")} subtitle={t("solve.subtitle")} />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {homeSolutions.map((item, index) => <SolutionCard key={item.title} {...item} index={index} />)}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark py-24 text-white md:py-32">
        <div className="section-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-12 lg:self-start">
            <SectionHeading title={t("guarantee.title")} subtitle={t("guarantee.subtitle")} light />
            <motion.p
              className="max-w-md border-t border-white/16 pt-6 text-sm leading-6 text-white/58"
              initial={{ opacity: 0.72 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: EXPO_OUT }}
            >
              {t("guarantee.intro")}
            </motion.p>
          </div>
          <div className="grid gap-x-10 md:grid-cols-2">
            {guarantees.map(([title, description], index) => <GuaranteeCard key={title} title={title} description={description} index={index} />)}
          </div>
        </div>
      </section>

      <section id="services" className="scroll-mt-10 bg-brand-light py-24 md:py-32">
        <div className="section-shell">
          <SectionHeading title={t("services.title")} subtitle={t("services.subtitle")} />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {services.map(([icon, title, description], index) => <ServiceCard key={title} icon={icon} title={title} description={description} index={index} />)}
          </div>
          <Link to="/services" className="mt-8 inline-flex items-center gap-2 font-bold hover:text-brand-blue">{t("services.viewAll")} <ArrowRight size={18} /></Link>
        </div>
      </section>

      <MarketFocus />
      <CTASection />
      <Footer />
    </main>
  );
}
