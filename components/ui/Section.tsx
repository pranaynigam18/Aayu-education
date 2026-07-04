import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  ariaLabelledby?: string;
};

export function Section({
  id,
  children,
  className = "",
  ariaLabelledby,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`py-12 sm:py-14 lg:py-16 ${className}`}
    >
      {children}
    </section>
  );
}
