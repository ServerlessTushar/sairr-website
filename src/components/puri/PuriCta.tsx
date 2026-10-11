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
  hrefTxt?: string;
};

export function PuriCta({
  sectionData,
  notifyDestination,
  className,
  hrefTxt,
}: PuriCtaProps) {
  const { openContactForm } = useContactFormDialog();

  return (
    <ExperienceCtaSection
      {...sectionData}
      className={className}
      onPrimaryClick={() =>
        openContactForm({
          destination: notifyDestination,
          intent: "private-journey",
        })
      }
      whatsappMessage={hrefTxt}
    />
  );
}
