import type { Metadata } from "next";
import { Mail, Linkedin, MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { contactPageSchema } from "@/lib/schema";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import JsonLd from "../components/seo/JsonLd";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Projenizi anlatın, 1 iş günü içinde dönüş yapayım. B2B projelere odaklanıyorum. E-posta ve LinkedIn üzerinden ulaşabilirsiniz.",
  alternates: { canonical: `${siteConfig.url}/iletisim` },
  openGraph: {
    title: "İletişim | Buğra Tiryaki",
    description: "Projenizi anlatın, 1 iş günü içinde dönüş yapayım.",
    url: `${siteConfig.url}/iletisim`,
  },
};

const mailtoHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
  "Proje Görüşmesi",
)}`;

export default function IletisimPage() {
  return (
    <>
      <JsonLd data={contactPageSchema()} />

      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--luxury-black)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-10">
            <Breadcrumbs items={[{ label: "İletişim", href: "/iletisim" }]} />
          </div>
          <h1
            className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            İletişim
          </h1>
          <p
            className="text-lg leading-relaxed mb-4"
            style={{ color: "var(--text-secondary)" }}
          >
            Projenizi anlatın, 1 iş günü içinde dönüş yapayım. B2B projelere
            odaklanıyorum.
          </p>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            E-posta veya LinkedIn üzerinden ulaşabilirsiniz.
          </p>
        </div>
      </section>

      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--luxury-dark)" }}
      >
        <div className="max-w-3xl mx-auto px-6 space-y-4">
          <a
            href={mailtoHref}
            className="group flex items-center justify-between gap-4 p-6 md:p-8 border-luxury rounded-lg transition-all duration-300 hover:border-[var(--accent-gold)]"
            style={{ backgroundColor: "var(--luxury-charcoal)" }}
          >
            <div className="flex items-center gap-5">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(201, 169, 98, 0.1)" }}
              >
                <Mail
                  size={20}
                  style={{ color: "var(--accent-gold)" }}
                  aria-hidden="true"
                />
              </div>
              <div>
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-1"
                  style={{ color: "var(--accent-gold)" }}
                >
                  E-posta
                </p>
                <p
                  className="text-base md:text-lg font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  {siteConfig.email}
                </p>
              </div>
            </div>
            <span
              className="hidden sm:block text-xs tracking-wide opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ color: "var(--accent-gold)" }}
            >
              Yaz →
            </span>
          </a>

          <a
            href={siteConfig.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 p-6 md:p-8 border-luxury rounded-lg transition-all duration-300 hover:border-[var(--accent-gold)]"
            style={{ backgroundColor: "var(--luxury-charcoal)" }}
          >
            <div className="flex items-center gap-5">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "rgba(201, 169, 98, 0.1)" }}
              >
                <Linkedin
                  size={20}
                  style={{ color: "var(--accent-gold)" }}
                  aria-hidden="true"
                />
              </div>
              <div>
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-1"
                  style={{ color: "var(--accent-gold)" }}
                >
                  LinkedIn
                </p>
                <p
                  className="text-base md:text-lg font-medium"
                  style={{ color: "var(--text-primary)" }}
                >
                  /in/bugratiryaki
                </p>
              </div>
            </div>
            <span
              className="hidden sm:block text-xs tracking-wide opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ color: "var(--accent-gold)" }}
            >
              Bağlan →
            </span>
          </a>

          <div
            className="flex items-center gap-5 p-6 md:p-8 border-luxury rounded-lg"
            style={{ backgroundColor: "var(--luxury-charcoal)" }}
          >
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(201, 169, 98, 0.1)" }}
            >
              <MapPin
                size={20}
                style={{ color: "var(--accent-gold)" }}
                aria-hidden="true"
              />
            </div>
            <div>
              <p
                className="text-xs tracking-[0.2em] uppercase mb-1"
                style={{ color: "var(--accent-gold)" }}
              >
                Konum
              </p>
              <p
                className="text-base md:text-lg font-medium"
                style={{ color: "var(--text-primary)" }}
              >
                {siteConfig.location}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
