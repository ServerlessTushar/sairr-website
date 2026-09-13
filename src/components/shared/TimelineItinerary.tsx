"use client";

import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  image: StaticImageData;
  imageAlt?: string;
  included: ItineraryIncludedItem[];
};

export type TimelineItineraryProps = {
  heading: string;
  description?: string;
  carouselData: ItineraryDayItem[];
  id?: string;
  className?: string;
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
  image: StaticImageData;
  alt: string;
  variant: "collapsed" | "expanded";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative shrink-0 overflow-hidden rounded-xl",
        variant === "collapsed"
          ? "h-[100px] w-[140px] sm:h-[141.3px] sm:w-[198.5px]"
          : "aspect-[397/282.6] w-full max-w-[397px] sm:h-[282.6px] sm:w-[397px]",
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
            ? "(max-width: 640px) 140px, 198px"
            : "(max-width: 640px) 100vw, 397px"
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
    <div className="min-w-0 flex-1 pr-4 text-left">
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
}: TimelineItineraryProps) {
  const defaultValue = carouselData[0] ? ["day-0"] : [];

  return (
    <section
      id={id}
      className={cn("scroll-mt-24 border-t border-charcoal/10 bg-mist", className)}
    >
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-brand sm:text-4xl">
            {heading}
          </h2>
          {description ? (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate">
              {description}
            </p>
          ) : null}
        </div>

        <Accordion
          defaultValue={defaultValue}
          className="mt-12 sm:mt-16"
        >
          {carouselData.map((item, index) => {
            const value = `day-${index}`;
            const imageAlt = item.imageAlt ?? item.location;
            const isFirst = index === 0;
            const isLast = index === carouselData.length - 1;

            return (
              <div
                key={value}
                className="flex gap-4 border-b border-charcoal/10 py-6 first:pt-0 last:border-b-0 sm:gap-5 sm:py-8"
              >
                <TimelineNode isFirst={isFirst} isLast={isLast} />

                <AccordionItem
                  value={value}
                  className="min-w-0 flex-1 border-0 not-last:border-b-0"
                >
                  <AccordionTrigger
                    className="w-full items-start gap-4 p-0 hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden"
                  >
                    <DayHeader
                      day={item.day}
                      location={item.location}
                      desc={item.desc}
                    />

                    <div className="flex shrink-0 items-start gap-3 sm:gap-4">
                      <ItineraryImage
                        image={item.image}
                        alt={imageAlt}
                        variant="collapsed"
                        className="group-aria-expanded/accordion-trigger:hidden"
                      />
                      <span className="mt-1 flex size-8 shrink-0 items-center justify-center text-charcoal/70">
                        <ChevronRight
                          className="size-4 group-aria-expanded/accordion-trigger:hidden"
                          aria-hidden
                        />
                        <ChevronDown
                          className="hidden size-4 group-aria-expanded/accordion-trigger:block"
                          aria-hidden
                        />
                      </span>
                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="px-0 pb-0">
                    <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-start lg:gap-8">
                      <div className="min-w-0 flex-1">
                        <ul className="space-y-3 text-base leading-relaxed text-charcoal">
                          {item.details.map((detail) => (
                            <li key={detail} className="flex gap-3">
                              <span
                                className="mt-2.5 size-1.5 shrink-0 rounded-full bg-charcoal/35"
                                aria-hidden
                              />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>

                        {item.included.length > 0 ? (
                          <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
                            {item.included.map((included) => (
                              <div
                                key={`${included.title}-${included.details}`}
                                className="flex items-center gap-2.5 text-sm text-charcoal"
                              >
                                <span className="flex size-8 shrink-0 items-center justify-center text-brand">
                                  {included.icon}
                                </span>
                                <span>
                                  <span className="font-medium">
                                    {included.title}:
                                  </span>{" "}
                                  {included.details}
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : null}
                      </div>

                      <ItineraryImage
                        image={item.image}
                        alt={imageAlt}
                        variant="expanded"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
