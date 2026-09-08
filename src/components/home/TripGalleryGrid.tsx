"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import {
  galleryImages,
  type GalleryImage,
} from "@/data/gallery";
import { cn } from "@/lib/utils";

function gallerySrc(image: GalleryImage) {
  return image.src ?? `https://picsum.photos/seed/${image.seed}/1200/800`;
}

type TripGalleryGridProps = {
  className?: string;
};

type GalleryTileProps = {
  image: GalleryImage;
  onClick: () => void;
  className?: string;
  reduceMotion: boolean | null;
};

function GalleryTile({
  image,
  onClick,
  className,
  reduceMotion,
}: GalleryTileProps) {
  return (
    <motion.button
      type="button"
      layout={reduceMotion ? false : true}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
      onClick={onClick}
      className={cn(
        "group relative min-h-[9.5rem] overflow-hidden rounded-2xl bg-card text-left sm:min-h-[11rem]",
        className,
      )}
    >
      <Image
        src={gallerySrc(image)}
        alt={image.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        data-ai-placeholder={image.aiPlaceholder ? "true" : undefined}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ objectPosition: image.objectPosition ?? "center" }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-sm font-semibold text-white">{image.journeyLabel}</p>
        <p className="mt-0.5 text-xs text-white/90">{image.caption}</p>
      </div>
    </motion.button>
  );
}

function GalleryMosaic({
  images,
  onImageClick,
  reduceMotion,
}: {
  images: GalleryImage[];
  onImageClick: (index: number) => void;
  reduceMotion: boolean | null;
}) {
  const left = images.slice(0, 3);
  const right = images.slice(3, 6);

  if (images.length < 6) {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {images.map((image, index) => (
            <GalleryTile
              key={image.id}
              image={image}
              reduceMotion={reduceMotion}
              onClick={() => onImageClick(index)}
              className="aspect-4/3"
            />
          ))}
        </AnimatePresence>
      </div>
    );
  }

  const tileIndex = (offset: number) => offset;

  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:gap-5">
      <div className="grid min-h-[19rem] flex-1 grid-cols-2 grid-rows-2 gap-4 sm:min-h-[22rem] lg:min-h-[26rem]">
        <AnimatePresence mode="popLayout">
          {left[0] && (
            <GalleryTile
              key={left[0].id}
              image={left[0]}
              reduceMotion={reduceMotion}
              onClick={() => onImageClick(tileIndex(0))}
              className="col-start-1 row-start-1 h-full"
            />
          )}
          {left[1] && (
            <GalleryTile
              key={left[1].id}
              image={left[1]}
              reduceMotion={reduceMotion}
              onClick={() => onImageClick(tileIndex(1))}
              className="col-start-1 row-start-2 h-full"
            />
          )}
          {left[2] && (
            <GalleryTile
              key={left[2].id}
              image={left[2]}
              reduceMotion={reduceMotion}
              onClick={() => onImageClick(tileIndex(2))}
              className="col-start-2 row-span-2 row-start-1 h-full"
            />
          )}
        </AnimatePresence>
      </div>

      <div className="grid min-h-[19rem] flex-1 grid-cols-2 grid-rows-2 gap-4 sm:min-h-[22rem] lg:min-h-[26rem]">
        <AnimatePresence mode="popLayout">
          {right[0] && (
            <GalleryTile
              key={right[0].id}
              image={right[0]}
              reduceMotion={reduceMotion}
              onClick={() => onImageClick(tileIndex(3))}
              className="col-span-2 row-start-1 h-full"
            />
          )}
          {right[1] && (
            <GalleryTile
              key={right[1].id}
              image={right[1]}
              reduceMotion={reduceMotion}
              onClick={() => onImageClick(tileIndex(4))}
              className="col-start-1 row-start-2 h-full"
            />
          )}
          {right[2] && (
            <GalleryTile
              key={right[2].id}
              image={right[2]}
              reduceMotion={reduceMotion}
              onClick={() => onImageClick(tileIndex(5))}
              className="col-start-2 row-start-2 h-full"
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function TripGalleryGrid({ className }: TripGalleryGridProps) {
  const reduceMotion = useReducedMotion();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return current <= 0 ? galleryImages.length - 1 : current - 1;
    });
  }, []);

  const showNext = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return current >= galleryImages.length - 1 ? 0 : current + 1;
    });
  }, []);

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

  const activeImage =
    lightboxIndex !== null ? galleryImages[lightboxIndex] : null;

  return (
    <>
      <div className={className}>
        <motion.div layout={reduceMotion ? false : true}>
          <GalleryMosaic
            images={galleryImages}
            reduceMotion={reduceMotion}
            onImageClick={setLightboxIndex}
          />
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
                    {lightboxIndex + 1} / {galleryImages.length}
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
