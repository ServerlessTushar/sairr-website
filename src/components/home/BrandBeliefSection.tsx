import { FadeIn } from "@/components/shared/FadeIn";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";

export function BrandBeliefSection() {
  return (
    <section className="border-t border-charcoal/10 bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-16">
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

          <FadeIn delay={0.1} className="w-full overflow-visible">
            <div className="relative mx-auto h-88 w-full max-w-104 sm:h-104 sm:max-w-md lg:ml-auto lg:mr-0">
              <svg
                className="pointer-events-none absolute bottom-4 left-[-8%] hidden h-24 w-[80%] text-charcoal/20 sm:block"
                viewBox="0 0 320 80"
                fill="none"
                aria-hidden
              >
                <path
                  d="M8 18 C 90 72, 210 78, 308 36"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="5 7"
                  strokeLinecap="round"
                />
                <path d="M300 28 l14 10 -16 4 2-14z" fill="#c8a867" />
              </svg>

              <div className="absolute top-0 left-0 h-[85%] w-[72%] overflow-hidden rounded-2xl bg-charcoal/10 shadow-xl shadow-charcoal/15">
                <PlaceholderImage
                  seed="belief-primary"
                  src="/images/dipanjali-panigrahi-0IXFx5oFNIg-unsplash.jpg"
                  alt="Sunset on the beach"
                  className="object-cover"
                />
              </div>

              <div className="absolute right-0 bottom-0 h-[52%] w-[52%] rotate-6 overflow-hidden rounded-2xl border-4 border-mist bg-charcoal/10 shadow-2xl shadow-charcoal/20">
                <PlaceholderImage
                  seed="belief-secondary"
                  src="/images/roberto-nickson-WoranOGrJ9k-unsplash.jpg"
                  alt="Travellers overlooking the coast"
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
