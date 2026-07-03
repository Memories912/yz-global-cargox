import { ArrowRight, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Link } from "react-router-dom";
import { BrandIcon } from "./BrandIcons";
import { EXPO_OUT } from "../constants/colors";
import { contactDetails, type ContactChannel } from "../constants/content";
import { useLanguage } from "../i18n/LanguageContext";

const channelColors: Record<ContactChannel, string> = {
  whatsapp: "bg-[#25D366] text-white",
  wechat: "bg-[#07C160] text-white",
  kakao: "bg-[#FEE500] text-[#3C1E1E]",
  line: "bg-[#06C755] text-white",
  email: "bg-white",
};

const channelIcon: Record<ContactChannel, "whatsapp" | "wechat" | "kakao" | "line" | "gmail"> = {
  whatsapp: "whatsapp",
  wechat: "wechat",
  kakao: "kakao",
  line: "line",
  email: "gmail",
};

export default function CTASection({ compact = false }: { compact?: boolean }) {
  const reduced = useReducedMotion();
  const { t } = useLanguage();
  const channelLabels: Record<ContactChannel, string> = {
    whatsapp: t("channel.whatsapp"),
    wechat: t("channel.wechat"),
    kakao: t("channel.kakao"),
    line: t("channel.line"),
    email: t("channel.email"),
  };
  return (
    <section className="relative overflow-hidden bg-brand-dark py-24 text-white md:py-32">
      <div className="absolute inset-0 hero-grid opacity-30" />
      <motion.div
        className="section-shell relative z-10"
        initial={{ opacity: reduced ? 1 : 0.72, y: reduced ? 0 : 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.64, ease: EXPO_OUT }}
      >
        <div className={`grid items-end gap-10 ${compact ? "lg:grid-cols-[1fr_auto]" : "lg:grid-cols-[1.15fr_0.85fr]"}`}>
          <div>
            <h2 className="display-title font-display uppercase text-white">{t("cta.title")}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{t("cta.subtitle")}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                <Link to="/contact" className="flex w-full items-center justify-center gap-2 rounded-[10px] bg-brand-yellow px-6 py-4 font-bold text-brand-dark sm:w-auto">{t("hero.primary")} <ArrowRight size={18} /></Link>
              </motion.div>
              <a href="mailto:sourcing@yzglobal.com" className="flex w-full items-center justify-center gap-2 rounded-[10px] border border-white/45 px-6 py-4 font-bold sm:w-auto"><Mail size={18} /> {t("cta.contact")}</a>
            </div>
          </div>
          {!compact && (
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 border-t border-white/18 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              {contactDetails.map(([channel, value]) => (
                <div key={channel}>
                  <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-brand-yellow">
                    <span className={`grid h-6 w-6 shrink-0 place-items-center rounded-full ${channelColors[channel]}`}>
                      <BrandIcon name={channelIcon[channel]} size={13} />
                    </span>
                    {channelLabels[channel]}
                  </p>
                  <p className="mt-2 pl-8 text-sm text-white/70">{value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
