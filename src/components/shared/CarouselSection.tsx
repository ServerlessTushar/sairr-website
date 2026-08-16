"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const GAP_PX = 24;
const DEFAULT_AUTOPLAY_INTERVAL_MS = 5000;

type SlidesPerView = {
  mobile?: number;
  tablet?: number;
  desktop?: number;
};

type CarouselSectionProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  getKey: (item: T, index: number) => string;
  slidesPerView?: SlidesPerView;
  className?: string;
  ariaLabel?: string;
  autoplay?: boolean;
  autoplayInterval?: number;
};

function useSlidesPerView(config: SlidesPerView) {
  const mobile = config.mobile ?? 1;
  const tablet = config.tablet ?? 2;
  const desktop = config.desktop ?? 3;

  const [count, setCount] = useState(mobile);

  useEffect(() => {
    const mqTablet = window.matchMedia("(min-width: 768px)");
    const mqDesktop = window.matchMedia("(min-width: 1024px)");

    const update = () => {
      if (mqDesktop.matches) setCount(desktop);
      else if (mqTablet.matches) setCount(tablet);
      else setCount(mobile);
    };

    update();
    mqTablet.addEventListener("change", update);
    mqDesktop.addEventListener("change", update);
    return () => {
      mqTablet.removeEventListener("change", update);
      mqDesktop.removeEventListener("change", update);
    };
  }, [mobile, tablet, desktop]);

  return count;
}

export function CarouselSection<T>({
  items,
  renderItem,
  getKey,
  slidesPerView = { mobile: 1, tablet: 2, desktop: 3 },
  className,
  ariaLabel = "Carousel",
  autoplay = true,
  autoplayInterval = DEFAULT_AUTOPLAY_INTERVAL_MS,
}: CarouselSectionProps<T>) {
  const visibleCount = useSlidesPerView(slidesPerView);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const maxIndex = Math.max(0, items.length - visibleCount);
  const showControls = items.length > visibleCount;

  const getStep = useCallback(() => {
    const el = scrollRef.current;
    if (!el?.firstElementChild) return 0;
    const child = el.firstElementChild as HTMLElement;
    return child.offsetWidth + GAP_PX;
  }, []);

  const scrollToIndex = useCallback(
    (target: number) => {
      const el = scrollRef.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(target, maxIndex));
      setIndex(clamped);
      el.scrollTo({ left: clamped * getStep(), behavior: "smooth" });
    },
    [getStep, maxIndex],
  );

  useEffect(() => {
    setIndex((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    if (!autoplay || !showControls || paused) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const id = window.setInterval(() => {
      setIndex((current) => {
        const next = current >= maxIndex ? 0 : current + 1;
        const el = scrollRef.current;
        const step = getStep();

        if (el && step) {
          el.scrollTo({ left: next * step, behavior: "smooth" });
        }

        return next;
      });
    }, autoplayInterval);

    return () => window.clearInterval(id);
  }, [autoplay, autoplayInterval, getStep, maxIndex, paused, showControls]);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const step = getStep();
    if (!step) return;
    const next = Math.round(el.scrollLeft / step);
    setIndex(Math.max(0, Math.min(next, maxIndex)));
  };

  return (
    <div
      className={cn("relative", className)}
      aria-label={ariaLabel}
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          setPaused(false);
        }
      }}
    >
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex items-stretch gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <div
            key={getKey(item, i)}
            className="flex w-full shrink-0 snap-start flex-col self-stretch md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            <div className="flex h-full min-h-0 flex-1 flex-col">
              {renderItem(item, i)}
            </div>
          </div>
        ))}
      </div>

      {showControls && (
        <div className="mt-6 flex items-center gap-2">
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Previous slide"
            disabled={index <= 0}
            onClick={() => scrollToIndex(index - 1)}
            className="size-9 border-charcoal/20 text-charcoal hover:bg-sand disabled:opacity-40"
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="Next slide"
            disabled={index >= maxIndex}
            onClick={() => scrollToIndex(index + 1)}
            className="size-9 border-charcoal/20 text-charcoal hover:bg-sand disabled:opacity-40"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
