import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import { SITE } from "@/lib/constants";
import { footerLinkGroups } from "@/lib/data";
import { Container } from "@/components/ui/Container";

const socialLinks = [
  { label: "Facebook", href: "#", icon: FaFacebook },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "LinkedIn", href: "#", icon: FaLinkedin },
  { label: "YouTube", href: "#", icon: FaYoutube },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-neutral-950 text-neutral-400">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden="true"
      >
        <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-primary-600/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
      </div>

      <Container className="relative py-12 sm:py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-lg font-bold text-white"
            >
              <span
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-800 text-sm font-bold text-white"
                aria-hidden="true"
              >
                AE
              </span>
              {SITE.name}
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Empowering students with industry-ready skills and career support
              since 2010.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-primary-400"
                  aria-hidden="true"
                />
                {SITE.address}
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="h-4 w-4 shrink-0 text-primary-400" aria-hidden="true" />
                <a
                  href={`mailto:${SITE.email}`}
                  className="transition-colors hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
            </ul>
          </div>

          {footerLinkGroups.map((group) => (
            <nav key={group.title} className="lg:col-span-2" aria-label={group.title}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-white">
              Follow Us
            </h3>
            <ul className="mt-4 flex gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 text-neutral-400 transition-all hover:border-primary-600 hover:bg-primary-600 hover:text-white"
                      aria-label={social.label}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-neutral-800 pt-8 sm:flex-row">
          <p className="text-xs text-neutral-500">
            &copy; {currentYear} {SITE.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-neutral-500">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
