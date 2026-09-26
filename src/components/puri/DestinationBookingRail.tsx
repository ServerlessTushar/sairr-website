"use client";

import Image from "next/image";
import { useContactFormDialog } from "@/components/forms/ContactFormDialogProvider";
import { usePuriEnquiry } from "@/components/puri/PuriEnquiry";
import type { DateCardData } from "@/components/shared/ExperienceDatesSection";
import type { TravelDestination } from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

const MONTHS: Record<string, string> = {
  January: "Jan",
  February: "Feb",
  March: "Mar",
  April: "Apr",
  May: "May",
  June: "Jun",
  July: "Jul",
  August: "Aug",
  September: "Sep",
  October: "Oct",
  November: "Nov",
  December: "Dec",
};

function splitDate(dateRange: string, year: string) {
  const match = dateRange.match(/^(.+?)\s+([A-Za-z]+)$/);
  const shortYear = year.slice(-2);
  if (!match) {
    return { days: dateRange, when: year };
  }

  const month = MONTHS[match[2]] ?? match[2].slice(0, 3);
  return { days: match[1], when: `${month}' ${shortYear}` };
}

export type DestinationBookingRailProps = {
  title: string;
  duration: string;
  groupSize: string;
  priceLabel: string;
  pricingNotes?: string[];
  cards: DateCardData[];
  notifyDestination: TravelDestination;
};

export function DestinationBookingRail({
  title,
  duration,
  groupSize,
  priceLabel,
  pricingNotes = [],
  cards,
  notifyDestination,
}: DestinationBookingRailProps) {
  const { openEnquiry } = usePuriEnquiry();
  const { openContactForm } = useContactFormDialog();

  return (
    <div className="flex flex-col gap-6">
      <article className="rounded-2xl border-[0.5px] border-solid border-[#C8A867] bg-white p-5 shadow-[0_8px_30px_rgba(27,29,31,0.06)]">
        <h2 className="font-heading text-xl font-semibold text-[#0E5E6F]">
          {title}
        </h2>
        <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate">
          <span className="flex items-center gap-1.5">
            <Image
              src="/destinations/gold-sun.svg"
              alt=""
              width={16}
              height={16}
              className="size-4"
            />
            {duration}
          </span>
          {groupSize ? (
            <span className="flex items-center gap-1.5">
              <Image
                src="/destinations/gold-hero-people.svg"
                alt=""
                width={16}
                height={16}
                className="size-4"
              />
              Group Size: {groupSize}
            </span>
          ) : null}
        </p>

        <div className="mt-5 flex items-end justify-between gap-3">
          <p className="text-sm text-slate">
            Starting from
            <span className="mt-1 block font-heading text-[20.3px] font-semibold text-[#0E5E6F]">
              {priceLabel}
              <span className="text-[10px] font-normal">/person</span>
            </span>
          </p>
          <button
            type="button"
            onClick={() => openEnquiry()}
            className="inline-flex h-11 cursor-pointer items-center justify-center rounded-lg bg-[#EC575E] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#D04A52]"
          >
            I&apos;m Interested
          </button>
        </div>

        <div className={`mt-4 text-[8px] text-slate flex flex-row gap-8`}>
          <div>• Based on Delhi/NCR as origin</div>
          <div>• Reserve your spot @ ₹0</div>
        </div>

        {pricingNotes.length > 0 ? (
          <div className="mt-4 border-t border-charcoal/10 pt-3">
            <p className="text-sm font-medium text-charcoal">
              Check Pricing notes
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-[10px] leading-relaxed text-slate">
              {pricingNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </article>

      {cards.length > 0 ? (
        <div>
          <p className="font-heading text-lg font-semibold text-[#0E5E6F]">
            Choose your dates
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-3">
            {cards.map((card) => {
              const { days, when } = splitDate(card.dateRange, card.year);

              return (
                <li
                  key={card.id}
                  className={cn(
                    "rounded-[8px] bg-white px-3 py-3 border-[0.5px] border-solid border-[#C8A867]"
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="font-heading text-lg font-semibold leading-none text-charcoal">
                      {days}
                    </p>
                    {card.note ? (
                      <p className={`inline-flex shrink-0 rounded-full ${card.note === 'BEST WEATHER' ? 'bg-[#E1F6F8]' : 'bg-[#F3E7C3]'} px-2 py-0.5 text-[8px] font-semibold tracking-wide text-charcoal uppercase`}>
                        {card.note}
                      </p>
                    ) : null}
                  </div>
                  <p className="mt-1 text-xs text-slate">{when}</p>
                  <button
                    type="button"
                    onClick={() =>
                      openEnquiry({ departureId: card.id, intent: "interest" })
                    }
                    className="mt-3 text-sm font-semibold text-[#EC575E]"
                  >
                    I&apos;m Interested →
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      <div className="border-b border-[#E7B2B2] pb-5">
        <div className="font-heading text-lg font-semibold text-[#0E5E6F]">
          <span className="mr-4">Prefer a different date?</span>
          <button
            type="button"
            onClick={() => openContactForm(notifyDestination)}
            className="mt-3 inline-flex h-11 items-center justify-center rounded-lg bg-[#EC575E] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#D04A52]"
          >
            Talk To Us
          </button>
        </div>
      </div>

      <a
        href="#faqs"
        className="flex items-center gap-2 font-heading text-lg font-semibold text-charcoal"
      >
        <Image
          src="/destinations/faq-icon.svg"
          alt=""
          width={20}
          height={20}
          className="size-5"
        />
        FAQs - frequently asked questions
      </a>
    </div>
  );
}
