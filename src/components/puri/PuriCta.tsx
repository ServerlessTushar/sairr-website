"use client";

import {
  ExperienceCtaSection,
  type ExperienceCtaSectionData,
} from "@/components/shared/ExperienceCtaSection";
import { useContactFormDialog } from "@/components/forms/ContactFormDialogProvider";
import { ctaClass } from "@/lib/cta";
import type { TravelDestination } from "@/lib/validations/contact";

export type { ExperienceCtaSectionData };

export type PuriCtaProps = {
  sectionData: ExperienceCtaSectionData;
  notifyDestination: TravelDestination;
  ctaPage?: string;
  className?: string;
  hrefTxt?: string;
};

export function PuriCta({
  sectionData,
  notifyDestination,
  ctaPage = "puri",
  className,
  hrefTxt,
}: PuriCtaProps) {
  const { openContactForm } = useContactFormDialog();
  const bottomCta = ctaClass(ctaPage, "bottom-cta", "primary");

  return (
    <ExperienceCtaSection
      {...sectionData}
      className={className}
      primaryCtaClass={bottomCta}
      onPrimaryClick={() =>
        openContactForm({
          destination: notifyDestination,
          intent: "private-journey",
          ctaClass: bottomCta,
        })
      }
      whatsappMessage={hrefTxt}
    />
  );
}
