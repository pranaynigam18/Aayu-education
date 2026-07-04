type SectionHeaderProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
};

export function SectionHeader({
  id,
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeaderProps) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <header className={`mb-8 max-w-3xl sm:mb-10 ${alignment}`}>
      {eyebrow && (
        <p
          className={`mb-2 text-xs font-semibold uppercase tracking-[0.2em] ${
            light ? "text-accent-300" : "text-primary-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        id={id}
        className={`text-h2 font-bold ${
          light ? "text-white" : "text-neutral-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-3 text-sm leading-relaxed sm:text-base ${
            light ? "text-neutral-300" : "text-neutral-600"
          }`}
        >
          {description}
        </p>
      )}
    </header>
  );
}
