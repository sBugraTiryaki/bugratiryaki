import { MetadataRoute } from 'next'

// Blog posts - update this list when adding new posts
const blogPosts = [
  { slug: 'full-stack-deployment-speedrun', date: '2025-12-27' },
  { slug: 'nextjs-ile-seo-optimizasyonu', date: '2026-01-03' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://bugratiryaki.com'

  const blogUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...blogUrls,
  ]
}
