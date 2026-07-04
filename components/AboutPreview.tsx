import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

const highlights = [
  "Industry-aligned curriculum updated every quarter",
  "Small batch sizes for personalized attention",
  "State-of-the-art labs and learning infrastructure",
  "Strong alumni network across top companies",
];

export function AboutPreview() {
  return (
    <Section id="about" ariaLabelledby="about-heading">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl shadow-primary-900/10">
              <Image
                src="/images/about.jpg"
                alt="Aayu Education campus and learning environment"
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-2 rounded-2xl glass-light px-5 py-4 shadow-xl sm:-right-4">
              <p className="text-3xl font-bold text-primary-700">15+</p>
              <p className="text-xs font-medium text-neutral-600">
                Years Shaping Careers
              </p>
            </div>
          </div>

          <div>
            <SectionHeader
              id="about-heading"
              eyebrow="About Us"
              title="Building Careers Through Excellence in Education"
              description="Aayu Education has been a trusted name in professional training for over a decade. We combine rigorous curriculum design with practical, project-based learning to prepare students for the demands of today's job market."
              align="left"
            />
            <ul className="mt-5 space-y-2.5">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-neutral-700">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-primary-600"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary-700/20 transition-all hover:-translate-y-0.5 hover:bg-primary-800"
            >
              Learn More About Us
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </Section>
  );
}
