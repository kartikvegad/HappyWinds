"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./FadeIn";

const stats = [
  { end: 2000, suffix: "+", label: "Brands Built", duration: 2000 },
  { end: 150, suffix: "", label: "Industries", duration: 1800 },
  { end: 12, suffix: "+", label: "Years", duration: 1600 },
] as const;

function useCountUp(end: number, duration: number, active: boolean) {
  const [value, setValue] = useState(end);

  useEffect(() => {
    if (!active) return;

    setValue(0);
    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, duration, end]);

  return value;
}

function StatItem({
  end,
  suffix,
  label,
  duration,
  active,
  delay,
}: {
  end: number;
  suffix: string;
  label: string;
  duration: number;
  active: boolean;
  delay: number;
}) {
  const value = useCountUp(end, duration, active);

  return (
    <FadeIn delay={delay} className="text-center sm:text-left">
      <p className="display text-5xl tabular-nums md:text-6xl">
        {value}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </FadeIn>
  );
}

export function StatsBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="border-y border-line bg-bg-elevated"
      aria-label="Studio statistics"
    >
      <div className="site-grid grid grid-cols-1 gap-10 py-14 sm:grid-cols-3 md:py-20">
        {stats.map((stat, i) => (
          <StatItem
            key={stat.label}
            end={stat.end}
            suffix={stat.suffix}
            label={stat.label}
            duration={stat.duration}
            active={active}
            delay={i * 0.06}
          />
        ))}
      </div>
    </section>
  );
}
