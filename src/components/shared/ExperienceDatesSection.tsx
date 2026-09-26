"use client";

import Image, { type StaticImageData } from "next/image";
import underlineImg from "@/public/homepage/underline.png";
import { AnimatedSectionHeader } from "@/components/shared/AnimatedSectionHeader";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/shared/FadeIn";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const CORAL = "#E44928";
const PRICE_TEAL = "#0E5E6F";

export type DateCardData = {
  id: string;
  dateRange: string;
  year: string;
  duration: string;
  travellers: string;
  price?: string;
  note?: string;
  ctaLabel?: string;
  selected?: boolean;
};

export type ExperienceDatesSectionProps = {
  heading: string;
  cardsData: DateCardData[];
  upcomingBar?: {
    label: string;
    notifyLabel?: string;
  };
  pricingNotes?: string[];
  backgroundImage: StaticImageData;
  onInterestClick: (cardId: string) => void;
  onNotifyClick: () => void;
  id?: string;
  className?: string;
};

function DetailBullet() {
  return (
    <span className="mx-2 text-[#E44928]" aria-hidden>
      •
    </span>
  );
}

function NotifyMeButton({
  label,
  onClick,
  className,
}: {
  label: string;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "relative shrink-0 rounded-[10px] bg-white px-4 py-2.5 text-sm font-semibold text-charcoal shadow-sm transition-opacity hover:opacity-80 sm:px-5",
        className,
      )}
    >
      {label}
      <Image
        src={underlineImg}
        alt=""
        width={82}
        height={6}
        aria-hidden
        className="pointer-events-none absolute -bottom-0.5 left-3 h-auto w-[calc(100%-1.5rem)] max-w-none"
      />
    </button>
  );
}

function DateCard({
  card,
  onInterestClick,
}: {
  card: DateCardData;
  onInterestClick: (cardId: string) => void;
}) {
  return (
    <article className="flex flex-col rounded-2xl bg-white p-5 shadow-[0_4px_24px_rgba(27,29,31,0.08)] sm:p-6">
      <div className="border-b-[0.5px] border-[#E44928] pb-4">
        <p className="font-heading text-2xl font-semibold text-charcoal sm:text-[1.75rem]">
          {card.dateRange}{" "}
          <span className="font-sans text-lg font-normal sm:text-xl">
            {card.year}
          </span>
        </p>
      </div>

      <p className="mt-4 text-sm text-charcoal sm:text-base">
        {card.duration}
        <DetailBullet />
        {card.travellers}
        {card.note ? (
          <>
            <DetailBullet />
            <span style={{ color: CORAL }}>{card.note}</span>
          </>
        ) : null}
      </p>

      <div className="mt-5 flex flex-col gap-4 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
        {card.price ? (
          <p className="font-heading text-2xl font-semibold sm:text-[1.75rem]">
            <span style={{ color: PRICE_TEAL }}>{card.price}</span>
            <span
              className="text-base font-normal sm:text-lg"
              style={{ color: PRICE_TEAL }}
            >
              /person
            </span>
          </p>
        ) : (
          <span />
        )}

        <button
          type="button"
          onClick={() => onInterestClick(card.id)}
          className="bg-[#FF4859] hover:bg-[#E63B4C] cursor-pointer hover:scale-104 tab:hover-0.98 inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold text-white sm:w-auto"
        >
          {card.ctaLabel ?? "Tell Us You're Interested →"}
        </button>
      </div>
    </article>
  );
}

export function ExperienceDatesSection({
  heading,
  cardsData,
  upcomingBar,
  pricingNotes,
  backgroundImage,
  onInterestClick,
  onNotifyClick,
  id,
  className,
}: ExperienceDatesSectionProps) {
  return (
    <section
      id={id}
      className={cn("relative scroll-mt-24 overflow-hidden", className)}
    >
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <AnimatedSectionHeader
          heading={heading}
          align="left"
          headingClassName="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl"
        />

        <StaggerContainer
          className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:mt-10"
          stagger={0.12}
        >
          {cardsData.map((card) => (
            <motion.div key={card.id} variants={staggerItem}>
              <DateCard
                card={card}
                onInterestClick={onInterestClick}
              />
            </motion.div>
          ))}
        </StaggerContainer>

        {upcomingBar ? (
          <FadeIn delay={0.1}>
            <div
              className="mt-4 flex items-center justify-between gap-3 rounded-[10px] bg-white/50 px-4 py-3 backdrop-blur-sm sm:mt-5 sm:gap-4 sm:px-6 sm:py-3 md:w-[60%]"
            >
              <p className="min-w-0 flex-1 text-sm font-medium leading-snug text-charcoal sm:text-base lg:text-lg">
                {upcomingBar.label}
              </p>
              <NotifyMeButton
                label={upcomingBar.notifyLabel ?? "Notify Me"}
                onClick={onNotifyClick}
              />
            </div>
          </FadeIn>
        ) : null}

        {pricingNotes && pricingNotes.length > 0 ? (
          <FadeIn delay={0.12}>
          <div className="mt-8 md:w-1/2 max-w-xl rounded-[10px] bg-white/50 p-4 backdrop-blur-sm sm:p-5 lg:mt-10">
            <p className="text-xs font-bold text-slate">Pricing notes</p>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-relaxed text-slate">
              {pricingNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
          </FadeIn>
        ) : null}
      </div>
    </section>
  );
}
