import type {
  Course,
  FAQItem,
  Feature,
  FooterLinkGroup,
  GalleryItem,
  Placement,
  Stat,
  Testimonial,
} from "@/types";

export const stats: Stat[] = [
  { value: "15+", label: "Years of Excellence" },
  { value: "10,000+", label: "Students Trained" },
  { value: "500+", label: "Industry Partners" },
  { value: "95%", label: "Placement Rate" },
];

export const heroBadges = [
  { value: "10,000+", label: "Students", icon: "users" as const },
  { value: "95%", label: "Placement Rate", icon: "trending" as const },
  { value: "4.9", label: "Student Rating", icon: "star" as const },
];

export const courses: Course[] = [
  {
    id: "full-stack",
    title: "Full Stack Development",
    description:
      "Master modern web development with React, Node.js, databases, and deployment workflows.",
    duration: "6 Months",
    mode: "Online & Offline",
    level: "Beginner to Advanced",
    icon: "code",
    features: ["Live Projects", "Industry Mentors", "Job Assistance"],
  },
  {
    id: "data-science",
    title: "Data Science & Analytics",
    description:
      "Learn Python, machine learning, statistical modeling, and data visualization techniques.",
    duration: "5 Months",
    mode: "Hybrid",
    level: "Intermediate",
    icon: "chart",
    features: ["Hands-on Labs", "Capstone Project", "Certification"],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description:
      "Build expertise in SEO, social media, paid ads, content strategy, and analytics.",
    duration: "4 Months",
    mode: "Online",
    level: "Beginner",
    icon: "megaphone",
    features: ["Campaign Projects", "Tool Training", "Portfolio Building"],
  },
  {
    id: "cloud-computing",
    title: "Cloud Computing",
    description:
      "Gain practical skills in AWS, Azure, DevOps, and cloud-native architecture.",
    duration: "5 Months",
    mode: "Online & Offline",
    level: "Intermediate to Advanced",
    icon: "cloud",
    features: ["Cloud Labs", "Certification Prep", "Mock Interviews"],
  },
];

export const features: Feature[] = [
  {
    title: "Expert Faculty",
    description:
      "Learn from industry professionals with years of real-world experience.",
    icon: "academic",
  },
  {
    title: "Personal Mentorship",
    description:
      "One-on-one guidance to help you stay on track and reach your goals.",
    icon: "mentor",
  },
  {
    title: "Placement Support",
    description:
      "Dedicated career services including resume reviews and interview prep.",
    icon: "placement",
  },
  {
    title: "Flexible Learning",
    description:
      "Choose from classroom, online, and hybrid formats that fit your schedule.",
    icon: "flexible",
  },
  {
    title: "Industry Certification",
    description:
      "Earn recognized credentials that strengthen your professional profile.",
    icon: "certified",
  },
  {
    title: "Lifetime Support",
    description:
      "Access alumni network and career guidance even after course completion.",
    icon: "support",
  },
];

export const placementStats = [
  { value: 500, suffix: "+", label: "Hiring Partners" },
  { value: 95, suffix: "%", label: "Placement Rate" },
  { value: 9.1, suffix: " LPA", label: "Highest Package", prefix: "₹" },
];

export const placements: Placement[] = [
  {
    company: "TCS",
    role: "Software Engineer",
    package: "₹6.5 LPA",
    initial: "T",
    color: "from-blue-600 to-blue-800",
  },
  {
    company: "Infosys",
    role: "Data Analyst",
    package: "₹5.8 LPA",
    initial: "I",
    color: "from-indigo-600 to-indigo-800",
  },
  {
    company: "Wipro",
    role: "Cloud Engineer",
    package: "₹7.2 LPA",
    initial: "W",
    color: "from-violet-600 to-violet-800",
  },
  {
    company: "HCL",
    role: "Full Stack Developer",
    package: "₹8.0 LPA",
    initial: "H",
    color: "from-sky-600 to-sky-800",
  },
  {
    company: "Accenture",
    role: "Digital Marketer",
    package: "₹5.5 LPA",
    initial: "A",
    color: "from-purple-600 to-purple-800",
  },
  {
    company: "Cognizant",
    role: "ML Engineer",
    package: "₹9.1 LPA",
    initial: "C",
    color: "from-cyan-600 to-cyan-800",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    role: "Full Stack Developer at TCS",
    quote:
      "Aayu Education transformed my career. The hands-on projects and mentorship prepared me for real industry challenges.",
    rating: 5,
    initials: "PS",
    avatarColor: "from-primary-500 to-primary-700",
  },
  {
    id: "2",
    name: "Rahul Verma",
    role: "Data Analyst at Infosys",
    quote:
      "The curriculum is up-to-date and practical. I landed my dream job within two months of completing the program.",
    rating: 5,
    initials: "RV",
    avatarColor: "from-violet-500 to-violet-700",
  },
  {
    id: "3",
    name: "Ananya Patel",
    role: "Digital Marketing Specialist",
    quote:
      "Excellent faculty and supportive environment. The placement team went above and beyond to help me succeed.",
    rating: 5,
    initials: "AP",
    avatarColor: "from-accent-400 to-accent-600",
  },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    alt: "Graduation ceremony celebration",
    category: "Events",
    src: "/images/gallery1.jpg",
  },
  {
    id: "2",
    alt: "Students in a classroom session",
    category: "Classroom",
    src: "/images/gallery2.jpg",
  },
  {
    id: "3",
    alt: "Industry expert workshop",
    category: "Workshops",
    src: "/images/gallery3.jpg",
  },
  {
    id: "4",
    alt: "Collaborative project work",
    category: "Projects",
    src: "/images/gallery4.jpg",
  },
  {
    id: "5",
    alt: "Campus infrastructure",
    category: "Labs",
    src: "/images/gallery5.jpg",
  },
  {
    id: "6",
    alt: "Placement drive event",
    category: "Placements",
    src: "/images/gallery6.jpg",
  },
];

export const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "What are the eligibility criteria for your courses?",
    answer:
      "Most courses require a minimum of 12th grade completion. Some advanced programs may require a bachelor's degree or prior technical knowledge. Contact our counselors for course-specific requirements.",
  },
  {
    id: "2",
    question: "Do you offer online and offline classes?",
    answer:
      "Yes, we offer classroom, online, and hybrid learning options. You can choose the format that best suits your schedule and learning preferences.",
  },
  {
    id: "3",
    question: "Is placement assistance included?",
    answer:
      "All our career-focused programs include placement support — resume building, mock interviews, and connections with 500+ hiring partners.",
  },
  {
    id: "4",
    question: "What payment options are available?",
    answer:
      "We offer flexible payment plans, EMI options, and scholarships for eligible students. Speak with our admissions team for details.",
  },
  {
    id: "5",
    question: "Will I receive a certificate upon completion?",
    answer:
      "Yes, you will receive an industry-recognized certificate upon successful completion of your program, along with project portfolio credentials.",
  },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Programs",
    links: [
      { label: "Full Stack Development", href: "#courses" },
      { label: "Data Science", href: "#courses" },
      { label: "Digital Marketing", href: "#courses" },
      { label: "Cloud Computing", href: "#courses" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#about" },
      { label: "Placements", href: "#placements" },
      { label: "Gallery", href: "#gallery" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Admissions", href: "#contact" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];
