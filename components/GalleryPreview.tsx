import Image from "next/image";
import { Camera } from "lucide-react";
import { galleryItems } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function GalleryPreview() {
  return (
    <Section id="gallery" ariaLabelledby="gallery-heading">
      <Container>
        <SectionHeader
          id="gallery-heading"
          eyebrow="Gallery"
          title="Life at Aayu Education"
          description="A glimpse into our vibrant campus, workshops, events, and student achievements."
        />

        <ul className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 lg:gap-4">
          {galleryItems.map((item, index) => (
            <li
              key={item.id}
              className={`group relative overflow-hidden rounded-xl ${
                index === 0
                  ? "col-span-2 aspect-[16/9] md:col-span-2 md:row-span-2 md:aspect-auto md:min-h-[320px]"
                  : "aspect-square"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 66vw"
                    : "(max-width: 768px) 50vw, 33vw"
                }
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/70 via-neutral-900/10 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-1 p-3 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:p-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm sm:text-xs">
                  <Camera className="h-3 w-3" aria-hidden="true" />
                  {item.category}
                </span>
                <p className="mt-1.5 text-xs font-medium text-white sm:text-sm">
                  {item.alt}
                </p>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 transition-opacity duration-300 group-hover:opacity-0 sm:p-4">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-accent-300 sm:text-xs">
                  {item.category}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
