const skillCategories = [
  {
    title: "Backend",
    skills: ["Laravel", "PHP", "MySQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js"],
  },
  {
    title: "DevOps",
    skills: ["Docker", "OrbStack", "Hetzner basics"],
  },
  {
    title: "AI",
    skills: ["LLM prompting", "automation", "content systems"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-8">
          Skills
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-neutral-600 text-sm"
                  >
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
