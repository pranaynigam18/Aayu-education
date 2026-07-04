"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isLight = isScrolled || isOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isLight
          ? "bg-white/90 shadow-sm shadow-primary-900/5 backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav
          className="flex h-16 items-center justify-between sm:h-[4.5rem]"
          aria-label="Main navigation"
        >
          <Link
            href="/"
            className={`flex items-center gap-2 text-lg font-bold transition-colors sm:text-xl ${
              isLight ? "text-neutral-900" : "text-white"
            }`}
          >
            <span
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-sm font-bold text-white shadow-md"
              aria-hidden="true"
            >
              AE
            </span>
            <span>{SITE.name}</span>
          </Link>

          <ul className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isLight
                      ? "text-neutral-700 hover:bg-primary-50 hover:text-primary-700"
                      : "text-white/85 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="#contact"
              className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 ${
                isLight
                  ? "bg-primary-700 text-white shadow-md shadow-primary-700/25 hover:bg-primary-800"
                  : "bg-accent-500 text-neutral-900 shadow-md shadow-accent-500/25 hover:bg-accent-400"
              }`}
            >
              Enroll Now
            </Link>
          </div>

          <button
            type="button"
            className={`inline-flex items-center justify-center rounded-lg p-2 transition-colors lg:hidden ${
              isLight
                ? "text-neutral-700 hover:bg-neutral-100"
                : "text-white hover:bg-white/10"
            }`}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {isOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </Container>

      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-neutral-200 bg-white/95 backdrop-blur-lg lg:hidden"
        >
          <Container className="py-4">
            <ul className="flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-neutral-700 transition-colors hover:bg-primary-50 hover:text-primary-700"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="#contact"
              className="mt-4 block rounded-xl bg-primary-700 px-5 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-primary-800"
              onClick={() => setIsOpen(false)}
            >
              Enroll Now
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
