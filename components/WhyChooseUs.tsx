import type { ComponentType } from "react";
import {
  Award,
  Calendar,
  GraduationCap,
  HeadphonesIcon,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { Feature } from "@/types";
import { features } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const featureIcons: Record<
  Feature["icon"],
  ComponentType<{ className?: string }>
> = {
  academic: GraduationCap,
  mentor: Users,
  placement: Award,
  flexible: Calendar,
  certified: ShieldCheck,
  support: HeadphonesIcon,
};

export function WhyChooseUs() {
  return (
    <Section id="why-us" ariaLabelledby="why-us-heading">
      <Container>
        <SectionHeader
          id="why-us-heading"
          eyebrow="Why Choose Us"
          title="What Sets Aayu Education Apart"
          description="We go beyond textbooks to deliver a holistic learning experience that prepares you for lasting career growth."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {features.map((feature) => {
            const Icon = featureIcons[feature.icon];

            return (
              <li
                key={feature.title}
                className="group rounded-2xl border border-neutral-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-900/5 sm:p-6"
              >
                <div
                  className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 text-primary-700 transition-transform duration-300 group-hover:scale-105"
                  aria-hidden="true"
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-h3 font-bold text-neutral-900">
                  {feature.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                  {feature.description}
                </p>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
