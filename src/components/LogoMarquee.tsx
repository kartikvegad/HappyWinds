import Image from "next/image";
import Link from "next/link";
import { getMarqueeProjects, getProjectLogo } from "@/data/work";
import { FadeIn } from "./FadeIn";

type Mark = {
  slug: string;
  name: string;
  src: string;
};

const ROW_SPEEDS = ["42s", "50s", "46s"] as const;

function splitIntoRows(marks: Mark[], rowCount: number): Mark[][] {
  const rows: Mark[][] = Array.from({ length: rowCount }, () => []);
  marks.forEach((mark, i) => {
    rows[i % rowCount]?.push(mark);
  });

  // Keep each row visually dense even if the pool is uneven.
  return rows.map((row, i) => {
    if (row.length >= 4) return row;
    const filler = marks.filter((m) => !row.some((r) => r.slug === m.slug));
    return [...row, ...filler].slice(0, Math.max(4, row.length + 2 + i));
  });
}

function MarqueeRow({
  marks,
  reverse,
  duration,
  rowIndex,
}: {
  marks: Mark[];
  reverse: boolean;
  duration: string;
  rowIndex: number;
}) {
  const row = [...marks, ...marks];

  return (
    <div className="overflow-hidden py-1.5">
      <div
        className={`marquee items-center ${reverse ? "marquee-reverse" : ""}`}
        style={{ animationDuration: duration }}
      >
        {row.map((logo, i) => (
          <Link
            key={`${rowIndex}-${logo.slug}-${i}`}
            href={`/work/${logo.slug}`}
            title={logo.name}
            className="flex h-40 w-60 shrink-0 items-center justify-center bg-bg-elevated px-3 transition-opacity hover:opacity-70 md:h-48 md:w-72"
          >
            <Image
              src={logo.src}
              alt={logo.name}
              width={260}
              height={140}
              className="max-h-28 w-auto max-w-[92%] object-contain md:max-h-36"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function LogoMarquee() {
  const marks = getMarqueeProjects().map((p) => ({
    slug: p.slug,
    name: p.name,
    src: getProjectLogo(p),
  }));
  const rows = splitIntoRows(marks, 3);

  return (
    <section className="overflow-hidden py-16 md:py-24">
      <div className="site-grid mb-10">
        <FadeIn>
          <p className="eyebrow mb-3">Hundreds of marks since 2009</p>
          <h2 className="display text-3xl md:text-5xl">Our Clients</h2>
        </FadeIn>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent md:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent md:w-28" />
        <div className="flex flex-col gap-3 md:gap-4">
          {rows.map((rowMarks, i) => (
            <MarqueeRow
              key={i}
              marks={rowMarks}
              reverse={i % 2 === 1}
              duration={ROW_SPEEDS[i] ?? "45s"}
              rowIndex={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
