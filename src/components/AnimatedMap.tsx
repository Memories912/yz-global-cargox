import { motion, useReducedMotion } from "motion/react";
import { MapPin } from "lucide-react";
import { EXPO_OUT, MAP_IMAGE_URL } from "../constants/colors";
import { useLanguage } from "../i18n/LanguageContext";

const routes = [
  "M 420 180 Q 325 70 120 112",
  "M 420 180 Q 495 75 590 105",
  "M 420 180 Q 575 145 725 190",
];

export default function AnimatedMap() {
  const reduced = useReducedMotion();
  const { t } = useLanguage();
  return (
    <div className="relative isolate overflow-hidden rounded-[14px] border border-white/20 bg-brand-dark/40 p-4">
      <img src={MAP_IMAGE_URL} alt={t("hero.route")} loading="lazy" className="h-auto w-full opacity-65" />
      <svg className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)]" viewBox="0 0 760 300" aria-hidden="true">
        {routes.map((route, index) => (
          <motion.path
            key={route}
            d={route}
            fill="none"
            stroke="#FFDA00"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: reduced ? 1 : 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: reduced ? 0.2 : 1.1, delay: 0.45 + index * 0.16, ease: EXPO_OUT }}
          />
        ))}
        {[[420, 180], [120, 112], [590, 105], [725, 190]].map(([cx, cy], index) => (
          <motion.circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="6"
            fill="#FFDA00"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.85 + index * 0.12, ease: EXPO_OUT }}
          />
        ))}
      </svg>
      <div className="absolute bottom-4 left-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-white">
        <MapPin size={16} className="text-brand-yellow" /> {t("hero.route")}
      </div>
    </div>
  );
}
