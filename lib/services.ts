export type ServiceFAQ = { soru: string; cevap: string };

export type Service = {
  slug: string;
  name: string;
  shortDescription: string;
  problemStatement: string;
  forWhom: string[];
  deliverables: string[];
  process: { title: string; description: string }[];
  technologies: string[];
  faqs: ServiceFAQ[];
  keywords: string[];
  seoTitle?: string;
  metaDescription?: string;
  relatedProjectSlugs: string[];
};

export const services: Service[] = [
  {
    slug: "web-uygulamasi",
    name: "Web Uygulaması",
    shortDescription:
      "İşinize özel web yazılımı yapıyorum. Laravel ve Next.js ile.",
    problemStatement:
      "Hazır araçlarla çözemediğiniz işleri size özel bir web yazılımına çeviriyorum. İster bir yönetim paneli olsun, ister açık bir site, ister müşterileriniz için bir portal — her birini sıfırdan yazıyorum.",
    forWhom: [
      "Süreci kendine özgü olan işletmeler",
      "Kendi yönetim paneline ihtiyaç duyan ekipler",
      "Eski web ürününü yenilemek isteyen girişimler",
    ],
    deliverables: [
      "Veritabanı ve mimari tasarımı",
      "Backend ve frontend kodu",
      "Kullanıcı yetkileri ve güvenlik",
      "Sunucu kurulumu ve yayın",
      "Teslim sonrası dokümantasyon",
    ],
    process: [
      {
        title: "Keşif",
        description:
          "İşinizi ve mevcut süreçlerinizi anlamaya çalışıyorum. Ne yapacağımız netleşiyor.",
      },
      {
        title: "Geliştirme",
        description:
          "Adım adım geliştiriyorum. Her aşamada size çalışan bir parça gösteriyorum.",
      },
      {
        title: "Canlıya alma",
        description: "Yayına alıyoruz, birlikte test ediyoruz.",
      },
    ],
    technologies: [
      "Laravel",
      "PHP",
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "MySQL",
      "Tailwind CSS",
    ],
    faqs: [
      {
        soru: "Hangi teknolojileri kullanıyorsunuz?",
        cevap:
          "Backend'de Laravel'de uzmanım. Frontend'de Next.js ve React kullanıyorum. Sizin projeniz için en uygun olanı birlikte seçiyoruz.",
      },
      {
        soru: "B2C projelere de bakıyor musunuz?",
        cevap:
          "Çoğunlukla B2B projelere bakıyorum. B2C bir fikriniz varsa konuşalım, uyup uymadığımıza birlikte bakarız.",
      },
      {
        soru: "Ne kadar sürede teslim ediliyor?",
        cevap:
          "Projenin büyüklüğüne göre değişir. İlk görüşmemizde size bir takvim veriyorum, sonra her hafta ilerlemeye göre güncelliyoruz.",
      },
      {
        soru: "Teslim sonrası bakım da yapıyor musunuz?",
        cevap:
          "Evet, ayrı bir bakım anlaşmasıyla devam edebiliyoruz.",
      },
    ],
    keywords: [
      "web uygulaması geliştirme",
      "Laravel geliştirici",
      "Next.js geliştirici Türkiye",
      "özel web yazılımı yaptırma",
      "kurumsal panel yazılımı",
    ],
    relatedProjectSlugs: ["kolayonay", "agencylambda"],
  },
  {
    slug: "mobil-uygulama",
    name: "Mobil Uygulama",
    shortDescription:
      "React Native ile mobil uygulama yapıyorum. iOS ve Android, tek kodla.",
    problemStatement:
      "Kullanıcılarınıza mobilden ulaşmak istiyorsunuz. React Native ile iOS ve Android'i tek kodla yapıyorum. Hazır çözümler size yetmediğinde devreye giriyorum.",
    forWhom: [
      "Web ürününü mobile taşımak isteyen girişimler",
      "Mobile özel bir fikri olan kurucular",
      "İç işlerini mobilden yapmak isteyen ekipler",
    ],
    deliverables: [
      "iOS ve Android uygulaması (tek kod)",
      "API bağlantıları",
      "Push bildirim sistemi",
      "App Store ve Play Store yayını",
    ],
    process: [
      {
        title: "Keşif",
        description:
          "Hedef kullanıcıları ve her platforma özel ihtiyaçları konuşuyoruz.",
      },
      {
        title: "Geliştirme",
        description:
          "Tek koddan iki platforma birlikte gidiyoruz. Her hafta test edebileceğiniz bir sürüm çıkıyor.",
      },
      {
        title: "Yayınlama",
        description:
          "App Store ve Play Store başvurularını ben yapıyorum. Sonraki güncellemeleri de.",
      },
    ],
    technologies: [
      "React Native",
      "Expo",
      "TypeScript",
      "Laravel (API)",
      "Node.js",
      "PostgreSQL",
    ],
    faqs: [
      {
        soru: "Native iOS veya Android yapıyor musunuz?",
        cevap:
          "Tercihim React Native. Tek koddan iki platforma birden yetişiyorum. Projeniz native'e özel bir şey gerektirmiyorsa React Native ile gidiyoruz.",
      },
      {
        soru: "Mevcut backend'imi kullanabilir miyim?",
        cevap:
          "Evet. REST veya GraphQL ile çalışan backend'lerinize bağlanabiliyorum.",
      },
      {
        soru: "Mağazaya başvuruyu siz mi yapıyorsunuz?",
        cevap:
          "Siz hesabı açıyorsunuz, başvuru ve yayın sürecini ben yönetiyorum.",
      },
      {
        soru: "Sürüm güncellemeleri kimde?",
        cevap:
          "İsterseniz bakım anlaşmasıyla bende kalır. İsterseniz teslim sonrası ekibinize devrediyoruz.",
      },
    ],
    keywords: [
      "mobil uygulama geliştirme",
      "React Native uygulama yaptırma",
      "iOS Android uygulama geliştirme",
      "girişim için mobil uygulama",
    ],
    relatedProjectSlugs: [],
  },
  {
    slug: "mvp-gelistirme",
    name: "MVP Geliştirme",
    shortDescription:
      "Fikrinizi hızlıca yayına çıkarırım, gerçek kullanıcıdan geri bildirim alırsınız.",
    problemStatement:
      "Bir fikriniz var. Onu test etmek için kullanıcılara ulaştırmak istiyorsunuz. Fikri en sade haliyle yayına çıkarıp, ilk gün gerçek kullanıcılardan geri bildirim almaya başlıyoruz.",
    forWhom: [
      "Yeni başlayan girişimciler",
      "Bir varsayımı test etmek isteyen ekipler",
      "Yatırımcıya gösterecek bir ürün arayanlar",
    ],
    deliverables: [
      "Kapsam ve varsayım netleştirme",
      "Çekirdek ürünün geliştirilmesi",
      "Yayın için sunucu kurulumu",
      "Yayın sonrası ölçüm önerileri",
    ],
    process: [
      {
        title: "Varsayım",
        description:
          "Hangi varsayımı test ediyoruz, hangi rakamlara bakacağız — birlikte netleştiriyoruz.",
      },
      {
        title: "Daraltma",
        description:
          "Özellik listesini sadece varsayımı test edecek kadar daraltıyoruz.",
      },
      {
        title: "Yayın",
        description:
          "Hızlıca yayına alıyoruz. İlk kullanıcı geri bildirimleri gelmeye başlıyor.",
      },
    ],
    technologies: [
      "Laravel",
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Cloudflare",
    ],
    faqs: [
      {
        soru: "Her fikre bakıyor musunuz?",
        cevap:
          "Hayır. Fikre yatırımcı gözüyle bakıyorum: kim alacak, pazar ne kadar büyük, B2B mi B2C mi? B2B'ye odaklanıyorum, B2C projeleri çoğunlukla almıyorum.",
      },
      {
        soru: "Bir MVP ne kadar sürede çıkar?",
        cevap:
          "Çoğunlukla 4–12 hafta arası. Özellik listesini ne kadar darttığımız süreyi belirliyor.",
      },
      {
        soru: "MVP sonrası devam ediyor musunuz?",
        cevap:
          "Evet. Ölçüm sonuçlarına bakıp sonraki yol haritasını birlikte çıkarıyoruz. Bakım anlaşmasıyla devam edebiliyoruz.",
      },
      {
        soru: "Yatırımcıya sunum yapmama yardım eder misiniz?",
        cevap:
          "Sunum dosyası hazırlamıyorum. Ama ürün gösterimi ve teknik konularda yanınızdayım.",
      },
    ],
    keywords: [
      "MVP geliştirme",
      "fikrim var nasıl yazılım yaparım",
      "girişim için MVP",
      "hızlı prototip yazılım",
      "MVP yaptırma",
    ],
    relatedProjectSlugs: ["kolayonay"],
  },
  {
    slug: "isletme-yazilimi",
    name: "İşletmeye Özel Yazılım",
    shortDescription:
      "Hazır yazılımlar size yetmiyorsa, işinize özel yazıyorum.",
    problemStatement:
      "İşletmenizin süreçleri kendine özgü, hazır yazılımlar bu süreçleri tam karşılamıyor. Size özel bir yazılım, hem aylık ödediğiniz lisans paralarından hem de esnek olmayan akışlardan kurtarıyor.",
    forWhom: [
      "Hazır yazılımlarla iş akışı eşleşmeyen KOBİ'ler",
      "Birkaç farklı araç arasında veri taşımak zorunda kalan ekipler",
      "İç işlerini otomatikleştirmek isteyen işletmeler",
    ],
    deliverables: [
      "Süreç analizi",
      "Size özel yazılım tasarımı ve geliştirmesi",
      "Mevcut sistemlerinizle bağlantı",
      "Ekibinize kullanım eğitimi",
    ],
    process: [
      {
        title: "Analiz",
        description:
          "Yerinde ya da uzaktan süreçlerinizi inceliyoruz. Gerçek darboğazları buluyoruz.",
      },
      {
        title: "Tasarım",
        description:
          "Sürecinize uygun bir yazılım akışı çıkarıyoruz. Onayladıktan sonra geliştirmeye başlıyoruz.",
      },
      {
        title: "Canlıya alma",
        description:
          "Yazılıma geçişi ve eğitimi birlikte yönetiyoruz. Ekibiniz alışana kadar yanınızdayım.",
      },
    ],
    technologies: [
      "Laravel",
      "PHP",
      "Next.js",
      "React",
      "PostgreSQL",
      "MySQL",
    ],
    faqs: [
      {
        soru: "Küçük işletmeler için bir bütçe aralığı var mı?",
        cevap:
          "Sabit bir alt sınır koymuyorum. Önce ne istediğinizi konuşuyoruz, sonra kapsama göre fiyat çıkarıyorum.",
      },
      {
        soru: "Eski yazılımımızdan veri taşıyabilir misiniz?",
        cevap:
          "Evet. Eski verinizi yeni yazılıma taşımak çoğunlukla projenin bir parçası oluyor.",
      },
      {
        soru: "Sözleşmeyi nasıl yapıyoruz?",
        cevap:
          "Sabit kapsam ve sabit fiyat üzerinden ilerlemeyi tercih ediyorum. Kapsam değişirse ek anlaşma yapıyoruz.",
      },
      {
        soru: "Yazılımı sonradan başkasına verebilir miyim?",
        cevap:
          "Evet. Kaynak kodu ve dokümantasyon sizin. İleride başka bir geliştiriciye devretmek istediğinizde sorun çıkmıyor.",
      },
      {
        soru: "İhtiyaca özel yazılım nedir?",
        cevap:
          "İhtiyaca özel yazılım, hazır paket programların karşılayamadığı kendi iş akışınıza göre sıfırdan geliştirilen yazılımdır. Süreçlerinizi hazır bir yazılıma uydurmaya çalışmak yerine, yazılımı sizin sürecinize göre tasarlarız.",
      },
      {
        soru: "İşletmeye özel yazılım hazır çözümden neden daha iyi?",
        cevap:
          "Hazır çözümler herkes için ortalama bir akış sunar; işletmeye özel yazılım tam sizin süreçlerinize oturur. Aylık lisans ücreti ödemezsiniz, kaynak kod sizin olur ve ihtiyaç değiştikçe yazılım da sizinle birlikte değişir.",
      },
    ],
    keywords: [
      "işletmeye özel yazılım",
      "işletmelere özel yazılım",
      "ihtiyaca özel yazılım",
      "KOBİ yazılım geliştirme",
      "özel iş yazılımı yaptırma",
      "küçük işletme dijitalleşme",
    ],
    seoTitle: "İşletmeye Özel Yazılım Geliştirme | Buğra Tiryaki",
    metaDescription:
      "İşletmelere ve ihtiyaca özel yazılım geliştiriyorum. Hazır çözümler iş akışınıza uymuyorsa, size özel yazılımla lisans ücretlerinden ve esnek olmayan süreçlerden kurtulun.",
    relatedProjectSlugs: ["agencylambda"],
  },
  {
    slug: "saas-gelistirme",
    name: "SaaS Geliştirme",
    shortDescription:
      "Kendi B2B SaaS ürününüzü birlikte kuruyoruz. KolayOnay'ı da böyle kurduk.",
    problemStatement:
      "Kendi SaaS ürününüzü kurmak istiyorsunuz. KolayOnay'ı üç ortak olarak sıfırdan kurduk, aynı süreci sizin ürününüz için de yürütüyorum — mimari kararlardan ödeme entegrasyonuna, çok kiracılı yapıdan ölçüm altyapısına kadar.",
    forWhom: [
      "Kendi SaaS'ını kurmak isteyen kurucular",
      "Bir hizmeti yazılıma çevirmek isteyen uzmanlar",
      "B2B müşterisi olan, hizmetini ürünleştirmek isteyen danışmanlar",
    ],
    deliverables: [
      "SaaS mimarisi ve veritabanı",
      "Çok kiracılı (multi-tenant) yapı",
      "Ödeme ve abonelik altyapısı",
      "Kullanıcı yönetimi ve yetkiler",
      "Ölçüm ve takip altyapısı",
    ],
    process: [
      {
        title: "Mimari",
        description:
          "Veri modeli, kiracı yapısı, ödeme akışı gibi temel kararları en başta alıyor ve yazıya döküyoruz.",
      },
      {
        title: "Çekirdek",
        description:
          "İlk müşteri için gereken çekirdek özellikleri yayına alıyoruz. Yapıyı erkenden ölçeğe test ediyoruz.",
      },
      {
        title: "Büyüme",
        description:
          "Müşteri geri bildirimlerine göre yol haritasını birlikte yönetiyoruz.",
      },
    ],
    technologies: [
      "Laravel",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Cloudflare",
      "Stripe / iyzico",
    ],
    faqs: [
      {
        soru: "SaaS deneyiminiz nedir?",
        cevap:
          "KolayOnay'ın kurucu ortağıyım. Üç ortak olarak baştan sona birlikte geliştirdik. 6 aydan uzun süre sonra Şubat 2026'da yayına aldık.",
      },
      {
        soru: "Hangi SaaS projelere bakıyorsunuz?",
        cevap:
          "B2B SaaS'a odaklanıyorum. B2C SaaS projeleri çoğunlukla almıyorum — ürünün pazar uyumu ve büyüme dinamikleri çok farklı.",
      },
      {
        soru: "Ödeme entegrasyonu için ne kullanıyorsunuz?",
        cevap:
          "Stripe ve iyzico ile çalıştım. Pazarınıza uygun olanı birlikte seçiyoruz.",
      },
      {
        soru: "Multi-tenant mı, tek kiracı mı?",
        cevap:
          "Çoğu SaaS için multi-tenant uygun. Kurumsal müşteriniz dedicated bir kurulum istiyorsa, hibrit yapılar da kurulabiliyor.",
      },
    ],
    keywords: [
      "SaaS geliştirme",
      "SaaS yazılım yaptırma",
      "B2B SaaS Türkiye",
      "abonelik bazlı yazılım",
      "multi-tenant SaaS",
    ],
    relatedProjectSlugs: ["kolayonay"],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
