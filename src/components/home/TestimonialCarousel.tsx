"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import { TestimonialCard } from "@/components/shared/TestimonialCard";

const SLIDE_GAP_PX = 40;

type TestimonialCarouselProps = {
  testimonials: Testimonial[];
};

export function TestimonialCarousel({
  testimonials,
}: TestimonialCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  function updateNavigationState() {
    const carousel = carouselRef.current;
    if (!carousel) return;

    setAtStart(carousel.scrollLeft <= 1);
    setAtEnd(
      carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 1,
    );
  }

  function scroll(direction: "previous" | "next") {
    const carousel = carouselRef.current;
    const firstCard = carousel?.firstElementChild as HTMLElement | null;
    if (!carousel || !firstCard) return;

    carousel.scrollBy({
      left:
        (firstCard.offsetWidth + SLIDE_GAP_PX) * (direction === "next" ? 1 : -1),
      behavior: "smooth",
    });
  }

  useEffect(() => {
    updateNavigationState();
    const carousel = carouselRef.current;
    if (!carousel) return;

    const observer = new ResizeObserver(updateNavigationState);
    observer.observe(carousel);
    return () => observer.disconnect();
  }, [testimonials.length]);

  return (
    <div className="mt-8 md:mt-10">
      <div
        ref={carouselRef}
        onScroll={updateNavigationState}
        style={{ gap: SLIDE_GAP_PX }}
        className="-mr-4 flex overflow-x-auto scroll-smooth px-4 pb-5 pt-1 snap-x snap-mandatory scrollbar-none sm:-mr-6 lg:-mr-8 [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Traveller stories"
        aria-roledescription="carousel"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex w-[calc((100%-32px)/1.15)] shrink-0 snap-start sm:w-[calc((100%-64px)/2.15)] lg:w-[calc((100%-96px)/3.25)]"
          >
            <TestimonialCard testimonial={testimonial} variant="quote-first" />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          aria-label="Previous testimonial"
          disabled={atStart}
          onClick={() => scroll("previous")}
          className="flex size-11 cursor-pointer items-center justify-center rounded border border-charcoal/15 bg-white text-charcoal transition-colors hover:border-charcoal/30 disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ChevronLeft className="size-5" />
        </button>
        <button
          type="button"
          aria-label="Next testimonial"
          disabled={atEnd}
          onClick={() => scroll("next")}
          className="flex size-11 cursor-pointer items-center justify-center rounded border border-charcoal/15 bg-white text-charcoal transition-colors hover:border-charcoal/30 disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ChevronRight className="size-5" />
        </button>
      </div>
    </div>
  );
}
