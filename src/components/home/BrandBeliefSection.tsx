import { FadeIn } from "@/components/shared/FadeIn";

const beliefs = [
  {
    title: "Another place to discover.",
    description: "Another story to bring home.",
  },
  {
    title: "The desire to explore doesn't change.",
    description: "What you expect from the journey does.",
  },
  {
    title: "Confidence before you book.",
    description:
      "Sairr gives you the confidence to say yes — before you even book.",
  },
] as const;

export function BrandBeliefSection() {
  return (
    <section className="border-t border-charcoal/10 bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
          <FadeIn>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
              Our belief
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold leading-[1.2] tracking-tight text-charcoal sm:text-4xl">
              There should always be another journey to look forward to.
            </h2>
            <div className="mt-6 h-px w-16 bg-gold" aria-hidden />
            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate">
              For travellers who want more from every trip — comfort, care, and
              the freedom to simply show up.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <ul className="space-y-4">
              {beliefs.map((belief) => (
                <li
                  key={belief.title}
                  className="rounded-xl border border-border/60 bg-card px-5 py-4"
                >
                  <p className="font-heading text-lg font-medium leading-snug text-brand">
                    {belief.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate">
                    {belief.description}
                  </p>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
