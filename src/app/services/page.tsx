import Link from "next/link";
import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Services",
  description:
    "From brand discovery to logo design, motion, and launch — the full range of services offered by Happywinds Logos.",
};

type Service = {
  letter: string;
  title: string;
  items: { name: string; body: string }[];
  quote: { text: string; author: string; role: string };
};

const services: Service[] = [
  {
    letter: "A",
    title: "Discover",
    items: [
      {
        name: "Brand Audit",
        body: "A clear-eyed look at how your name, mark, and message actually land today.",
      },
      {
        name: "Market & Competitor Scan",
        body: "Where you sit against the category — and the white space nobody has claimed yet.",
      },
      {
        name: "Positioning Workshop",
        body: "A working session to pin down the one idea your logo needs to carry.",
      },
    ],
    quote: {
      text: "Happywinds asked better questions about our business than we did. The logic came before a single sketch.",
      author: "Founder",
      role: "Course Bridge",
    },
  },
  {
    letter: "B",
    title: "Strategy",
    items: [
      {
        name: "Naming Support",
        body: "Sense-checking, sharpening, or shortlisting a name that a logo can actually be built on.",
      },
      {
        name: "Brand Narrative",
        body: "The one-paragraph story your team, clients, and vendors all tell the same way.",
      },
      {
        name: "Logic Mapping",
        body: "Turning your industry, product, and values into visual raw material — before design starts.",
      },
    ],
    quote: {
      text: "We came in with a name and a rough idea. Happywinds left us with a reason for every line in the mark.",
      author: "Co-founder",
      role: "Amantra Investment",
    },
  },
  {
    letter: "C",
    title: "Design",
    items: [
      {
        name: "Logo & Mark",
        body: "Primary logo, monogram, and icon — explored in concepts, refined to one system.",
      },
      {
        name: "Typography System",
        body: "Headline and body pairings that hold the same tone as the mark.",
      },
      {
        name: "Color & Pattern",
        body: "A palette and supporting pattern language built to scale from app icon to hoarding.",
      },
    ],
    quote: {
      text: "Every option they showed had a reason behind it. Picking a direction felt like a decision, not a guess.",
      author: "Marketing Lead",
      role: "Centinel",
    },
  },
  {
    letter: "D",
    title: "Identity",
    items: [
      {
        name: "Stationery & Collateral",
        body: "Business cards, letterheads, and decks that carry the system consistently.",
      },
      {
        name: "Packaging Application",
        body: "Labels, cartons, and pouches designed to work in-hand, on-shelf, and in bulk.",
      },
      {
        name: "Signage & Environmental",
        body: "Storefronts, hoardings, and interiors that read the brand from a distance.",
      },
    ],
    quote: {
      text: "The packaging mockups alone sold the rebrand to our distributors before we'd even printed one carton.",
      author: "Director",
      role: "Rich Mmoo",
    },
  },
  {
    letter: "E",
    title: "Motion",
    items: [
      {
        name: "Logo Animation",
        body: "A short, reusable reveal for intros, sign-offs, and app splash screens.",
      },
      {
        name: "Social Motion Kit",
        body: "Templated motion assets so every post still feels unmistakably yours.",
      },
      {
        name: "Brand Video Intro",
        body: "A branded open for pitch decks, reels, and product walkthroughs.",
      },
    ],
    quote: {
      text: "Our logo now moves the same way our product does. Small detail, huge difference on launch day.",
      author: "Founder",
      role: "ChaiBot",
    },
  },
  {
    letter: "F",
    title: "Launch",
    items: [
      {
        name: "Brand Guidelines",
        body: "One document your whole team — and every vendor after us — can design from.",
      },
      {
        name: "Asset Handoff",
        body: "Every file, in every format, organised the way your team actually works.",
      },
      {
        name: "Launch Support",
        body: "On-call refinements through your first print run, first store, or first ad set.",
      },
    ],
    quote: {
      text: "Six months after handoff, they still answered a WhatsApp message about a sizing question in ten minutes.",
      author: "Operations Head",
      role: "Rostrum",
    },
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-28">
      <div className="site-grid pb-14 md:pb-20">
        <FadeIn>
          <p className="eyebrow mb-4">Services</p>
          <h1 className="display max-w-4xl text-5xl md:text-7xl">
            From first idea to finished brand.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
            Whether you need a single, sharp logo or a complete identity
            system, our services range from discovery all the way through to
            launch — each step built on the same logic-first method.
          </p>
        </FadeIn>
      </div>

      <div>
        {services.map((service, i) => (
          <FadeIn key={service.letter} delay={(i % 3) * 0.05}>
            <section className="border-t border-line py-14 md:py-20">
              <div className="site-grid grid gap-10 md:grid-cols-[0.5fr_1.5fr] md:gap-16">
                <div className="flex items-start gap-5 md:flex-col md:items-start md:gap-6">
                  <span className="display text-6xl text-ink/15 md:text-8xl">
                    {service.letter}
                  </span>
                  <h2 className="display text-3xl md:text-5xl">{service.title}</h2>
                </div>

                <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
                  <ul className="space-y-6">
                    {service.items.map((item) => (
                      <li key={item.name} className="border-t border-line pt-5 first:border-t-0 first:pt-0">
                        <p className="display text-xl md:text-2xl">{item.name}</p>
                        <p className="mt-2 text-sm leading-relaxed text-muted md:text-base">
                          {item.body}
                        </p>
                      </li>
                    ))}
                  </ul>

                  <blockquote className="border-l-2 border-ink/15 pl-5">
                    <p className="text-base leading-relaxed text-ink-soft md:text-lg">
                      &ldquo;{service.quote.text}&rdquo;
                    </p>
                    <footer className="mt-4 text-sm text-muted">
                      {service.quote.author} · {service.quote.role}
                    </footer>
                  </blockquote>
                </div>
              </div>
            </section>
          </FadeIn>
        ))}
      </div>

      <section className="border-t border-line bg-bg-elevated py-16 md:py-24">
        <div className="site-grid flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <FadeIn className="max-w-2xl">
            <p className="eyebrow mb-3">Start here</p>
            <h2 className="display text-4xl md:text-5xl">
              Not sure which service you need?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
              Tell us about the brand and we&rsquo;ll recommend the right
              starting point — often, it&rsquo;s simpler than you think.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Link
              href="/contact"
              className="inline-flex bg-ink px-6 py-3.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              Talk to the studio
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
