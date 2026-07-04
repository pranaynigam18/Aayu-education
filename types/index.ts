export type NavLink = {
  label: string;
  href: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type CourseIcon =
  | "code"
  | "chart"
  | "megaphone"
  | "cloud";

export type Course = {
  id: string;
  title: string;
  description: string;
  duration: string;
  mode: string;
  level: string;
  icon: CourseIcon;
  features: string[];
};

export type Feature = {
  title: string;
  description: string;
  icon: "academic" | "mentor" | "placement" | "flexible" | "certified" | "support";
};

export type Placement = {
  company: string;
  role: string;
  package: string;
  initial: string;
  color: string;
};

export type Testimonial = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  initials: string;
  avatarColor: string;
};

export type GalleryItem = {
  id: string;
  alt: string;
  category: string;
  src: string;
};

export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export type ContactField = {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "textarea" | "select";
  placeholder: string;
  required?: boolean;
  options?: string[];
};

export type FooterLinkGroup = {
  title: string;
  links: NavLink[];
};
