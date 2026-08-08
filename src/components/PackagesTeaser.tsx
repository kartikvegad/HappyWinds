import Image from "next/image";
import Link from "next/link";
import { packages } from "@/data/work";
import { FadeIn } from "./FadeIn";

export function PackagesTeaser() {
  return (
    <section className="border-t border-line py-20 md:py-28">
      <div className="site-grid">
        <FadeIn className="mb-12 max-w-3xl md:mb-16">
          <p className="eyebrow mb-3">Packages</p>
          <h2 className="display text-4xl md:text-6xl">
            Choose the depth. Keep the logic.
          </h2>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg, i) => (
            <FadeIn key={pkg.id} delay={i * 0.08}>
              <Link
                href="/packages"
                className="group block h-full border border-line bg-bg-elevated transition-colors hover:border-ink/30"
              >
                <div className="reveal-image aspect-[4/3]">
                  <Image
                    src={pkg.image}
                    alt={`${pkg.name} package sample`}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <p className="eyebrow mb-2">{pkg.name}</p>
                  <h3 className="display text-2xl md:text-3xl">{pkg.subtitle}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {pkg.description}
                  </p>
                  <span className="mt-6 inline-block text-sm font-medium transition-transform group-hover:translate-x-1">
                    View package →
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
