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
import locationPinIcon from "@/public/homepage/location-pin.png";
import peopleIcon from "@/public/homepage/people.png";
import ratingStarIcon from "@/public/homepage/rating-star.png";
import featuredImage from "@/public/homepage/whySairr.webp";
import { imageHover, springSnappy } from "@/lib/motion";

const CARD_SHADOW = "shadow-[0_2px_16px_rgba(27,29,31,0.08)]";
const CARD_TITLE =
  "font-sans text-base font-semibold leading-snug text-charcoal sm:text-lg md:text-[24px]";
const CARD_DESC =
  "mt-1.5 font-sans text-sm leading-relaxed text-[#5d5d5d] sm:mt-2 md:text-[18px]";

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
    <motion.div
      className="relative size-7 shrink-0 sm:size-14"
      whileHover={{ scale: 1.08, rotate: 4 }}
      transition={springSnappy}
    >
      <Image
        src={src}
        alt=""
        fill
        className="object-contain"
        sizes="56px"
        aria-hidden
      />
    </motion.div>
  );
}

function FeaturedBeliefCard({ index }: { index: number }) {
  return (
    <GridCardRevealItem
      index={index}
      as="article"
      hover={false}
      className={`flex flex-col overflow-hidden rounded-lg bg-white ${CARD_SHADOW}`}
    >
      <div className="relative w-full shrink-0 overflow-hidden bg-mist md:h-[373px] md:max-w-[627px]">
        <motion.div className="relative w-full md:h-full" whileHover={imageHover}>
          <Image
            src={featuredImage}
            alt="Travellers enjoying a journey with Sairr"
            width={627}
            height={373}
            className="h-auto w-full md:absolute md:inset-0 md:h-full md:w-full md:object-fit"
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
      className={`h-auto sm:h-[10.781rem] flex items-start gap-4 rounded-lg bg-white px-4 py-5 transition-shadow duration-300 ease-out hover:shadow-[0_4px_14px_rgba(27,29,31,0.07),0_16px_40px_rgba(27,29,31,0.11)] sm:gap-5 sm:items-start sm:px-5 sm:py-6 md:gap-10 lg:flex-none lg:px-6 lg:py-6 ${CARD_SHADOW}`}
    >

      <BeliefIcon src={item.icon} />
      <div className="min-w-0 flex-1">
        <h3 className={CARD_TITLE}>{item.title}</h3>
        <p className={CARD_DESC}>{item.description}</p>
      </div>
    </GridCardRevealItem>
  );
}

export function WhySairrSection() {
  return (
    <section id="whySairr" className="border-t border-charcoal/10 bg-[#FDFBF2]">
      <div className="mb-20 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-12 lg:px-8 lg:pb-14 lg:pt-20">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <div className="relative inline-block overflow-visible">
              <TextReveal
                as="h2"
                text="Why Sairr"
                className="font-heading text-3xl font-semibold tracking-tight text-black sm:text-4xl lg:leading-tight"
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
