"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { faqItems } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <Section
      id="faq"
      className="bg-gradient-to-b from-neutral-50 to-white"
      ariaLabelledby="faq-heading"
    >
      <Container>
        <SectionHeader
          id="faq-heading"
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about admissions, courses, and placements."
        />

        <div className="mx-auto grid max-w-3xl gap-3">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? "border-primary-200 bg-white shadow-md shadow-primary-900/5"
                    : "border-neutral-200/80 bg-white hover:border-neutral-300"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-trigger-${item.id}`}
                    className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        isOpen
                          ? "bg-primary-600 text-white"
                          : "bg-primary-50 text-primary-600"
                      }`}
                      aria-hidden="true"
                    >
                      <HelpCircle className="h-4 w-4" />
                    </span>
                    <span className="flex-1 text-sm font-semibold text-neutral-900 sm:text-base">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary-600 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${item.id}`}
                  hidden={!isOpen}
                  className="px-5 pb-5 sm:px-6 sm:pb-6"
                >
                  <div className="ml-[52px] border-l-2 border-primary-100 pl-4">
                    <p className="text-sm leading-relaxed text-neutral-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 text-center text-sm text-neutral-500">
          <MessageCircle className="h-4 w-4 text-primary-600" aria-hidden="true" />
          Still have questions?{" "}
          <a
            href="#contact"
            className="font-semibold text-primary-700 hover:text-primary-800"
          >
            Contact us
          </a>
        </p>
      </Container>
    </Section>
  );
}
