"use client";

import { useContactFormDialog } from "@/components/forms/ContactFormDialogProvider";
import {
  ExperienceDatesSection,
  type DateCardData,
  type ExperienceDatesSectionProps,
} from "@/components/shared/ExperienceDatesSection";
import { usePuriEnquiry } from "@/components/puri/PuriEnquiry";

export type { DateCardData };

export type PuriDatesProps = Omit<
  ExperienceDatesSectionProps,
  "onInterestClick" | "onNotifyClick"
>;

export function PuriDates(props: PuriDatesProps) {
  const { openEnquiry } = usePuriEnquiry();
  const { openContactForm } = useContactFormDialog();

  return (
    <ExperienceDatesSection
      {...props}
      onInterestClick={(cardId) =>
        openEnquiry({ departureId: cardId, intent: "interest" })
      }
      onNotifyClick={() => openContactForm("Puri & Bhubaneswar")}
    />
  );
}
