import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Internal Admin Platform",
    description:
      "A modular admin system with dynamic content management, user workflows, and customizable inputs. Built for scalability and fast iteration.",
  },
  {
    title: "Modern Web Application",
    description:
      "A full-stack project combining a clean Next.js frontend with a structured backend API. Focused on usability, performance, and maintainability.",
  },
];

export default function Work() {
  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-8">
          Work
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
