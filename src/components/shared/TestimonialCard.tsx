import type { Testimonial } from "@/data/testimonials";
import { Quote } from "lucide-react";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-border/60 bg-card p-6 transition-all duration-300 hover:shadow-lg">
      <Quote className="mb-4 h-8 w-8 text-gold/60" />
      <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="mt-6 border-t border-border/60 pt-4">
        <p className="font-semibold text-foreground">{testimonial.name}</p>
        <p className="text-xs text-muted-foreground">
          {testimonial.relation} · {testimonial.experience}
        </p>
      </div>
    </div>
  );
}
