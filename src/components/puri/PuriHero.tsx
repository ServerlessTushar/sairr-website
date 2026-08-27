"use client";

import { ArrowRight } from "lucide-react";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { FadeIn } from "@/components/shared/FadeIn";
import { InterestButton } from "@/components/puri/PuriEnquiry";
import { WhatsAppLink } from "@/components/puri/WhatsAppLink";
import { puriCopy } from "@/data/puri";

export function PuriHero() {
  return (
    <section className="relative min-h-[min(100dvh,44rem)] overflow-hidden">
      <div className="absolute inset-0">
        <PlaceholderImage
          seed="puri-hero-july"
          src="/sairr-coming-soon.jpeg"
          alt="Temple and sea on a Sairr journey to Puri"
          priority
          className="object-cover object-[center_30%]"
        />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/35 to-charcoal/20"
        aria-hidden
      />

      <div className="absolute left-4 top-4 sm:left-8 sm:top-8">
        <p className="rounded-full border border-mist/15 bg-charcoal/35 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-gold backdrop-blur-sm">
          {puriCopy.category}
        </p>
      </div>

      <p className="absolute bottom-4 right-4 max-w-[14rem] text-right text-[11px] leading-relaxed text-mist/70 sm:bottom-8 sm:right-8">
        {puriCopy.heroCaption}
      </p>

      <div className="relative mx-auto flex min-h-[min(100dvh,44rem)] max-w-7xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24">
        <FadeIn className="max-w-2xl">
          <p className="text-sm font-medium text-mist/80">{puriCopy.heroEyebrow}</p>
          <h1 className="mt-3 font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-mist sm:text-4xl lg:text-5xl">
            {puriCopy.heroTitle}
          </h1>
          <p className="mt-4 font-heading text-xl italic text-gold sm:text-2xl">
            {puriCopy.heroTagline}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-mist/85 sm:text-lg">
            {puriCopy.heroBody}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <InterestButton />
            <a
              href="#four-days"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-mist/90 transition-colors hover:text-mist"
            >
              See what each day holds
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <WhatsAppLink className="mt-4 text-sm text-mist/75 hover:text-mist" />
        </FadeIn>
      </div>
    </section>
  );
}
