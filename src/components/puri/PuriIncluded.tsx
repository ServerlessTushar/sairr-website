import { FadeIn } from "@/components/shared/FadeIn";
import { IncludedIcon } from "@/components/puri/IncludedIcon";
import { puriIncluded, puriNotIncluded } from "@/data/puri";

export function PuriIncluded() {
  return (
    <section className="border-t border-charcoal/10 bg-mist">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            What&apos;s taken care of
          </p>
          <p className="mt-6 font-heading text-xl italic leading-relaxed text-charcoal sm:text-2xl">
            Every stay, every transfer, every day&apos;s pace — chosen with
            care, not left to chance.
          </p>
        </FadeIn>

        <FadeIn className="mt-12" delay={0.08}>
          <h3 className="font-heading text-xl font-semibold text-brand">
            Included
          </h3>
          <ul className="mt-6 space-y-5">
            {puriIncluded.map((item) => (
              <li key={item.id} className="flex items-start gap-3">
                <IncludedIcon name={item.icon} />
                <span className="pt-2 text-base leading-relaxed text-charcoal">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn className="mt-12" delay={0.12}>
          <h3 className="font-heading text-xl font-semibold text-brand">
            Not included
          </h3>
          <p className="mt-4 text-base leading-relaxed text-charcoal">
            {puriNotIncluded}
          </p>
          <p className="mt-8 text-base italic text-slate">
            If anything doesn&apos;t go as planned, there&apos;s a real person
            on-ground to fix it.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
