import { ArrowRight, Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { EXPO_OUT } from "../constants/colors";
import SectionHeading from "./SectionHeading";
import { useLanguage } from "../i18n/LanguageContext";
import { localizedMarketFocus } from "../i18n/localizedContent";

export default function MarketFocus() {
  const reduced = useReducedMotion();
  const { t, locale } = useLanguage();
  const marketCopy = localizedMarketFocus[locale];
  const markets = [
    { name: t("market.korea"), code: "KR", items: marketCopy.korea, className: "bg-[#E7ECF8]" },
    { name: t("market.japan"), code: "JP", items: marketCopy.japan, className: "bg-[#F1EFE8]" },
  ];
  return (
    <section className="overflow-hidden bg-white py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading
          title={t("market.title")}
          subtitle={t("market.subtitle")}
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {markets.map((market, index) => (
            <motion.article
              key={market.name}
              className={`rounded-[14px] p-7 md:p-10 ${market.className}`}
              initial={{ opacity: reduced ? 1 : 0.72, x: reduced ? 0 : index === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.58, ease: EXPO_OUT }}
            >
              <div className="flex items-center justify-between border-b border-brand-dark/15 pb-6">
                <h3 className="font-display text-4xl uppercase">{market.name}</h3>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-dark font-bold text-white">{market.code}</span>
              </div>
              <ul className="mt-6 grid gap-4">
                {market.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold md:text-base">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-yellow"><Check size={14} strokeWidth={3} /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
        <Link to="/solutions" className="mt-8 inline-flex items-center gap-2 font-bold hover:text-brand-blue">{t("market.more")} <ArrowRight size={18} /></Link>
      </div>
    </section>
  );
}
