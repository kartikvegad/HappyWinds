import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "Happywinds Logos — Ahmedabad studio crafting logic-based logo design since 2009. Founded by Jyot Sana, led in design by Anilkumar.",
};

const leaders = [
  {
    name: "Jyot Sana",
    role: "Founder",
    bio: "Founded Happywinds in 2009 with a clear belief: a logo should make sense before it looks beautiful. Jyot built the studio around logic-based design — turning business meaning into marks that last.",
  },
  {
    name: "Anilkumar",
    role: "Lead Designer",
    bio: "Leads the creative craft of the studio — from first sketch to final system. Anilkumar shapes the visual reasoning behind every identity, keeping each mark sharp, simple, and inevitable.",
  },
];

const teams = [
  {
    name: "Graphic Team",
    role: "Design & identity",
    bio: "Concepting, mark-making, typography, and visual systems — the team that turns logic into logos.",
  },
  {
    name: "Admin Team",
    role: "Operations",
    bio: "Schedules, handoffs, and studio rhythm — keeping projects moving cleanly from brief to delivery.",
  },
  {
    name: "Marketing Team",
    role: "Growth & presence",
    bio: "Studio voice, outreach, and brand presence — helping Happywinds stay visible while the work speaks.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-[calc(5.5rem+env(safe-area-inset-top))] md:pt-28">
      {/* Manifesto — Mucho-style opening */}
      <section className="site-grid pb-12 md:pb-24">
        <FadeIn>
          <p className="eyebrow mb-4 md:mb-6">Studio</p>
          <h1 className="display max-w-5xl text-[2rem] leading-[1.08] sm:text-4xl md:text-6xl lg:text-7xl">
            At Happywinds, we bring clear logic to every mark.
          </h1>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted sm:mt-10 sm:space-y-5 sm:text-lg md:text-xl">
            <p>
              More ways of looking. More ways of thinking. More curiosity to
              discover what a brand truly needs — and the craft to shape what
              has never been seen before.
            </p>
            <p>
              Our partnership is fueled by meaning. Our creativity is inspired
              by real businesses. Our motivation is making identities that
              stand tall, grow big, and stay relevant.
            </p>
            <p>
              Since 2009 we&rsquo;ve helped brands find their face — from
              Ahmedabad, with logic first. And we&rsquo;re just getting
              started.
            </p>
            <p className="text-ink">Happywinds. We craft sense into marks.</p>
          </div>
        </FadeIn>
      </section>

      <FadeIn>
        <div className="relative aspect-[16/9] w-full md:aspect-[21/8]">
          <Image
            src="/assets/hero/stand-out.jpg"
            alt="Happywinds studio craft"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>
      </FadeIn>

      {/* Story */}
      <section className="site-grid grid gap-12 py-16 md:grid-cols-2 md:gap-20 md:py-28">
        <FadeIn>
          <p className="eyebrow mb-4">Our story</p>
          <h2 className="display text-3xl md:text-5xl">
            Drafting the best logo is not just a project.
          </h2>
        </FadeIn>
        <FadeIn delay={0.08}>
          <div className="space-y-5 text-base leading-relaxed text-muted md:text-lg">
            <p>
              Founded in 2009 by{" "}
              <span className="text-ink">Jyot Sana</span>, Happywinds began as
              a studio devoted to one philosophy: Logic-Based Logo Design. Every
              identity starts with a true idea about the business — then becomes
              a mark you can explain in a sentence.
            </p>
            <p>
              Under lead designer{" "}
              <span className="text-ink">Anilkumar</span>, that philosophy
              became a craft practice: research, sketching, geometry, type, and
              application — refined until the logo feels inevitable.
            </p>
            <p>
              Today the studio works as one team across graphic, admin, and
              marketing — partnership over trends, ideas over decoration.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* By the numbers */}
      <section className="border-y border-line bg-bg-elevated">
        <div className="site-grid py-12 md:py-20">
          <FadeIn>
            <p className="eyebrow mb-8 md:mb-10">By the numbers</p>
          </FadeIn>
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-0">
            {[
              ["2009", "Year founded"],
              ["2000+", "Brands built"],
              ["150+", "Industries"],
              ["3", "Core teams"],
            ].map(([stat, label], i) => (
              <FadeIn
                key={label}
                delay={i * 0.04}
                className={`min-w-0 ${
                  i > 0 ? "lg:border-l lg:border-line lg:pl-8" : ""
                } ${i < 3 ? "lg:pr-6" : ""}`}
              >
                <p className="display text-3xl tracking-tight sm:text-4xl lg:text-[2.75rem]">
                  {stat}
                </p>
                <p className="mt-2 text-sm text-muted">{label}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* People */}
      <section className="site-grid py-16 md:py-28">
        <FadeIn className="mb-12 md:mb-16">
          <p className="eyebrow mb-4">People</p>
          <h2 className="display max-w-3xl text-3xl md:text-5xl">
            The minds behind the marks.
          </h2>
        </FadeIn>

        <div className="divide-y divide-line border-y border-line">
          {leaders.map((person, i) => (
            <FadeIn key={person.name} delay={i * 0.04}>
              <div className="grid gap-4 py-8 md:grid-cols-[0.9fr_0.7fr_1.4fr] md:gap-10 md:py-10">
                <p className="display text-2xl md:text-3xl">{person.role}</p>
                <p className="text-sm uppercase tracking-[0.14em] text-muted md:pt-2">
                  {person.name}
                </p>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  {person.bio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-16 mb-8 md:mt-20">
          <p className="eyebrow">Teams</p>
        </FadeIn>

        <div className="divide-y divide-line border-y border-line">
          {teams.map((team, i) => (
            <FadeIn key={team.name} delay={i * 0.04}>
              <div className="grid gap-4 py-8 md:grid-cols-[0.9fr_0.7fr_1.4fr] md:gap-10 md:py-10">
                <p className="display text-2xl md:text-3xl">{team.name}</p>
                <p className="text-sm uppercase tracking-[0.14em] text-muted md:pt-2">
                  {team.role}
                </p>
                <p className="text-base leading-relaxed text-muted md:text-lg">
                  {team.bio}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Careers CTA */}
      <section className="border-y border-line bg-ink text-bg">
        <div className="site-grid grid items-end gap-8 py-16 md:grid-cols-[1.2fr_0.8fr] md:py-24">
          <FadeIn>
            <p className="eyebrow mb-4 text-bg/55">Careers</p>
            <h2 className="display max-w-2xl text-3xl md:text-5xl">
              Want to build logic-led brands with us?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-bg/70 md:text-lg">
              We&rsquo;re always open to designers, coordinators, and marketers
              who care about meaning as much as craft. Tell us who you are —
              we&rsquo;ll take it from there.
            </p>
          </FadeIn>
          <FadeIn delay={0.08} className="md:justify-self-end">
            <Link
              href="/careers"
              className="inline-flex bg-bg px-6 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
            >
              Apply to Happywinds →
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* Location + mark */}
      <section className="site-grid grid gap-12 py-16 md:grid-cols-2 md:gap-16 md:py-28">
        <FadeIn>
          <p className="eyebrow mb-4">Location</p>
          <h2 className="display text-3xl md:text-4xl">Ahmedabad</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Happywinds Logos
            <br />
            Ahmedabad, India
          </p>
          <div className="mt-6 space-y-2 text-base">
            <a
              href="tel:+919664829116"
              className="block transition-opacity hover:opacity-60"
            >
              +91 96648 29116
            </a>
            <a
              href="mailto:hihappywinds@gmail.com"
              className="block transition-opacity hover:opacity-60"
            >
              hihappywinds@gmail.com
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.08}>
          <div className="relative aspect-[16/10] overflow-hidden bg-bg-elevated">
            <Image
              src="/assets/brand/logo.png"
              alt="Happywinds logo"
              fill
              className="object-contain p-10 md:p-14"
            />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted">
            Wind in the sail. Wave beneath. The Happywinds mark is the same
            standard we hold every client identity to.
          </p>
        </FadeIn>
      </section>
    </div>
  );
}
