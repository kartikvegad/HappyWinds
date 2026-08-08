import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { projects } from "@/data/work";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected logo and brand identity projects by Happywinds Logos — logic-based marks across industries.",
};

export default function WorkPage() {
  return (
    <div className="pt-24 md:pt-28">
      <div className="site-grid pb-10 md:pb-14">
        <FadeIn>
          <p className="eyebrow mb-4">Work</p>
          <h1 className="display max-w-4xl text-4xl sm:text-5xl md:text-7xl">
            Selected identities.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            Each project begins with a clear idea — then becomes a mark that
            carries meaning across every surface.
          </p>
        </FadeIn>
      </div>

      <div className="site-grid grid gap-x-5 gap-y-10 pb-24 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3">
        {projects.map((project, i) => (
          <FadeIn key={project.slug} delay={(i % 3) * 0.05}>
            <Link href={`/work/${project.slug}`} className="work-card group block">
              <div className="reveal-image aspect-[4/5] bg-bg-elevated">
                <Image
                  src={project.mockup}
                  alt={`${project.name} mockup`}
                  width={900}
                  height={1125}
                  className="h-full w-full object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="work-card-meta mt-4">
                <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted">
                  {project.category}
                </p>
                <h2 className="display mt-1 text-2xl md:text-3xl">
                  {project.name}
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Logic · {project.logic}
                </p>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
