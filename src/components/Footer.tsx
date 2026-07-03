import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const footerLinks = [[t("nav.home"), "/"], [t("nav.process"), "/process"], [t("nav.solutions"), "/solutions"], [t("nav.services"), "/services"], [t("nav.contact"), "/contact"]];
  return (
    <footer className="bg-[#001C24] py-12 text-white">
      <div className="section-shell grid gap-10 border-t border-white/15 pt-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-6 text-white/58">{t("footer.summary")}</p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold" aria-label="Footer navigation">
          {footerLinks.map(([label, to]) => <Link key={to} to={to} className="flex items-center gap-1 hover:text-brand-yellow">{label} <ArrowUpRight size={14} /></Link>)}
        </nav>
      </div>
      <div className="section-shell mt-10 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/45 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Y&amp;Z Global. {t("footer.rights")}</p>
        <p>{t("footer.motto")}</p>
      </div>
    </footer>
  );
}
