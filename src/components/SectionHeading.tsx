import { motion, useReducedMotion } from "motion/react";
import { EXPO_OUT } from "../constants/colors";

export default function SectionHeading({ title, subtitle, light = false }: { title: string; subtitle: string; light?: boolean }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: reduced ? 1 : 0.72, y: reduced ? 0 : 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.62, ease: EXPO_OUT }}
      className="mb-12 md:mb-16"
    >
      <h2 className={`display-title font-display uppercase ${light ? "text-white" : "text-brand-dark"}`}>{title}</h2>
      <p className={`body-copy mt-5 text-lg leading-8 ${light ? "text-white/70" : "text-brand-dark/68"}`}>{subtitle}</p>
    </motion.div>
  );
}
