"use client";

import type { Experience } from "@/data/experiences";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { StaggerContainer, staggerItem } from "@/components/shared/FadeIn";
import { motion } from "framer-motion";

export function ExperiencePreviewClient({
  experiences,
}: {
  experiences: Experience[];
}) {
  return (
    <section className="py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <StaggerContainer className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((experience) => (
            <motion.div key={experience.slug} variants={staggerItem}>
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
