"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/shared/FadeIn";
import { GridCardRevealItem } from "@/components/shared/CardReveal";
import goldBirdIcon from "@/public/homepage/gold-bird.webp";
import locationPinIcon from "@/public/homepage/location-pin.webp";
import peopleIcon from "@/public/homepage/people.webp";
import ratingStarIcon from "@/public/homepage/rating-star.webp";
import featuredImage from "@/public/homepage/why-sairr-2.webp";
import { imageHover } from "@/lib/motion";

const ICON_BOX = "bg-[#c4a46e] lg:bg-[#c4a46e]";

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

function FeaturedBeliefCard() {
  return (
    <GridCardRevealItem
      index={0}
      as="article"
      className="overflow-hidden rounded-2xl bg-[#1c1c1c] shadow-md lg:bg-white lg:shadow-[0_2px_16px_rgba(27,29,31,0.08)]"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-mist lg:aspect-[5/4]">
        <motion.div className="relative h-full w-full" whileHover={imageHover}>
          <Image
            src={featuredImage}
            alt="Travellers enjoying a journey with Sairr"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
      </div>
      <div className="px-5 py-6 sm:px-6 sm:py-7 lg:px-7 lg:py-8">
        <h3 className="font-sans text-lg font-semibold leading-snug text-white sm:text-xl lg:text-[1.65rem] lg:text-charcoal">
          {featuredCard.title}
        </h3>
        <p className="mt-2 font-sans text-sm leading-relaxed text-white/70 sm:text-base lg:mt-3 lg:text-[#5d5d5d]">
          {featuredCard.description}
        </p>
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
      index={index + 1}
      as="article"
      className="flex items-center gap-4 rounded-2xl bg-[#1c1c1c] px-4 py-5 shadow-md sm:gap-5 sm:px-5 sm:py-6 lg:bg-white lg:shadow-[0_2px_16px_rgba(27,29,31,0.08)]"
    >
      <div
        className={`flex size-14 shrink-0 items-center justify-center rounded-xl sm:size-16 ${ICON_BOX}`}
      >
        <BeliefIcon src={item.icon} />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="font-sans text-base font-semibold leading-snug text-white sm:text-lg lg:text-[1.35rem] lg:text-charcoal">
          {item.title}
        </h3>
        <p className="mt-1.5 font-sans text-sm leading-relaxed text-white/70 lg:mt-2 lg:text-[#5d5d5d]">
          {item.description}
        </p>
      </div>
    </GridCardRevealItem>
  );
}

export function BrandBeliefSection() {
  return (
    <section className="border-t border-charcoal/10 bg-charcoal lg:bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <div className="relative inline-block overflow-visible">
              <h2 className="font-heading text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-black">
                Why{" "}
                <span className="relative inline-block overflow-visible">
                  Sairr
                  <motion.span
                    animate={{ y: [0, -2, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute -top-1 left-full ml-1 block sm:-top-1.5 sm:ml-1.5"
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
                </span>
              </h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-4 font-sans text-base leading-relaxed text-white/70 sm:text-lg lg:text-xl lg:text-[#5d5d5d]"
            >
              <span className="lg:hidden">
                Confidence to say yes, before you even book.
              </span>
              <span className="hidden lg:inline">
                Sairr gives you the confidence to say yes, before you even book.
              </span>
            </motion.p>
          </div>
        </FadeIn>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-12 sm:gap-5 lg:mt-14 lg:grid-cols-2 lg:items-stretch lg:gap-6">
          <FeaturedBeliefCard />

          <div className="flex flex-col gap-4 sm:gap-5">
            {iconBeliefItems.map((item, index) => (
              <IconBeliefCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
