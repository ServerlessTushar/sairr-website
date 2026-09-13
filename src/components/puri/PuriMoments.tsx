"use client";

import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";
import { CardRevealCarouselItem } from "@/components/shared/CardReveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { CarouselSection } from "@/components/shared/CarouselSection";
import {
  puriMomentsSectionData,
  type PuriMomentCard,
} from "@/components/puri/puriMomentsData";

function MomentCard({ moment }: { moment: PuriMomentCard }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_2px_12px_rgba(27,29,31,0.06)]">
      <div className="relative aspect-4/3 w-full bg-charcoal/5">
        <Image
          src={moment.image}
          alt={moment.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 87vw, (max-width: 1024px) 48vw, 32vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-base leading-relaxed text-charcoal sm:text-[1.0625rem] sm:leading-[1.65]">
          <span className="font-medium">{moment.title}</span> {moment.line}
        </p>
      </div>
    </article>
  );
}

export function PuriMoments() {
  const { heading, cards } = puriMomentsSectionData;

  return (
    <section className="border-t border-charcoal/10 bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <FadeIn>
          <TextReveal
            as="h2"
            text={heading}
            className="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl"
          />
        </FadeIn>

        <CarouselSection
          className="mt-8 sm:mt-10"
          slideClassName="py-2 pr-2 md:pr-3"
          items={cards}
          getKey={(item) => item.id}
          renderItem={(item, index) => (
            <CardRevealCarouselItem
              index={index}
              direction="bottom"
              stagger={0.12}
              hover={false}
              revealOnScroll={false}
            >
              <MomentCard moment={item} />
            </CardRevealCarouselItem>
          )}
          slidesPerView={{ mobile: 1.15, tablet: 2, desktop: 3 }}
          ariaLabel="Moments that make Puri"
          autoplay={false}
        />
      </div>
    </section>
  );
}
