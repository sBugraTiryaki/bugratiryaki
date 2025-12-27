const skillCategories = [
  {
    title: "Backend",
    skills: [
      "Laravel",
      "PHP",
      "Node.js",
      "PostgreSQL",
      "MySQL",
      "Prisma ORM",
      "REST APIs",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "OrbStack",
      "Vercel",
      "Cloudflare",
      "Neon",
      "Git",
      "CI/CD",
    ],
  },
  {
    title: "Auth & Security",
    skills: [
      "NextAuth.js",
      "OAuth 2.0",
      "JWT",
      "bcrypt",
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      "Claude Code",
      "Cursor",
      "LLM prompting",
      "MCP servers",
      "Context7",
      "Vibecoding",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-8">
          Skills
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-neutral-600 text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
