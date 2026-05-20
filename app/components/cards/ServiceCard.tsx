import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Props = {
  slug: string;
  name: string;
  description: string;
  icon: LucideIcon;
};

export default function ServiceCard({ slug, name, description, icon: Icon }: Props) {
  return (
    <Link
      href={`/hizmetler/${slug}`}
      className="group block p-8 border border-luxury rounded-lg transition-all duration-300 hover:border-[var(--accent-gold)] h-full"
      style={{ backgroundColor: "var(--luxury-charcoal)" }}
    >
      <div className="flex items-start justify-between mb-6">
        <Icon
          size={24}
          style={{ color: "var(--accent-gold)" }}
          aria-hidden="true"
        />
        <ArrowUpRight
          size={18}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ color: "var(--accent-gold)" }}
          aria-hidden="true"
        />
      </div>
      <h3
        className="font-[family-name:var(--font-cormorant)] text-2xl font-light mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        {name}
      </h3>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </p>
    </Link>
  );
}
