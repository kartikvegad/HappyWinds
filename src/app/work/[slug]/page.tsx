import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import {
  getProject,
  getProjectLogo,
  getRelatedProjects,
  projects,
} from "@/data/work";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project" };
  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const isLogoHero = project.heroStyle === "logo";
  const logo = getProjectLogo(project);
  const logicSrc = project.logicImage ?? logo;

  const related = getRelatedProjects(project.slug, 3);

  return (
    <article className="pt-24 md:pt-28">
      {/* 1. Mockup */}
      <FadeIn>
        <div className="relative aspect-[16/10] w-full bg-bg-elevated md:aspect-[21/9]">
          <Image
            src={project.mockup}
            alt={
              isLogoHero
                ? `${project.name} logo`
                : `${project.name} application`
            }
            fill
            priority
            className={
              isLogoHero
                ? "object-contain p-10 md:p-16"
                : "object-cover object-center"
            }
            sizes="100vw"
          />
        </div>
      </FadeIn>

      {/* 2. Content + logic image */}
      <div className="site-grid grid gap-10 py-14 md:grid-cols-2 md:items-start md:gap-14 md:py-20">
        <FadeIn>
          <p className="eyebrow mb-4">
            {project.category} · Logo logic · {project.logic}
          </p>
          <h1 className="display text-4xl md:text-6xl lg:text-7xl">
            {project.name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
            {project.description}
          </p>
          <p className="mt-6 text-muted">
            Tagline · <span className="text-ink">{project.tagline}</span>
          </p>
          <div
            className="mt-8 h-1.5 w-24"
            style={{ backgroundColor: project.accent }}
          />
          <p className="mt-8 max-w-md text-sm leading-relaxed text-muted md:text-base">
            This mark was built the Happywinds way — starting from a true idea
            about the business, then reasoning forward until the shape, the
            type, and the name lock into one inevitable form.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="overflow-hidden border border-line bg-bg-elevated">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={logicSrc}
                alt={`${project.name} logo logic breakdown`}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </FadeIn>
      </div>

      <section className="border-t border-line py-16 md:py-24">
        <div className="site-grid">
          <div className="mb-10 flex items-end justify-between">
            <h2 className="display text-3xl md:text-4xl">More work</h2>
            <Link href="/work" className="text-sm hover:underline">
              All projects →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {related.map((item) => (
              <Link key={item.slug} href={`/work/${item.slug}`} className="group">
                <div className="flex aspect-[4/3] items-center justify-center bg-bg-elevated p-8">
                  <Image
                    src={getProjectLogo(item)}
                    alt={item.name}
                    width={700}
                    height={525}
                    className="h-full max-h-32 w-auto object-contain"
                  />
                </div>
                <p className="mt-3 display text-xl">{item.name}</p>
                <p className="text-sm text-muted">{item.category}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
