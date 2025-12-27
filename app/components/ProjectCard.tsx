import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
}

export default function ProjectCard({
  title,
  description,
  href,
  tags,
}: ProjectCardProps) {
  const Card = (
    <div className="p-6 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 hover:shadow-sm transition-all duration-200 h-full">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        {href && <ExternalLink className="w-4 h-4 text-neutral-400" />}
      </div>
      <p className="text-neutral-600 leading-relaxed mb-4">{description}</p>
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium text-neutral-500 bg-neutral-100 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {Card}
      </a>
    );
  }

  return Card;
}
