"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroShowcase } from "./HeroShowcase";
import { getHomeHeroProjects } from "@/data/work";

export function Hero() {
  const showcase = getHomeHeroProjects();

  return (
    <>
      <HeroShowcase projects={showcase} />

      <section className="border-b border-line bg-bg">
        <div className="site-grid flex flex-col justify-center py-12 sm:py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl"
          >
            <p className="eyebrow mb-4 sm:mb-5">Ahmedabad · Since 2009</p>
            <h1 className="display text-[clamp(2.5rem,12vw,7.5rem)] text-ink">
              Happywinds
            </h1>
            <p className="mt-3 display text-[clamp(1.25rem,5vw,2.75rem)] text-ink-soft sm:mt-4">
              Logic-based logos.
            </p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:mt-6 sm:text-lg md:text-xl">
              We design meaning into marks — identities built on reason, craft,
              and the quiet confidence to stand out.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <Link
                href="/work"
                className="inline-flex items-center bg-ink px-5 py-3 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5 sm:px-6 sm:py-3.5"
              >
                View the work
              </Link>
              <Link
                href="/logic"
                className="inline-flex items-center border border-ink/20 px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-ink sm:px-6 sm:py-3.5"
              >
                See the logic
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
