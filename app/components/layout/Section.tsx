import type { ReactNode } from "react";

type Bg = "black" | "dark" | "charcoal";

const bgMap: Record<Bg, string> = {
  black: "var(--luxury-black)",
  dark: "var(--luxury-dark)",
  charcoal: "var(--luxury-charcoal)",
};

type Props = {
  children: ReactNode;
  id?: string;
  bg?: Bg;
  className?: string;
  size?: "default" | "narrow" | "wide";
};

export default function Section({
  children,
  id,
  bg = "black",
  className = "",
  size = "default",
}: Props) {
  const maxWidth =
    size === "narrow"
      ? "max-w-3xl"
      : size === "wide"
        ? "max-w-7xl"
        : "max-w-6xl";

  return (
    <section
      id={id}
      className={`py-20 md:py-28 ${className}`}
      style={{ backgroundColor: bgMap[bg] }}
    >
      <div className={`${maxWidth} mx-auto px-6`}>{children}</div>
    </section>
  );
}
