import type { Testimonial } from "@/data/testimonials";
import { PlaceholderVideo } from "@/components/shared/PlaceholderVideo";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  testimonial: Testimonial;
  variant?: "default" | "quote-first";
};

export function TestimonialCard({
  testimonial,
  variant = "default",
}: TestimonialCardProps) {
  const nameLine = testimonial.placeholder
    ? `[${testimonial.name}], [${testimonial.age}]`
    : `${testimonial.name}, ${testimonial.age}`;

  if (variant === "quote-first") {
    return (
      <article
        className={cn(
          "flex h-full flex-col rounded-[14.08px] bg-white p-5",
          "shadow-[16px_16px_0_#E9DFC8]",
        )}
      >
        <blockquote className="font-heading text-base leading-relaxed text-charcoal sm:text-[1.05rem]">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <PlaceholderVideo className="mt-4 shrink-0 overflow-hidden rounded-xl" />

        <div className="mt-4">
          <p className="text-sm font-semibold text-charcoal">{nameLine}</p>
          <p className="mt-1 text-sm text-slate">{testimonial.destination}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col">
      <PlaceholderVideo className="shrink-0" />
      <blockquote className="mt-5 flex-1 font-heading text-lg leading-relaxed text-charcoal">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="mt-4">
        <p className="text-sm text-slate">{nameLine}</p>
        <p className="mt-1 text-sm text-slate">{testimonial.destination}</p>
      </div>
    </article>
  );
}
