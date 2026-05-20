import Link from "next/link";

type Action = {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
};

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  actions: Action[];
};

export default function CTASection({
  eyebrow,
  title,
  description,
  actions,
}: Props) {
  return (
    <section
      className="py-20 md:py-28"
      style={{
        background:
          "linear-gradient(180deg, var(--luxury-dark) 0%, var(--luxury-black) 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        {eyebrow && (
          <span
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "var(--accent-gold)" }}
          >
            {eyebrow}
          </span>
        )}
        <h2
          className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl font-light mt-4 mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          {title}
        </h2>
        {description && (
          <p
            className="text-base md:text-lg mb-10 leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            {description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {actions.map((action) => {
            const isPrimary = (action.variant ?? "primary") === "primary";
            return (
              <Link
                key={action.href}
                href={action.href}
                className="inline-flex items-center justify-center px-6 py-3 text-sm tracking-wide transition-all duration-300"
                style={
                  isPrimary
                    ? {
                        backgroundColor: "var(--accent-gold)",
                        color: "var(--luxury-black)",
                      }
                    : {
                        border: "1px solid var(--accent-gold)",
                        color: "var(--accent-gold)",
                      }
                }
              >
                {action.label}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
