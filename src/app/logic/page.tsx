import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { getProjectLogo, projects } from "@/data/work";

export const metadata: Metadata = {
  title: "Logic-Based Logos",
  description:
    "How Happywinds turns real-world meaning into logos — footprint, diamond, bridge, knife, horn, and more.",
};

const principles = [
  {
    title: "Meaning first",
    body: "Every identity starts with a true idea — industry, product, emotion — before a single curve is drawn.",
  },
  {
    title: "Visible reasoning",
    body: "We show the leap from inspiration to mark. The logic is not a secret; it is the selling point.",
  },
  {
    title: "Craft that scales",
    body: "Grid, type, and color systems so the mark works on a seal, a sachet, a stage, or a skyline.",
  },
];

export default function LogicPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="site-grid pb-16 md:pb-20">
        <FadeIn>
          <p className="eyebrow mb-4 font-bold tracking-[0.2em] text-ink">
            Logic-based logos
          </p>
          <h1 className="display max-w-5xl text-5xl md:text-7xl lg:text-8xl">
            The X-factor in our logo.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            See it again. You missed the real magic. Happywinds builds logos
            where form follows a clear idea — so the brand is remembered for
            reason, not decoration.
          </p>
        </FadeIn>
      </section>

      <FadeIn>
        <div className="relative aspect-[16/9] w-full md:aspect-[21/8]">
          <Image
            src="/assets/hero/x-factor.jpg"
            alt="The X-factor — logic at the center of design"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
        </div>
      </FadeIn>

      <section className="site-grid grid gap-8 py-16 md:grid-cols-3 md:gap-10 md:py-24">
        {principles.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.08}>
            <p className="eyebrow mb-3">0{i + 1}</p>
            <h2 className="display text-2xl md:text-3xl">{item.title}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
              {item.body}
            </p>
          </FadeIn>
        ))}
      </section>

      <section className="border-t border-line bg-bg-elevated py-16 md:py-24">
        <div className="site-grid mb-12">
          <FadeIn>
            <p className="eyebrow mb-3">Case logic</p>
            <h2 className="display text-4xl md:text-5xl">
              Best of the method.
            </h2>
          </FadeIn>
        </div>

        <div className="site-grid flex flex-col gap-8 md:gap-10">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/work/${project.slug}`}
              className="group grid border border-line bg-bg transition-colors hover:border-ink/25 md:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="flex items-center justify-center bg-bg-elevated px-5 py-7 md:min-h-[260px] md:px-8 md:py-9">
                {/* Fixed optical frame so wide marks (O3) and padded marks share one size */}
                <div className="relative aspect-[2/1] w-full max-w-[30rem] md:max-w-[34rem]">
                  <Image
                    src={getProjectLogo(project)}
                    alt={`${project.name} logo`}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 90vw, 512px"
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between p-6 md:p-10">
                <div>
                  <p className="eyebrow mb-3">Logo logic · {project.logic}</p>
                  <h3 className="display text-3xl md:text-4xl">{project.name}</h3>
                  <p className="mt-3 text-sm text-muted md:text-base">
                    {project.category} · {project.tagline}
                  </p>
                </div>
                <span className="mt-8 text-sm font-medium transition-transform group-hover:translate-x-1">
                  Open case study →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="site-grid grid gap-10 py-20 md:grid-cols-2 md:py-28">
        <FadeIn>
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/assets/hero/x-factor-new.jpg"
              alt="Logic and precision — the X-factor behind every mark"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1} className="flex flex-col justify-center">
          <p className="eyebrow mb-4">Stand out</p>
          <h2 className="display text-4xl md:text-5xl">
            Let your logo be the face of the business.
          </h2>
          <p className="mt-5 text-muted leading-relaxed">
            We sketch, test geometry, specify color, and prove the idea in
            mockups — until the mark feels inevitable. That is the Happywinds
            difference.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex w-fit bg-ink px-6 py-3.5 text-sm font-medium text-bg"
          >
            Brief us on your brand
          </Link>
        </FadeIn>
      </section>
    </div>
  );
}
