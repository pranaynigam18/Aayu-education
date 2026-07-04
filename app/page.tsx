import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { AboutPreview } from "@/components/AboutPreview";
import { Courses } from "@/components/Courses";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Placements } from "@/components/Placements";
import { Testimonials } from "@/components/Testimonials";
import { GalleryPreview } from "@/components/GalleryPreview";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <AboutPreview />
        <Courses />
        <WhyChooseUs />
        <Placements />
        <Testimonials />
        <GalleryPreview />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
