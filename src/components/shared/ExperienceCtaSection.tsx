"use client";

import Image from "next/image";
import Link from "next/link";
import { whatsappHref } from "@/data/site";
import whatsappIcon from "@/public/whatsappLogo.svg";
import { AnimatedSectionHeader } from "@/components/shared/AnimatedSectionHeader";
import { FadeIn } from "@/components/shared/FadeIn";
import { cn } from "@/lib/utils";

const GOLD_BG = "#C8A867";

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
      className={cn("px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-16", className)}
      style={{ backgroundColor: GOLD_BG }}
    >
      <div className="mx-auto max-w-3xl text-center">
        <AnimatedSectionHeader
          heading={heading}
          description={para}
          headingClassName="font-heading text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.5rem]"
          descriptionClassName="max-w-xl text-white/95 sm:text-lg"
        />

        <FadeIn delay={0.15}>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-5">
          <button
            type="button"
            onClick={onPrimaryClick}
            className="inline-flex h-12 w-[11rem] cursor-pointer items-center justify-center rounded-lg bg-[#ec575e] px-6 text-sm font-semibold text-white transition-opacity hover:bg-[#dc4850] hover:opacity-90"
          >
            {primaryCtaLabel}
          </button>

          <Link
            href={whatsappHref(whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 w-[11rem] items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-6 text-sm font-semibold text-charcoal opacity-70 transition-opacity hover:bg-gray-100 hover:opacity-90"
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
        </FadeIn>
      </div>
    </section>
  );
}
