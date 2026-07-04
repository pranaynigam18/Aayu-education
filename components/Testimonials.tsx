import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          className={`h-3.5 w-3.5 ${
            i < rating
              ? "fill-accent-500 text-accent-500"
              : "fill-neutral-200 text-neutral-200"
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      className="bg-gradient-to-b from-neutral-50 to-white"
      ariaLabelledby="testimonials-heading"
    >
      <Container>
        <SectionHeader
          id="testimonials-heading"
          eyebrow="Testimonials"
          title="Stories from Our Alumni"
          description="Hear from students who transformed their careers with Aayu Education."
        />

        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id}>
              <article className="group relative flex h-full flex-col rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary-900/5">
                <Quote
                  className="absolute right-5 top-5 h-8 w-8 text-primary-100 transition-colors group-hover:text-primary-200"
                  aria-hidden="true"
                />

                <StarRating rating={testimonial.rating} />

                <blockquote className="relative mt-4 flex-1">
                  <p className="text-sm leading-relaxed text-neutral-700">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </blockquote>

                <footer className="relative mt-5 flex items-center gap-3 border-t border-neutral-100 pt-4">
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.avatarColor} text-sm font-bold text-white shadow-md`}
                    aria-hidden="true"
                  >
                    {testimonial.initials}
                  </div>
                  <cite className="not-italic">
                    <p className="text-sm font-bold text-neutral-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-neutral-500">{testimonial.role}</p>
                  </cite>
                </footer>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
