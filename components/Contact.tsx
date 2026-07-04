"use client";

import { FormEvent, useState } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { SITE } from "@/lib/constants";
import { courses } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";

type FormState = {
  name: string;
  email: string;
  phone: string;
  course: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  course: "",
  message: "",
};

export function Contact() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialFormState);
  };

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Section id="contact" ariaLabelledby="contact-heading">
      <Container>
        <SectionHeader
          id="contact-heading"
          eyebrow="Contact Us"
          title="Get in Touch"
          description="Have questions about admissions or courses? Reach out and our team will respond within 24 hours."
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          <address className="not-italic lg:col-span-2">
            <ul className="space-y-5">
              <li className="flex gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700"
                  aria-hidden="true"
                >
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    Address
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                    {SITE.address}
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700"
                  aria-hidden="true"
                >
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    Phone
                  </p>
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="mt-1 block text-sm text-primary-700 transition-colors hover:text-primary-800"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700"
                  aria-hidden="true"
                >
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    Email
                  </p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="mt-1 block text-sm text-primary-700 transition-colors hover:text-primary-800"
                  >
                    {SITE.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-700"
                  aria-hidden="true"
                >
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    Office Hours
                  </p>
                  <p className="mt-1 text-sm text-neutral-600">{SITE.hours}</p>
                </div>
              </li>
            </ul>
          </address>

          <div className="lg:col-span-3">
            {submitted ? (
              <div
                className="rounded-2xl border border-green-200 bg-green-50 p-6 sm:p-8"
                role="status"
              >
                <p className="text-base font-semibold text-green-800">
                  Thank you for reaching out!
                </p>
                <p className="mt-2 text-sm text-green-700">
                  We have received your message and will get back to you within
                  24 hours.
                </p>
                <button
                  type="button"
                  className="mt-4 text-sm font-semibold text-green-800 underline underline-offset-2"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-neutral-200/80 bg-white p-6 shadow-sm sm:p-7"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-neutral-900"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => updateField("name", e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-neutral-900"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-medium text-neutral-900"
                    >
                      Phone
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label
                      htmlFor="contact-course"
                      className="block text-sm font-medium text-neutral-900"
                    >
                      Course Interest
                    </label>
                    <select
                      id="contact-course"
                      name="course"
                      required
                      value={form.course}
                      onChange={(e) => updateField("course", e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                    >
                      <option value="">Select a course</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-neutral-900"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={4}
                      required
                      value={form.message}
                      onChange={(e) => updateField("message", e.target.value)}
                      className="mt-1.5 w-full resize-y rounded-lg border border-neutral-300 px-4 py-2.5 text-sm text-neutral-900 outline-none transition-colors focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                      placeholder="Tell us about your goals..."
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary-700/20 transition-all hover:-translate-y-0.5 hover:bg-primary-800 sm:w-auto"
                >
                  Send Message
                  <Send className="h-4 w-4" aria-hidden="true" />
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}
