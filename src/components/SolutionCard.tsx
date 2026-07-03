import { motion, useReducedMotion } from "motion/react";
import { EXPO_OUT } from "../constants/colors";
import type { IconName } from "../constants/content";
import Icon from "./Icon";
import { useLanguage } from "../i18n/LanguageContext";

export default function SolutionCard({ icon, title, pain, solution, index = 0 }: { icon: IconName; title: string; pain: string; solution: string; index?: number }) {
  const reduced = useReducedMotion();
  const { t } = useLanguage();
  return (
    <motion.article
      className="group relative overflow-hidden rounded-[14px] border border-brand-dark/12 bg-white p-6 md:p-7"
      initial={{ opacity: reduced ? 1 : 0.72, y: reduced ? 0 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: (index % 3) * 0.07, duration: 0.52, ease: EXPO_OUT }}
      whileHover={reduced ? undefined : { y: -5 }}
    >
      <motion.div className="absolute inset-x-0 top-0 h-1 origin-left bg-brand-yellow" initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} />
      <div className="mb-8 flex items-center justify-between">
        <Icon name={icon} size={27} strokeWidth={1.8} />
        <span className="font-display text-2xl text-brand-dark/28">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <h3 className="text-xl font-bold tracking-[-0.02em]">{title}</h3>
      <div className="mt-6 grid gap-5 border-t border-brand-dark/10 pt-5">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-dark/52">{t("card.pain")}</p>
          <p className="mt-2 text-sm leading-6 text-brand-dark/68">{pain}</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand-dark">{t("card.solution")}</p>
          <p className="mt-2 text-sm font-medium leading-6 text-brand-dark">{solution}</p>
        </div>
      </div>
    </motion.article>
  );
}
