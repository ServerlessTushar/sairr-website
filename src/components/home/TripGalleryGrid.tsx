"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/data/gallery";
import { cn } from "@/lib/utils";

function gallerySrc(image: GalleryImage) {
  return image.src ?? `https://picsum.photos/seed/${image.seed}/1200/800`;
}

type TripGalleryGridProps = {
  images: GalleryImage[];
  className?: string;
};

type GalleryTileProps = {
  image: GalleryImage;
  onClick: () => void;
  className?: string;
  reduceMotion: boolean | null;
  index?: number;
};

function GalleryTile({
  image,
  onClick,
  className,
  reduceMotion,
  index = 0,
}: GalleryTileProps) {
  return (
    <motion.button
      type="button"
      layout={reduceMotion ? false : true}
      initial={reduceMotion ? false : { opacity: 0, y: 32, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: reduceMotion ? 0 : index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
      whileHover={reduceMotion ? undefined : { y: -6, transition: { duration: 0.3 } }}
      onClick={onClick}
      className={cn(
        "group relative overflow-hidden rounded-[10px] bg-card text-left",
        className,
      )}
    >
      <Image
        src={gallerySrc(image)}
        alt={image.alt}
        fill
        sizes="(max-width: 1024px) 50vw, 25vw"
        data-ai-placeholder={image.aiPlaceholder ? "true" : undefined}
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        style={{ objectPosition: image.objectPosition ?? "center" }}
      />
    </motion.button>
  );
}

function MobileGalleryBlock({
  leftTop,
  leftBottom,
  rightTall,
  indexOffset,
  onImageClick,
  reduceMotion,
}: {
  leftTop: GalleryImage;
  leftBottom: GalleryImage;
  rightTall: GalleryImage;
  indexOffset: number;
  onImageClick: (index: number) => void;
  reduceMotion: boolean | null;
}) {
  return (
    <div className="grid h-[18rem] grid-cols-2 grid-rows-[1fr_1fr] gap-2 sm:gap-3">
      <GalleryTile
        image={leftTop}
        reduceMotion={reduceMotion}
        onClick={() => onImageClick(indexOffset)}
        className="col-start-1 row-start-1 h-full min-h-0"
        index={indexOffset}
      />
      <GalleryTile
        image={leftBottom}
        reduceMotion={reduceMotion}
        onClick={() => onImageClick(indexOffset + 1)}
        className="col-start-1 row-start-2 h-full min-h-0"
        index={indexOffset + 1}
      />
      <GalleryTile
        image={rightTall}
        reduceMotion={reduceMotion}
        onClick={() => onImageClick(indexOffset + 2)}
        className="col-start-2 row-span-2 row-start-1 h-full min-h-0"
        index={indexOffset + 2}
      />
    </div>
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
  if (images.length < 6) {
    return (
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        <AnimatePresence mode="popLayout">
          {images.map((image, index) => (
            <GalleryTile
              key={image.id}
              image={image}
              reduceMotion={reduceMotion}
              onClick={() => onImageClick(index)}
              className="aspect-4/3 min-h-[9.5rem]"
              index={index}
            />
          ))}
        </AnimatePresence>
      </div>
    );
  }

  const [first, second, third, fourth, fifth, sixth] = images;

  const desktopPlacements = [
    { image: first, index: 0, className: "col-start-1 row-start-1 h-full" },
    { image: second, index: 1, className: "col-start-1 row-start-2 h-full" },
    {
      image: third,
      index: 2,
      className: "col-start-2 row-span-2 row-start-1 h-full",
    },
    { image: fourth, index: 3, className: "col-start-3 row-start-1 h-full" },
    { image: fifth, index: 4, className: "col-start-3 row-start-2 h-full" },
    {
      image: sixth,
      index: 5,
      className: "col-start-4 row-span-2 row-start-1 h-full",
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-3 sm:gap-4 lg:hidden">
        <AnimatePresence mode="popLayout">
          <MobileGalleryBlock
            key="mobile-gallery-top"
            leftTop={first}
            leftBottom={second}
            rightTall={third}
            indexOffset={0}
            onImageClick={onImageClick}
            reduceMotion={reduceMotion}
          />
          <MobileGalleryBlock
            key="mobile-gallery-bottom"
            leftTop={fourth}
            leftBottom={fifth}
            rightTall={sixth}
            indexOffset={3}
            onImageClick={onImageClick}
            reduceMotion={reduceMotion}
          />
        </AnimatePresence>
      </div>

      <div
        className="hidden gap-2.5 lg:grid lg:h-[24.75rem] lg:grid-cols-4 lg:grid-rows-[1fr_1fr]"
      >
        <AnimatePresence mode="popLayout">
          {desktopPlacements.map(
            ({ image, index, className }) =>
              image && (
                <GalleryTile
                  key={image.id}
                  image={image}
                  reduceMotion={reduceMotion}
                  onClick={() => onImageClick(index)}
                  className={className}
                  index={index}
                />
              ),
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export function TripGalleryGrid({ images, className }: TripGalleryGridProps) {
  const reduceMotion = useReducedMotion();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrev = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return current <= 0 ? images.length - 1 : current - 1;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return current >= images.length - 1 ? 0 : current + 1;
    });
  }, [images.length]);

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
    lightboxIndex !== null ? images[lightboxIndex] : null;

  return (
    <>
      <div className={className}>
        <motion.div layout={reduceMotion ? false : true}>
          <GalleryMosaic
            images={images}
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
              className="relative z-10 flex w-full max-w-[min(90vw,1200px)] flex-col items-center"
              initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              {/* Native img so lightbox respects each photo's intrinsic aspect ratio */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={activeImage.id}
                src={gallerySrc(activeImage)}
                alt={activeImage.alt}
                className="max-h-[75vh] w-auto max-w-full rounded-2xl border border-mist/15 object-contain shadow-2xl"
                style={{
                  objectPosition: activeImage.objectPosition ?? "center",
                }}
              />

              <div className="mt-4 flex w-full flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                {/* <div>
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">
                    {activeImage.journeyLabel}
                  </p>
                  <p className="mt-1 font-heading text-2xl font-semibold text-mist">
                    {activeImage.caption}
                  </p>
                  <p className="mt-1 text-sm text-mist/70">
                    {activeImage.location}
                  </p>
                </div> */}

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
                    {lightboxIndex + 1} / {images.length}
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
