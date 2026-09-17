"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/shared/FadeIn";
import {
  CardRevealGrid,
  GridCardRevealItem,
} from "@/components/shared/CardReveal";
import { TextReveal } from "@/components/shared/TextReveal";
import goldBirdIcon from "@/public/homepage/gold-bird.webp";
import locationPinIcon from "@/public/homepage/location-pin.webp";
import peopleIcon from "@/public/homepage/people.webp";
import ratingStarIcon from "@/public/homepage/rating-star.webp";
import featuredImage from "@/public/homepage/whySairr.webp";
import { imageHover } from "@/lib/motion";

const ICON_BOX = "bg-[#c4a46e]";
const CARD_SHADOW = "shadow-[0_2px_16px_rgba(27,29,31,0.08)]";
const CARD_TITLE =
  "font-sans text-base font-semibold leading-snug text-charcoal sm:text-lg md:text-[26.4px]";
const CARD_DESC =
  "mt-1.5 font-sans text-sm leading-relaxed text-[#5d5d5d] sm:mt-2 md:text-[17.6px]";

type IconBeliefItem = {
  id: string;
  icon: StaticImageData;
  title: string;
  description: string;
};

const featuredCard = {
  title: "Made for travellers over 50 and their families",
  description:
    "Thoughtfully curated with care, around your pace, comfort and needs.",
};

const iconBeliefItems: IconBeliefItem[] = [
  {
    id: "journey",
    icon: locationPinIcon,
    title: "We own the journey, not just the booking",
    description:
      "From doorstep pickup to your return. We handle it end to end.",
  },
  {
    id: "quality",
    icon: ratingStarIcon,
    title: "Quality, without compromise",
    description:
      "4-star+ stays, vetted transport, wholesome meals and hand-picked experiences. Guaranteed",
  },
  {
    id: "coordinator",
    icon: peopleIcon,
    title: "Dedicated host, on ground with you.",
    description:
      "An expert takes care of the details. You live the journey.",
  },
];

function BeliefIcon({ src }: { src: StaticImageData }) {
  return (
    <Image
      src={src}
      alt=""
      width={32}
      height={32}
      className="size-7 object-contain sm:size-8"
      aria-hidden
    />
  );
}

function FeaturedBeliefCard({ index }: { index: number }) {
  return (
    <GridCardRevealItem
      index={index}
      as="article"
      hover={false}
      className={`flex flex-col overflow-hidden rounded-[14.3px] bg-white ${CARD_SHADOW}`}
    >
      <div className="relative w-full shrink-0 overflow-hidden bg-mist md:h-[23.313rem] md:max-w-[39.188rem]">
        <motion.div className="relative w-full md:h-full" whileHover={imageHover}>
          <Image
            src={featuredImage}
            alt="Travellers enjoying a journey with Sairr"
            width={1881}
            height={1119}
            className="h-auto w-full md:absolute md:inset-0 md:h-full md:w-full md:object-cover"
            sizes="(max-width: 768px) 100vw, 39.188rem"
          />
        </motion.div>
      </div>
      <div className="shrink-0 px-5 py-5 sm:px-6 sm:py-6 lg:px-6 lg:py-5">
        <h3 className={CARD_TITLE}>{featuredCard.title}</h3>
        <p className={CARD_DESC}>{featuredCard.description}</p>
      </div>
    </GridCardRevealItem>
  );
}

function IconBeliefCard({
  item,
  index,
}: {
  item: IconBeliefItem;
  index: number;
}) {
  return (
    <GridCardRevealItem
      index={index}
      as="article"
      hover={false}
      className={`flex items-start gap-4 rounded-[14.3px] bg-white px-4 py-5 sm:gap-5 sm:items-start sm:px-5 sm:py-6 md:gap-10 lg:flex-1 lg:px-6 lg:py-5 ${CARD_SHADOW}`}
    >
      <div
        className={`flex size-14 shrink-0 items-center justify-center rounded-xl sm:size-16 lg:size-[4.25rem] ${ICON_BOX}`}
      >
        <BeliefIcon src={item.icon} />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className={CARD_TITLE}>{item.title}</h3>
        <p className={CARD_DESC}>{item.description}</p>
      </div>
    </GridCardRevealItem>
  );
}

export function WhySairrSection() {
  return (
    <section className="border-t border-charcoal/10 bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-12 lg:px-8 lg:py-14">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <div className="relative inline-block overflow-visible">
              <TextReveal
                as="h2"
                text="Why Sairr"
                className="font-heading text-3xl font-semibold tracking-tight text-black sm:text-4xl"
              />
              <motion.span
                animate={{ y: [0, -2, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute -top-1 right-0 translate-x-full pl-1 sm:-top-1.5 sm:pl-1.5"
                aria-hidden
              >
                <Image
                  src={goldBirdIcon}
                  alt=""
                  width={33}
                  height={11}
                  className="block h-[11px] w-[33px] max-w-none shrink-0"
                />
              </motion.span>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-2 font-sans text-base leading-relaxed text-[#5d5d5d] sm:text-lg lg:text-xl"
            >
              Sairr gives you the confidence to say yes, before you even book.
            </motion.p>
          </div>
        </FadeIn>

        <CardRevealGrid
          className="mt-8 grid grid-cols-1 gap-4 overflow-visible pb-1 sm:mt-10 sm:gap-5 lg:mt-12 lg:grid-cols-2 lg:items-stretch lg:gap-6"
          stagger={0.12}
        >
          <FeaturedBeliefCard index={0} />
          <div className="flex flex-col gap-4 sm:gap-5 lg:h-full">
            {iconBeliefItems.map((item, index) => (
              <IconBeliefCard key={item.id} item={item} index={index + 1} />
            ))}
          </div>
        </CardRevealGrid>
      </div>
    </section>
  );
}
