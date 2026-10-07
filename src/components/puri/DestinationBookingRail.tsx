"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useContactFormDialog } from "@/components/forms/ContactFormDialogProvider";
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
  return { days: match[1], when: `${month}\u2019 ${shortYear}` };
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
  const { openContactForm } = useContactFormDialog();
  const [notesOpen, setNotesOpen] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <article className="rounded-2xl border-[0.5px] border-solid border-[#C8A867] bg-white p-5 shadow-[0_8px_30px_rgba(27,29,31,0.06)] overflow-hidden">
        <p className="text-xl font-semibold text-[#0E5E6F]">{title}</p>
        <p className="border-b border-charcoal/10 pb-3 mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#5d5d5d]">
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

        <div className="mt-3 flex items-end justify-between gap-3">
          <p className="text-[9.51px]">
            Starting from
            <span className="block text-[20.3px] font-semibold text-[#0E5E6F]">
              {priceLabel}
              <span className="text-[10px] font-normal">/person</span>
            </span>
          </p>
          <button
            type="button"
            onClick={() =>
              openContactForm({
                destination: notifyDestination,
                intent: "interest",
              })
            }
            className="inline-flex h-10 cursor-pointer items-center justify-center rounded-lg bg-[#EC575E] px-8 text-sm font-semibold text-white transition-colors hover:bg-[#D04A52]"
          >
            I&apos;m Interested
          </button>
        </div>

        <div className={`mt-4 text-[10px] text-black flex flex-row gap-8 bg-[#F9F6F6] py-1 -mx-5 px-5`}>
          <div>• Based on Delhi/NCR as origin</div>
          <div>• Reserve your spot @ ₹0</div>
        </div>

        {pricingNotes.length > 0 ? (
          <div className="mt-4">
            <button
              type="button"
              onClick={() => setNotesOpen((open) => !open)}
              className="flex w-full items-center justify-between text-left text-xs font-medium text-charcoal"
              aria-expanded={notesOpen}
            >
              Check Pricing notes
              <ChevronDown
                className={cn(
                  "size-4 shrink-0 transition-transform",
                  notesOpen && "rotate-180",
                )}
              />
            </button>
            {notesOpen ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-[10px] leading-relaxed text-[#5d5d5d]">
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
          <p className="text-[16.8px] text-[#0E5E6F] font-semibold">
            Choose your dates
          </p>
          <ul className="mt-4 grid grid-cols-2 gap-3">
            {cards.map((card) => {
              const { days, when } = splitDate(card.dateRange, card.year);

              return (
                <li key={card.id}>
                  <button
                    type="button"
                    onClick={() =>
                      openContactForm({
                        destination: notifyDestination,
                        intent: "interest",
                      })
                    }
                    className={cn(
                      "w-full cursor-pointer rounded-[8px] border-[0.5px] border-solid border-[#C8A867] bg-white py-3 pl-3 text-left transition-colors hover:border-[#0E5E6F]/35 hover:bg-[#FDFBF2]",
                    )}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="font-heading text-lg font-semibold leading-none text-charcoal">
                        {days}
                      </p>
                      {card.note ? (
                        <p
                          className={`inline-flex shrink-0 rounded-l-full ${card.note === "BEST WEATHER" ? "bg-[#FFC7CA]" : "bg-[#F6D797]"} px-2 py-0.5 text-[8px] font-semibold tracking-wide text-charcoal uppercase`}
                        >
                          {card.note}
                        </p>
                      ) : null}
                    </div>
                    <p className="mt-1 text-xs text-[#5d5d5d]">{when}</p>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}

      <div className="border-b border-[#EC575E] pb-5 -mt-3">
        <div className="text-[16.8px] font-semibold text-[#0E5E6F]">
          <span className="mr-4">Prefer a different date?</span>
          <button
            type="button"
            onClick={() =>
              openContactForm({
                destination: notifyDestination,
                intent: "private-journey",
              })
            }
            className="mt-3 inline-flex h-10 items-center justify-center rounded-lg bg-[#EC575E] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#D04A52]"
          >
            Talk to us
          </button>
        </div>
      </div>

      <a
        href="#faqs"
        className="flex items-center gap-2 font-heading text-base font-semibold text-charcoal"
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
