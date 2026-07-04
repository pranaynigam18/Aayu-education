import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Aayu Education | Empowering Futures Through Quality Education",
    template: "%s | Aayu Education",
  },
  description:
    "Industry-aligned courses, expert mentors, and proven placement support. Transform your career with Aayu Education.",
  keywords: [
    "education",
    "courses",
    "training",
    "placements",
    "career development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full scroll-smooth antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
