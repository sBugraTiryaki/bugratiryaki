export type Project = {
  slug: string;
  name: string;
  role: string;
  tagline: string;
  url: string;
  overview: string;
  problem: string;
  solution: string;
  technologies: string[];
  highlights: string[];
  schemaType: "SoftwareApplication" | "Organization";
  applicationCategory?: string;
};

export const projects: Project[] = [
  {
    slug: "kolayonay",
    name: "KolayOnay",
    role: "Kurucu Ortak",
    tagline: "KVKK ve GDPR uyumlu çerez yönetim platformu",
    url: "https://kolayonay.com.tr",
    overview:
      "KolayOnay, Türkiye'de KVKK uyumlu çerez yönetimi sunan bir SaaS platformu. Üç kurucu ortak olarak 6 aydan uzun süre çalıştık, ürünü Şubat 2026'da yayına aldık.",
    problem:
      "KVKK ve GDPR uyumu, Türkiye'deki her web sitesi için bir zorunluluk. Mevcut çözümlerin çoğu ya yurt dışı kaynaklı olduğu için yerel mevzuata tam uymuyor, ya da KVKK'nın istediği hukuken geçerli kayıt tutamıyor.",
    solution:
      "KolayOnay baştan sona bir çerez yönetim çözümü. Çerez tarama, banner tasarımı, TÜBİTAK zaman damgalı rıza kayıtları, Google Consent Mode v2 entegrasyonu — hepsi bir arada. Sadece banner göstermek değil; ziyaretçi onay verene kadar pazarlama ve analitik çerezlerini gerçekten engelleyen bir altyapı.",
    technologies: [
      "Laravel",
      "PHP",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Cloudflare",
    ],
    highlights: [
      "Sıfırdan kurulan ürün mimarisi ve veri modeli",
      "Çok kiracılı (multi-tenant) SaaS altyapısı",
      "TÜBİTAK zaman damgası ile hukuki geçerlilik",
      "Google Consent Mode v2 entegrasyonu",
      "Otomatik çerez tarama ve kategorileme",
    ],
    schemaType: "SoftwareApplication",
    applicationCategory: "BusinessApplication",
  },
  {
    slug: "agencylambda",
    name: "AgencyLambda",
    role: "Kurucu Ortak",
    tagline: "Sağlık ve hukuk profesyonelleri için modern web çözümleri",
    url: "https://agencylambda.com",
    overview:
      "AgencyLambda, üniversiteden iki arkadaşımla birlikte kurduğum bir dijital ajans. Diş hekimleri, terapistler, diyetisyenler, veterinerler ve avukatlar için modern web çözümleri sunuyoruz.",
    problem:
      "Bağımsız çalışan sağlık ve hukuk profesyonelleri, çoğu zaman kendilerini hak ettikleri gibi temsil eden bir dijital varlığa sahip değil. Şablon siteler markalarını yansıtmıyor, ajans yolu ise hem pahalı hem ağır.",
    solution:
      "Bu niş kitleye odaklanmış bir hizmet sunuyoruz: özel tasarım, hızlı geliştirme, SEO ve performans odaklı, dönüşüm için optimize edilmiş websiteler. Tasarımı ve geliştirmeyi içeride yapıyoruz; süreç hem hızlı hem makul fiyatlı kalıyor.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    highlights: [
      "Sağlık ve hukuk profesyonellerine odaklı niş bir ajans",
      "Özel tasarım, hızlı geliştirme ve SEO bir arada",
      "Tasarımdan koda kadar her şey kurucu ortaklarda",
    ],
    schemaType: "Organization",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
