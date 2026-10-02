"use client";

import { useContactFormDialog } from "@/components/forms/ContactFormDialogProvider";
import type { TravelDestination } from "@/lib/validations/contact";
import {
  ExperienceDatesSection,
  type DateCardData,
  type ExperienceDatesSectionProps,
} from "@/components/shared/ExperienceDatesSection";

export type { DateCardData };

export type PuriDatesProps = Omit<
  ExperienceDatesSectionProps,
  "onInterestClick" | "onNotifyClick"
>;

export function PuriDates({
  notifyDestination,
  ...props
}: PuriDatesProps & { notifyDestination: TravelDestination }) {
  const { openContactForm } = useContactFormDialog();

  return (
    <ExperienceDatesSection
      {...props}
      onInterestClick={() => openContactForm(notifyDestination)}
      onNotifyClick={() => openContactForm(notifyDestination)}
    />
  );
}
