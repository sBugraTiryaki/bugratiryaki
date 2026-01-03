export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
  author: string
  tags: string[]
  readingTime: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  date: string
  excerpt: string
  author: string
  tags: string[]
  readingTime: string
}

// Static blog posts data - update when adding new posts
const postsData: BlogPost[] = [
  {
    slug: 'full-stack-deployment-speedrun',
    title: "Full Stack Deployment Speedrun: İlk Commit'ten Production'a 1 Saat 4 Dakika",
    date: '2025-12-27',
    excerpt: "Next.js 16, Prisma 7, NextAuth.js v5 ve modern deployment araçlarıyla sıfırdan production'a nasıl 1 saat 4 dakikada ulaştım? Karşılaştığım sorunlar ve çözümler.",
    author: 'Buğra Tiryaki',
    tags: ['Next.js', 'Prisma', 'Full Stack', 'Deployment', 'Vercel', 'DevOps'],
    readingTime: '4 min read',
    content: `# Full Stack Deployment Speedrun

İlk commit'ten production'a **1 saat 4 dakika**. Bu benim ilk full-stack deployment speedrun deneyimimdi ve "vibecoding" - hızlı, sezgisel geliştirme - tam anlamıyla işe yaradı.

## Teknoloji Stack'i

Bu projede kullandığım araçlar:

- **Next.js 16** - App Router ve Server Actions ile
- **Prisma 7** - PostgreSQL 16 ile
- **NextAuth.js v5** - Google OAuth entegrasyonu
- **Tailwind CSS** ve **shadcn/ui** component'leri
- **OrbStack** - Local development için
- **Neon** - Production PostgreSQL
- **Vercel** ve **Cloudflare** - Hosting ve CDN

## Karşılaştığım Zorluklar ve Çözümler

### 1. Prisma 7'nin Yeni Adapter Pattern'i

Prisma 7, yeni bir adapter pattern'i ile geldi ve mevcut dökümantasyonların çoğu güncel değildi. Bu noktada **Claude Code** ve **Context7 MCP** ile güncel dökümantasyona erişebildim.

Bu araç olmasaydı, bu bölüm çok daha uzun sürecekti.

### 2. OAuth Redirect URI'ları

OAuth entegrasyonunda önemli bir detay: **local** ve **production** ortamları için ayrı redirect URI'lar tanımlamanız gerekiyor.

\`\`\`
# Local
http://localhost:3000/api/auth/callback/google

# Production
https://todo.bugratiryaki.com/api/auth/callback/google
\`\`\`

Google Cloud Console'da her iki URI'yı da eklemeyi unutmayın.

### 3. Prisma Client Generation

Vercel build'lerinde Prisma Client'ın generate edilmesi gerekiyor. Bunu \`package.json\`'a script olarak ekleyin:

\`\`\`json
{
  "scripts": {
    "postinstall": "prisma generate",
    "build": "prisma generate && next build"
  }
}
\`\`\`

### 4. Cloudflare Proxy ve SSL

Cloudflare proxy ayarları açıkken, Vercel'in SSL sertifika yönetimi ile çakışma yaşanabiliyor. Bu durumda:

- Cloudflare DNS ayarlarında **proxy'yi kapatın** (turuncu bulut → gri bulut)
- Veya Vercel'de custom domain ayarlarını kontrol edin

## Sonuç

Live uygulama: [todo.bugratiryaki.com](https://todo.bugratiryaki.com)

Modern araçlarla full-stack deployment artık saatler değil, dakikalar sürüyor. Önemli olan doğru araçları bilmek ve karşılaşılan sorunlara hızlı çözüm üretebilmek.

**Pro tip:** AI destekli coding araçları (Claude Code gibi) güncel dökümantasyon erişimi sağlayarak development süresini ciddi oranda kısaltıyor.

---

Sorularınız varsa LinkedIn'den veya mail ile ulaşabilirsiniz!`,
  },
  {
    slug: 'nextjs-ile-seo-optimizasyonu',
    title: 'Next.js ile SEO Optimizasyonu: Kapsamlı Rehber',
    date: '2026-01-03',
    excerpt: 'Next.js projelerinde SEO performansını artırmak için kullanabileceğiniz teknikler, metadata yönetimi ve structured data implementasyonu.',
    author: 'Buğra Tiryaki',
    tags: ['Next.js', 'SEO', 'Web Development', 'React'],
    readingTime: '3 min read',
    content: `# Next.js ile SEO Optimizasyonu

Modern web uygulamalarında SEO (Search Engine Optimization) artık her zamankinden daha önemli. Next.js, SEO dostu uygulamalar geliştirmek için harika araçlar sunuyor.

## Neden Next.js?

Next.js'in SEO açısından sunduğu avantajlar:

- **Server-Side Rendering (SSR)**: Sayfalar sunucuda render edilir, bu da arama motorlarının içeriği kolayca indexlemesini sağlar.
- **Static Site Generation (SSG)**: Statik sayfalar build zamanında oluşturulur, maksimum performans sunar.
- **Automatic Image Optimization**: \`next/image\` ile görselleriniz otomatik olarak optimize edilir.
- **Built-in Metadata API**: Metadata yönetimi için yerleşik destek.

## Metadata Yönetimi

Next.js 13+ ile metadata yönetimi çok kolay:

\`\`\`typescript
export const metadata: Metadata = {
  title: "Sayfa Başlığı",
  description: "Sayfa açıklaması",
  openGraph: {
    title: "OG Başlık",
    description: "OG Açıklama",
    type: "website",
  },
};
\`\`\`

## Structured Data

Google'ın zengin sonuçlar göstermesi için JSON-LD schema ekleyin:

\`\`\`typescript
const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Makale Başlığı",
  author: {
    "@type": "Person",
    name: "Yazar Adı",
  },
};
\`\`\`

## Sonuç

Next.js, SEO optimizasyonu için mükemmel bir framework. Doğru tekniklerle kullanıldığında, arama motorlarında üst sıralara çıkmak mümkün.

Sorularınız varsa benimle iletişime geçebilirsiniz!`,
  },
]

export async function getAllPosts(): Promise<BlogPostMeta[]> {
  return postsData
    .map(({ content, ...meta }) => meta)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return postsData.find((post) => post.slug === slug) || null
}

export async function getAllSlugs(): Promise<string[]> {
  return postsData.map((post) => post.slug)
}
