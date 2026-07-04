import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Sparkles,
  Star,
  TrendingUp,
  Users,
} from "lucide-react";
import { heroBadges } from "@/lib/data";
import { SITE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

const badgeIcons = {
  users: Users,
  trending: TrendingUp,
  star: Star,
};

const badgePositions = [
  "left-0 top-8 animate-float",
  "right-0 top-1/3 animate-float-delayed",
  "bottom-8 left-8 animate-float-slow",
];

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 pt-20 sm:pt-24 lg:pt-28"
      aria-labelledby="hero-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-primary-600/30 blur-3xl" />
        <div className="absolute -right-32 top-1/4 h-80 w-80 rounded-full bg-accent-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary-400/15 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <Container className="relative pb-14 sm:pb-16 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="animate-fade-up text-center lg:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-white/90 sm:text-sm">
              <Sparkles className="h-3.5 w-3.5 text-accent-400" aria-hidden="true" />
              Welcome to {SITE.name}
            </div>

            <h1
              id="hero-heading"
              className="text-display font-bold text-white"
            >
              {SITE.tagline}
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-neutral-300 sm:text-base lg:mx-0">
              Industry-aligned programs, expert mentors, and proven placement
              support to help you build a successful career in technology and
              beyond.
            </p>

            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="#courses"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-accent-500 px-7 py-3.5 text-sm font-semibold text-neutral-900 shadow-lg shadow-accent-500/25 transition-all hover:-translate-y-0.5 hover:bg-accent-400 hover:shadow-xl hover:shadow-accent-500/30 sm:w-auto sm:text-base"
              >
                Explore Courses
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="#contact"
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/15 sm:w-auto sm:text-base"
              >
                <BookOpen className="h-4 w-4" aria-hidden="true" />
                Book Free Counseling
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              {heroBadges.slice(0, 3).map((badge) => {
                const Icon = badgeIcons[badge.icon];
                return (
                  <div
                    key={badge.label}
                    className="flex items-center gap-2 rounded-lg bg-white/5 px-3 py-2 text-left"
                  >
                    <Icon className="h-4 w-4 text-accent-400" aria-hidden="true" />
                    <div>
                      <p className="text-sm font-bold text-white">{badge.value}</p>
                      <p className="text-[11px] text-neutral-400">{badge.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-primary-950/50 sm:aspect-[5/6]">
              <Image
                src="/images/hero.jpg"
                alt="Students learning together at Aayu Education"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-950/60 via-transparent to-primary-900/20" />
            </div>

            {heroBadges.map((badge, index) => {
              const Icon = badgeIcons[badge.icon];
              return (
                <div
                  key={badge.label}
                  className={`absolute hidden rounded-2xl glass-light px-4 py-3 shadow-xl sm:block ${badgePositions[index]}`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-600 text-white">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-neutral-900">
                        {badge.value}
                      </p>
                      <p className="text-xs font-medium text-neutral-600">
                        {badge.label}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
