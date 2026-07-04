import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function CTA() {
  return (
    <section aria-labelledby="cta-heading" className="py-10 sm:py-12">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 px-6 py-10 text-center sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -right-10 top-0 h-48 w-48 rounded-full bg-accent-500/25 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-primary-400/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/90">
              <Sparkles className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" />
              Limited seats available
            </div>
            <h2 id="cta-heading" className="text-h2 font-bold text-white">
              Ready to Start Your Journey?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300 sm:text-base">
              Take the first step toward a rewarding career. Book a free
              counseling session with our experts today.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="#contact"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-7 py-3.5 text-sm font-semibold text-neutral-900 shadow-lg shadow-accent-500/25 transition-all hover:-translate-y-0.5 hover:bg-accent-400 sm:w-auto sm:text-base"
              >
                Get Started Today
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="#courses"
                className="w-full rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 sm:w-auto sm:text-base"
              >
                View All Courses
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
