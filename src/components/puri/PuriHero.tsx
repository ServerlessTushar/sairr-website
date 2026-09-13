"use client";

import {
  ExperienceHeroSection,
  type ExperienceHeroSectionData,
} from "@/components/shared/ExperienceHeroSection";
import { usePuriEnquiry } from "@/components/puri/PuriEnquiry";

export type { ExperienceHeroSectionData, HeroImage } from "@/components/shared/ExperienceHeroSection";

export type PuriHeroProps = {
  sectionData: ExperienceHeroSectionData;
  className?: string;
};

export function PuriHero({ sectionData, className }: PuriHeroProps) {
  const { openEnquiry } = usePuriEnquiry();

  return (
    <ExperienceHeroSection
      {...sectionData}
      className={className}
      onPrimaryClick={() => openEnquiry()}
    />
  );
}
