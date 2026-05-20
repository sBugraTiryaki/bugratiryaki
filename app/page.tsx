import Link from "next/link";
import { Globe, Smartphone, Rocket, Briefcase, Cloud } from "lucide-react";
import { services } from "@/lib/services";
import { projects } from "@/lib/projects";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";
import { itemListSchema } from "@/lib/schema";
import ServiceCard from "./components/cards/ServiceCard";
import ProjectCard from "./components/cards/ProjectCard";
import BlogCard from "./components/cards/BlogCard";
import CTASection from "./components/cta/CTASection";
import JsonLd from "./components/seo/JsonLd";

const serviceIcons = {
  "web-uygulamasi": Globe,
  "mobil-uygulama": Smartphone,
  "mvp-gelistirme": Rocket,
  "isletme-yazilimi": Briefcase,
  "saas-gelistirme": Cloud,
} as const;

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3);
  const servicesItemList = itemListSchema(
    services.map((s) => ({
      name: s.name,
      url: `${siteConfig.url}/hizmetler/${s.slug}`,
    })),
  );

  return (
    <>
      <JsonLd data={servicesItemList} />

      {/* Hero */}
      <section
        className="min-h-[70vh] md:min-h-[80vh] flex flex-col items-center justify-center text-center px-5 py-16 md:py-24"
        style={{ backgroundColor: "var(--luxury-black)" }}
      >
        <div className="max-w-3xl">
          <span
            className="text-[11px] sm:text-xs tracking-[0.25em] uppercase animate-fade-in"
            style={{ color: "var(--accent-gold)" }}
          >
            Yazılım Geliştirici · İstanbul
          </span>
          <h1
            className="font-[family-name:var(--font-cormorant)] text-[2.25rem] leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl font-light mt-6 animate-fade-in-up"
            style={{ color: "var(--text-primary)" }}
          >
            Yazılım fikriniz var mı?
            <br />
            <span style={{ color: "var(--accent-gold)" }}>
              Birlikte yapalım.
            </span>
          </h1>
          <p
            className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl leading-relaxed animate-fade-in-up animation-delay-300 px-2"
            style={{ color: "var(--text-secondary)" }}
          >
            İşletmelere ve girişimcilere özel yazılım yapıyorum. Web siteler,
            mobil uygulamalar, SaaS ürünler — hepsi.
          </p>
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-up animation-delay-600">
            <Link
              href="/hakkimda"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm tracking-wide transition-all duration-300 w-full sm:w-auto"
              style={{
                backgroundColor: "var(--accent-gold)",
                color: "var(--luxury-black)",
              }}
            >
              Hakkımda
            </Link>
            <Link
              href="/hizmetler"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm tracking-wide border transition-all duration-300 w-full sm:w-auto"
              style={{
                borderColor: "var(--accent-gold)",
                color: "var(--accent-gold)",
              }}
            >
              Hizmetler
            </Link>
          </div>
        </div>
      </section>

      {/* Kısa pozisyon */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--luxury-dark)" }}
      >
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-10 md:gap-12">
            <div>
              <h2
                className="text-[11px] sm:text-xs tracking-[0.2em] uppercase mb-3 md:mb-4"
                style={{ color: "var(--accent-gold)" }}
              >
                Ne yapıyorum
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                İşletmenize ya da girişiminize özel yazılım yazıyorum. Hazır
                yazılımların yetmediği yerden devreye giriyorum.
              </p>
            </div>
            <div>
              <h2
                className="text-[11px] sm:text-xs tracking-[0.2em] uppercase mb-3 md:mb-4"
                style={{ color: "var(--accent-gold)" }}
              >
                Kimin için
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                İşletmesine özel yazılım isteyenler. Aklındaki fikri hayata
                geçirmek isteyen girişimciler. B2B ürün kuranlar.
              </p>
            </div>
            <div>
              <h2
                className="text-[11px] sm:text-xs tracking-[0.2em] uppercase mb-3 md:mb-4"
                style={{ color: "var(--accent-gold)" }}
              >
                Nasıl çalışıyorum
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                Az iş alırım, hepsine vakit ayırırım. Takvim net, iletişim
                açık. Sonradan sürpriz çıkmaz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hizmetler özeti */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--luxury-black)" }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-10 md:mb-14">
            <span
              className="text-[11px] sm:text-xs tracking-[0.2em] uppercase"
              style={{ color: "var(--accent-gold)" }}
            >
              Hizmetler
            </span>
            <h2
              className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl md:text-5xl font-light mt-3 md:mt-4"
              style={{ color: "var(--text-primary)" }}
            >
              Ne geliştiriyorum
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.slug}
                slug={service.slug}
                name={service.name}
                description={service.shortDescription}
                icon={serviceIcons[service.slug as keyof typeof serviceIcons]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Seçilmiş projeler */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--luxury-dark)" }}
      >
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-10 md:mb-14">
            <span
              className="text-[11px] sm:text-xs tracking-[0.2em] uppercase"
              style={{ color: "var(--accent-gold)" }}
            >
              Kurucu ortağı olduğum şirketler
            </span>
            <h2
              className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl md:text-5xl font-light mt-3 md:mt-4"
              style={{ color: "var(--text-primary)" }}
            >
              Projelerim
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                name={project.name}
                role={project.role}
                tagline={project.tagline}
                tags={project.technologies.slice(0, 4)}
              />
            ))}
          </div>
          <p
            className="text-center text-sm mt-8 md:mt-10 px-4"
            style={{ color: "var(--text-muted)" }}
          >
            Başka SaaS projelerim de yolda. Yakında paylaşacağım.
          </p>
        </div>
      </section>

      {/* Son yazılar */}
      {latestPosts.length > 0 && (
        <section
          className="py-16 md:py-24"
          style={{ backgroundColor: "var(--luxury-black)" }}
        >
          <div className="max-w-6xl mx-auto px-5">
            <div className="flex items-end justify-between mb-8 md:mb-12 flex-wrap gap-4">
              <div>
                <span
                  className="text-[11px] sm:text-xs tracking-[0.2em] uppercase"
                  style={{ color: "var(--accent-gold)" }}
                >
                  Yazılar
                </span>
                <h2
                  className="font-[family-name:var(--font-cormorant)] text-3xl sm:text-4xl font-light mt-3 md:mt-4"
                  style={{ color: "var(--text-primary)" }}
                >
                  Son yazılar
                </h2>
              </div>
              <Link
                href="/blog"
                className="text-sm tracking-wide transition-colors hover:text-[var(--accent-gold)]"
                style={{ color: "var(--text-secondary)" }}
              >
                Tümünü gör →
              </Link>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {latestPosts.map((post) => (
                <BlogCard
                  key={post.slug}
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  date={post.date}
                  readingTime={post.readingTime}
                  tags={post.tags}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Yumuşak kapanış CTA */}
      <CTASection
        eyebrow="Tanışalım"
        title="Beni daha yakından tanıyın"
        description="Yazılım yolculuğumu, nasıl çalıştığımı ve devam eden projelerimi göreceksiniz."
        actions={[
          { label: "Hakkımda", href: "/hakkimda", variant: "primary" },
          { label: "İletişim", href: "/iletisim", variant: "secondary" },
        ]}
      />
    </>
  );
}
