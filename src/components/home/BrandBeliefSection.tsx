import { FadeIn } from "@/components/shared/FadeIn";

export function BrandBeliefSection() {
  return (
    <section className="border-t border-charcoal/10 bg-mist">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <FadeIn>
          <h2 className="font-heading text-3xl font-semibold leading-[1.2] tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
            There should always be another journey to look forward to.
          </h2>
          <p className="mt-10 font-heading text-xl italic leading-relaxed text-brand sm:text-2xl">
            Another place to discover. Another story to bring home.
          </p>
          <p className="mt-6 font-heading text-xl italic leading-relaxed text-brand sm:text-2xl">
            The desire to explore doesn&apos;t change. What you expect from the
            journey does.
          </p>
          <p className="mt-12 text-lg leading-relaxed text-slate">
            Sairr gives you the confidence to say yes — before you even book.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
