"use client";

import Image, { type StaticImageData } from "next/image";
import underlineImg from "@/public/homepage/underline.png";
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
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative inline-block rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-charcoal transition-opacity hover:opacity-80"
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
      <div className="border-b border-charcoal/10 pb-4">
        <p className="font-heading text-2xl font-semibold text-charcoal sm:text-[1.75rem]">
          {card.dateRange}{" "}
          <span className="font-sans text-xl font-normal sm:text-2xl">
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
          className="inline-flex w-full items-center justify-center rounded-lg px-4 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
          style={{ backgroundColor: CORAL }}
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
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          {heading}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:mt-10">
          {cardsData.map((card) => (
            <DateCard
              key={card.id}
              card={card}
              onInterestClick={onInterestClick}
            />
          ))}
        </div>

        {upcomingBar ? (
          <div
            className="mt-4 flex flex-col items-start justify-between gap-4 rounded-full bg-white/75 px-5 py-4 backdrop-blur-sm sm:mt-5 sm:flex-row sm:items-center sm:px-8 sm:py-5"
          >
            <p className="text-base font-medium text-charcoal sm:text-lg">
              {upcomingBar.label}
            </p>
            <NotifyMeButton
              label={upcomingBar.notifyLabel ?? "Notify Me"}
              onClick={onNotifyClick}
            />
          </div>
        ) : null}

        {pricingNotes && pricingNotes.length > 0 ? (
          <div className="mt-8 max-w-xl lg:mt-10">
            <p className="text-xs font-medium text-slate">Pricing notes</p>
            <ul className="mt-2 space-y-1 text-xs leading-relaxed text-slate">
              {pricingNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}
