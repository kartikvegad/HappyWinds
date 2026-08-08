import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "./FadeIn";

export function LogicIntro() {
  return (
    <section className="relative overflow-hidden border-y border-line bg-bg-elevated">
      <div className="site-grid grid gap-10 py-20 md:grid-cols-2 md:gap-16 md:py-28">
        <FadeIn>
          <p className="eyebrow mb-4">The Happywinds method</p>
          <h2 className="display text-4xl md:text-6xl">
            A great logo is never just art.
            <span className="text-accent"> It is logic you can feel.</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted md:text-lg">
            We combine mathematical precision, deep brand thinking, and obsessive
            craft. Every mark we make has a reason — a visual argument that
            scales from business card to billboard.
          </p>
          <Link
            href="/logic"
            className="mt-8 inline-flex border-b border-ink pb-1 text-sm font-medium transition-opacity hover:opacity-60"
          >
            Explore logic-based logos
          </Link>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-square">
            <Image
              src="/assets/hero/process.jpg"
              alt="Logo construction sketches and geometric grids"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-6 text-bg md:p-8">
              <p className="text-sm uppercase tracking-[0.16em] text-white/70">
                Process
              </p>
              <p className="mt-2 max-w-sm text-lg leading-snug">
                From sketch grids to color systems — reasoning before decoration.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
