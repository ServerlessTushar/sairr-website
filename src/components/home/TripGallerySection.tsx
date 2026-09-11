"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/shared/FadeIn";
import { TextReveal } from "@/components/shared/TextReveal";
import { TripGalleryGrid } from "@/components/home/TripGalleryGrid";
import goldenBirdsIcon from "@/public/homepage/golden-birds.png";

export function TripGallerySection() {
  return (
    <section id="gallery" className=" bg-[#F5F4EF]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:pt-0 lg:pb-28">
        <FadeIn>
          <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-10 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.55 }}
              className="pointer-events-none absolute top-2 right-0 translate-x-2 sm:top-4 sm:translate-x-4 md:translate-x-8 lg:translate-x-10"
              aria-hidden
            >
              <Image
                src={goldenBirdsIcon}
                alt=""
                width={120}
                height={90}
                className="h-auto w-16 sm:w-20 md:w-24"
              />
            </motion.div>

            <TextReveal
              as="h2"
              text="The moments that stay with you."
              className="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-5xl"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-4 text-base leading-relaxed text-slate sm:text-xl"
            >
              A glimpse into life on a Sairr journey.
            </motion.p>
          </div>
        </FadeIn>

        <TripGalleryGrid className="mt-12 lg:mt-14" />
      </div>
    </section>
  );
}
