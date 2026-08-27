import { FadeIn } from "@/components/shared/FadeIn";
import { PlaceholderVideo } from "@/components/shared/PlaceholderVideo";
import { puriTestimonialYoutubeId } from "@/data/puri";

export function PuriWords() {
  return (
    <section className="border-t border-charcoal/10 bg-mist">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            In their words
          </p>
          <p className="mt-6 font-heading text-2xl font-semibold leading-relaxed text-charcoal sm:text-3xl">
            Hear from our travellers about their Puri journey.
          </p>
        </FadeIn>

        <FadeIn className="mt-10" delay={0.08}>
          {puriTestimonialYoutubeId ? (
            <div className="relative aspect-video overflow-hidden bg-charcoal">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${puriTestimonialYoutubeId}`}
                title="Puri traveller film"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ) : (
            <PlaceholderVideo label="Puri testimonial film" />
          )}
        </FadeIn>
      </div>
    </section>
  );
}
