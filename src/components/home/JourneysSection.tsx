"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { CarouselSection } from "@/components/shared/CarouselSection";
import { JourneyCard, type Journey } from "@/components/home/JourneyCard";
import puri from "@/public/homepage/puri.webp";
import rameshwaram from "@/public/homepage/rameshwaram.webp";
import andaman from "@/public/homepage/andaman.webp";
import bali from "@/public/homepage/bali.webp";
import backgroundImg from "@/public/homepage/journeys-bg-img.webp";

const journeys: Journey[] = [
  {
    slug: "puri",
    title: "Puri",
    category: "Pilgrimage",
    description: "Temple bells, ocean air, and unhurried mornings.",
    image: puri,
    status: "booking-open",
    perks: ["VIP darshan", "Beach-facing stay", "Dedicated coordinator"],
    href: "/experiences/puri",
  },
  {
    slug: "rameshwaram",
    title: "Rameshwaram",
    category: "Pilgrimage",
    description: "Where the mainland ends and faith begins.",
    image: rameshwaram,
    status: "coming-soon",
    notifyMessage:
      "I'd like to be notified when Rameshwaram journey dates are announced.",
  },
  {
    slug: "andaman",
    title: "Andaman & Nicobar",
    category: "Domestic leisure",
    description: "Turquoise water, white sand, and island beauty.",
    image: andaman,
    status: "coming-soon",
    notifyMessage:
      "I'd like to be notified when Andaman & Nicobar journey dates are announced.",
  },
  {
    slug: "bali",
    title: "Bali",
    category: "International",
    description: "Emerald terraces, volcanic peaks, endless golden hours.",
    image: bali,
    status: "coming-soon",
    notifyMessage:
      "I'd like to be notified when Bali journey dates are announced.",
  },
];

export function JourneysSection() {
  return (
    <section id="experiences" className="relative bg-mist">
      <div className="absolute inset-x-0 top-0 -bottom-px" aria-hidden>
        <Image
          src={backgroundImg}
          alt=""
          fill
          className="object-cover object-bottom"
          sizes="100vw"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
              Journeys to look forward to. Choose yours.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate sm:text-lg">
              Sairr gives you the confidence to say yes, before you even book.
            </p>
          </div>
        </FadeIn>

        <CarouselSection
          className="mt-12 lg:mt-14"
          items={journeys}
          getKey={(journey) => journey.slug}
          renderItem={(journey) => <JourneyCard journey={journey} />}
          slidesPerView={{ mobile: 1, tablet: 2, desktop: 4 }}
          ariaLabel="Featured journeys"
          autoplay={false}
        />

        <FadeIn>
          <div className="mt-10 flex justify-center pb-10 lg:mt-12 lg:pb-12">
            <ButtonLink
              href="/experiences"
              size="lg"
              className="h-12 rounded-full bg-destructive px-8 font-sans text-sm font-semibold text-white hover:bg-destructive/90"
            >
              Explore All Journeys
              <ArrowRight className="ml-2 size-4" />
            </ButtonLink>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
