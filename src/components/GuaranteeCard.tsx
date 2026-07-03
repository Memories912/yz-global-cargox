import { Check } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { EXPO_OUT } from "../constants/colors";

export default function GuaranteeCard({ title, description, index }: { title: string; description: string; index: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.article
      className="flex gap-4 border-t border-white/16 py-6"
      initial={{ opacity: reduced ? 1 : 0.72, x: reduced ? 0 : -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay: (index % 4) * 0.06, duration: 0.46, ease: EXPO_OUT }}
    >
      <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-yellow text-brand-dark"><Check size={17} strokeWidth={3} /></span>
      <div>
        <h3 className="font-bold text-white">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/64">{description}</p>
      </div>
    </motion.article>
  );
}
