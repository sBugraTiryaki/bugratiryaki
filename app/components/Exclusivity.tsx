import { Check } from "lucide-react";

const benefits = [
  "Personalized 1-on-1 mentorship",
  "Direct WhatsApp access for questions",
  "Real project collaboration",
  "Premium design system templates",
  "Client acquisition strategy",
  "Lifetime resource access",
];

export default function Exclusivity() {
  return (
    <section
      id="exclusivity"
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, var(--luxury-black) 0%, var(--luxury-dark) 100%)",
      }}
    >
      {/* Background Number */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-[family-name:var(--font-cormorant)] text-[200px] md:text-[300px] lg:text-[400px] font-light opacity-[0.03] select-none pointer-events-none"
        style={{ color: "var(--text-primary)" }}
      >
        5
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section Label */}
        <div className="text-center mb-12">
          <span
            className="text-xs tracking-[0.2em] uppercase font-medium"
            style={{ color: "var(--accent-gold)" }}
          >
            Limited Availability
          </span>
        </div>

        {/* Main Message */}
        <div className="text-center mb-16">
          <h2
            className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl lg:text-5xl font-light mb-6"
            style={{ color: "var(--text-primary)" }}
          >
            Why only 5?
          </h2>

          <div
            className="max-w-2xl mx-auto space-y-4 text-lg"
            style={{ color: "var(--text-secondary)" }}
          >
            <p>I could scale. I choose not to.</p>
            <p>
              Each person I mentor gets my undivided attention. We work together
              until you&apos;re shipping premium sites independently.
            </p>
            <p
              className="font-medium"
              style={{ color: "var(--text-primary)" }}
            >
              This isn&apos;t a course. It&apos;s a transformation.
            </p>
          </div>
        </div>

        {/* Benefits Card */}
        <div
          className="p-6 md:p-8 lg:p-12 rounded-lg border-luxury max-w-xl mx-auto"
          style={{ backgroundColor: "var(--luxury-charcoal)" }}
        >
          <h3
            className="text-lg font-medium mb-6 text-center"
            style={{ color: "var(--text-primary)" }}
          >
            What you get
          </h3>

          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center gap-4">
                <Check
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "var(--accent-gold)" }}
                />
                <span style={{ color: "var(--text-secondary)" }}>
                  {benefit}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Note */}
        <p
          className="text-center mt-12 text-sm"
          style={{ color: "var(--text-muted)" }}
        >
          Serious inquiries only.
        </p>
      </div>
    </section>
  );
}
