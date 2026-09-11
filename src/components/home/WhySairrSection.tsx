"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer } from "@/components/shared/FadeIn";
import { TextReveal } from "@/components/shared/TextReveal";
import chosenStays from "@/public/homepage/chosen-stays.webp";
import breathableTransport from "@/public/homepage/breathable-transport.webp";
import worthyItineraries from "@/public/homepage/worthy-itineries.webp";
import prevalidateExp from "@/public/homepage/pre-validate-experience.webp";
import { cardHover, slideInLeft, slideInRight } from "@/lib/motion";

const CORAL = "#EC575E";

type WhySairrItem = {
  id: string;
  icon: StaticImageData;
  title: string;
  description: string;
};

const whySairrItems: WhySairrItem[] = [
  {
    id: "chosen-stays",
    icon: chosenStays,
    title: "Stays chosen for 50+ travellers.",
    description:
      "4-star+ hotels and resorts, selected for comfort, location and quality.",
  },
  {
    id: "worthy-itineraries",
    icon: worthyItineraries,
    title: "Itineraries worth your time.",
    description:
      "Hand-picked experiences, thoughtfully paced and never rushed.",
  },
  {
    id: "breathable-transport",
    icon: breathableTransport,
    title: "Transport with room to breathe.",
    description:
      "Hygienic, comfortable transport, never filled to the last seat.",
  },
  {
    id: "pre-validate",
    icon: prevalidateExp,
    title: "We validate it before you experience it.",
    description:
      "Routes, stays and food checked on ground before we open a journey.",
  },
];

function WhySairrCard({
  item,
  index,
}: {
  item: WhySairrItem;
  index: number;
}) {
  const variant = index % 2 === 0 ? slideInLeft : slideInRight;

  return (
    <motion.article
      variants={variant}
      whileHover={cardHover}
      className="group flex items-center gap-4 rounded-2xl bg-white p-5 sm:gap-5 sm:p-6"
    >
      <motion.div
        className="relative size-[4.5rem] shrink-0 sm:size-20"
        whileHover={{ scale: 1.08, rotate: 4 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
      >
        <Image
          src={item.icon}
          alt=""
          fill
          className="object-contain"
          sizes="80px"
        />
      </motion.div>

      <motion.div
        className="w-px shrink-0 self-stretch"
        style={{ backgroundColor: CORAL }}
        initial={{ scaleY: 0.6 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        aria-hidden
      />

      <div className="min-w-0">
        <h3 className="font-sans text-base font-semibold leading-snug text-charcoal sm:text-[1.05rem]">
          {item.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate">
          {item.description}
        </p>
      </div>
    </motion.article>
  );
}

export function WhySairrSection() {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <TextReveal
              as="h2"
              text="The work behind the ease."
              className="font-heading text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg"
            >
              Every journey is carefully planned, vetted and refined before you
              set off.
            </motion.p>
          </div>
        </FadeIn>

        <StaggerContainer
          className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6"
          stagger={0.14}
        >
          {whySairrItems.map((item, index) => (
            <WhySairrCard key={item.id} item={item} index={index} />
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
