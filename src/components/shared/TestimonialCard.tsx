import Image from "next/image";
import type { Testimonial } from "@/data/testimonials";
import { PlaceholderVideo } from "@/components/shared/PlaceholderVideo";
import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  testimonial: Testimonial;
  variant?: "default" | "quote-first";
};

function TestimonialMedia({
  testimonial,
  className,
}: {
  testimonial: Testimonial;
  className?: string;
}) {
  const mediaClassName = cn(
    "relative aspect-video shrink-0 overflow-hidden bg-charcoal/8",
    className,
  );

  if (testimonial.media?.type === "image") {
    return (
      <div className={mediaClassName}>
        <Image
          src={testimonial.media.src}
          alt={testimonial.media.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    );
  }

  if (testimonial.media?.type === "video") {
    return (
      <div className={mediaClassName}>
        <video
          controls
          preload="metadata"
          poster={testimonial.media.poster}
          className="h-full w-full object-cover"
        >
          <source src={testimonial.media.src} />
          Your browser does not support embedded video.
        </video>
      </div>
    );
  }

  return <PlaceholderVideo className={className} />;
}

export function TestimonialCard({
  testimonial,
  variant = "default",
}: TestimonialCardProps) {
  if (variant === "quote-first") {
    return (
      <article
        className={cn(
          "flex h-full flex-col rounded-[14.08px] bg-white p-5",
          "shadow-testimonial md:shadow-testimonial-lg",
        )}
      >
        <blockquote className="font-heading text-base leading-relaxed text-charcoal sm:text-[1.05rem]">
          &ldquo;{testimonial.quote}&rdquo;
        </blockquote>

        <TestimonialMedia
          testimonial={testimonial}
          className="mt-4 overflow-hidden rounded-xl"
        />

        <div className="mt-4">
          <p className="text-sm font-semibold text-charcoal">{testimonial.name}</p>
          <p className="mt-1 text-sm text-slate">{testimonial.destination}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="flex h-full flex-col">
      <TestimonialMedia testimonial={testimonial} />
      <blockquote className="mt-5 flex-1 font-heading text-lg leading-relaxed text-charcoal">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <div className="mt-4">
        <p className="text-sm text-slate">{testimonial.name}</p>
        <p className="mt-1 text-sm text-slate">{testimonial.destination}</p>
      </div>
    </article>
  );
}
