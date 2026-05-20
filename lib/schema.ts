import { siteConfig } from "./site";
import type { Service } from "./services";
import type { Project } from "./projects";
import type { PostMeta } from "./blog";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Buğra Tiryaki",
    givenName: "Buğra",
    familyName: "Tiryaki",
    url: siteConfig.url,
    image: `${siteConfig.url}/profile-large.jpg`,
    jobTitle: "Yazılım Geliştirici, Kurucu Ortak",
    description: siteConfig.description,
    email: `mailto:${siteConfig.email}`,
    sameAs: [siteConfig.social.linkedin, siteConfig.social.github],
    knowsAbout: [
      "Laravel",
      "PHP",
      "Next.js",
      "React",
      "React Native",
      "TypeScript",
      "PostgreSQL",
      "MySQL",
      "Cloudflare",
      "Web Application Security",
      "SaaS Development",
      "MVP Development",
    ],
    knowsLanguage: [
      { "@type": "Language", name: "Turkish", alternateName: "tr" },
      { "@type": "Language", name: "English", alternateName: "en" },
    ],
    nationality: { "@type": "Country", name: "Turkey" },
    worksFor: [
      {
        "@type": "Organization",
        name: siteConfig.companies.kolayonay.name,
        url: siteConfig.companies.kolayonay.url,
      },
      {
        "@type": "Organization",
        name: siteConfig.companies.agencylambda.name,
        url: siteConfig.companies.agencylambda.url,
      },
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Eskişehir Osmangazi Üniversitesi",
      department: "Matematik ve Bilgisayar Bilimleri",
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "tr",
    author: { "@type": "Person", name: "Buğra Tiryaki" },
  };
}

export function professionalServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    url: siteConfig.url,
    image: `${siteConfig.url}/profile-large.jpg`,
    description: siteConfig.description,
    areaServed: { "@type": "Country", name: "Turkey" },
    serviceType: [
      "Yazılım Geliştirme",
      "Web Uygulaması Geliştirme",
      "Mobil Uygulama Geliştirme",
      "MVP Geliştirme",
      "SaaS Geliştirme",
      "İşletmeye Özel Yazılım",
    ],
    provider: { "@type": "Person", name: "Buğra Tiryaki" },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function faqSchema(items: { soru: string; cevap: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((q) => ({
      "@type": "Question",
      name: q.soru,
      acceptedAnswer: {
        "@type": "Answer",
        text: q.cevap,
      },
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.shortDescription,
    url: `${siteConfig.url}/hizmetler/${service.slug}`,
    provider: { "@type": "Person", name: "Buğra Tiryaki", url: siteConfig.url },
    areaServed: { "@type": "Country", name: "Turkey" },
    serviceType: service.name,
  };
}

export function projectSchema(project: Project) {
  if (project.schemaType === "SoftwareApplication") {
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: project.name,
      description: project.overview,
      url: project.url,
      applicationCategory: project.applicationCategory ?? "BusinessApplication",
      operatingSystem: "Web",
      offers: { "@type": "Offer", priceCurrency: "TRY" },
      creator: { "@type": "Person", name: "Buğra Tiryaki", url: siteConfig.url },
    };
  }
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: project.name,
    description: project.overview,
    url: project.url,
    founder: { "@type": "Person", name: "Buğra Tiryaki", url: siteConfig.url },
  };
}

export function blogPostingSchema(post: PostMeta) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedDate ?? post.date,
    author: {
      "@type": "Person",
      name: post.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: "Buğra Tiryaki",
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
  };
}

export function blogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Buğra Tiryaki — Blog",
    url: `${siteConfig.url}/blog`,
    inLanguage: "tr",
    author: { "@type": "Person", name: "Buğra Tiryaki" },
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "İletişim",
    url: `${siteConfig.url}/iletisim`,
    inLanguage: "tr",
  };
}

export function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: personSchema(),
    inLanguage: "tr",
  };
}

export function itemListSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}
