"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/shared/FadeIn";
import { TextReveal } from "@/components/shared/TextReveal";
import { TripGalleryGrid } from "@/components/home/TripGalleryGrid";

export function TripGallerySection() {
  return (
    <section id="gallery" className="border-t border-charcoal/10 bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <FadeIn>
          <div className="lg:mx-auto lg:max-w-3xl lg:text-center">
            <TextReveal
              as="h2"
              text="The moments that stay with you."
              className="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-4 text-base leading-relaxed text-slate sm:text-lg"
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
