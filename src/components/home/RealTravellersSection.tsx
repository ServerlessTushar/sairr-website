"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/data/testimonials";
import { FadeIn } from "@/components/shared/FadeIn";
import { TextReveal } from "@/components/shared/TextReveal";
import { TestimonialCarousel } from "@/components/home/TestimonialCarousel";

export function RealTravellersSection() {
  if (testimonials.length === 0) return null;

  return (
    <section className="border-t border-charcoal/10 bg-[#FDFBF2]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-24">
        <FadeIn>
          <div className="text-center lg:mx-auto lg:max-w-3xl lg:text-center">
            <TextReveal
              as="h2"
              text="In their words."
              className="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl"
            />
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-3 text-base text-slate sm:text-xl"
            >
              To know us is to hear from them.
            </motion.p>
          </div>
        </FadeIn>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
