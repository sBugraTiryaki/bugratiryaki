import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Serenity Heights",
    subtitle: "Ultra-luxury real estate experience",
    description:
      "Designed and deployed in a single afternoon. Dark elegance. Smooth animations. Mobile-perfect. This is the standard you'll learn to achieve.",
    url: "https://serenity.bugratiryaki.com",
    image: "/portfolio/serenity.jpg",
    stats: "Built in 4 hours",
  },
];

export default function Portfolio() {
  return (
    <section
      id="work"
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--luxury-black)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <div className="text-center mb-16">
          <span
            className="text-xs tracking-[0.2em] uppercase font-medium"
            style={{ color: "var(--accent-gold)" }}
          >
            Recent Work
          </span>
          <h2
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl font-light mt-4"
            style={{ color: "var(--text-primary)" }}
          >
            The Work Speaks
          </h2>
        </div>

        {/* Projects */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div key={index} className="group">
              {/* Project Image */}
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-lg border-luxury mb-8 transition-all duration-500 hover:border-hover"
                style={{ backgroundColor: "var(--luxury-charcoal)" }}
              >
                <div className="aspect-video relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 1200px"
                  />
                  {/* Hover overlay - hidden on mobile, visible on hover for desktop */}
                  <div className="absolute inset-0 bg-black/20 md:bg-black/0 md:group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span
                      className="opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 text-sm md:text-base rounded border cta-gold-outline"
                    >
                      View Live Site
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </a>

              {/* Project Info */}
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-12 h-px"
                    style={{ backgroundColor: "var(--accent-gold)" }}
                  />
                  <span
                    className="text-sm tracking-wide"
                    style={{ color: "var(--accent-gold)" }}
                  >
                    {project.stats}
                  </span>
                </div>

                <h3
                  className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl font-light mb-2"
                  style={{ color: "var(--text-primary)" }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-lg mb-4"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {project.subtitle}
                </p>

                <p style={{ color: "var(--text-muted)" }}>
                  {project.description}
                </p>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 text-sm font-medium tracking-wide transition-colors duration-300 hover:gap-3"
                  style={{ color: "var(--accent-gold)" }}
                >
                  View Live Site
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Note */}
        <p
          className="text-center mt-16 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          More projects coming soon.
        </p>
      </div>
    </section>
  );
}
