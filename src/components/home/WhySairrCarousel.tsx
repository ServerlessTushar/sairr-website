"use client";

import { reasonsToBelieve, type ReasonToBelieve } from "@/data/reasons";
import { CarouselSection } from "@/components/shared/CarouselSection";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";

function WhySairrCard({ reason }: { reason: ReasonToBelieve }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5">
      <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
        <PlaceholderImage
          seed={`why-sairr-${reason.id}`}
          alt={reason.title}
          aiPlaceholder
          className="transition-transform duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-semibold leading-snug text-charcoal">
          {reason.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
          {reason.description}
        </p>
      </div>
    </article>
  );
}

export function WhySairrCarousel() {
  return (
    <CarouselSection
      className="mt-16"
      items={[...reasonsToBelieve]}
      getKey={(reason) => reason.id}
      renderItem={(reason) => <WhySairrCard reason={reason} />}
      slidesPerView={{ mobile: 1, tablet: 2, desktop: 3 }}
      ariaLabel="Why Sairr"
    />
  );
}
