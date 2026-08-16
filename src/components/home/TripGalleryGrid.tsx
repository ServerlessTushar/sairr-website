"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  galleryImages,
  galleryJourneys,
  type GalleryImage,
  type GalleryLayout,
} from "@/data/gallery";
import { cn } from "@/lib/utils";

const layoutClasses: Record<GalleryLayout, string> = {
  default: "sm:col-span-1 sm:row-span-1",
  wide: "sm:col-span-2 sm:row-span-1",
  tall: "sm:col-span-1 sm:row-span-2",
  large: "sm:col-span-2 sm:row-span-2",
};

function gallerySrc(image: GalleryImage) {
  return image.src ?? `https://picsum.photos/seed/${image.seed}/1200/800`;
}

type TripGalleryGridProps = {
  className?: string;
};

export function TripGalleryGrid({ className }: TripGalleryGridProps) {
  const reduceMotion = useReducedMotion();
  const [activeJourney, setActiveJourney] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages =
    activeJourney === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.journey === activeJourney);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return current <= 0 ? filteredImages.length - 1 : current - 1;
    });
  }, [filteredImages.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return current >= filteredImages.length - 1 ? 0 : current + 1;
    });
  }, [filteredImages.length]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [closeLightbox, lightboxIndex, showNext, showPrev]);

  useEffect(() => {
    setLightboxIndex(null);
  }, [activeJourney]);

  const activeImage =
    lightboxIndex !== null ? filteredImages[lightboxIndex] : null;

  return (
    <>
      <div className={cn("mt-10 space-y-8", className)}>
        <div className="flex flex-wrap gap-2">
          {galleryJourneys.map((journey) => {
            const count =
              journey.slug === "all"
                ? galleryImages.length
                : galleryImages.filter((image) => image.journey === journey.slug)
                    .length;

            if (journey.slug !== "all" && count === 0) return null;

            return (
              <button
                key={journey.slug}
                type="button"
                onClick={() => setActiveJourney(journey.slug)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeJourney === journey.slug
                    ? "bg-brand text-white"
                    : "border border-border/70 bg-card text-charcoal hover:border-brand/30 hover:text-brand",
                )}
              >
                {journey.label}
              </button>
            );
          })}
        </div>

        <motion.div
          layout={reduceMotion ? false : true}
          className="grid auto-rows-[11rem] grid-cols-1 gap-4 sm:grid-cols-2 sm:auto-rows-[12rem] lg:grid-cols-4 lg:auto-rows-[10.5rem]"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.button
                key={image.id}
                type="button"
                layout={reduceMotion ? false : true}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
                onClick={() => setLightboxIndex(index)}
                className={cn(
                  "group relative overflow-hidden rounded-2xl border border-border/60 bg-card text-left shadow-sm",
                  layoutClasses[image.layout ?? "default"],
                )}
              >
                <Image
                  src={gallerySrc(image)}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  data-ai-placeholder={image.aiPlaceholder ? "true" : undefined}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ objectPosition: image.objectPosition ?? "center" }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                    {image.journeyLabel}
                  </p>
                  <p className="mt-1 font-heading text-lg font-semibold leading-snug text-mist">
                    {image.caption}
                  </p>
                  <p className="mt-1 text-xs text-mist/75">{image.location}</p>
                </div>

                <div className="absolute right-3 top-3 rounded-full border border-mist/20 bg-charcoal/35 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-mist/85 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                  View
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {activeImage && lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button
              type="button"
              aria-label="Close gallery"
              className="absolute inset-0 bg-charcoal/90 backdrop-blur-sm"
              onClick={closeLightbox}
            />

            <motion.div
              className="relative z-10 w-full max-w-5xl"
              initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-mist/15 shadow-2xl">
                <Image
                  src={gallerySrc(activeImage)}
                  alt={activeImage.alt}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  style={{
                    objectPosition: activeImage.objectPosition ?? "center",
                  }}
                  priority
                />
              </div>

              <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                    {activeImage.journeyLabel}
                  </p>
                  <p className="mt-1 font-heading text-2xl font-semibold text-mist">
                    {activeImage.caption}
                  </p>
                  <p className="mt-1 text-sm text-mist/70">
                    {activeImage.location}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Previous image"
                    onClick={showPrev}
                    className="flex size-10 items-center justify-center rounded-full border border-mist/20 bg-mist/10 text-mist transition-colors hover:bg-mist/20"
                  >
                    <ChevronLeft className="size-5" />
                  </button>
                  <span className="min-w-12 text-center text-sm text-mist/70">
                    {lightboxIndex + 1} / {filteredImages.length}
                  </span>
                  <button
                    type="button"
                    aria-label="Next image"
                    onClick={showNext}
                    className="flex size-10 items-center justify-center rounded-full border border-mist/20 bg-mist/10 text-mist transition-colors hover:bg-mist/20"
                  >
                    <ChevronRight className="size-5" />
                  </button>
                  <button
                    type="button"
                    aria-label="Close gallery"
                    onClick={closeLightbox}
                    className="ml-2 flex size-10 items-center justify-center rounded-full border border-mist/20 bg-mist/10 text-mist transition-colors hover:bg-mist/20"
                  >
                    <X className="size-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
