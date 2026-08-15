import type { Testimonial } from "@/data/testimonials";
import { PlaceholderVideo } from "@/components/shared/PlaceholderVideo";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="flex h-full flex-col">
      <PlaceholderVideo />
      <blockquote className="mt-5 font-heading text-lg leading-relaxed text-charcoal">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <p className="mt-4 text-sm text-slate">
        {testimonial.placeholder ? (
          <>
            [{testimonial.name}], [{testimonial.age}]
          </>
        ) : (
          <>
            {testimonial.name}, {testimonial.age}
          </>
        )}
      </p>
      <p className="mt-1 text-sm text-slate">{testimonial.destination}</p>
    </article>
  );
}
