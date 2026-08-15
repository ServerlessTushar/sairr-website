"use client";

import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn, StaggerContainer, staggerItem } from "@/components/shared/FadeIn";
import { motion } from "framer-motion";

export function TestimonialsSection() {
  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Stories from families"
            title="Trusted by explorers & their families"
            description="Real stories from people who chose Sairr for the journeys that matter most."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={staggerItem}>
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
