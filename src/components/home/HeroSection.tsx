"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import {
  getFeaturedExperiences,
  type Experience,
} from "@/data/experiences";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { cn } from "@/lib/utils";

const journeys = getFeaturedExperiences();

const trustPoints = [
  "Door-to-door care",
  "4-star+ stays",
  "Dedicated coordinator",
] as const;

const ease = [0.25, 0.4, 0.25, 1] as const;
const AUTOPLAY_MS = 6000;

function journeyDisplayTitle(experience: Experience) {
  const part = experience.tagline.split("—")[0]?.trim();
  return part || experience.title;
}

function journeyMeta(experience: Experience) {
  if (experience.logistics) {
    return `${experience.location} · ${experience.logistics}`;
  }

  return `${experience.location} · ${experience.statusLabel}`;
}

function journeyHref(experience: Experience) {
  return experience.hasDetailPage
    ? `/experiences/${experience.slug}`
    : "/experiences";
}

function journeyCta(experience: Experience) {
  return experience.hasDetailPage ? "View journey" : "Learn more";
}

function journeyCaption(experience: Experience) {
  if (experience.datesLabel && experience.datesLabel !== "Dates coming soon") {
    return `${experience.title}, ${experience.datesLabel}`;
  }

  return `${experience.title} · ${experience.statusLabel}`;
}

type HeroCarouselProps = {
  activeIndex: number;
  onSelect: (index: number) => void;
  onPauseChange: (paused: boolean) => void;
  reduceMotion: boolean | null;
};

function HeroBackgroundCarousel({
  activeIndex,
  reduceMotion,
}: Pick<HeroCarouselProps, "activeIndex" | "reduceMotion">) {
  const experience = journeys[activeIndex];

  return (
    <div className="absolute inset-0">
      <AnimatePresence mode="wait">
        <motion.div
          key={experience.slug}
          className="absolute inset-0"
          initial={reduceMotion ? false : { opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduceMotion ? undefined : { opacity: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.9, ease: "easeOut" }}
        >
          <PlaceholderImage
            seed={`hero-${experience.imageSeed}`}
            src={experience.imageSrc}
            alt={`${journeyDisplayTitle(experience)} journey`}
            priority={activeIndex === 0}
            aiPlaceholder={experience.aiPlaceholder}
            className="object-cover object-[center_30%]"
          />
        </motion.div>
      </AnimatePresence>

      <div
        className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/35 to-charcoal/75"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-forest/95 via-forest/55 to-brand/10 lg:via-forest/45 lg:to-transparent"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,168,103,0.18),transparent_55%)]"
        aria-hidden
      />
    </div>
  );
}

function HeroJourneyCard({
  activeIndex,
  onSelect,
  onPauseChange,
  reduceMotion,
}: HeroCarouselProps) {
  const experience = journeys[activeIndex];
  const maxIndex = journeys.length - 1;

  const goTo = useCallback(
    (index: number) => {
      const next = index < 0 ? maxIndex : index > maxIndex ? 0 : index;
      onSelect(next);
    },
    [maxIndex, onSelect],
  );

  return (
    <motion.aside
      className="mt-12 lg:mt-0 lg:justify-self-end"
      initial={reduceMotion ? false : { opacity: 0, x: 32, rotate: 2 }}
      animate={{ opacity: 1, x: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.35, ease }}
      onMouseEnter={() => onPauseChange(true)}
      onMouseLeave={() => onPauseChange(false)}
      onFocusCapture={() => onPauseChange(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          onPauseChange(false);
        }
      }}
    >
      <div className="relative mx-auto max-w-sm rotate-1 transition-transform duration-500 hover:rotate-0 lg:mx-0">
        <div className="overflow-hidden rounded-2xl border border-mist/20 bg-charcoal/25 p-3 shadow-2xl shadow-charcoal/40 backdrop-blur-md">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={experience.slug}
                className="absolute inset-0"
                initial={reduceMotion ? false : { opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, x: -24 }}
                transition={{ duration: reduceMotion ? 0 : 0.45, ease }}
              >
                <PlaceholderImage
                  seed={`hero-card-${experience.imageSeed}`}
                  src={experience.imageSrc}
                  alt={`Preview of ${journeyDisplayTitle(experience)}`}
                  aiPlaceholder={experience.aiPlaceholder}
                  className="object-cover object-[center_35%]"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />

            <div className="absolute left-3 right-3 top-3 flex items-center justify-between gap-2">
              <p className="rounded-full border border-mist/15 bg-charcoal/35 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-gold backdrop-blur-sm">
                {experience.statusLabel}
              </p>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  aria-label="Previous journey"
                  onClick={() => goTo(activeIndex - 1)}
                  className="flex size-8 items-center justify-center rounded-full border border-mist/20 bg-charcoal/35 text-mist backdrop-blur-sm transition-colors hover:bg-charcoal/55"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next journey"
                  onClick={() => goTo(activeIndex + 1)}
                  className="flex size-8 items-center justify-center rounded-full border border-mist/20 bg-charcoal/35 text-mist backdrop-blur-sm transition-colors hover:bg-charcoal/55"
                >
                  <ChevronRight className="size-4" />
                </button>
              </div>
            </div>

            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                Featured journey
              </p>
              <AnimatePresence mode="wait">
                <motion.p
                  key={experience.slug}
                  className="mt-1 font-heading text-2xl font-semibold text-mist"
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: reduceMotion ? 0 : 0.35, ease }}
                >
                  {journeyDisplayTitle(experience)}
                </motion.p>
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-4 space-y-3 px-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={experience.slug}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: reduceMotion ? 0 : 0.35, ease }}
              >
                <div className="flex items-start gap-2 text-sm text-mist/85">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span>{journeyMeta(experience)}</span>
                </div>
                <div className="mt-3 flex items-center justify-between gap-3 border-t border-mist/10 pt-3">
                  <p className="text-xs uppercase tracking-[0.16em] text-mist/60">
                    {experience.datesLabel}
                  </p>
                  <ButtonLink
                    href={journeyHref(experience)}
                    className="h-9 rounded-full bg-sand px-4 text-xs font-semibold text-charcoal hover:bg-mist"
                  >
                    {journeyCta(experience)}
                  </ButtonLink>
                </div>
              </motion.div>
            </AnimatePresence>

            <div
              className="flex items-center justify-center gap-2 pt-1"
              role="tablist"
              aria-label="Featured journeys"
            >
              {journeys.map((journey, index) => (
                <button
                  key={journey.slug}
                  type="button"
                  role="tab"
                  aria-selected={index === activeIndex}
                  aria-label={`Show ${journeyDisplayTitle(journey)}`}
                  onClick={() => onSelect(index)}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    index === activeIndex
                      ? "w-8 bg-gold"
                      : "w-1.5 bg-mist/35 hover:bg-mist/60",
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className="absolute -right-3 -top-3 h-16 w-16 rounded-full border border-gold/25 bg-gold/10 backdrop-blur-sm"
          aria-hidden
        />
      </div>
    </motion.aside>
  );
}

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const activeExperience = journeys[activeIndex];

  useEffect(() => {
    if (journeys.length <= 1 || paused || reduceMotion) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current >= journeys.length - 1 ? 0 : current + 1));
    }, AUTOPLAY_MS);

    return () => window.clearInterval(id);
  }, [paused, reduceMotion]);

  return (
    <section
      className="relative min-h-[min(100dvh,56rem)] overflow-hidden"
      aria-roledescription="carousel"
      aria-label="Featured journeys"
    >
      <HeroBackgroundCarousel
        activeIndex={activeIndex}
        reduceMotion={reduceMotion}
      />

      <div className="relative mx-auto flex min-h-[min(100dvh,56rem)] max-w-7xl flex-col justify-center px-4 py-28 sm:px-6 lg:grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-12 lg:px-8 lg:py-24">
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
            <div className="h-px w-16 bg-gold" aria-hidden />
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

        <HeroJourneyCard
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
          onPauseChange={setPaused}
          reduceMotion={reduceMotion}
        />
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-charcoal/25 backdrop-blur-md"
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <ul className="flex flex-wrap gap-2 sm:gap-3">
            {trustPoints.map((point) => (
              <li
                key={point}
                className="rounded-full border border-mist/15 bg-mist/10 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.14em] text-mist/85"
              >
                {point}
              </li>
            ))}
          </ul>
          <AnimatePresence mode="wait">
            <motion.p
              key={activeExperience.slug}
              className="text-[11px] tracking-[0.14em] text-mist/70"
              initial={reduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: reduceMotion ? 0 : 0.3, ease }}
            >
              {journeyCaption(activeExperience)}
            </motion.p>
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.a
        href="#experiences"
        className="absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-mist/60 transition-colors hover:text-mist lg:flex"
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.8, ease }}
        aria-label="Scroll to journeys"
      >
        <span className="text-[10px] uppercase tracking-[0.2em]">Explore</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
