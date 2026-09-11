"use client";

import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/shared/FadeIn";
import {
  CardRevealGrid,
  GridCardRevealItem,
} from "@/components/shared/CardReveal";
import redBirdIcon from "@/public/homepage/red-bird.png";
import whySairr1 from "@/public/homepage/why-sairr-1.webp";
import whySairr2 from "@/public/homepage/why-sairr-2.webp";
import whySairr3 from "@/public/homepage/why-sairr-3.webp";
import whySairr4 from "@/public/homepage/why-sairr-4.webp";
import { imageHover } from "@/lib/motion";

const HIGHLIGHT = "bg-[#C8E8E8] box-decoration-clone px-0.5";

type BeliefCard = {
  id: string;
  image: StaticImageData;
  title: string;
  description: ReactNode;
};

const beliefCards: BeliefCard[] = [
  {
    id: "families",
    image: whySairr2,
    title: "Made for 50+ travellers and their families.",
    description: (
      <>
        <span className={HIGHLIGHT}>Thoughtfully curated</span> with care, around
        your pace, comfort and needs.
      </>
    ),
  },
  {
    id: "journey",
    image: whySairr3,
    title: "We own the journey, not just the booking",
    description: (
      <>
        From doorstep pickup to your return. We handle it{" "}
        <span className={HIGHLIGHT}>end to end.</span>
      </>
    ),
  },
  {
    id: "quality",
    image: whySairr4,
    title: "Quality, without compromise",
    description: (
      <>
        4-star+ stays, quality transport, food and hand-picked experiences.{" "}
        <span className={HIGHLIGHT}>Guaranteed.</span>
      </>
    ),
  },
  {
    id: "coordinator",
    image: whySairr1,
    title: "Dedicated coordinator, on ground with you",
    description: (
      <>
        A trained expert takes care of the details.{" "}
        <span className={HIGHLIGHT}>You live the journey.</span>
      </>
    ),
  },
];

function BeliefCardItem({ card, index }: { card: BeliefCard; index: number }) {
  return (
    <GridCardRevealItem
      index={index}
      as="article"
      className="group flex items-stretch overflow-hidden rounded-[14.3px] border border-[#C8A867] bg-white shadow-md transition-shadow duration-300 hover:shadow-lg"
    >
      <div className="relative w-[42%] shrink-0 overflow-hidden bg-mist sm:min-h-[11rem] sm:w-[34%]">
        <motion.div className="relative h-full min-h-[inherit]" whileHover={imageHover}>
          <Image
            src={card.image}
            alt=""
            fill
            className="object-contain object-center sm:object-cover"
            sizes="(max-width: 640px) 42vw, 20vw"
          />
        </motion.div>
      </div>

      <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-5 sm:px-5 sm:py-6">
        <h3 className="font-heading text-[1.05rem] font-semibold leading-snug text-black md:text-[26.4px]">
          {card.title}
        </h3>
        <p className="mt-2 font-sans text-xs leading-relaxed text-[#5d5d5d] md:text-sm">
          {card.description}
        </p>
      </div>
    </GridCardRevealItem>
  );
}

export function BrandBeliefSection() {
  return (
    <section className="border-t border-charcoal/10 bg-mist">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <div className="relative inline-block overflow-visible">
              <h2 className="font-heading text-3xl font-semibold tracking-tight text-black sm:text-4xl">
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
                      src={redBirdIcon}
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
              className="mt-4 font-sans text-base leading-relaxed text-[#5d5d5d] sm:text-lg"
            >
              Sairr gives you the confidence to say yes, before you even book.
            </motion.p>
          </div>
        </FadeIn>

        <CardRevealGrid className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          {beliefCards.map((card, index) => (
            <BeliefCardItem key={card.id} card={card} index={index} />
          ))}
        </CardRevealGrid>
      </div>
    </section>
  );
}
