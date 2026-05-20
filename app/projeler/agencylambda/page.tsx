import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug } from "@/lib/projects";
import { siteConfig } from "@/lib/site";
import ProjectPageTemplate from "@/app/components/projects/ProjectPageTemplate";

const SLUG = "agencylambda";
const project = getProjectBySlug(SLUG);

export const metadata: Metadata = project
  ? {
      title: project.name,
      description: project.overview,
      alternates: { canonical: `${siteConfig.url}/projeler/${SLUG}` },
      openGraph: {
        title: `${project.name} | Buğra Tiryaki`,
        description: project.tagline,
        url: `${siteConfig.url}/projeler/${SLUG}`,
      },
    }
  : {};

export default function Page() {
  if (!project) notFound();
  return <ProjectPageTemplate project={project} />;
}
