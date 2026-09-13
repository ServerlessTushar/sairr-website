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
import {
  FadeIn,
  StaggerContainer,
  staggerItem,
} from "@/components/shared/FadeIn";
import { TextReveal } from "@/components/shared/TextReveal";
import { motion } from "framer-motion";
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

function HighlightsList({ highlights }: { highlights: string[] }) {
  if (highlights.length === 0) return null;

  return (
    <StaggerContainer
      className="shrink-0 space-y-2 lg:space-y-1.5"
      stagger={0.06}
    >
      {highlights.map((highlight) => (
        <motion.li
          key={highlight}
          variants={staggerItem}
          className="flex list-none gap-3 text-sm leading-snug text-charcoal lg:text-[0.9rem] lg:leading-relaxed"
        >
          <span
            className="mt-2 size-1.5 shrink-0 rounded-full"
            style={{ backgroundColor: CORAL }}
            aria-hidden
          />
          <span>{highlight}</span>
        </motion.li>
      ))}
    </StaggerContainer>
  );
}

function HeroCtas({
  primaryCtaLabel,
  secondaryCtaLabel,
  secondaryCtaHref,
  onPrimaryClick,
  className,
}: {
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  onPrimaryClick: () => void;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex w-full flex-col gap-3 sm:flex-row sm:items-center",
        className,
      )}
    >
      <button
        type="button"
        onClick={onPrimaryClick}
        className="inline-flex h-12 cursor-pointer items-center justify-center rounded-lg bg-[#FF4859] px-6 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(27,29,31,0.12)] transition-opacity hover:scale-104 hover:bg-[#E63B4C] hover:opacity-90 sm:px-8 lg:h-11"
      >
        {primaryCtaLabel}
      </button>
      <Link
        href={secondaryCtaHref}
        className="inline-flex h-12 items-center justify-center rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-charcoal opacity-70 shadow-[0_4px_14px_rgba(27,29,31,0.08)] transition-opacity hover:scale-104 hover:bg-gray-100 hover:opacity-90 sm:px-8 lg:h-11"
      >
        {secondaryCtaLabel}
      </Link>
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
          <FadeIn className="flex shrink-0 flex-col gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-4">
            <div className="min-w-0">
              <TextReveal
                as="h1"
                text={heading}
                className="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl lg:text-[2.35rem] lg:leading-[1.1]"
                splitBy="line"
              />

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2 lg:mt-2.5"
              >
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
              </motion.div>
            </div>

            <FadeIn delay={0.15} className="hidden shrink-0 lg:block">
              <HeroCtas
                primaryCtaLabel={primaryCtaLabel}
                secondaryCtaLabel={secondaryCtaLabel}
                secondaryCtaHref={secondaryCtaHref}
                onPrimaryClick={onPrimaryClick}
                className="lg:w-auto"
              />
            </FadeIn>
          </FadeIn>

          {/* Mobile: images first, then CTAs + highlights */}
          <div className="mt-8 flex flex-col gap-4 lg:hidden">
            <FadeIn delay={0.1} direction="left">
              {mainImage ? (
                <div className="relative aspect-4/5 min-h-[14rem] overflow-hidden rounded-2xl bg-charcoal/5">
                  <GalleryImage
                    image={mainImage}
                    priority
                    sizes="100vw"
                  />
                </div>
              ) : (
                <div className="aspect-4/5 min-h-[14rem] rounded-2xl bg-charcoal/10" />
              )}
            </FadeIn>

            {gridImages.length > 0 ? (
              <FadeIn
                delay={0.15}
                direction="right"
                className="grid min-h-[12rem] grid-cols-2 grid-rows-2 gap-3"
              >
                {gridImages.map((image, index) => {
                  const isLastCell = index === gridImages.length - 1;

                  return (
                    <div
                      key={`${image.alt}-${index}`}
                      className="relative aspect-square min-h-0"
                    >
                      <GalleryImage
                        image={image}
                        sizes="50vw"
                        showOverlay={isLastCell}
                        extraCount={extraCount}
                        onOverlayClick={() => setGalleryOpen(true)}
                      />
                    </div>
                  );
                })}
              </FadeIn>
            ) : null}

            <FadeIn delay={0.15}>
              <HeroCtas
                primaryCtaLabel={primaryCtaLabel}
                secondaryCtaLabel={secondaryCtaLabel}
                secondaryCtaHref={secondaryCtaHref}
                onPrimaryClick={onPrimaryClick}
              />
            </FadeIn>
            <HighlightsList highlights={highlights} />
          </div>

          {/* Desktop: two-column gallery with highlights under main image */}
          <div className="mt-8 hidden min-h-0 flex-1 gap-4 lg:mt-4 lg:grid lg:grid-cols-2 lg:gap-4">
            <FadeIn
              delay={0.1}
              direction="left"
              className="flex min-h-0 flex-col gap-3"
            >
              {mainImage ? (
                <div className="relative min-h-0 flex-1 overflow-hidden rounded-2xl bg-charcoal/5 lg:min-h-[20rem]">
                  <GalleryImage
                    image={mainImage}
                    priority
                    sizes="50vw"
                  />
                </div>
              ) : (
                <div className="min-h-0 flex-1 rounded-2xl bg-charcoal/10 lg:min-h-[20rem]" />
              )}
              <HighlightsList highlights={highlights} />
            </FadeIn>

            {gridImages.length > 0 ? (
              <FadeIn
                delay={0.15}
                direction="right"
                className="grid min-h-0 h-full grid-cols-2 grid-rows-2 gap-4"
              >
                {gridImages.map((image, index) => {
                  const isLastCell = index === gridImages.length - 1;

                  return (
                    <div
                      key={`${image.alt}-${index}`}
                      className="relative min-h-0 aspect-auto"
                    >
                      <GalleryImage
                        image={image}
                        sizes="25vw"
                        showOverlay={isLastCell}
                        extraCount={extraCount}
                        onOverlayClick={() => setGalleryOpen(true)}
                      />
                    </div>
                  );
                })}
              </FadeIn>
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
