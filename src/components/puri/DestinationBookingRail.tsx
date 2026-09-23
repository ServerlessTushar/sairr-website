"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
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
  return { days: match[1], when: `${month}, ${shortYear}` };
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
  const [notesOpen, setNotesOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <article className="rounded-2xl border border-charcoal/10 bg-white p-5 shadow-[0_8px_30px_rgba(27,29,31,0.06)]">
        <h2 className="font-heading text-xl font-semibold text-[#0E5E6F]">
          {title}
        </h2>
        <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-slate">
          <span>{duration}</span>
          {groupSize ? <span>Group Size: {groupSize}</span> : null}
        </p>

        <div className="mt-5 flex items-end justify-between gap-3">
          <p className="text-sm text-slate">
            Starting from
            <span className="mt-1 block font-heading text-3xl font-semibold text-[#0E5E6F]">
              {priceLabel}
              <span className="text-base font-normal">/person</span>
            </span>
          </p>
        </div>

        <button
          type="button"
          onClick={() => openEnquiry()}
          className="mt-4 inline-flex h-11 w-full cursor-pointer items-center justify-center rounded-lg bg-[#FF4859] text-sm font-semibold text-white transition-colors hover:bg-[#E63B4C]"
        >
          I&apos;m Interested
        </button>

        {pricingNotes.length > 0 ? (
          <div className="mt-4 border-t border-charcoal/10 pt-3">
            <button
              type="button"
              onClick={() => setNotesOpen((open) => !open)}
              className="flex w-full items-center justify-between text-left text-sm font-medium text-charcoal"
              aria-expanded={notesOpen}
            >
              Pricing notes
              <ChevronDown
                className={cn(
                  "size-4 transition-transform",
                  notesOpen && "rotate-180",
                )}
              />
            </button>
            {notesOpen ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-xs leading-relaxed text-slate">
                {pricingNotes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </article>

      {cards.length > 0 ? (
        <div>
          <p className="font-heading text-lg font-semibold text-[#0E5E6F]">
            Dates: <span className="font-medium">Live</span>
            <span className="font-normal text-slate"> · Open for booking</span>
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-3">
            {cards.map((card) => {
              const { days, when } = splitDate(card.dateRange, card.year);

              return (
                <li
                  key={card.id}
                  className="rounded-xl border border-charcoal/10 bg-white px-3 py-3"
                >
                  <p className="font-heading text-lg font-semibold leading-none text-charcoal">
                    {days}
                  </p>
                  <p className="mt-1 text-xs text-slate">{when}</p>
                  {card.note ? (
                    <p className="mt-2 inline-flex rounded-full bg-[#F3E7C3] px-2 py-0.5 text-[10px] font-semibold tracking-wide text-charcoal uppercase">
                      {card.note}
                    </p>
                  ) : null}
                  <button
                    type="button"
                    onClick={() =>
                      openEnquiry({ departureId: card.id, intent: "interest" })
                    }
                    className="mt-3 text-sm font-semibold text-[#FF4859]"
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
        <p className="font-heading text-lg font-semibold text-[#0E5E6F]">
          Prefer a different date?
        </p>
        <button
          type="button"
          onClick={() => openContactForm(notifyDestination)}
          className="mt-3 inline-flex h-11 items-center justify-center rounded-lg bg-[#FF4859] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#E63B4C]"
        >
          Talk To Us
        </button>
      </div>

      <a
        href="#faqs"
        className="font-heading text-lg font-semibold text-charcoal"
      >
        FAQs - frequently asked questions
      </a>
    </div>
  );
}
