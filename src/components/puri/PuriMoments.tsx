"use client";

import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";
import { CardRevealCarouselItem } from "@/components/shared/CardReveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { CarouselSection } from "@/components/shared/CarouselSection";
import { cn } from "@/lib/utils";
import { type PuriMomentCard } from "@/components/puri/puriMomentsData";

const MOMENT_CARD_WIDTH_PX = 306.38;

function MomentCard({ moment }: { moment: PuriMomentCard }) {
  return (
    <article className="group flex h-full w-full flex-col rounded-lg bg-white p-4 sm:p-5 lg:h-[468.83px] lg:w-[306.38px] lg:p-7">
      <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-lg bg-charcoal/5">
        <Image
          src={moment.image}
          alt={moment.alt}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
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
    <section className=" bg-[#FDFBF2]">
      <div
        className={cn(
          "py-12 sm:py-16 lg:pb-10 lg:pt-16",
          flush
            ? "w-full"
            : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        )}
      >
        <FadeIn className="text-center">
          <TextReveal
            as="h2"
            text={heading}
            className="font-heading text-3xl font-semibold tracking-tight text-black sm:text-4xl"
          />
        </FadeIn>

        <div className="mt-8 sm:mt-8">
          <CarouselSection
            trackWrapperClassName={cn(
              "bg-[#E9DFC8] py-6 sm:py-8 overflow-hidden",
              flush
                ? "w-full pl-5 pr-0"
                : "-mr-4 pl-4 sm:-mr-6 sm:pl-6 lg:-mr-8 lg:pl-8",
            )}
            slideClassName="py-2"
            gap={20}
            fixedSlideWidthLg={MOMENT_CARD_WIDTH_PX}
            items={cards}
            getKey={(item) => item.id}
            renderItem={(item, index) => (
              <CardRevealCarouselItem
                index={index}
                direction="left"
                stagger={0.1}
                className="h-full bg-transparent"
              >
                <MomentCard moment={item} />
              </CardRevealCarouselItem>
            )}
            slidesPerView={{ mobile: 1.15, tablet: 2, desktop: 3 }}
            ariaLabel="Moments that make Puri"
            autoplay={false}
            showDots
            controlsPosition="split"
            controlsClassName="mt-5"
            previousButtonClassName="border-transparent bg-[#F0F0F099] text-charcoal/50 hover:bg-[#F0F0F0] disabled:opacity-100"
            nextButtonClassName="border-transparent bg-[#C8A867] text-white hover:bg-[#B99656] disabled:bg-[#F0F0F099] disabled:text-charcoal/50 disabled:opacity-100"
          />
        </div>
      </div>
    </section>
  );
}
