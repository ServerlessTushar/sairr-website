"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/shared/FadeIn";
import { CardRevealCarouselItem } from "@/components/shared/CardReveal";
import { TextReveal } from "@/components/shared/TextReveal";
import { CarouselSection } from "@/components/shared/CarouselSection";
import { JourneyCard, type Journey } from "@/components/home/JourneyCard";
import { useContactFormDialog } from "@/components/forms/ContactFormDialogProvider";
import type { TravelDestination } from "@/lib/validations/contact";
import puri from "@/public/homepage/journey-puri-1-2.png";
import puri2 from "@/public/homepage/journey-puri-2.webp";
import puri3 from "@/public/homepage/journey-puri-3.webp";
import rameshwaram from "@/public/homepage/journey-rameshwaram.webp";
import andaman from "@/public/homepage/journey-andaman.webp";
import bali from "@/public/homepage/journey-bali.webp";
import backgroundImgDesktop from "@/public/homepage/Bg-Destination-Home2.webp";
import backgroundImgMobile from "@/public/homepage/Bg-Destination-Home-mob.webp";
import { drawLine } from "@/lib/motion";
import bannerUnderlineImg from "@/public/homepage/underline-journey.png";

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
    category: "Domestic",
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

function HeroUnderline() {
  return (
    <motion.span
      variants={drawLine}
      className="pointer-events-none absolute -bottom-1 left-1/5 block h-auto w-full origin-left"
    >
      <Image
        src={bannerUnderlineImg}
        alt=""
        width={231}
        height={8}
        aria-hidden
        className="h-[4.51px] w-[147.46px]"
      />
    </motion.span>
  );
}

export function JourneysSection() {
  const { openContactForm } = useContactFormDialog();

  function handleNotifyMe(destination: TravelDestination) {
    openContactForm({ destination, intent: "interest" });
  }

  return (
    <section id="destinations" className="relative scroll-mt-24 bg-[#FDFBF2]">
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

      <div className="bg-transparent relative mx-auto max-w-7xl pxl-4 pt-16 sm:px-6 md:px-0 lg:pt-2">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <TextReveal
              as="h2"
              text="Journeys to look forward to"
              className="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl lg:leading-tight"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-3 text-base leading-relaxed text-[#5d5d5d] sm:text-xl"
            >
              There should always be another place worth discovering. Choose
              yours.
            </motion.p>
          </div>
        </FadeIn>

        <CarouselSection
          className="mt-2 -mr-4 lg:mr-0 lg:mt-6"
          slideClassName="py-6"
          items={journeys}
          getKey={(journey) => journey.slug}
          renderItem={(journey, index) => (
            <CardRevealCarouselItem
              index={index}
              direction="left"
              hover={false}
            >
              <JourneyCard journey={journey} onNotifyMe={handleNotifyMe} />
            </CardRevealCarouselItem>
          )}
          slidesPerView={{ mobile: 1.15, tablet: 2, desktop: 4 }}
          ariaLabel="Featured journeys"
          autoplay={false}
        />

        <FadeIn delay={0.2}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto flex w-full max-w-3xl items-center justify-center gap-3 px-4 pb-10 pt-4 sm:gap-4 sm:px-6 md:max-w-4xl lg:max-w-5xl lg:gap-6 lg:pb-12 lg:pt-8"
          >
            {/* <div
              className="h-px min-w-8 flex-1 bg-[#EC575E]"
              aria-hidden
            /> */}
            <div className="text-center relative">
              <p className=" shrink-0 text-center font-heading text-sm font-semibold leading-snug text-[#0E5E6F] sm:text-base mb-1">
                More destinations launching soon
              </p>
              <HeroUnderline />
            </div>

            {/* <div
              className="h-px min-w-8 flex-1 bg-[#EC575E]"
              aria-hidden
            /> */}
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
