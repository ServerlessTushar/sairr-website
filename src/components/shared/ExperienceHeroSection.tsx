"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import sunIcon from "@/public/experience/sun.webp";
import briefcaseIcon from "@/public/experience/briefcase.webp";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const CORAL = "#E44928";
const GRAY_BTN = "#E8E8E8";
const MAX_VISIBLE_IMAGES = 5;

export type HeroImage = {
  src: StaticImageData;
  alt: string;
};

export type ExperienceHeroSectionData = {
  heading: string;
  duration: string;
  tagline: string;
  highlights: string[];
  images: HeroImage[];
  primaryCtaLabel?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  galleryDialogTitle?: string;
};

export type ExperienceHeroSectionProps = ExperienceHeroSectionData & {
  onPrimaryClick: () => void;
  className?: string;
};

function GalleryImage({
  image,
  priority = false,
  sizes,
  showOverlay,
  extraCount,
  onOverlayClick,
}: {
  image: HeroImage;
  priority?: boolean;
  sizes: string;
  showOverlay?: boolean;
  extraCount?: number;
  onOverlayClick?: () => void;
}) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl bg-charcoal/5">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        className="object-cover"
        sizes={sizes}
      />
      {showOverlay && extraCount && extraCount > 0 ? (
        <button
          type="button"
          onClick={onOverlayClick}
          className="absolute inset-0 flex cursor-pointer items-center justify-center bg-white/55 backdrop-blur-[1px] transition-colors hover:bg-white/65"
          aria-label={`View ${extraCount} more photos`}
        >
          <span className="font-heading text-4xl font-semibold text-charcoal sm:text-5xl">
            +{extraCount}
          </span>
        </button>
      ) : null}
    </div>
  );
}

function HeroGalleryDialog({
  open,
  onOpenChange,
  title,
  images,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  images: HeroImage[];
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl sm:p-6">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {images.map((image, index) => (
            <div
              key={`${image.alt}-${index}`}
              className="relative aspect-square overflow-hidden rounded-xl bg-charcoal/5"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ExperienceHeroSection({
  heading,
  duration,
  tagline,
  highlights,
  images,
  primaryCtaLabel = "Tell Us You're Interested →",
  secondaryCtaLabel = "See what each day holds",
  secondaryCtaHref = "#four-days",
  galleryDialogTitle,
  onPrimaryClick,
  className,
}: ExperienceHeroSectionProps) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const mainImage = images[0];
  const gridImages = images.slice(1, MAX_VISIBLE_IMAGES);
  const extraCount = Math.max(0, images.length - MAX_VISIBLE_IMAGES);
  const resolvedGalleryTitle = galleryDialogTitle ?? `${heading} photos`;

  return (
    <>
      <section
        className={cn(
          "border-b border-charcoal/10 bg-mist lg:min-h-[calc(100dvh-2rem)]",
          className,
        )}
      >
        <div className="mx-auto flex h-full max-w-7xl flex-col px-4 py-10 sm:px-6 sm:py-12 lg:min-h-[calc(100dvh-5rem)] lg:px-8 lg:py-5">
          <div className="flex shrink-0 flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-4">
            <div className="min-w-0">
              <h1 className="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl lg:text-[2.35rem] lg:leading-[1.1]">
                {heading}
              </h1>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2 lg:mt-2.5">
                <div className="flex items-center gap-2.5 text-sm text-charcoal sm:text-base">
                  <Image
                    src={sunIcon}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5 shrink-0"
                    aria-hidden
                  />
                  <span>{duration}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-charcoal sm:text-base">
                  <Image
                    src={briefcaseIcon}
                    alt=""
                    width={20}
                    height={20}
                    className="size-5 shrink-0"
                    aria-hidden
                  />
                  <span>{tagline}</span>
                </div>
              </div>
            </div>

            <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={onPrimaryClick}
                className="inline-flex h-12 items-center justify-center rounded-lg px-6 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(27,29,31,0.12)] transition-opacity hover:opacity-90 sm:px-8 lg:h-11"
                style={{ backgroundColor: CORAL }}
              >
                {primaryCtaLabel}
              </button>
              <Link
                href={secondaryCtaHref}
                className="inline-flex h-12 items-center border border-charcoal/30 justify-center rounded-lg px-6 text-sm font-semibold text-charcoal shadow-[0_4px_14px_rgba(27,29,31,0.08)] transition-opacity hover:opacity-90 sm:px-8 lg:h-11"
                style={{ backgroundColor: GRAY_BTN }}
              >
                {secondaryCtaLabel}
              </Link>
            </div>
          </div>

          <div className="mt-8 grid min-h-0 flex-1 grid-cols-1 gap-4 lg:mt-4 lg:grid-cols-2 lg:gap-4">
            <div className="flex min-h-0 flex-col gap-4 lg:gap-3">
              {mainImage ? (
                <div className="relative aspect-4/5 min-h-[14rem] overflow-hidden rounded-2xl bg-charcoal/5 lg:aspect-auto lg:min-h-0 lg:flex-1">
                  <GalleryImage
                    image={mainImage}
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <div className="aspect-4/5 min-h-[14rem] rounded-2xl bg-charcoal/10 lg:min-h-0 lg:flex-1" />
              )}

              {highlights.length > 0 ? (
                <ul className="shrink-0 space-y-2 text-sm leading-snug text-charcoal lg:space-y-1.5 lg:text-[0.9rem] lg:leading-relaxed">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3">
                      <span
                        className="mt-2 size-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: CORAL }}
                        aria-hidden
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            {gridImages.length > 0 ? (
              <div className="grid min-h-[12rem] grid-cols-2 grid-rows-2 gap-3 lg:min-h-0 lg:h-full lg:gap-4">
                {gridImages.map((image, index) => {
                  const isLastCell = index === gridImages.length - 1;

                  return (
                    <div
                      key={`${image.alt}-${index}`}
                      className="relative min-h-0 aspect-square lg:aspect-auto"
                    >
                      <GalleryImage
                        image={image}
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        showOverlay={isLastCell}
                        extraCount={extraCount}
                        onOverlayClick={() => setGalleryOpen(true)}
                      />
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <HeroGalleryDialog
        open={galleryOpen}
        onOpenChange={setGalleryOpen}
        title={resolvedGalleryTitle}
        images={images}
      />
    </>
  );
}
