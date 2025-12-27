import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Todo App",
    description:
      "Full stack todo application built in 1 hour as a deployment speedrun. Features Google OAuth, email/password auth, and full CRUD operations.",
    href: "https://todo.bugratiryaki.com",
    tags: ["Next.js 16", "Prisma 7", "NextAuth.js", "PostgreSQL", "Vercel"],
  },
  {
    title: "Internal Admin Platform",
    description:
      "A modular admin system with dynamic content management, user workflows, and customizable inputs. Built for scalability and fast iteration.",
    tags: ["Laravel", "React", "MySQL"],
  },
  {
    title: "Modern Web Application",
    description:
      "A full-stack project combining a clean Next.js frontend with a structured backend API. Focused on usability, performance, and maintainability.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-8">
          Work
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              href={project.href}
              tags={project.tags}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
