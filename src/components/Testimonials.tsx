import { FadeIn } from "./FadeIn";

const testimonials = [
  {
    quote:
      "Happywinds asked better questions about our clinic than any agency before them. The footprint mark still gets pointed at in the waiting room.",
    name: "Practice Owner",
    project: "Footmark",
  },
  {
    quote:
      "We handed them a name and a plot of land. They handed back a shield that makes the whole development feel finished before the first brick.",
    name: "Development Director",
    project: "Black Diamond X",
  },
  {
    quote:
      "The horn-lettering was so obviously right that our own team forgot we hadn't always had it. That's the mark of a logic that actually fits.",
    name: "Operations Head",
    project: "Sumukha",
  },
  {
    quote:
      "Every option came with a reason, not just a mood board. Picking a direction felt like a decision, not a guess.",
    name: "Marketing Lead",
    project: "Centinel",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-line py-16 md:py-24">
      <div className="site-grid mb-10 md:mb-14">
        <FadeIn>
          <p className="eyebrow mb-3">In their words</p>
          <h2 className="display max-w-2xl text-3xl md:text-5xl">
            Clients feel the logic too.
          </h2>
        </FadeIn>
      </div>

      <div className="site-grid grid gap-8 md:grid-cols-2 md:gap-10">
        {testimonials.map((item, i) => (
          <FadeIn key={item.name} delay={(i % 2) * 0.08}>
            <figure className="h-full border-l-2 border-ink/15 pl-6 md:pl-8">
              <blockquote className="text-lg leading-relaxed text-ink-soft md:text-xl">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 text-sm text-muted">
                {item.name} · {item.project} client
              </figcaption>
            </figure>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
