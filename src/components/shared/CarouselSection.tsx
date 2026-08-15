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
}: CarouselSectionProps<T>) {
  const visibleCount = useSlidesPerView(slidesPerView);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

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

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;
    const step = getStep();
    if (!step) return;
    const next = Math.round(el.scrollLeft / step);
    setIndex(Math.max(0, Math.min(next, maxIndex)));
  };

  return (
    <div className={cn("relative", className)} aria-label={ariaLabel}>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item, i) => (
          <div
            key={getKey(item, i)}
            className="w-full shrink-0 snap-start md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)]"
          >
            {renderItem(item, i)}
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
