"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getFeaturedExperiences } from "@/data/experiences";
import { ExperienceCard } from "@/components/experiences/ExperienceCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ButtonLink } from "@/components/shared/ButtonLink";
import {
  FadeIn,
  StaggerContainer,
  staggerItem,
} from "@/components/shared/FadeIn";
import { motion } from "framer-motion";

export function ExperiencePreview() {
  const featured = getFeaturedExperiences();

  return (
    <section className="bg-muted/30 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Handpicked for you"
              title="Curated experiences"
              description="Domestic journeys designed for comfort, culture, and connection."
            />
            <ButtonLink href="/experiences" variant="outline" className="shrink-0">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
          </div>
        </FadeIn>

        <StaggerContainer className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((experience) => (
            <motion.div key={experience.slug} variants={staggerItem}>
              <ExperienceCard experience={experience} />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
