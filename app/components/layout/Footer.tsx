import Link from "next/link";
import { Linkedin, Github, Mail, Rss } from "lucide-react";
import { siteConfig } from "@/lib/site";

const siteMap = [
  { href: "/hakkimda", label: "Hakkımda" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/projeler", label: "Projeler" },
  { href: "/blog", label: "Blog" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t"
      style={{
        backgroundColor: "var(--luxury-black)",
        borderColor: "var(--border-subtle)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-12 md:grid-cols-3">
        <div>
          <Link
            href="/"
            className="font-serif text-xl tracking-[0.15em] uppercase font-light"
            style={{ color: "var(--text-primary)" }}
          >
            Buğra Tiryaki
          </Link>
          <p
            className="mt-4 text-sm leading-relaxed max-w-xs"
            style={{ color: "var(--text-muted)" }}
          >
            Bağımsız yazılım geliştirici. KolayOnay ve AgencyLambda kurucu
            ortağı.
          </p>
          <p
            className="mt-4 text-xs"
            style={{ color: "var(--text-muted)" }}
          >
            {siteConfig.location}
          </p>
        </div>

        <nav aria-label="Site haritası">
          <h2
            className="text-xs uppercase tracking-[0.2em] mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            Site Haritası
          </h2>
          <ul className="space-y-3">
            {siteMap.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm transition-colors hover:text-[var(--accent-gold)]"
                  style={{ color: "var(--text-muted)" }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2
            className="text-xs uppercase tracking-[0.2em] mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            Bağlantılar
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm inline-flex items-center gap-2 transition-colors hover:text-[var(--accent-gold)]"
                style={{ color: "var(--text-muted)" }}
              >
                <Linkedin size={16} aria-hidden="true" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm inline-flex items-center gap-2 transition-colors hover:text-[var(--accent-gold)]"
                style={{ color: "var(--text-muted)" }}
              >
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm inline-flex items-center gap-2 transition-colors hover:text-[var(--accent-gold)]"
                style={{ color: "var(--text-muted)" }}
              >
                <Mail size={16} aria-hidden="true" />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <Link
                href="/feed.xml"
                className="text-sm inline-flex items-center gap-2 transition-colors hover:text-[var(--accent-gold)]"
                style={{ color: "var(--text-muted)" }}
              >
                <Rss size={16} aria-hidden="true" />
                RSS
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="border-t"
        style={{ borderColor: "var(--border-subtle)" }}
      >
        <div className="max-w-6xl mx-auto px-6 py-6 text-xs flex flex-col md:flex-row gap-2 md:justify-between">
          <p style={{ color: "var(--text-muted)" }}>
            © {year} Buğra Tiryaki · Bağımsız yazılım geliştirici
          </p>
          <p style={{ color: "var(--text-muted)" }}>
            Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
