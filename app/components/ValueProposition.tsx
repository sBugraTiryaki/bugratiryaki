import { Sparkles, Palette, Users, Rocket } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Development",
    description:
      "Turn ideas into working products using vibe coding methodology with AI as your coding partner.",
  },
  {
    icon: Palette,
    title: "Premium Design Execution",
    description:
      "Dark luxury aesthetics and sophisticated layouts that attract high-ticket clients.",
  },
  {
    icon: Users,
    title: "Client Acquisition Strategy",
    description:
      "Position yourself as premium from day one. Learn how to find and close high-value projects.",
  },
  {
    icon: Rocket,
    title: "Rapid Deployment",
    description:
      "From concept to live site in days, not months. Ship fast, iterate faster.",
  },
];

export default function ValueProposition() {
  return (
    <section
      id="value"
      className="py-24 md:py-32"
      style={{ backgroundColor: "var(--luxury-dark)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Label */}
        <div className="text-center mb-16">
          <span
            className="text-xs tracking-[0.2em] uppercase font-medium"
            style={{ color: "var(--accent-gold)" }}
          >
            The Transformation
          </span>
          <h2
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl font-light mt-4"
            style={{ color: "var(--text-primary)" }}
          >
            What We Build Together
          </h2>
          <p
            className="mt-6 text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-secondary)" }}
          >
            You&apos;ll learn to create premium websites that command premium
            prices. Using AI as your coding partner. Shipping in days, not
            months.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 md:p-8 rounded-lg border-luxury transition-all duration-300 hover:border-hover group"
              style={{ backgroundColor: "var(--luxury-charcoal)" }}
            >
              <feature.icon
                className="w-6 h-6 md:w-8 md:h-8 mb-3 md:mb-4 transition-colors duration-300"
                style={{ color: "var(--accent-gold)" }}
              />
              <h3
                className="text-lg md:text-xl font-medium mb-2 md:mb-3"
                style={{ color: "var(--text-primary)" }}
              >
                {feature.title}
              </h3>
              <p className="text-sm md:text-base" style={{ color: "var(--text-secondary)" }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <p
          className="text-center mt-12 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          No prior coding experience needed.
        </p>
      </div>
    </section>
  );
}
