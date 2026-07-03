import { motion } from "motion/react";
import { languages, useLanguage } from "../i18n/LanguageContext";

export default function LanguageSwitcher({ light = false, mobile = false }: { light?: boolean; mobile?: boolean }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div className={`flex items-center ${mobile ? "rounded-[12px] border border-white/30 p-1" : "rounded-[10px] border p-1"} ${light || mobile ? "border-white/30 bg-white/8" : "border-brand-dark/15 bg-brand-light"}`} aria-label="Language selector">
      {languages.map((language) => {
        const selected = locale === language.code;
        return (
          <motion.button
            key={language.code}
            type="button"
            title={language.label}
            aria-label={`Switch language to ${language.label}`}
            aria-pressed={selected}
            onClick={() => setLocale(language.code)}
            className={`grid h-8 min-w-8 place-items-center rounded-[7px] px-1.5 text-[11px] font-bold transition-colors ${selected ? "bg-brand-yellow text-brand-dark" : light || mobile ? "text-white hover:bg-white/10" : "text-brand-dark/70 hover:bg-white"}`}
            whileTap={{ scale: 0.94 }}
          >
            {language.short}
          </motion.button>
        );
      })}
    </div>
  );
}
