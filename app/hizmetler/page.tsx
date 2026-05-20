import type { Metadata } from "next";
import { Globe, Smartphone, Rocket, Briefcase, Cloud } from "lucide-react";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { itemListSchema } from "@/lib/schema";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import ServiceCard from "../components/cards/ServiceCard";
import CTASection from "../components/cta/CTASection";
import JsonLd from "../components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Hizmetler",
  description:
    "Web uygulaması, mobil uygulama, MVP, SaaS ve işletmeye özel yazılım geliştirme hizmetleri. B2B odaklı bağımsız yazılım geliştirici.",
  alternates: { canonical: `${siteConfig.url}/hizmetler` },
  openGraph: {
    title: "Hizmetler | Buğra Tiryaki",
    description:
      "İşletmeler ve girişimciler için uçtan uca web, mobil ve SaaS yazılım geliştirme.",
    url: `${siteConfig.url}/hizmetler`,
  },
};

const serviceIcons = {
  "web-uygulamasi": Globe,
  "mobil-uygulama": Smartphone,
  "mvp-gelistirme": Rocket,
  "isletme-yazilimi": Briefcase,
  "saas-gelistirme": Cloud,
} as const;

const sharedProcess = [
  {
    title: "Keşif",
    description:
      "İhtiyacınızı, mevcut süreçlerinizi ve hedeflerinizi anlıyoruz. Sonunda net bir kapsam dokümanımız oluyor.",
  },
  {
    title: "Tasarım",
    description:
      "Mimariyi, veri modelini, kullanıcı akışlarını ve teknoloji seçimini birlikte netleştiriyoruz. Her şey açık şekilde ilerliyor.",
  },
  {
    title: "Geliştirme",
    description:
      "Her hafta size çalışan bir parça gösteriyorum. Hangi aşamada olduğumuzu birlikte görüyoruz.",
  },
  {
    title: "Canlıya alma",
    description:
      "Yayına alıyoruz. Ekibiniz kullanmaya başlayana kadar yanınızdayım. Sonrası için bakım anlaşması yapabiliyoruz.",
  },
];

const overviewFaqs = [
  {
    soru: "Hangi tür projelere bakıyorsunuz?",
    cevap:
      "B2B odaklı çalışıyorum. İşletmelere özel yazılım, girişimciler için MVP ve SaaS projelerine bakıyorum. B2C projeleri çoğunlukla almıyorum.",
  },
  {
    soru: "Bir alt bütçe sınırınız var mı?",
    cevap:
      "Sabit bir alt sınır koymuyorum. Önce ihtiyacı konuşuyoruz, sonra kapsama göre fiyat çıkarıyorum.",
  },
  {
    soru: "Uzaktan mı çalışıyorsunuz?",
    cevap:
      "Evet, uzaktan çalışıyorum. İstanbul içinde yüz yüze görüşmelere de açığım.",
  },
  {
    soru: "Mevcut ekibimle çalışabilir misiniz?",
    cevap:
      "Evet. Hem yalnız çalışıyorum, hem de mevcut ekibinize katılarak çalışabiliyorum. İki yöntem de işliyor.",
  },
];

export default function HizmetlerPage() {
  return (
    <>
      <JsonLd
        data={itemListSchema(
          services.map((s) => ({
            name: s.name,
            url: `${siteConfig.url}/hizmetler/${s.slug}`,
          })),
        )}
      />

      {/* Hero */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--luxury-black)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <div className="mb-10">
            <Breadcrumbs items={[{ label: "Hizmetler", href: "/hizmetler" }]} />
          </div>
          <h1
            className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight"
            style={{ color: "var(--text-primary)" }}
          >
            Hizmetler
          </h1>
          <p
            className="text-lg leading-relaxed max-w-2xl"
            style={{ color: "var(--text-secondary)" }}
          >
            İşletmelere ve girişimcilere yazılım yapıyorum. Backend&apos;de
            Laravel, frontend&apos;de Next.js ve React, mobilde React Native
            kullanıyorum. B2B&apos;ye odaklanıyorum.
          </p>
        </div>
      </section>

      {/* Hizmet kartları */}
      <section
        className="py-20 md:py-24"
        style={{ backgroundColor: "var(--luxury-dark)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* Nasıl çalışıyorum */}
      <section
        className="py-20 md:py-24"
        style={{ backgroundColor: "var(--luxury-black)" }}
      >
        <div className="max-w-4xl mx-auto px-6">
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "var(--accent-gold)" }}
          >
            Süreç
          </span>
          <h2
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light mt-4 mb-12"
            style={{ color: "var(--text-primary)" }}
          >
            Nasıl çalışıyorum
          </h2>
          <ol className="space-y-8">
            {sharedProcess.map((step, i) => (
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
            {overviewFaqs.map((faq) => (
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
        description="İhtiyacınızı dinleyip size uygun çözümü birlikte bulalım."
        actions={[
          { label: "İletişime geç", href: "/iletisim", variant: "primary" },
          { label: "Hakkımda", href: "/hakkimda", variant: "secondary" },
        ]}
      />
    </>
  );
}
