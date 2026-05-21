import type { Metadata } from "next";
import { projects } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import { itemListSchema } from "@/lib/schema";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import ProjectCard from "../components/cards/ProjectCard";
import CTASection from "../components/cta/CTASection";
import JsonLd from "../components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Projeler",
  description:
    "Kurucu ortağı olduğum şirketler ve seçilmiş projeler: KolayOnay (KVKK uyumlu çerez yönetim platformu) ve AgencyLambda (sağlık ve hukuk profesyonellerine modern web çözümleri).",
  alternates: { canonical: `${siteConfig.url}/projeler` },
  openGraph: {
    title: "Projeler | Buğra Tiryaki",
    description: "KolayOnay ve AgencyLambda — kurucu ortağı olduğum şirketler.",
    url: `${siteConfig.url}/projeler`,
  },
};

export default function ProjelerPage() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          projects.map((p) => ({
            name: p.name,
            url: `${siteConfig.url}/projeler/${p.slug}`,
          })),
        )}
      />

      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--luxury-black)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <Breadcrumbs items={[{ label: "Projeler", href: "/projeler" }]} />
          </div>
          <h1
            className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Projeler
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            Kurucu ortağı olduğum şirketler ve seçilmiş çalışmalar.
          </p>
        </div>
      </section>

      <section
        className="py-16 md:py-20"
        style={{ backgroundColor: "var(--luxury-dark)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                name={project.name}
                role={project.role}
                tagline={project.tagline}
                tags={project.technologies?.slice(0, 4) ?? []}
              />
            ))}
          </div>
          <p
            className="text-center text-sm mt-12"
            style={{ color: "var(--text-muted)" }}
          >
            Başka SaaS projelerim de yolda. Önümüzdeki aylarda teker teker
            paylaşacağım.
          </p>
        </div>
      </section>

      <CTASection
        title="Benzer bir proje aklınızda mı?"
        description="KolayOnay ve AgencyLambda&apos;da edindiğim deneyimi sizin projenize de taşıyabilirim."
        actions={[
          { label: "İletişime geç", href: "/iletisim", variant: "primary" },
          { label: "Hizmetler", href: "/hizmetler", variant: "secondary" },
        ]}
      />
    </>
  );
}
