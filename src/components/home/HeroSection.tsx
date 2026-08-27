"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { ButtonLink } from "@/components/shared/ButtonLink";

const ease = [0.25, 0.4, 0.25, 1] as const;
const AUTOPLAY_MS = 6000;

const heroSlides = [
  {
    src: "/images/dilip-poddar-a4KEI6SYy10-unsplash.jpg",
    alt: "Jagannath Temple in Puri",
    description:
      "Thoughtfully designed for the way you travel after 50. Temple mornings, ancient sites, and evenings by the sea — unhurried.",
  },
  {
    src: "/images/atul-pandey-HlwQXlKkokk-unsplash.jpg",
    alt: "Stone chariot wheel at Konark Sun Temple",
    description:
      "Konark at a comfortable pace, with shade, breaks, and no rush — heritage without the hurry.",
  },
  {
    src: "/images/dipanjali-panigrahi-0IXFx5oFNIg-unsplash.jpg",
    alt: "Sunset on the beach in Puri",
    description:
      "Evenings by the sea, time to wander, and a journey that leaves room to simply be.",
  },
  {
    src: "/images/pexels-rahulp9800-6040171.jpg",
    alt: "Carved temple gateway against the sky",
    description: "A thoughtfully paced journey to Tirupati. Dates to follow.",
  },
  {
    src: "/images/venkat-rajalbandi-ipE-A1FoUwc-unsplash.jpg",
    alt: "Konark Sun Temple at golden hour",
    description:
      "Backwaters, coast, and unhurried days. Kerala — dates to follow.",
  },
  {
    src: "/images/roberto-nickson-WoranOGrJ9k-unsplash.jpg",
    alt: "Picnic overlooking the coast at sunset",
    description:
      "It's time to go somewhere just because you wanted to. You show up. We handle the rest.",
  },
  {
    src: "/images/benjamin-chambon-zO0le9E7Ono-unsplash.jpg",
    alt: "Travellers on a journey",
    description:
      "An international journey — Sairr isn't domestic-only. Dates to follow.",
  },
] as const;

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const maxIndex = heroSlides.length - 1;
  const slide = heroSlides[activeIndex];

  const goTo = useCallback(
    (index: number) => {
      const next = index < 0 ? maxIndex : index > maxIndex ? 0 : index;
      setActiveIndex(next);
    },
    [maxIndex],
  );

  useEffect(() => {
    if (heroSlides.length <= 1 || paused || reduceMotion) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) =>
        current >= heroSlides.length - 1 ? 0 : current + 1,
      );
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [paused, reduceMotion]);

  return (
    <section
      className="relative min-h-[min(100dvh,56rem)] overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Featured journeys"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.src}
            className="absolute inset-0"
            initial={reduceMotion ? false : { opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.9, ease: "easeOut" }}
          >
            <PlaceholderImage
              seed={`hero-${activeIndex}`}
              src={slide.src}
              alt={slide.alt}
              priority={activeIndex === 0}
              className="object-cover object-[center_30%]"
            />
          </motion.div>
        </AnimatePresence>

        <div
          className="absolute inset-0 bg-linear-to-r from-forest/90 via-forest/45 to-transparent"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-charcoal/55 via-transparent to-charcoal/20"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto flex min-h-[min(100dvh,56rem)] max-w-7xl flex-col px-4 pb-8 pt-28 sm:px-6 lg:px-8 lg:pb-12">
        <div className="flex flex-1 flex-col justify-center py-10 lg:py-0">
          <div className="max-w-2xl">
            <motion.p
              className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-charcoal/20 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-gold backdrop-blur-sm"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden />
              For 50+ travellers
            </motion.p>

            <motion.h1
              className="mt-6 font-heading text-3xl font-semibold leading-[1.12] tracking-tight text-mist sm:text-4xl md:text-5xl lg:text-[3.35rem]"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease }}
            >
              When was the last time you went somewhere{" "}
              <span className="italic text-gold">
                just because you wanted to?
              </span>
            </motion.h1>

            <motion.div
              className="mt-6 flex items-center gap-4"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
            >
              <div className="h-px w-16 shrink-0 bg-gold" aria-hidden />
              <p className="text-base leading-relaxed text-mist/85 sm:text-lg">
                It&apos;s time to go. You show up. We handle the rest.
              </p>
            </motion.div>

            <motion.div
              className="mt-10 flex flex-col gap-3 sm:flex-row"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
            >
              <ButtonLink
                href="/experiences"
                size="lg"
                className="h-12 rounded-full bg-brand px-6 font-sans text-sm font-medium text-white shadow-lg shadow-forest/30 hover:bg-forest"
              >
                Explore experiences
                <ArrowRight className="ml-2 h-4 w-4" />
              </ButtonLink>
              <ButtonLink
                href="/contact"
                size="lg"
                variant="secondary"
                className="h-12 rounded-full border border-mist/25 bg-mist/10 px-6 font-sans text-sm font-medium text-mist backdrop-blur-sm hover:bg-mist/20"
              >
                Talk to us
              </ButtonLink>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="mt-8 flex max-w-sm flex-col items-start gap-5 self-end lg:absolute lg:right-8 lg:bottom-40 lg:mt-0"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease }}
        >
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous slide"
              onClick={() => goTo(activeIndex - 1)}
              className="flex size-11 items-center justify-center rounded-full border border-mist/70 bg-transparent text-mist transition-colors hover:bg-mist/10"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Next slide"
              onClick={() => goTo(activeIndex + 1)}
              className="flex size-11 items-center justify-center rounded-full bg-mist text-charcoal transition-colors hover:bg-white"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          <div aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait">
              <motion.p
                key={slide.src}
                className="text-sm leading-relaxed text-mist/90 lg:text-right"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: reduceMotion ? 0 : 0.35, ease }}
              >
                {slide.description}
              </motion.p>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
