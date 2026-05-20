import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "../seo/JsonLd";

export type BreadcrumbItem = {
  label: string;
  href: string;
};

type Props = {
  items: BreadcrumbItem[];
};

export default function Breadcrumbs({ items }: Props) {
  const schemaItems = items.map((item) => ({
    name: item.label,
    url: `${siteConfig.url}${item.href}`,
  }));

  return (
    <>
      <JsonLd data={breadcrumbSchema(schemaItems)} />
      <nav
        aria-label="Konum yolu"
        className="text-xs tracking-wide"
        style={{ color: "var(--text-muted)" }}
      >
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link
              href="/"
              className="transition-colors hover:text-[var(--accent-gold)]"
            >
              Ana sayfa
            </Link>
          </li>
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                <ChevronRight size={12} aria-hidden="true" />
                {isLast ? (
                  <span
                    aria-current="page"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-[var(--accent-gold)]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
