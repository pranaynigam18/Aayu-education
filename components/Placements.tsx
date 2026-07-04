"use client";

import { useEffect, useRef, useState } from "react";
import { Briefcase, Building2, TrendingUp } from "lucide-react";
import { placementStats, placements } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

function AnimatedStat({
  value,
  suffix,
  prefix = "",
  label,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const start = performance.now();

          const animate = (time: number) => {
            const progress = Math.min((time - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(value * eased);
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [value]);

  const formatted =
    value % 1 !== 0 ? display.toFixed(1) : Math.round(display).toString();

  return (
    <div ref={ref} className="text-center">
      <p className="text-2xl font-bold text-white sm:text-3xl">
        {prefix}
        {formatted}
        {suffix}
      </p>
      <p className="mt-1 text-xs font-medium text-neutral-400 sm:text-sm">
        {label}
      </p>
    </div>
  );
}

export function Placements() {
  return (
    <Section
      id="placements"
      className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950"
      ariaLabelledby="placements-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden="true"
      >
        <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-accent-500/30 blur-3xl" />
      </div>

      <Container className="relative">
        <SectionHeader
          id="placements-heading"
          eyebrow="Placements"
          title="Our Students Work at Leading Companies"
          description="With a 95% placement rate and partnerships with 500+ companies, we connect talent with opportunity."
          light
        />

        <div className="mb-10 grid grid-cols-3 gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:p-8">
          {placementStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`${index < placementStats.length - 1 ? "border-r border-white/10" : ""}`}
            >
              <AnimatedStat
                value={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                label={stat.label}
              />
            </div>
          ))}
        </div>

        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:gap-5">
          {placements.map((placement) => (
            <li key={placement.company}>
              <article className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10 sm:p-5">
                <div className="flex items-center gap-3">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${placement.color} text-sm font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-105`}
                  >
                    {placement.initial}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-bold text-white sm:text-base">
                      {placement.company}
                    </p>
                    <p className="truncate text-xs text-neutral-400">
                      {placement.role}
                    </p>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-3">
                  <span className="inline-flex items-center gap-1 text-[11px] text-neutral-400">
                    <Building2 className="h-3 w-3" aria-hidden="true" />
                    Placed
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-accent-400 sm:text-sm">
                    <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                    {placement.package}
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-neutral-400 sm:text-sm">
          <Briefcase className="h-4 w-4" aria-hidden="true" />
          500+ companies actively hire from Aayu Education every year
        </p>
      </Container>
    </Section>
  );
}
