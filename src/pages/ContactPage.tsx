import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Mail, Paperclip, Send, Upload } from "lucide-react";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import PageHero from "../components/PageHero";
import { BrandIcon } from "../components/BrandIcons";
import { EXPO_OUT } from "../constants/colors";
import { contactDetails, type ContactChannel } from "../constants/content";
import { useLanguage } from "../i18n/LanguageContext";
import { contactFieldCopy } from "../i18n/localizedContent";

const fieldMeta = [
  ["name", "text"], ["company", "text"], ["country", "text"], ["email", "email"], ["messenger", "text"],
  ["category", "text"], ["link", "url"], ["quantity", "text"], ["price", "text"],
] as const;

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

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [fileName, setFileName] = useState("");
  const { t, locale } = useLanguage();
  const fields = fieldMeta.map(([name, type], index) => [contactFieldCopy[locale][index][0], name, type, contactFieldCopy[locale][index][1]] as const);
  const channelLabels: Record<ContactChannel, string> = {
    whatsapp: t("channel.whatsapp"),
    wechat: t("channel.wechat"),
    kakao: t("channel.kakao"),
    line: t("channel.line"),
    email: t("channel.email"),
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => document.getElementById("success-message")?.focus(), 50);
  };

  return (
    <main>
      <PageHero
        eyebrow={t("contact.eyebrow")}
        title={t("contact.title")}
        subtitle={t("contact.subtitle")}
      />

      <section className="bg-brand-light py-20 md:py-28">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <aside className="lg:sticky lg:top-8 lg:self-start">
            <h2 className="font-display text-5xl uppercase leading-[0.9]">{t("contact.asideTitle")}</h2>
            <p className="mt-6 text-base leading-7 text-brand-dark/68">{t("contact.asideBody")}</p>
            <div className="mt-10 grid gap-4">
              {contactDetails.map(([channel, value]) => (
                <div key={channel} className="flex items-start gap-4 border-t border-brand-dark/12 pt-4">
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${channelColors[channel]}`}>
                    <BrandIcon name={channelIcon[channel]} size={18} />
                  </span>
                  <div><p className="text-xs font-bold uppercase tracking-[0.1em] text-brand-dark/48">{channelLabels[channel]}</p><p className="mt-1 font-semibold">{value}</p></div>
                </div>
              ))}
            </div>
            <a href="mailto:sourcing@yzglobal.com" className="mt-8 inline-flex items-center gap-2 font-bold hover:text-brand-blue"><Mail size={18} /> sourcing@yzglobal.com</a>
          </aside>

          <div>
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  id="success-message"
                  tabIndex={-1}
                  className="rounded-[14px] bg-brand-dark p-8 text-white md:p-12"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.45, ease: EXPO_OUT }}
                >
                  <CheckCircle2 size={44} className="text-brand-yellow" />
                  <h2 className="mt-8 font-display text-5xl uppercase">{t("contact.successTitle")}</h2>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-white/74">{t("contact.successBody")}</p>
                  <button onClick={() => setSubmitted(false)} className="mt-8 rounded-[10px] bg-brand-yellow px-6 py-4 font-bold text-brand-dark">{t("contact.another")}</button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="rounded-[14px] bg-white p-6 md:p-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="grid gap-5 md:grid-cols-2">
                    {fields.map(([label, name, type, placeholder]) => (
                      <label key={name} className={name === "messenger" || name === "link" ? "md:col-span-2" : ""}>
                        <span className="mb-2 block text-sm font-bold">{label}</span>
                        <input className="field" name={name} type={type} placeholder={placeholder} required={["name", "email", "country", "category"].includes(name)} />
                      </label>
                    ))}
                  </div>

                  <label className="mt-5 block">
                    <span className="mb-2 block text-sm font-bold">{t("contact.upload")}</span>
                    <span className="flex cursor-pointer flex-col items-center justify-center rounded-[12px] border border-dashed border-brand-dark/28 bg-brand-light px-6 py-9 text-center transition-colors hover:border-brand-blue">
                      <Upload size={28} />
                      <span className="mt-3 font-bold">{fileName || t("contact.uploadAction")}</span>
                      <span className="mt-1 text-xs text-brand-dark/56">{t("contact.fileNote")}</span>
                      <input className="sr-only" type="file" accept="image/*" onChange={(event) => setFileName(event.target.files?.[0]?.name ?? "")} />
                    </span>
                  </label>

                  <label className="mt-5 block">
                    <span className="mb-2 block text-sm font-bold">{t("contact.message")}</span>
                    <textarea className="field min-h-36 resize-y" name="message" placeholder={t("contact.messagePlaceholder")} required />
                  </label>

                  <div className="mt-6 flex flex-col gap-4 border-t border-brand-dark/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                    <p className="flex items-center gap-2 text-xs text-brand-dark/58"><Paperclip size={15} /> {t("contact.confidential")}</p>
                    <motion.button type="submit" className="flex items-center justify-center gap-2 rounded-[10px] bg-brand-yellow px-7 py-4 font-bold" whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }}>
                      {t("contact.send")} <Send size={17} />
                    </motion.button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <CTASection compact />
      <Footer />
    </main>
  );
}
