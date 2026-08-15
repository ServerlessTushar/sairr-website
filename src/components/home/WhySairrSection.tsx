import { FadeIn } from "@/components/shared/FadeIn";
import { RtbGrid } from "@/components/shared/RtbCard";

export function WhySairrSection() {
  return (
    <section className="border-t border-charcoal/10 bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-semibold leading-[1.2] tracking-tight text-charcoal sm:text-4xl lg:text-[2.75rem]">
              Confidence doesn&apos;t come from a promise. It comes from how
              the journey is handled.
            </h2>
            <p className="mt-6 text-lg text-brand">
              We make saying yes to the next journey a little easier.
            </p>
          </div>
        </FadeIn>
        <RtbGrid className="mt-16" />
      </div>
    </section>
  );
}
