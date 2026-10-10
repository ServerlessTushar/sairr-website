"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { whatsappHref } from "@/data/site";
import type { TravelDestination } from "@/lib/validations/contact";
import underlineImg from "@/public/homepage/underline.png";
import { imageHover } from "@/lib/motion";
import { cn } from "@/lib/utils";

const TEAL = "#0E5E6F";
const CORAL = "#ec575e";
const CARD_CAROUSEL_INTERVAL_MS = 2000;

function formatPerk(perk: string) {
  return perk.replace(/ /g, "\u00A0");
}

export type Journey = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: StaticImageData;
  images?: StaticImageData[];
  status: "booking-open" | "coming-soon";
  destination?: TravelDestination;
  perks?: string[];
  href?: string;
  notifyMessage?: string;
};

function JourneyImageCarousel({
  images,
  alt,
}: {
  images: StaticImageData[];
  alt: string;
}) {
  const reduceMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [isResetting, setIsResetting] = useState(false);

  const slides = [...images, images[0]];

  useEffect(() => {
    if (images.length <= 1 || reduceMotion) return;

    const id = window.setInterval(() => {
      setIndex((current) => Math.min(current + 1, images.length));
    }, CARD_CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [images.length, reduceMotion]);

  useEffect(() => {
    if (!isResetting) return;

    const frame = window.requestAnimationFrame(() => setIndex(0));
    return () => window.cancelAnimationFrame(frame);
  }, [isResetting]);

  useEffect(() => {
    if (!isResetting || index !== 0) return;

    const frame = window.requestAnimationFrame(() => setIsResetting(false));
    return () => window.cancelAnimationFrame(frame);
  }, [index, isResetting]);

  const activeImage = images[index] ?? images[0];

  if (reduceMotion || images.length <= 1) {
    return (
      <div className="relative h-full w-full overflow-hidden">
        <Image
          src={activeImage}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority
        />
      </div>
    );
  }

  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div
        className="flex h-full"
        animate={{ x: `-${index * 100}%` }}
        transition={
          isResetting
            ? { duration: 0 }
            : { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
        }
        onAnimationComplete={() => {
          if (index === images.length) setIsResetting(true);
        }}
      >
        {slides.map((image, slideIndex) => (
          <div
            key={`${image.src}-${slideIndex}`}
            className="relative h-full min-w-full shrink-0"
          >
            <Image
              src={image}
              alt={alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function StatusBadge({ status }: { status: Journey["status"] }) {
  const isOpen = status === "booking-open";

  return (
    <motion.span
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.4 }}
      className={cn(
        "absolute top-8 right-0 z-10 rounded-l-full py-1.5 pr-6 pl-3 tracking-[0.14em] uppercase shadow-lg",
        "bg-white",
        isOpen
          ? "text-[#EC575E] font-bold text-[10px]"
          : "text-[#6B7075] font-semibold text-[8px]",
      )}
    >
      {isOpen ? "Booking open" : "Coming soon"}
    </motion.span>
  );
}

function NotifyMeUnderline() {
  return (
    <Image
      src={underlineImg}
      alt=""
      width={82}
      height={6}
      aria-hidden
      className="pointer-events-none absolute -bottom-0.5 left-0 h-auto w-[105%] max-w-none"
    />
  );
}

/** Bleeds through article horizontal padding (px-[6px]) for edge-to-edge footer. */
const CARD_FOOTER_BLEED_CLASS = "-mx-[6px] -mb-px w-[calc(100%+12px)]";

export function JourneyCard({
  journey,
  onNotifyMe,
}: {
  journey: Journey;
  onNotifyMe?: (destination: TravelDestination) => void;
}) {
  const isOpen = journey.status === "booking-open";
  const hasItineraryLink = isOpen && Boolean(journey.href);
  const canExpressInterest =
    !isOpen && Boolean(journey.destination && onNotifyMe);

  const carouselImages =
    journey.images && journey.images.length > 0
      ? journey.images
      : [journey.image];

  return (
    <article
      className="group relative flex h-full flex-col overflow-hidden rounded-lg bg-white px-[6px] pt-[6px] pb-0 shadow-[0_2px_10px_rgba(27,29,31,0.05),0_8px_28px_rgba(27,29,31,0.08)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-2 hover:shadow-[0_4px_14px_rgba(27,29,31,0.07),0_16px_40px_rgba(27,29,31,0.11)]"
    >
      {hasItineraryLink ? (
        <Link
          href={journey.href!}
          className="absolute inset-0 z-20 rounded-lg"
          aria-label={`View ${journey.title} itinerary`}
        />
      ) : null}

      {canExpressInterest ? (
        <button
          type="button"
          className="absolute inset-0 z-20 cursor-pointer rounded-lg border-0 bg-transparent p-0"
          aria-label={`I'm interested in ${journey.title}`}
          onClick={() => onNotifyMe!(journey.destination!)}
        />
      ) : null}

      <div className="pointer-events-none relative flex min-h-0 flex-1 flex-col">
        <StatusBadge status={journey.status} />

        <div className="relative aspect-4/3 overflow-hidden rounded-lg">
          {isOpen ? (
            <JourneyImageCarousel images={carouselImages} alt={journey.title} />
          ) : (
            <motion.div
              className="relative h-full w-full"
              whileHover={imageHover}
            >
              <Image
                src={journey.image}
                alt={journey.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </motion.div>
          )}
        </div>

        <div className="flex min-h-0 flex-1 flex-col pt-4 pb-0">
          <div className="flex min-h-0 flex-1 flex-col px-2 md:px-3">
            <p
              className="text-right text-xs font-semibold"
              style={{ color: TEAL }}
            >
              {journey.category}
            </p>

            <h3 className="mt-2 font-heading text-lg font-semibold tracking-tight text-charcoal md:text-2xl">
              {journey.title}
            </h3>

            <p className="mt-1 flex-1 text-xs leading-relaxed text-[#5d5d5d] md:text-sm">
              {journey.description}
            </p>

            {isOpen && journey.perks ? (
              <p className="mt-1 text-[11px] leading-snug text-[#0E5E6F] md:mt-4">
                {journey.perks.map(formatPerk).join(" • ")}
              </p>
            ) : null}
          </div>

          <div className="mt-auto">
            {hasItineraryLink ? (
              <div
                className={cn(
                  CARD_FOOTER_BLEED_CLASS,
                  "mt-8 flex min-h-16 flex-row items-center justify-center bg-[#ec575e] px-3 py-2 text-sm font-semibold capitalize text-white",
                )}
              >
                See itinerary
                <ArrowRight className="ml-2 size-4" />
              </div>
            ) : canExpressInterest ? (
              <div
                className={cn(
                  CARD_FOOTER_BLEED_CLASS,
                  "mt-8 flex min-h-[3.9rem] flex-row items-center justify-center border-t-[0.5px] border-[#5d5d5d50] bg-white px-3 py-2 text-sm font-semibold capitalize",
                )}
                style={{ color: CORAL }}
              >
                I&apos;m Interested
              </div>
            ) : (
              <div className="mt-auto flex min-h-16 w-full items-center justify-center">
                <Link
                  href={whatsappHref(
                    journey.notifyMessage ??
                      `I'd like to be notified when ${journey.title} dates are announced.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto relative z-30 inline-block pb-1 text-sm font-semibold text-charcoal transition-colors hover:opacity-80"
                >
                  Notify Me
                  <NotifyMeUnderline />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
