import { Check } from "lucide-react";
import type { Service } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { getProjectBySlug } from "@/lib/projects";
import Breadcrumbs from "../layout/Breadcrumbs";
import CTASection from "../cta/CTASection";
import ProjectCard from "../cards/ProjectCard";
import JsonLd from "../seo/JsonLd";

type Props = {
  service: Service;
};

export default function ServicePageTemplate({ service }: Props) {
  const relatedProjects = service.relatedProjectSlugs
    .map((slug) => getProjectBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd data={faqSchema(service.faqs)} />

      {/* Hero with breadcrumbs */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--luxury-black)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <Breadcrumbs
              items={[
                { label: "Hizmetler", href: "/hizmetler" },
                {
                  label: service.name,
                  href: `/hizmetler/${service.slug}`,
                },
              ]}
            />
          </div>
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "var(--accent-gold)" }}
          >
            Hizmet
          </span>
          <h1
            className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light mt-6 mb-8 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {service.name}
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            {service.problemStatement}
          </p>
          <p
            className="text-sm mt-4"
            style={{ color: "var(--text-muted)" }}
          >
            B2B odaklı çalışıyorum.
          </p>
        </div>
      </section>

      {/* Kimler için + Ne dahil */}
      <section
        className="py-20 md:py-24"
        style={{ backgroundColor: "var(--luxury-dark)" }}
      >
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2
              className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-light mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Kimler için
            </h2>
            <ul className="space-y-3">
              {service.forWhom.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Check
                    size={18}
                    className="flex-shrink-0 mt-1"
                    style={{ color: "var(--accent-gold)" }}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2
              className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-light mb-6"
              style={{ color: "var(--text-primary)" }}
            >
              Ne dahil
            </h2>
            <ul className="space-y-3">
              {service.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  <Check
                    size={18}
                    className="flex-shrink-0 mt-1"
                    style={{ color: "var(--accent-gold)" }}
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Çalışma şekli */}
      <section
        className="py-20 md:py-24"
        style={{ backgroundColor: "var(--luxury-black)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Çalışma şekli
          </h2>
          <ol className="space-y-8">
            {service.process.map((step, i) => (
              <li key={step.title} className="flex gap-6">
                <span
                  className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light leading-none flex-shrink-0 w-12"
                  style={{ color: "var(--accent-gold)" }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3
                    className="text-lg font-medium mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Teknolojiler */}
      <section
        className="py-16"
        style={{ backgroundColor: "var(--luxury-dark)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2
            className="text-xs tracking-[0.2em] uppercase mb-6"
            style={{ color: "var(--accent-gold)" }}
          >
            Teknolojiler
          </h2>
          <div className="flex flex-wrap gap-3">
            {service.technologies.map((tech) => (
              <span
                key={tech}
                className="text-sm px-4 py-2 border rounded-full"
                style={{
                  borderColor: "var(--border-subtle)",
                  color: "var(--text-secondary)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* İlgili projeler */}
      {relatedProjects.length > 0 && (
        <section
          className="py-20 md:py-24"
          style={{ backgroundColor: "var(--luxury-black)" }}
        >
          <div className="max-w-6xl mx-auto px-6">
            <h2
              className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light mb-12"
              style={{ color: "var(--text-primary)" }}
            >
              İlgili projeler
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedProjects.map((project) => (
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
          </div>
        </section>
      )}

      {/* SSS */}
      <section
        className="py-20 md:py-24"
        style={{ backgroundColor: "var(--luxury-dark)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Sıkça sorulan sorular
          </h2>
          <div className="space-y-8">
            {service.faqs.map((faq) => (
              <div key={faq.soru}>
                <h3
                  className="text-lg font-medium mb-3"
                  style={{ color: "var(--text-primary)" }}
                >
                  {faq.soru}
                </h3>
                <p
                  className="text-base leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {faq.cevap}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Projenizi konuşalım"
        description={`${service.name} konusunda nasıl yardımcı olabileceğimi konuşalım.`}
        actions={[
          { label: "İletişime geç", href: "/iletisim", variant: "primary" },
          { label: "Tüm hizmetler", href: "/hizmetler", variant: "secondary" },
        ]}
      />

      {/* Hidden link to siteConfig for SSR keep */}
      <span className="sr-only">{siteConfig.name}</span>
    </>
  );
}
