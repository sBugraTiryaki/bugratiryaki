interface ProjectCardProps {
  title: string;
  description: string;
}

export default function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div className="p-6 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 hover:shadow-sm transition-all duration-200">
      <h3 className="text-lg font-semibold text-neutral-900 mb-3">{title}</h3>
      <p className="text-neutral-600 leading-relaxed">{description}</p>
    </div>
  );
}
