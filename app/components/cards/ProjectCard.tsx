import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  tags?: string[];
};

export default function ProjectCard({ slug, name, role, tagline, tags }: Props) {
  return (
    <Link
      href={`/projeler/${slug}`}
      className="group block p-8 border border-luxury rounded-lg transition-all duration-300 hover:border-[var(--accent-gold)] h-full"
      style={{ backgroundColor: "var(--luxury-charcoal)" }}
    >
      <div className="flex items-start justify-between mb-4">
        <span
          className="text-xs tracking-[0.2em] uppercase"
          style={{ color: "var(--accent-gold)" }}
        >
          {role}
        </span>
        <ArrowUpRight
          size={18}
          className="opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ color: "var(--accent-gold)" }}
          aria-hidden="true"
        />
      </div>
      <h3
        className="font-[family-name:var(--font-cormorant)] text-3xl font-light mb-3"
        style={{ color: "var(--text-primary)" }}
      >
        {name}
      </h3>
      <p
        className="text-sm leading-relaxed mb-6"
        style={{ color: "var(--text-secondary)" }}
      >
        {tagline}
      </p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1 rounded-full border"
              style={{
                borderColor: "var(--border-subtle)",
                color: "var(--text-muted)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
