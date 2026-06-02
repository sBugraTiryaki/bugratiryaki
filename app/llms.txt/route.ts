import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

// Serves /llms.txt — a machine-readable map of the site for AI crawlers and
// answer engines (see https://llmstxt.org). Lists key pages and every blog post.
export function GET() {
  const posts = getAllPosts();

  const lines: string[] = [
    `# ${siteConfig.name}`,
    "",
    `> KolayOnay ve AgencyLambda kurucu ortağı, bağımsız yazılım geliştirici. ` +
      `Girişimcilik, SaaS, MVP, ürün ve yazılım geliştirme üzerine Türkçe, sahadan içerikler.`,
    "",
    "## Sayfalar",
    `- [Hakkımda](${siteConfig.url}/hakkimda): Buğra Tiryaki kimdir — girişimci ve yazılım geliştirici hikayesi.`,
    `- [Hizmetler](${siteConfig.url}/hizmetler): MVP, web, mobil, SaaS ve işletmeye özel yazılım geliştirme.`,
    `- [Projeler](${siteConfig.url}/projeler): KolayOnay, AgencyLambda ve diğer çalışmalar.`,
    `- [İletişim](${siteConfig.url}/iletisim): Proje görüşmesi için iletişim.`,
    "",
    "## Blog",
    ...posts.map(
      (p) => `- [${p.title}](${siteConfig.url}/blog/${p.slug}): ${p.description}`,
    ),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
