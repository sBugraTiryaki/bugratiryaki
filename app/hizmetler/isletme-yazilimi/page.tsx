import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getServiceBySlug } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import ServicePageTemplate from "@/app/components/services/ServicePageTemplate";

const SLUG = "isletme-yazilimi";
const service = getServiceBySlug(SLUG);

export const metadata: Metadata = service
  ? {
      title: service.name,
      description: service.problemStatement,
      keywords: service.keywords,
      alternates: { canonical: `${siteConfig.url}/hizmetler/${SLUG}` },
      openGraph: {
        title: `${service.name} | Buğra Tiryaki`,
        description: service.problemStatement,
        url: `${siteConfig.url}/hizmetler/${SLUG}`,
      },
    }
  : {};

export default function Page() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
