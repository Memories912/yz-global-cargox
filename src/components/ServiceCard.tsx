import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { EXPO_OUT } from "../constants/colors";
import type { IconName } from "../constants/content";
import Icon from "./Icon";

export default function ServiceCard({ icon, title, description, index }: { icon: IconName; title: string; description: string; index: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.article
      className="group grid min-h-52 content-between rounded-[12px] border border-brand-dark/12 bg-white p-6 transition-colors hover:bg-[#FFF9CF]"
      initial={{ opacity: reduced ? 1 : 0.72, y: reduced ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ delay: (index % 4) * 0.05, duration: 0.46, ease: EXPO_OUT }}
    >
      <div className="flex items-start justify-between">
        <Icon name={icon} size={25} strokeWidth={1.8} />
        <ArrowUpRight size={18} className="text-brand-dark/35 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-brand-dark/64">{description}</p>
      </div>
    </motion.article>
  );
}
