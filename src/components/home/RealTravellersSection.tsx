"use client";

import { testimonials } from "@/data/testimonials";
import { FadeIn } from "@/components/shared/FadeIn";
import { CarouselSection } from "@/components/shared/CarouselSection";
import { TestimonialCard } from "@/components/shared/TestimonialCard";

export function RealTravellersSection() {
  const realTestimonials = testimonials.filter((t) => !t.placeholder);

  return (
    <section className="border-t border-charcoal/10 bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <FadeIn>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            In their words.
          </h2>
        </FadeIn>

        {realTestimonials.length > 0 && (
          <CarouselSection
            className="mt-10"
            items={realTestimonials}
            getKey={(item) => item.id}
            renderItem={(item) => <TestimonialCard testimonial={item} />}
            slidesPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
            ariaLabel="Traveller stories"
            autoplay={false}
          />
        )}
      </div>
    </section>
  );
}
