"use client";

import { FadeIn } from "@/components/shared/FadeIn";
import { InterestButton } from "@/components/puri/PuriEnquiry";
import { WhatsAppLink } from "@/components/puri/WhatsAppLink";

export function PuriCta() {
  return (
    <section className="border-t border-charcoal/10 bg-mist">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <FadeIn>
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            Ready for a few good days in Puri?
          </h2>
          <p className="mt-4 text-lg text-slate">
            Pick your dates, and we&apos;ll take it from there.
          </p>
          <div className="mt-8 flex flex-col items-start gap-4">
            <InterestButton />
            <WhatsAppLink className="font-semibold" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
