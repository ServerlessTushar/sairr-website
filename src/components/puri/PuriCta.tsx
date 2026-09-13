"use client";

import {
  ExperienceCtaSection,
  type ExperienceCtaSectionData,
} from "@/components/shared/ExperienceCtaSection";
import { usePuriEnquiry } from "@/components/puri/PuriEnquiry";

export type { ExperienceCtaSectionData };

export type PuriCtaProps = {
  sectionData: ExperienceCtaSectionData;
  className?: string;
};

export function PuriCta({ sectionData, className }: PuriCtaProps) {
  const { openEnquiry } = usePuriEnquiry();

  return (
    <ExperienceCtaSection
      {...sectionData}
      className={className}
      onPrimaryClick={() => openEnquiry()}
    />
  );
}
