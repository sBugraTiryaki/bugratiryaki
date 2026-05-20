import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { profilePageSchema } from "@/lib/schema";
import Breadcrumbs from "../components/layout/Breadcrumbs";
import CTASection from "../components/cta/CTASection";
import JsonLd from "../components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Buğra Tiryaki Kimdir?",
  description:
    "Buğra Tiryaki kimdir? Yazılım geliştirici, KolayOnay ve AgencyLambda kurucu ortağı. Yazılım yolculuğu, çalıştığı teknolojiler ve devam eden projeler.",
  alternates: { canonical: `${siteConfig.url}/hakkimda` },
  openGraph: {
    title: "Buğra Tiryaki Kimdir? | Hakkımda",
    description:
      "Yazılım geliştirici, KolayOnay ve AgencyLambda kurucu ortağı. Yazılıma 12 yaşında başladım.",
    url: `${siteConfig.url}/hakkimda`,
    type: "profile",
  },
};

const technologies = [
  "Laravel",
  "PHP",
  "Next.js",
  "React",
  "TypeScript",
  "React Native",
  "PostgreSQL",
  "MySQL",
  "Cloudflare",
  "n8n",
  "Web App Security",
];

export default function HakkimdaPage() {
  return (
    <>
      <JsonLd data={profilePageSchema()} />

      {/* Hero with breadcrumbs */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--luxury-black)" }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <Breadcrumbs items={[{ label: "Hakkımda", href: "/hakkimda" }]} />
          </div>

          <div className="grid md:grid-cols-[1fr_auto] gap-12 items-center">
            <div>
              <span
                className="text-xs tracking-[0.2em] uppercase"
                style={{ color: "var(--accent-gold)" }}
              >
                Yazılım Geliştirici · KolayOnay & AgencyLambda Kurucu Ortağı
              </span>
              <h1
                className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl lg:text-6xl font-light mt-6 mb-8 leading-tight"
                style={{ color: "var(--text-primary)" }}
              >
                Buğra Tiryaki Kimdir?
              </h1>
              <p
                className="text-lg leading-relaxed max-w-2xl"
                style={{ color: "var(--text-secondary)" }}
              >
                Buğra Tiryaki, KolayOnay ve AgencyLambda&apos;nın kurucu
                ortağıyım. Aynı zamanda işletmeler ve girişimciler için bağımsız
                yazılım geliştiriyorum.
              </p>
            </div>
            <div
              className="hidden md:block w-56 h-72 lg:w-72 lg:h-96 rounded-lg overflow-hidden border-luxury relative flex-shrink-0"
              style={{ borderColor: "var(--border-subtle)" }}
            >
              <Image
                src="/hakkimda-portrait.png"
                alt="Buğra Tiryaki portresi"
                fill
                sizes="(max-width: 1024px) 224px, 288px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hikaye */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "var(--luxury-dark)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "var(--accent-gold)" }}
          >
            Hikaye
          </span>
          <h2
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light mt-4 mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            Buraya nasıl geldim
          </h2>

          <div
            className="space-y-6 text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            <p>
              Yazılıma 12 yaşımda başladım. Ortaokulda bilişim dersinde Scratch
              ile oyun yapıyorduk. Bilişim hocam yeteneğim olduğunu fark etti.
              Boş derslerde ve öğle aralarında sınıfa gidip oyunumu
              geliştirmeye devam ettim. Bir süre sonra sınıf arkadaşlarım
              etrafımda toplanıp ne yaptığımı izlemeye başladı.
            </p>
            <p>
              16 yaşıma kadar Python öğrendim. Bu dönemde büyük başarımlarım
              yok — sadece yazılımla aramda mesafe koymamayı bildim. 17
              yaşımda siber güvenliğe yöneldim ve üniversiteye kadar bu alanda
              yoğunlaştım, özellikle web uygulama güvenliği üzerine.
              PortSwigger&apos;ın Web Application Security laboratuvarlarının
              başlangıç setinin tamamını çözdüm. Bugün ürün geliştirirken
              güvenlik tarafını sezgisel görmemin temeli o dönemden geliyor.
            </p>
            <p>
              2023 Haziran&apos;ında YKS&apos;ye girdim ve Eskişehir Osmangazi
              Üniversitesi Matematik ve Bilgisayar Bilimleri&apos;ni kazandım.
              Asıl dönüm noktası 2025 yazında geldi: Oklidis&apos;te 8 haftalık
              staj yaptım. Yazılım tutkumu gerçek bir ürüne çevirmemin
              temellerini orada attım. Ekip içinde baştan sona bir uygulama
              geliştirip teslim etmeyi orada öğrendim. Bugün sahip olduğum
              becerinin temeli o sekiz hafta.
            </p>
            <p>
              Staj sonrası iki iş paralel ilerledi. Bir yandan üç ortak olarak
              KolayOnay&apos;ı kurmaya başladık. Bir yandan da stajda
              tanıştığım bir gayrimenkul firmasına sahibinden.com tarzı özel
              bir platform yazdım. Aynı dönemde üniversiteden iki arkadaşımla
              AgencyLambda&apos;yı kurduk. KolayOnay 6 aydan uzun bir
              geliştirme sürecinin ardından Şubat 2026&apos;da yayına alındı.
            </p>
            <p>
              2026 Ocak&apos;ta üçüncü sınıfın güz dönemi bitmek üzereyken
              üniversiteyi bıraktım. Yaz stajından sonra öğrenmem gerekenleri
              öğrendiğimi, okuldan ek bir şey kazanamayacağımı görmüştüm. 2026
              Eylül&apos;de İstanbul&apos;da bir üniversitede ekonomi okumaya
              başlayacağım — yazılım bilgime finans tarafını eklemek
              istiyorum.
            </p>
          </div>
        </div>
      </section>

      {/* Şu an */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "var(--luxury-black)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "var(--accent-gold)" }}
          >
            Şu an
          </span>
          <h2
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light mt-4 mb-10"
            style={{ color: "var(--text-primary)" }}
          >
            Üzerinde çalıştıklarım
          </h2>

          <ul
            className="space-y-6 text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            <li>
              <strong style={{ color: "var(--text-primary)" }}>
                <Link
                  href="/projeler/kolayonay"
                  className="hover:text-[var(--accent-gold)] transition-colors"
                >
                  KolayOnay
                </Link>
              </strong>{" "}
              — Türkiye&apos;de KVKK uyumlu çerez yönetim platformu. Üç ortak
              olarak kurduk, kurucu ortağıyım.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>
                <Link
                  href="/projeler/agencylambda"
                  className="hover:text-[var(--accent-gold)] transition-colors"
                >
                  AgencyLambda
                </Link>
              </strong>{" "}
              — Sağlık ve hukuk profesyonellerine modern web çözümleri sunan
              dijital ajans.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>
                Bağımsız geliştirme
              </strong>{" "}
              — B2B odaklı işletmeler ve girişimcilerle proje bazlı
              çalışıyorum. Detayları{" "}
              <Link
                href="/hizmetler"
                className="underline underline-offset-4 hover:text-[var(--accent-gold)] transition-colors"
              >
                hizmetler sayfasında
              </Link>{" "}
              bulabilirsiniz.
            </li>
            <li>
              <strong style={{ color: "var(--text-primary)" }}>
                Geliştirme aşamasındaki ürünler
              </strong>{" "}
              — Vakti hazır olmayan birkaç SaaS ürünü daha üzerinde çalışıyorum.
              Önümüzdeki aylarda teker teker yayına alınacaklar.
            </li>
          </ul>
        </div>
      </section>

      {/* Teknolojiler */}
      <section
        className="py-20 md:py-28"
        style={{ backgroundColor: "var(--luxury-dark)" }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "var(--accent-gold)" }}
          >
            Stack
          </span>
          <h2
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light mt-4 mb-8"
            style={{ color: "var(--text-primary)" }}
          >
            Çalıştığım teknolojiler
          </h2>
          <p
            className="mb-8 text-base md:text-lg leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Backend tarafında Laravel&apos;de rahatlıkla uzman olduğumu
            söyleyebilirim. Frontend&apos;de Next.js ve React, mobilde React
            Native kullanıyorum. n8n ile otomasyonlar ve hobi seviyesinde RAG
            chatbot deneyimim var.
          </p>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
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

      <CTASection
        title="Birlikte çalışmak ister misiniz?"
        description="Projenizi anlatın, birlikte değerlendirelim."
        actions={[
          { label: "İletişime geç", href: "/iletisim", variant: "primary" },
          { label: "Hizmetler", href: "/hizmetler", variant: "secondary" },
        ]}
      />
    </>
  );
}
