import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./FadeIn";

export function AmbitionBand() {
  return (
    <section className="relative min-h-[60vh] overflow-hidden sm:min-h-[70vh]">
      <Image
        src="/assets/hero/expressive.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-ink/55" />
      <div className="site-grid relative z-10 flex min-h-[60vh] items-end py-12 sm:min-h-[70vh] sm:py-16 md:py-24">
        <FadeIn className="max-w-4xl text-bg">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-white sm:mb-4">
            Our ambition
          </p>
          <h2 className="display text-[2rem] leading-[1.05] sm:text-4xl md:text-6xl lg:text-7xl">
            Stand out with an outstanding logo.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:mt-6 sm:text-base md:text-lg">
            Your logo is the face of your business. We make it expressive,
            logical, and built to carry your brand through every room it enters.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex bg-bg px-5 py-3 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 sm:mt-10 sm:px-6 sm:py-3.5"
          >
            Start a project
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
