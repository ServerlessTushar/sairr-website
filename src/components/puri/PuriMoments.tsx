"use client";

import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";
import { CardRevealCarouselItem } from "@/components/shared/CardReveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { CarouselSection } from "@/components/shared/CarouselSection";
import { cn } from "@/lib/utils";
import { type PuriMomentCard } from "@/components/puri/puriMomentsData";

function MomentCard({ moment }: { moment: PuriMomentCard }) {
  return (
    <article className="flex h-full w-full flex-col bg-white p-4 sm:p-5 lg:h-[468.83px] lg:p-[36.505px]">
      <div className="relative aspect-square w-full shrink-0 bg-charcoal/5">
        <Image
          src={moment.image}
          alt={moment.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 80vw, 233px"
        />
      </div>
      <p className="mt-4 text-[16px] leading-relaxed text-[#5d5d5d] lg:mt-5">
        <span className="font-bold text-charcoal">{moment.title}</span>{" "}
        {moment.line}
      </p>
    </article>
  );
}

export function PuriMoments({
  heading,
  cards,
  flush = false,
}: {
  heading: string;
  cards: PuriMomentCard[];
  flush?: boolean;
}) {

  return (
    <section className="border-t border-charcoal/10 bg-[#FDFBF2]">
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20",
          flush && "max-w-none px-0",
        )}
      >
        <FadeIn>
          <TextReveal
            as="h2"
            text={heading}
            className="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl"
          />
        </FadeIn>

        <div className="mt-8 bg-[#E9DFC8] py-6 pr-0 pl-4 sm:mt-10 sm:py-8 sm:pl-6 lg:pl-8">
        <CarouselSection
          slideClassName="py-2"
          gap={12}
          items={cards}
          getKey={(item) => item.id}
          renderItem={(item, index) => (
            <CardRevealCarouselItem
              index={index}
              direction="bottom"
              stagger={0.12}
              hover={false}
              revealOnScroll={false}
              className="h-full bg-transparent"
            >
              <MomentCard moment={item} />
            </CardRevealCarouselItem>
          )}
          slidesPerView={{ mobile: 1.15, tablet: 2, desktop: 2.15 }}
          ariaLabel="Moments that make Puri"
          autoplay={false}
        />
        </div>
      </div>
    </section>
  );
}
