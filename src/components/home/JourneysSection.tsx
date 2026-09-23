"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/shared/FadeIn";
import { CardRevealCarouselItem } from "@/components/shared/CardReveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { Button } from "@/components/ui/button";
import { CarouselSection } from "@/components/shared/CarouselSection";
import { JourneyCard, type Journey } from "@/components/home/JourneyCard";
import { useContactFormDialog } from "@/components/forms/ContactFormDialogProvider";
import type { TravelDestination } from "@/lib/validations/contact";
import puri from "@/public/homepage/journey-puri-1.webp";
import puri2 from "@/public/homepage/journey-puri-2.webp"
import puri3 from "@/public/homepage/journey-puri-3.webp"
import rameshwaram from "@/public/homepage/journey-rameshwaram.webp";
import andaman from "@/public/homepage/journey-andaman.webp";
import bali from "@/public/homepage/journey-bali.webp";
import backgroundImgDesktop from "@/public/homepage/Bg-Destination-Home.webp";
import backgroundImgMobile from "@/public/homepage/Bg-Destination-Home-mob.webp";

const journeys: Journey[] = [
  {
    slug: "puri",
    title: "Puri & Bhubaneswar",
    category: "Pilgrimage",
    description: "Temple bells, ocean air, and unhurried mornings.",
    image: puri,
    images: [puri, puri2, puri3],
    status: "booking-open",
    destination: "Puri & Bhubaneswar",
    perks: ["VIP darshan", "Beach-facing stay", "Dedicated host"],
    href: "/destinations/puri",
  },
  {
    slug: "rameshwaram",
    title: "Rameshwaram",
    category: "Pilgrimage",
    description: "Where the mainland ends and faith begins.",
    image: rameshwaram,
    status: "coming-soon",
    destination: "Rameshwaram",
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
    destination: "Andaman & Nicobar",
    notifyMessage:
      "I'd like to be notified when Andaman & Nicobar journey dates are announced.",
  },
  {
    slug: "bali",
    title: "Bali",
    category: "International",
    description: "Emerald terraces, volcanic peaks, and endless golden hours.",
    image: bali,
    status: "coming-soon",
    destination: "Bali",
    notifyMessage:
      "I'd like to be notified when Bali journey dates are announced.",
  },
];

export function JourneysSection() {
  const { openContactForm } = useContactFormDialog();

  function handleNotifyMe(destination: TravelDestination) {
    openContactForm(destination);
  }

  function handleRequestCallback() {
    openContactForm();
  }

  return (
    <section id="destinations" className="relative scroll-mt-24 bg-mist">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={backgroundImgMobile}
          alt=""
          fill
          className="object-contain object-bottom md:hidden"
          sizes="100vw"
        />
        <Image
          src={backgroundImgDesktop}
          alt=""
          fill
          className="hidden object-contain object-bottom md:block"
          sizes="100vw"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 md:px-0 lg:pt-20">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <TextReveal
              as="h2"
              text="Journeys to look forward to"
              className="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl lg:text-[2.75rem] lg:leading-tight"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-4 text-base leading-relaxed text-slate sm:text-xl"
            >
              There should always be another place worth discovering. Choose yours.
            </motion.p>
          </div>
        </FadeIn>

        <CarouselSection
          className="mt-2 lg:mt-14"
          slideClassName="py-6"
          items={journeys}
          getKey={(journey) => journey.slug}
          renderItem={(journey, index) => (
            <CardRevealCarouselItem index={index} direction="left" hover={false}>
              <JourneyCard journey={journey} onNotifyMe={handleNotifyMe} />
            </CardRevealCarouselItem>
          )}
          slidesPerView={{ mobile: 1.15, tablet: 2, desktop: 4 }}
          ariaLabel="Featured journeys"
          autoplay={false}
        />

        <FadeIn delay={0.2}>
          <div className="mt-6 md:mt-10 flex justify-center pb-10 lg:mt-12 lg:pb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="button"
                size="lg"
                onClick={handleRequestCallback}
                className="cursor-pointer bg-[#FF4859] hover:bg-[#E63B4C] hover:scale-104 tab:hover-0.98 h-12 rounded-lg px-8 font-sans text-sm font-semibold text-white"
              >
                Get a Callback
                <ArrowRight className="ml-2 size-4" />
              </Button>
              <p className="text-xs text-[#0E5E6F] !font-semibold mt-2">More destinations launching soon.</p>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
