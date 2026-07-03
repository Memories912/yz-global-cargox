import { useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { EXPO_OUT } from "../constants/colors";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../i18n/LanguageContext";

const links = [
  ["nav.home", "/"],
  ["nav.process", "/process"],
  ["nav.solutions", "/solutions"],
  ["nav.services", "/services"],
  ["nav.contact", "/contact"],
];

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, locale } = useLanguage();
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex min-h-dvh flex-col bg-brand-blue px-6 py-6 text-white"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.42, ease: EXPO_OUT }}
        >
          <div className="flex items-start justify-between">
            <Logo />
            <button onClick={onClose} className="grid h-12 w-12 place-items-center rounded-full border border-white/40" aria-label="Close menu">
              <X size={25} />
            </button>
          </div>
          <nav className="my-auto flex flex-col items-center gap-3" aria-label="Mobile navigation">
            {links.map(([key, to], index) => (
              <motion.div key={to} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.07 * index, ease: EXPO_OUT }}>
                <NavLink
                  onClick={onClose}
                  to={to}
                  className={`${locale === "en" ? "font-display text-[clamp(3.2rem,15vw,5rem)] uppercase leading-[0.9]" : "font-sans text-[clamp(2rem,9.5vw,3.1rem)] font-bold leading-[1.12]"} hover:text-brand-yellow`}
                >
                  {t(key)}
                </NavLink>
              </motion.div>
            ))}
          </nav>
          <div className="flex flex-col items-center gap-4">
            <LanguageSwitcher mobile />
            <p className="text-center text-sm text-white/75">{t("mobile.tagline")}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
