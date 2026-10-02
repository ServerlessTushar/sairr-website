"use client";

import {
  ExperienceCtaSection,
  type ExperienceCtaSectionData,
} from "@/components/shared/ExperienceCtaSection";
import { useContactFormDialog } from "@/components/forms/ContactFormDialogProvider";
import type { TravelDestination } from "@/lib/validations/contact";

export type { ExperienceCtaSectionData };

export type PuriCtaProps = {
  sectionData: ExperienceCtaSectionData;
  notifyDestination: TravelDestination;
  className?: string;
};

export function PuriCta({
  sectionData,
  notifyDestination,
  className,
}: PuriCtaProps) {
  const { openContactForm } = useContactFormDialog();

  return (
    <ExperienceCtaSection
      {...sectionData}
      className={className}
      onPrimaryClick={() => openContactForm(notifyDestination)}
    />
  );
}
