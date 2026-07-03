import { Link } from "react-router-dom";

export default function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link to="/" aria-label="Y&Z Global home" className="inline-flex flex-col font-display text-[2rem] font-extrabold uppercase leading-[0.78] tracking-[-0.01em]">
      <span className={dark ? "text-brand-dark" : "text-white"}>Y&amp;Z</span>
      <span className="text-brand-yellow">Global</span>
    </Link>
  );
}
