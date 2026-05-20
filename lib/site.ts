export const siteConfig = {
  name: "Buğra Tiryaki",
  title: "Buğra Tiryaki | Yazılım Geliştirici & Kurucu Ortak",
  description:
    "KolayOnay ve AgencyLambda kurucu ortağı. İşletmeler ve girişimciler için bağımsız yazılım geliştirme.",
  url: "https://bugratiryaki.com",
  email: "sbugratiryaki@gmail.com",
  location: "İstanbul / Uzaktan",
  social: {
    linkedin: "https://www.linkedin.com/in/bugratiryaki",
    github: "https://github.com/sBugraTiryaki",
  },
  companies: {
    kolayonay: {
      name: "KolayOnay",
      url: "https://kolayonay.com.tr",
      role: "Kurucu Ortak",
      description: "KVKK ve GDPR uyumlu çerez yönetim platformu.",
    },
    agencylambda: {
      name: "AgencyLambda",
      url: "https://agencylambda.com",
      role: "Kurucu Ortak",
      description:
        "Sağlık ve hukuk profesyonelleri için modern web çözümleri sunan dijital ajans.",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
