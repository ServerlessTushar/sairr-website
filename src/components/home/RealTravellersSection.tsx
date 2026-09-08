"use client";

import { testimonials } from "@/data/testimonials";
import { FadeIn } from "@/components/shared/FadeIn";
import { CarouselSection } from "@/components/shared/CarouselSection";
import { TestimonialCard } from "@/components/shared/TestimonialCard";

export function RealTravellersSection() {
  if (testimonials.length === 0) return null;

  return (
    <section className="border-t border-charcoal/10 bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <FadeIn>
          <div className="lg:mx-auto lg:max-w-3xl lg:text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
              In their words.
            </h2>
            <p className="mt-3 text-base text-slate sm:text-lg">
              To know us is to hear from them.
            </p>
          </div>
        </FadeIn>

        <CarouselSection
          className="mt-10"
          items={testimonials}
          getKey={(item) => item.id}
          renderItem={(item) => (
            <TestimonialCard testimonial={item} variant="quote-first" />
          )}
          slidesPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
          ariaLabel="Traveller stories"
          autoplay={false}
        />
      </div>
    </section>
  );
}
