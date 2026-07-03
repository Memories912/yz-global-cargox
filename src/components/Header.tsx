import { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import MobileMenu from "./MobileMenu";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../i18n/LanguageContext";

const links = [
  ["nav.home", "/"],
  ["nav.process", "/process"],
  ["nav.solutions", "/solutions"],
  ["nav.services", "/services"],
  ["nav.contact", "/contact"],
];

export default function Header({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const textClass = overlay ? "text-white" : "text-brand-dark";

  return (
    <>
      <header className={`${overlay ? "absolute" : "relative bg-white"} left-0 right-0 top-0 z-40`}>
        <div className="section-shell flex h-[88px] items-center justify-between">
          <Logo dark={!overlay} />
          <nav className={`hidden items-center gap-5 text-sm font-semibold lg:flex xl:gap-7 ${textClass}`} aria-label="Main navigation">
            {links.map(([key, to]) => (
              <motion.div key={to} whileHover={{ x: 3 }}>
                <NavLink
                  to={to}
                  className={({ isActive }) => `transition-colors hover:text-brand-yellow ${isActive && to !== "/#services" ? "text-brand-yellow" : ""}`}
                >
                  {t(key)}
                </NavLink>
              </motion.div>
            ))}
            <LanguageSwitcher light={overlay} />
            <NavLink to="/contact" className="rounded-[10px] bg-brand-yellow px-5 py-3 font-bold text-brand-dark transition-transform hover:-translate-y-0.5">
              {t("nav.quote")}
            </NavLink>
          </nav>
          <button onClick={() => setOpen(true)} className={`grid h-12 w-12 place-items-center rounded-full border lg:hidden ${overlay ? "border-white/40 text-white" : "border-brand-dark/20 text-brand-dark"}`} aria-label="Open menu">
            <Menu size={25} />
          </button>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
