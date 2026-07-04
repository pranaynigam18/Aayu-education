import Link from "next/link";
import type { ComponentType } from "react";
import {
  ArrowRight,
  BarChart3,
  Clock,
  Cloud,
  Code2,
  Megaphone,
  Monitor,
} from "lucide-react";
import type { CourseIcon } from "@/types";
import { courses } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const courseIcons: Record<CourseIcon, ComponentType<{ className?: string }>> = {
  code: Code2,
  chart: BarChart3,
  megaphone: Megaphone,
  cloud: Cloud,
};

export function Courses() {
  return (
    <Section
      id="courses"
      className="bg-gradient-to-b from-neutral-50 to-white"
      ariaLabelledby="courses-heading"
    >
      <Container>
        <SectionHeader
          id="courses-heading"
          eyebrow="Our Programs"
          title="Courses Designed for Career Success"
          description="Choose from our range of industry-focused programs, each crafted to equip you with in-demand skills and real-world experience."
        />

        <ul className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {courses.map((course) => {
            const Icon = courseIcons[course.icon];

            return (
              <li key={course.id}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-900/5">
                  <div
                    className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  />

                  <div className="relative flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-white shadow-md shadow-primary-600/25 transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-700">
                      {course.duration}
                    </span>
                  </div>

                  <h3 className="relative mt-4 text-h3 font-bold text-neutral-900">
                    {course.title}
                  </h3>

                  <div className="relative mt-2 flex flex-wrap items-center gap-3 text-xs font-medium text-neutral-500">
                    <span className="inline-flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                      {course.duration}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Monitor className="h-3.5 w-3.5" aria-hidden="true" />
                      {course.mode}
                    </span>
                  </div>

                  <p className="relative mt-3 flex-1 text-sm leading-relaxed text-neutral-600">
                    {course.description}
                  </p>

                  <ul className="relative mt-4 flex flex-wrap gap-1.5">
                    {course.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-md bg-neutral-100 px-2.5 py-1 text-[11px] font-medium text-neutral-700"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#contact"
                    className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 transition-colors group-hover:text-primary-800"
                  >
                    Enquire Now
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
