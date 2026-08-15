import { whatsappHref } from "@/data/site";
import { FadeIn } from "@/components/shared/FadeIn";
import { ButtonLink } from "@/components/shared/ButtonLink";

export function CtaSection() {
  return (
    <section className="border-t border-charcoal/10 bg-sand">
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
        <FadeIn>
          <h2 className="font-heading text-3xl font-semibold leading-[1.2] tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
            Where have you been meaning to go?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate">
            Tell us — even if you&apos;re not sure yet. We&apos;ll make it
            happen for you.
          </p>
          <ButtonLink
            href={whatsappHref(
              "Hi Sairr — I'd like to talk about a journey.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            size="lg"
            className="mt-10 h-12 rounded-lg bg-brand px-6 font-sans text-sm font-medium text-white hover:bg-forest"
          >
            Talk to us on WhatsApp
          </ButtonLink>
        </FadeIn>
      </div>
    </section>
  );
}
