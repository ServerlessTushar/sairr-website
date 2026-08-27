"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { InterestButton } from "@/components/puri/PuriEnquiry";
import {
  formatInr,
  getLiveDepartures,
  puriDepartures,
  puriPricingNotes,
} from "@/data/puri";

export function PuriDates() {
  const live = getLiveDepartures();
  const upcoming = puriDepartures.filter((d) => d.status === "upcoming");

  return (
    <section id="dates" className="scroll-mt-24 border-t border-charcoal/10 bg-mist">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            Choose your dates
          </p>
        </FadeIn>

        <FadeIn className="mt-12" delay={0.05}>
          <h3 className="font-heading text-xl font-semibold text-brand">
            Live — open for booking
          </h3>
          <div className="mt-6 divide-y divide-charcoal/10 border-y border-charcoal/10">
            {live.map((departure) => (
              <article key={departure.id} className="py-8">
                <p className="font-heading text-xl font-semibold text-charcoal">
                  {departure.dates}
                </p>
                <p className="mt-2 text-sm text-slate">
                  {departure.duration}
                  {" · "}
                  {departure.seatsAvailable}
                  {departure.note ? ` · ${departure.note}` : null}
                </p>
                {departure.price != null && (
                  <p className="mt-4 text-lg text-charcoal">
                    {formatInr(departure.price)} per person
                  </p>
                )}
                <InterestButton
                  className="mt-5"
                  departureId={departure.id}
                />
              </article>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="mt-12" delay={0.08}>
          <h3 className="font-heading text-xl font-semibold text-brand">
            Upcoming
          </h3>
          <div className="mt-6 border-t border-charcoal/10 pt-8">
            {upcoming.map((departure) => (
              <article key={departure.id}>
                <p className="font-heading text-xl font-semibold text-charcoal">
                  {departure.dates}
                </p>
                <InterestButton
                  className="mt-5"
                  departureId={departure.id}
                  intent="notify"
                >
                  Notify me
                </InterestButton>
              </article>
            ))}
          </div>
        </FadeIn>

        <FadeIn className="mt-12" delay={0.1}>
          <div className="bg-sand px-5 py-5 sm:px-6">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-gold">
              Pricing notes
            </p>
            <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-slate">
              {puriPricingNotes.map((note) => (
                <li key={note}>{note}</li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
