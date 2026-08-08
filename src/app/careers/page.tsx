import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { CareerForm } from "@/components/CareerForm";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Apply to join Happywinds Logos — graphic, admin, and marketing roles in Ahmedabad.",
};

export default function CareersPage() {
  return (
    <div className="pt-24 md:pt-28">
      <div className="site-grid grid items-start gap-10 pb-20 md:grid-cols-[0.9fr_1.1fr] md:gap-14 md:pb-28">
        <FadeIn>
          <p className="eyebrow mb-4">Careers</p>
          <h1 className="display text-4xl md:text-6xl lg:text-7xl">
            Join the studio.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg">
            Happywinds is always looking for people who care about logic,
            craft, and clear brands — across design, operations, and marketing.
          </p>

          <div className="mt-10 space-y-4 text-sm text-muted md:text-base">
            <p>
              <span className="text-ink">Based in</span> Ahmedabad
            </p>
            <p>
              <span className="text-ink">Founded</span> 2009 by Jyot Sana
            </p>
            <p>
              <span className="text-ink">Led in design</span> by Anilkumar
            </p>
          </div>

          <Link
            href="/about"
            className="mt-10 inline-flex text-sm underline-offset-4 hover:underline"
          >
            ← Back to Studio
          </Link>
        </FadeIn>

        <FadeIn delay={0.08}>
          <CareerForm />
        </FadeIn>
      </div>
    </div>
  );
}
