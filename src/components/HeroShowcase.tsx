"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Project } from "@/data/work";

const INTERVAL_MS = 8000;

export function HeroShowcase({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  const active = projects[index];

  useEffect(() => {
    if (projects.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % projects.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [projects.length]);

  if (!active) return null;

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-ink">
      <AnimatePresence mode="sync">
        <motion.div
          key={active.slug}
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={active.mockup}
            alt={`${active.name} mockup`}
            fill
            priority={index === 0}
            quality={92}
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/50 via-ink/15 to-transparent sm:h-36 md:h-44" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent sm:h-48" />

      <div className="relative z-10 flex min-h-[100svh] flex-col items-center justify-end gap-3 px-3 pb-6 pt-24 sm:gap-4 sm:px-4 sm:pb-8 md:pb-10">
        <Link
          href={`/work/${active.slug}`}
          className="group pointer-events-auto flex w-full max-w-lg items-center justify-between gap-3 rounded-sm border border-white/20 bg-bg/55 px-3.5 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.18)] backdrop-blur-md transition-colors hover:border-white/40 hover:bg-bg/70 sm:max-w-xl sm:gap-5 sm:px-5 sm:py-3.5 md:px-6"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={active.slug}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.4 }}
              className="min-w-0 flex-1"
            >
              <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted sm:text-[11px]">
                {active.category}
              </p>
              <p className="display mt-0.5 truncate text-lg leading-tight sm:text-2xl md:text-[1.65rem]">
                {active.name}
              </p>
              <p className="mt-0.5 hidden truncate text-sm text-muted sm:block">
                {active.tagline}
              </p>
            </motion.div>
          </AnimatePresence>
          <span className="shrink-0 text-xs font-medium whitespace-nowrap sm:text-sm">
            <span className="sm:hidden">View →</span>
            <span className="hidden sm:inline">
              View case study
              <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>
          </span>
        </Link>

        <div className="pointer-events-auto flex items-center justify-center gap-2 sm:gap-3">
          {projects.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              aria-label={`Show ${p.name}`}
              aria-current={i === index ? "true" : undefined}
              onClick={() => setIndex(i)}
              className="flex h-8 w-8 cursor-pointer items-center justify-center sm:h-4 sm:w-8"
            >
              <span
                className={`block h-0.5 w-5 transition-colors sm:w-full ${
                  i === index ? "bg-bg" : "bg-bg/35 hover:bg-bg/55"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
