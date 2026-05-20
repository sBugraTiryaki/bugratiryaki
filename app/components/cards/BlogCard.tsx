import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Props = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: number;
  tags?: string[];
};

function formatDate(iso: string): string {
  try {
    return new Intl.DateTimeFormat("tr-TR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export default function BlogCard({
  slug,
  title,
  description,
  date,
  readingTime,
  tags,
}: Props) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="group block p-8 border border-luxury rounded-lg transition-all duration-300 hover:border-[var(--accent-gold)] h-full"
      style={{ backgroundColor: "var(--luxury-charcoal)" }}
    >
      <div
        className="flex items-center gap-3 text-xs mb-4"
        style={{ color: "var(--text-muted)" }}
      >
        <time dateTime={date}>{formatDate(date)}</time>
        <span aria-hidden="true">·</span>
        <span>{readingTime} dk okuma</span>
      </div>
      <h3
        className="font-[family-name:var(--font-cormorant)] text-2xl font-light mb-3 leading-tight"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h3>
      <p
        className="text-sm leading-relaxed mb-6"
        style={{ color: "var(--text-secondary)" }}
      >
        {description}
      </p>
      <div className="flex items-center justify-between">
        {tags && tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1"
                style={{
                  color: "var(--text-muted)",
                  borderLeft: "1px solid var(--accent-gold)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        ) : (
          <span />
        )}
        <ArrowUpRight
          size={18}
          className="opacity-60 group-hover:opacity-100 transition-opacity"
          style={{ color: "var(--accent-gold)" }}
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}
