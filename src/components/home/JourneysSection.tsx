"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/shared/FadeIn";
import { CardRevealCarouselItem } from "@/components/shared/CardReveal";
import { Parallax } from "@/components/shared/Parallax";
import { TextReveal } from "@/components/shared/TextReveal";
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
      <Parallax className="absolute inset-x-0 top-0 -bottom-px" offset={40}>
        <div className="relative h-full min-h-full" aria-hidden>
          <Image
            src={backgroundImg}
            alt=""
            fill
            className="object-cover object-bottom"
            sizes="100vw"
          />
        </div>
      </Parallax>

      <div className="relative mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <TextReveal
              as="h2"
              text="Journeys to look forward to. Choose yours."
              className="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-4 text-base leading-relaxed text-slate sm:text-lg"
            >
              Sairr gives you the confidence to say yes, before you even book.
            </motion.p>
          </div>
        </FadeIn>

        <CarouselSection
          className="mt-12 lg:mt-14"
          items={journeys}
          getKey={(journey) => journey.slug}
          renderItem={(journey, index) => (
            <CardRevealCarouselItem index={index} direction="left">
              <JourneyCard journey={journey} />
            </CardRevealCarouselItem>
          )}
          slidesPerView={{ mobile: 1, tablet: 2, desktop: 4 }}
          ariaLabel="Featured journeys"
          autoplay={false}
        />

        <FadeIn delay={0.2}>
          <div className="mt-10 flex justify-center pb-10 lg:mt-12 lg:pb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <ButtonLink
                href="/experiences"
                size="lg"
                className="h-12 rounded-full bg-destructive px-8 font-sans text-sm font-semibold text-white hover:bg-destructive/90"
              >
                Explore All Journeys
                <ArrowRight className="ml-2 size-4" />
              </ButtonLink>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
