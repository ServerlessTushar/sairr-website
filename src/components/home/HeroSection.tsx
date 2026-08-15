import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { ButtonLink } from "@/components/shared/ButtonLink";

export function HeroSection() {
  return (
    <section className="relative min-h-[min(100vh,56rem)]">
      <div className="absolute inset-0">
        <PlaceholderImage
          seed="puri-hero"
          src="/sairr-coming-soon.jpeg"
          alt="Travellers on the Sairr Puri journey, July 2026"
          priority
        />
        {/* Deep teal / forest scrim — dark enough for sand + teal buttons to read clearly */}
        <div
          className="absolute inset-0 bg-charcoal/25"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-forest/92 via-brand/75 to-brand/15 sm:from-forest/88 sm:via-brand/65 sm:to-transparent"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[min(100vh,56rem)] max-w-7xl items-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            For 50+ travellers
          </p>
          <h1 className="mt-4 font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-mist sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            When was the last time you went somewhere just because you wanted
            to?
          </h1>
          <div className="mt-6 h-px w-16 bg-gold" aria-hidden />
          <p className="mt-6 text-lg leading-relaxed text-mist/85">
            It&apos;s time to go.
          </p>
          <p className="mt-1 text-lg leading-relaxed text-mist/85">
            You show up. We handle the rest.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink
              href="/experiences"
              size="lg"
              className="h-12 rounded-lg bg-brand px-6 font-sans text-sm font-medium text-white hover:bg-forest"
            >
              Explore experiences
            </ButtonLink>
            <ButtonLink
              href="/contact"
              size="lg"
              variant="secondary"
              className="h-12 rounded-lg bg-sand px-6 font-sans text-sm font-medium text-charcoal hover:bg-[color-mix(in_oklch,var(--sand),var(--charcoal)_8%)]"
            >
              Talk to us
            </ButtonLink>
          </div>
        </div>
      </div>

      <p className="absolute bottom-4 left-4 text-[11px] tracking-[0.14em] text-white/90 sm:bottom-6 sm:left-8">
        Puri, July 2026.
      </p>
    </section>
  );
}
