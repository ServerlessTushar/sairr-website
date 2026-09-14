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
import featuredImage from "@/public/homepage/why-sairr-2.webp";
import { imageHover } from "@/lib/motion";

const ICON_BOX = "bg-[#c4a46e]";
const CARD_SHADOW = "shadow-[0_2px_16px_rgba(27,29,31,0.08)]";
const CARD_TITLE =
  "font-sans text-base font-semibold leading-snug text-charcoal sm:text-lg";
const CARD_DESC =
  "mt-1.5 font-sans text-sm leading-relaxed text-[#5d5d5d] sm:mt-2";

type IconBeliefItem = {
  id: string;
  icon: StaticImageData;
  title: string;
  description: string;
};

const featuredCard = {
  title: "Made for 50+ travellers and their families.",
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
    id: "coordinator",
    icon: peopleIcon,
    title: "Dedicated coordinator, on ground with you",
    description:
      "A trained expert takes care of the details. You live the journey.",
  },
  {
    id: "quality",
    icon: ratingStarIcon,
    title: "Quality, without compromise",
    description:
      "4-star+ stays, quality transport, food and hand-picked experiences. Guaranteed.",
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
      className={`flex h-full flex-col overflow-hidden rounded-2xl bg-white lg:col-start-1 lg:row-span-3 ${CARD_SHADOW}`}
    >
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-mist lg:aspect-auto lg:min-h-0 lg:flex-1">
        <motion.div className="relative h-full min-h-[10rem] w-full lg:min-h-0" whileHover={imageHover}>
          <Image
            src={featuredImage}
            alt="Travellers enjoying a journey with Sairr"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
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
      className={`flex items-start gap-4 rounded-2xl bg-white px-4 py-5 sm:gap-5 sm:items-center sm:px-5 sm:py-6 lg:col-start-2 lg:flex-1 lg:px-6 lg:py-5 ${CARD_SHADOW}`}
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

export function BrandBeliefSection() {
  return (
    <section className="border-t border-charcoal/10 bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <div className="relative inline-block overflow-visible">
              <TextReveal
                as="h2"
                text="Why Sairr"
                className="font-heading text-3xl font-black tracking-tight text-black sm:text-4xl"
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
              className="mt-4 font-sans text-base leading-relaxed text-[#5d5d5d] sm:text-lg lg:text-xl"
            >
              Sairr gives you the confidence to say yes, before you even book.
            </motion.p>
          </div>
        </FadeIn>

        <CardRevealGrid
          className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 lg:mt-14 lg:grid-cols-2 lg:grid-rows-3 lg:items-stretch lg:gap-6"
          stagger={0.12}
        >
          <FeaturedBeliefCard index={0} />
          {iconBeliefItems.map((item, index) => (
            <IconBeliefCard key={item.id} item={item} index={index + 1} />
          ))}
        </CardRevealGrid>
      </div>
    </section>
  );
}
