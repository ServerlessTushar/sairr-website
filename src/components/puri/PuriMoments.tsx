"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { puriMoments } from "@/data/puri";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PuriMoments() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = useCallback((target: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const clamped = Math.max(0, Math.min(target, puriMoments.length - 1));
    setIndex(clamped);
    const child = el.children[clamped] as HTMLElement | undefined;
    child?.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
  }, []);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const width = el.clientWidth;
    if (!width) return;
    setIndex(Math.round(el.scrollLeft / width));
  };

  return (
    <section className="border-t border-charcoal/10 bg-charcoal">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-mist sm:text-4xl">
          Moments that make Puri
        </h2>
      </div>

      <div
        className="relative"
        aria-roledescription="carousel"
        aria-label="Moments that make Puri"
      >
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {puriMoments.map((moment) => (
            <figure
              key={moment.id}
              className="w-full shrink-0 snap-start"
            >
              <div className="relative aspect-[4/5] w-full sm:aspect-[16/9] lg:aspect-[21/9]">
                <PlaceholderImage
                  seed={moment.imageSeed}
                  alt={moment.alt}
                  className="object-cover"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent"
                  aria-hidden
                />
                <figcaption className="absolute inset-x-0 bottom-0 px-4 py-6 sm:px-8 sm:py-10 lg:px-12">
                  <p className="mx-auto max-w-3xl text-base leading-relaxed text-mist sm:text-lg">
                    <span className="font-heading font-semibold">
                      {moment.title}
                    </span>{" "}
                    <span className="text-mist/85">{moment.line}</span>
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>

        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-6 sm:px-6 lg:px-8">
          <div className="hidden items-center gap-2 md:flex">
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Previous moment"
              disabled={index <= 0}
              onClick={() => scrollToIndex(index - 1)}
              className="size-9 border-mist/20 bg-transparent text-mist hover:bg-mist/10 disabled:opacity-40"
            >
              <ChevronLeft className="size-4" />
            </Button>
            <Button
              type="button"
              variant="outline"
              size="icon"
              aria-label="Next moment"
              disabled={index >= puriMoments.length - 1}
              onClick={() => scrollToIndex(index + 1)}
              className="size-9 border-mist/20 bg-transparent text-mist hover:bg-mist/10 disabled:opacity-40"
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>

          <div
            className="flex flex-1 items-center justify-center gap-2 md:flex-none"
            role="tablist"
            aria-label="Moment slides"
          >
            {puriMoments.map((moment, i) => (
              <button
                key={moment.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Show moment ${i + 1}`}
                onClick={() => scrollToIndex(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-8 bg-gold" : "w-1.5 bg-mist/35 hover:bg-mist/60",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
