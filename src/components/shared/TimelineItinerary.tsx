"use client";

import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSectionHeader } from "@/components/shared/AnimatedSectionHeader";
import { FadeIn } from "@/components/shared/FadeIn";
import { cn } from "@/lib/utils";

const DAY_LABEL_COLOR = "#EC575E";

export type ItineraryIncludedItem = {
  icon: ReactNode;
  title: string;
  details: string;
};

export type ItineraryDayItem = {
  day: number | string;
  location: string;
  desc: string;
  details: string[];
  /** Large image shown when expanded. */
  image: StaticImageData | string;
  /** Compact preview shown while the day is collapsed. */
  smallImage?: StaticImageData | string;
  imageAlt?: string;
  included: ItineraryIncludedItem[];
};

export type TimelineItineraryProps = {
  heading: string;
  description?: string;
  carouselData: ItineraryDayItem[];
  id?: string;
  className?: string;
  flush?: boolean;
};

function TimelineNode({
  isFirst,
  isLast,
}: {
  isFirst: boolean;
  isLast: boolean;
}) {
  return (
    <div
      className="relative flex w-3 shrink-0 flex-col items-center self-stretch"
      aria-hidden
    >
      {!isFirst && <div className="h-5 w-px bg-charcoal/15" />}
      <div className="size-3 shrink-0 rounded-full bg-gold" />
      {!isLast && (
        <div className="mb-4 w-px flex-1 bg-charcoal/15" aria-hidden />
      )}
    </div>
  );
}

function ItineraryImage({
  image,
  alt,
  variant,
  className,
}: {
  image: StaticImageData | string;
  alt: string;
  variant: "collapsed" | "expanded";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-xl",
        variant === "collapsed"
          ? "aspect-[288/156.8] w-full max-w-[288px]"
          : "aspect-[738.84/404.35] w-full max-w-[738.84px]",
        className,
      )}
    >
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
        sizes={
          variant === "collapsed"
            ? "(max-width: 640px) min(calc(100vw - 5rem), 288px), 288px"
            : "(max-width: 768px) calc(100vw - 5rem), 739px"
        }
      />
    </div>
  );
}

function DayHeader({
  day,
  location,
  desc,
}: Pick<ItineraryDayItem, "day" | "location" | "desc">) {
  return (
    <div className="min-w-0 flex-1 pr-10 text-left sm:pr-4">
      <p
        className="text-sm font-medium"
        style={{ color: DAY_LABEL_COLOR }}
      >
        Day {day}
      </p>
      <h3 className="mt-1 font-heading text-2xl font-semibold text-brand sm:text-3xl">
        {location}
      </h3>
      <p className="mt-1 text-base italic text-slate">{desc}</p>
    </div>
  );
}

export function TimelineItinerary({
  heading,
  description,
  carouselData,
  id,
  className,
  flush = false,
}: TimelineItineraryProps) {
  const defaultValue = carouselData[0] ? ["day-0"] : [];

  return (
    <section
      id={id}
      className={cn("scroll-mt-24 border-t border-charcoal/10 bg-[#FDFBF2]", className)}
    >
      <div
        className={cn(
          "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20",
          flush && "max-w-none px-0",
        )}
      >
        <AnimatedSectionHeader
          heading={heading}
          description={description}
          headingClassName="font-heading text-3xl font-semibold tracking-tight text-brand sm:text-4xl"
        />

        <FadeIn delay={0.1}>
          <Accordion
            defaultValue={defaultValue}
            className="mt-10 sm:mt-12"
          >
          {carouselData.map((item, index) => {
            const value = `day-${index}`;
            const imageAlt = item.imageAlt ?? item.location;
            const isFirst = index === 0;
            const isLast = index === carouselData.length - 1;

            return (
              <div
                key={value}
                className="flex gap-4 border-b border-gold/50 py-5 first:pt-0 last:border-b-0 sm:gap-6 sm:py-6"
              >
                <TimelineNode isFirst={isFirst} isLast={isLast} />

                <AccordionItem
                  value={value}
                  className="min-w-0 flex-1 border-0 not-last:border-b-0"
                >
                  <AccordionTrigger
                    className="relative w-full flex-col items-stretch justify-start gap-3 p-0 hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden"
                  >
                    <DayHeader
                      day={item.day}
                      location={item.location}
                      desc={item.desc}
                    />

                    {item.included.length > 0 ? (
                      <div className="flex w-full flex-wrap gap-x-4 gap-y-1 pr-8 text-xs italic text-slate sm:text-sm">
                        {item.included.map((included) => (
                          <span
                            key={`${included.title}-${included.details}`}
                            className="flex items-center gap-1"
                          >
                            <span className="flex size-5 shrink-0 items-center justify-center text-gold">
                              {included.icon}
                            </span>
                            {included.title} {included.details}
                          </span>
                        ))}
                      </div>
                    ) : null}

                    <div className="w-full max-w-[288px]">
                      <ItineraryImage
                        image={item.smallImage ?? item.image}
                        alt={imageAlt}
                        variant="collapsed"
                        className="group-aria-expanded/accordion-trigger:hidden"
                      />
                    </div>

                    <span className="absolute top-0 right-0 flex size-8 items-center justify-center text-gold">
                      <ChevronDown
                        className="size-4 group-aria-expanded/accordion-trigger:hidden"
                        aria-hidden
                      />
                      <ChevronUp
                        className="hidden size-4 group-aria-expanded/accordion-trigger:block"
                        aria-hidden
                      />
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="px-0 pb-0">
                    <div className="mt-4 max-w-[920px]">
                      <ItineraryImage
                        image={item.image}
                        alt={imageAlt}
                        variant="expanded"
                        className="mb-4"
                      />

                      <div className="max-w-[830px]">
                        <p className="mb-4 text-sm leading-relaxed text-slate sm:text-base">{item.desc}</p>
                        <ul className="space-y-1 text-sm leading-relaxed text-slate sm:text-base">
                          {item.details.map((detail) => (
                            <li key={detail} className="flex gap-3">
                              <span
                                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-brand"
                                aria-hidden
                              />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>

                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
            );
          })}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
