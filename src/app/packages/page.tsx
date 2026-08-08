import Link from "next/link";
import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { packages } from "@/data/work";

export const metadata: Metadata = {
  title: "Packages",
  description:
    "Startup, Silver, and Gold logo packages from Happywinds — choose the depth, keep the logic.",
};

const matrixRows: {
  key: keyof (typeof packages)[number]["matrix"];
  label: string;
}[] = [
  { key: "concepts", label: "Concepts explored" },
  { key: "revisions", label: "Revision rounds" },
  { key: "logoFiles", label: "Logo files" },
  { key: "stationery", label: "Stationery & collateral" },
  { key: "guidelines", label: "Brand guidelines" },
  { key: "support", label: "Post-delivery support" },
];

const faqs = [
  {
    question: "How do I know which package is right for me?",
    answer:
      "Most first-time founders start with Startup. If you already know you need stationery or packaging designed alongside the logo, Silver or Gold saves you a second project later. Not sure? Tell us your scope on the contact page and we'll recommend one.",
  },
  {
    question: "Can I upgrade mid-project?",
    answer:
      "Yes. If a Startup project grows into something bigger once you see the direction, we credit the work already done toward a Silver or Gold scope.",
  },
  {
    question: "What do you need from me to start?",
    answer:
      "A short brief — what the business does, who it serves, any names or words that feel non-negotiable, and any brands you admire (or want to avoid looking like). We turn that into concepts within the first week.",
  },
  {
    question: "Do revisions carry across rounds?",
    answer:
      "Each round is a full pass on the direction you pick, not a patch of small notes. That keeps feedback focused and the mark improving with intent, rather than drifting.",
  },
  {
    question: "What file formats do I get at the end?",
    answer:
      "Vector source files (AI/EPS/SVG), print-ready PDFs, and web-ready PNG/JPG exports in color, black, and white — organised into a single handoff folder.",
  },
];

export default function PackagesPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="site-grid pb-12 text-center md:pb-16">
        <FadeIn>
          <p className="eyebrow mb-4">Packages</p>
          <h1 className="display mx-auto max-w-3xl text-4xl md:text-6xl lg:text-7xl">
            Simple, clear packages that grow with you.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg">
            Every package delivers Happywinds reasoning. The difference is how
            far we explore — and how complete the toolkit becomes.
          </p>
        </FadeIn>
      </section>

      <section className="site-grid pb-20 md:pb-28">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, i) => {
            const featured = pkg.id === "silver";
            return (
              <FadeIn key={pkg.id} delay={i * 0.06}>
                <article
                  className={`flex h-full flex-col border bg-bg-elevated p-7 md:p-8 ${
                    featured
                      ? "border-ink shadow-[0_20px_50px_rgba(12,12,12,0.08)]"
                      : "border-line"
                  }`}
                >
                  {featured ? (
                    <p className="eyebrow mb-4 text-accent">Most chosen</p>
                  ) : (
                    <p className="eyebrow mb-4 opacity-0">Package</p>
                  )}

                  <h2 className="display text-2xl md:text-3xl">{pkg.name}</h2>
                  <p className="mt-2 text-sm text-muted">{pkg.subtitle}</p>

                  <p className="display mt-8 text-4xl md:text-5xl">
                    {pkg.timeline}
                  </p>
                  <p className="mt-2 text-sm text-muted">Typical delivery</p>

                  <Link
                    href="/contact"
                    className={`mt-8 inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium transition-transform hover:scale-[1.02] active:scale-[0.98] ${
                      featured
                        ? "bg-ink text-bg"
                        : "border border-ink bg-transparent text-ink hover:bg-ink hover:text-bg"
                    }`}
                  >
                    Get started
                    <span aria-hidden>→</span>
                  </Link>
                  <p className="mt-3 text-xs text-muted">{pkg.idealFor}</p>

                  <ul className="mt-8 flex flex-1 flex-col gap-3 border-t border-line pt-8">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-snug text-ink-soft"
                      >
                        <span
                          className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-accent"
                          aria-hidden
                        >
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </FadeIn>
            );
          })}

          <FadeIn delay={0.2}>
            <article className="flex h-full flex-col border border-line bg-bg-elevated p-7 md:p-8">
              <p className="eyebrow mb-4 opacity-0">Custom</p>
              <h2 className="display text-2xl md:text-3xl">Custom</h2>
              <p className="mt-2 text-sm text-muted">Built around your brief.</p>

              <p className="display mt-8 text-4xl md:text-5xl">Let&rsquo;s talk</p>
              <p className="mt-2 text-sm text-muted">Scoped after a short call</p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center justify-center gap-2 border border-ink px-5 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-bg"
              >
                Contact us
                <span aria-hidden>→</span>
              </Link>
              <p className="mt-3 text-xs text-muted">
                For multi-brand systems, packaging programmes, or unusual scope.
              </p>

              <ul className="mt-8 flex flex-1 flex-col gap-3 border-t border-line pt-8">
                {[
                  "Tailored concept depth",
                  "Custom deliverables",
                  "Priority scheduling",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-snug text-ink-soft"
                  >
                    <span
                      className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center text-accent"
                      aria-hidden
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-line bg-bg-elevated py-16 md:py-24">
        <div className="site-grid">
          <FadeIn className="mb-10 max-w-2xl md:mb-14">
            <p className="eyebrow mb-3">Compare</p>
            <h2 className="display text-3xl md:text-5xl">
              Every package, side by side.
            </h2>
          </FadeIn>

          <FadeIn delay={0.05}>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-left text-sm md:text-base">
                <thead>
                  <tr className="border-b border-line">
                    <th className="py-4 pr-4 font-normal text-muted">&nbsp;</th>
                    {packages.map((pkg) => (
                      <th key={pkg.id} className="px-4 py-4 font-normal">
                        <span className="display block text-xl md:text-2xl">
                          {pkg.name}
                        </span>
                        <span className="mt-1 block text-xs font-normal text-muted">
                          {pkg.timeline}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {matrixRows.map((row) => (
                    <tr key={row.key} className="border-b border-line/70">
                      <td className="py-4 pr-4 text-muted">{row.label}</td>
                      {packages.map((pkg) => (
                        <td key={pkg.id} className="px-4 py-4 text-ink-soft">
                          {pkg.matrix[row.key]}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="site-grid py-16 md:py-24">
        <FadeIn className="mb-10 max-w-2xl md:mb-14">
          <p className="eyebrow mb-3">Questions</p>
          <h2 className="display text-3xl md:text-5xl">
            Before you choose a package.
          </h2>
        </FadeIn>

        <div className="mx-auto max-w-3xl divide-y divide-line border-t border-line">
          {faqs.map((faq, i) => (
            <FadeIn key={faq.question} delay={(i % 3) * 0.05}>
              <details className="group py-5 md:py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium marker:content-none md:text-lg">
                  {faq.question}
                  <span className="shrink-0 text-xl leading-none text-muted transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                  {faq.answer}
                </p>
              </details>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
