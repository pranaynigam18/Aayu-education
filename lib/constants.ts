import type { NavLink } from "@/types";

export const SITE = {
  name: "Aayu Education",
  tagline: "Empowering Futures Through Quality Education",
  email: "info@aayueducation.com",
  phone: "+91 98765 43210",
  address: "123 Education Lane, Knowledge Park, New Delhi – 110001",
  hours: "Mon – Sat: 9:00 AM – 7:00 PM",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why-us" },
  { label: "Placements", href: "#placements" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];
