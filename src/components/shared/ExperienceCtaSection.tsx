"use client";

import Image from "next/image";
import Link from "next/link";
import { whatsappHref } from "@/data/site";
import whatsappIcon from "@/public/homepage/whatsapp.png";
import { cn } from "@/lib/utils";

const GOLD_BG = "#C8A867";
const CORAL = "#E44928";
const GRAY_BTN = "#E8E8E8";

export type ExperienceCtaSectionData = {
  heading: string;
  para: string;
  primaryCtaLabel?: string;
  whatsappLabel?: string;
  whatsappMessage?: string;
};

export type ExperienceCtaSectionProps = ExperienceCtaSectionData & {
  onPrimaryClick: () => void;
  className?: string;
};

export function ExperienceCtaSection({
  heading,
  para,
  primaryCtaLabel = "Tell Us You're Interested →",
  whatsappLabel = "WhatsApp us",
  whatsappMessage = "Hi Sairr — I'd like to talk about a journey.",
  onPrimaryClick,
  className,
}: ExperienceCtaSectionProps) {
  return (
    <section
      className={cn("px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24", className)}
      style={{ backgroundColor: GOLD_BG }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/95 sm:text-lg">
          {para}
        </p>

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:mt-10 sm:flex-row sm:items-center sm:justify-center">
          <button
            type="button"
            onClick={onPrimaryClick}
            className="inline-flex h-12 items-center justify-center rounded-lg px-6 text-sm font-semibold text-white shadow-[0_4px_14px_rgba(27,29,31,0.12)] transition-opacity hover:opacity-90 sm:h-[3.25rem] sm:px-8 sm:text-base"
            style={{ backgroundColor: CORAL }}
          >
            {primaryCtaLabel}
          </button>

          <Link
            href={whatsappHref(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold text-charcoal shadow-[0_4px_14px_rgba(27,29,31,0.08)] transition-opacity hover:opacity-90 sm:h-[3.25rem] sm:px-8 sm:text-base"
            style={{ backgroundColor: GRAY_BTN }}
          >
            <Image
              src={whatsappIcon}
              alt=""
              width={22}
              height={22}
              className="size-[22px] shrink-0"
              aria-hidden
            />
            {whatsappLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
