import { ExternalLink, Check } from "lucide-react";
import type { Project } from "@/lib/projects";
import { projectSchema } from "@/lib/schema";
import Breadcrumbs from "../layout/Breadcrumbs";
import CTASection from "../cta/CTASection";
import JsonLd from "../seo/JsonLd";

type Props = {
  project: Project;
};

export default function ProjectPageTemplate({ project }: Props) {
  return (
    <>
      <JsonLd data={projectSchema(project)} />

      {/* Hero */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--luxury-black)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <Breadcrumbs
              items={[
                { label: "Projeler", href: "/projeler" },
                {
                  label: project.name,
                  href: `/projeler/${project.slug}`,
                },
              ]}
            />
          </div>
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "var(--accent-gold)" }}
          >
            {project.role}
          </span>
          <h1
            className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light mt-6 mb-6 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            {project.name}
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl mb-8"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.tagline}
          </p>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm tracking-wide transition-colors"
            style={{ color: "var(--accent-gold)" }}
          >
            {project.url.replace(/^https?:\/\//, "")}
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Genel bakış */}
      <section
        className="py-20 md:py-24"
        style={{ backgroundColor: "var(--luxury-dark)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light mb-8"
            style={{ color: "var(--text-primary)" }}
          >
            Genel bakış
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {project.overview}
          </p>
        </div>
      </section>

      {/* Problem & Çözüm */}
      <section
        className="py-20 md:py-24"
        style={{ backgroundColor: "var(--luxury-black)" }}
      >
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ color: "var(--accent-gold)" }}
            >
              Problem
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.problem}
            </p>
          </div>
          <div>
            <h2
              className="text-xs tracking-[0.2em] uppercase mb-4"
              style={{ color: "var(--accent-gold)" }}
            >
              Çözüm
            </h2>
            <p
              className="text-base md:text-lg leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {project.solution}
            </p>
          </div>
        </div>
      </section>

      {/* Öne çıkanlar */}
      <section
        className="py-20 md:py-24"
        style={{ backgroundColor: "var(--luxury-dark)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light mb-8"
            style={{ color: "var(--text-primary)" }}
          >
            Öne çıkanlar
          </h2>
          <ul className="space-y-4">
            {project.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-base md:text-lg leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                <Check
                  size={18}
                  className="flex-shrink-0 mt-1.5"
                  style={{ color: "var(--accent-gold)" }}
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {project.technologies && project.technologies.length > 0 && (
        <section
          className="py-16"
          style={{ backgroundColor: "var(--luxury-black)" }}
        >
          <div className="max-w-4xl mx-auto px-6">
            <h2
              className="text-xs tracking-[0.2em] uppercase mb-6"
              style={{ color: "var(--accent-gold)" }}
            >
              Teknolojiler
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
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
      )}

      <CTASection
        title="Benzer bir ürün kurmak ister misiniz?"
        description="Bu projede edindiğim deneyimi sizin projenize de taşıyabilirim."
        actions={[
          { label: "İletişime geç", href: "/iletisim", variant: "primary" },
          { label: "Hizmetler", href: "/hizmetler", variant: "secondary" },
        ]}
      />
    </>
  );
}
