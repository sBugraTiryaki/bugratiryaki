import { MetadataRoute } from 'next'

// LLM / AI crawlers we explicitly welcome for content discovery and citation
const AI_CRAWLERS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'Amazonbot',
  'cohere-ai',
  'Meta-ExternalAgent',
]

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://bugratiryaki.com'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // AI assistants and answer engines are allowed to crawl and cite content
      {
        userAgent: AI_CRAWLERS,
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
