import Image from "next/image";
import Link from "next/link";
import { getProjectLogo, type Project } from "@/data/work";
import { FadeIn } from "./FadeIn";

export function FeaturedWork({ projects }: { projects: Project[] }) {
  return (
    <section className="pb-8 pt-20 md:pt-28">
      <div className="site-grid mb-12 flex items-end justify-between gap-6 md:mb-16">
        <FadeIn>
          <p className="eyebrow mb-3">Selected work</p>
          <h2 className="display max-w-3xl text-4xl md:text-6xl">
            Brands that make sense — and look inevitable.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1} className="hidden shrink-0 md:block">
          <Link href="/work" className="text-sm underline-offset-4 hover:underline">
            All projects →
          </Link>
        </FadeIn>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => (
          <FeaturedRow key={project.slug} project={project} index={index} />
        ))}
      </div>

      <div className="site-grid mt-10 md:hidden">
        <Link href="/work" className="text-sm underline-offset-4 hover:underline">
          All projects →
        </Link>
      </div>
    </section>
  );
}

function FeaturedRow({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;
  const logo = getProjectLogo(project);

  return (
    <Link
      href={`/work/${project.slug}`}
      className="work-card group border-t border-line"
    >
      <div
        className={`site-grid grid items-center gap-8 py-10 md:grid-cols-2 md:gap-12 md:py-16 ${
          reverse ? "md:[&>*:first-child]:order-2" : ""
        }`}
      >
        <FadeIn>
          <div className="flex aspect-[4/3] items-center justify-center bg-bg-elevated p-10 md:aspect-[5/4] md:p-14">
            <Image
              src={logo}
              alt={`${project.name} logo`}
              width={900}
              height={700}
              className="h-full max-h-56 w-auto object-contain md:max-h-72"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="work-card-meta">
          <p className="eyebrow mb-4">Logo logic · {project.logic}</p>
          <h3 className="display text-4xl md:text-5xl lg:text-6xl">
            {project.name}
          </h3>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted md:text-lg">
            {project.tagline}. {project.category}.
          </p>
          <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium">
            View case study
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </span>
        </FadeIn>
      </div>
    </Link>
  );
}
