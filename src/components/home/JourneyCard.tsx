"use client";

import { useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { whatsappHref } from "@/data/site";
import underlineImg from "@/public/homepage/underline.png";
import { imageHover } from "@/lib/motion";
import { cn } from "@/lib/utils";

const TEAL = "#0E5E6F";
const CORAL = "#EC575E";
const CARD_CAROUSEL_INTERVAL_MS = 1000;

export type Journey = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: StaticImageData;
  images?: StaticImageData[];
  status: "booking-open" | "coming-soon";
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

  useEffect(() => {
    if (images.length <= 1 || reduceMotion) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, CARD_CAROUSEL_INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [images.length, reduceMotion]);

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
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        {images.map((image) => (
          <div
            key={image.src}
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
        isOpen ? "text-[#EC575E] font-bold text-[10px]" : "text-[#6B7075] font-semibold text-[8px]",
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

export function JourneyCard({ journey }: { journey: Journey }) {
  const isOpen = journey.status === "booking-open";
  const carouselImages =
    journey.images && journey.images.length > 0
      ? journey.images
      : [journey.image];

  return (
    <article className="group relative flex h-full flex-col rounded-2xl bg-white px-2 pt-2 pb-4 shadow-[0_4px_24px_rgba(27,29,31,0.08)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(27,29,31,0.14)]">
      <StatusBadge status={journey.status} />

      <div className="relative aspect-4/3 overflow-hidden rounded-xl">
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

      <div className="flex flex-1 flex-col px-2 pt-4">
        <p
          className="text-right text-xs font-semibold"
          style={{ color: TEAL }}
        >
          {journey.category}
        </p>

        <h3 className="mt-1 font-heading text-2xl font-semibold tracking-tight text-charcoal">
          {journey.title}
        </h3>

        <p className="flex-1 text-sm leading-relaxed text-slate">
          {journey.description}
        </p>

        <div className="mt-4">
          {isOpen && journey.perks && (
            <p className="text-xs leading-relaxed text-slate">
              {journey.perks.map((perk, i) => (
                <span key={perk} className="text-[#0E5E6F]">
                  {i > 0 && (
                    <span
                      className="mx-0.5 text-[#0E5E6F]"
                      style={{ color: TEAL, fontSize: "14px" }}
                    >
                      •
                    </span>
                  )}
                  {perk}
                </span>
              ))}
            </p>
          )}

          {isOpen && journey.href ? (
            <Link
              href={journey.href}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: CORAL }}
            >
              Explore Journey
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          ) : (
            <Link
              href={whatsappHref(
                journey.notifyMessage ??
                  `I'd like to be notified when ${journey.title} dates are announced.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-4 inline-block pb-1 text-sm font-semibold text-charcoal transition-colors hover:opacity-80"
            >
              Notify Me
              <NotifyMeUnderline />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
