import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a logo project with Happywinds Logos. Call, email, or send a brief.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-28">
      <div className="site-grid grid items-start gap-10 pb-16 md:grid-cols-[0.9fr_1.1fr] md:gap-12 md:pb-20">
        <FadeIn>
          <p className="eyebrow mb-4">Contact</p>
          <h1 className="display text-4xl md:text-6xl lg:text-7xl">
            Let&rsquo;s talk about your brand.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Share your brief. We respond with options via WhatsApp or email —
            you choose a direction, we refine with your feedback.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="eyebrow mb-2">Phone / WhatsApp</p>
              <a
                href="tel:+919664829116"
                className="text-2xl font-semibold tracking-[0.02em] text-ink tabular-nums transition-opacity hover:opacity-60 md:text-3xl"
              >
                +91 96648 29116
              </a>
            </div>
            <div>
              <p className="eyebrow mb-2">Email</p>
              <a
                href="mailto:hihappywinds@gmail.com"
                className="text-lg transition-opacity hover:opacity-60 md:text-xl"
              >
                hihappywinds@gmail.com
              </a>
            </div>
            <div>
              <p className="eyebrow mb-2">Studio hours</p>
              <p className="text-base leading-relaxed text-muted">
                Mon – Sat, 10:00 – 19:00 IST
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="md:mt-4">
          <ContactForm />
        </FadeIn>
      </div>
    </div>
  );
}
