import { FadeIn } from "@/components/shared/FadeIn";
import { TripGalleryGrid } from "@/components/home/TripGalleryGrid";

export function TripGallerySection() {
  return (
    <section id="gallery" className="border-t border-charcoal/10 bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
              Gallery
            </p>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
              Moments from the journey.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Real travellers, real places — the kind of days we design for.
              Tap any photo to see it larger.
            </p>
          </div>
        </FadeIn>

        <TripGalleryGrid />
      </div>
    </section>
  );
}
