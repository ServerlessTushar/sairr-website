"use client";

import { useContactFormDialog } from "@/components/forms/ContactFormDialogProvider";
import { ctaClass } from "@/lib/cta";
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
  ctaPage = "puri",
  ...props
}: PuriDatesProps & {
  notifyDestination: TravelDestination;
  ctaPage?: string;
}) {
  const { openContactForm } = useContactFormDialog();
  const datesNotifyCta = ctaClass(ctaPage, "dates", "notify");

  return (
    <ExperienceDatesSection
      {...props}
      onInterestClick={(cardId) =>
        openContactForm({
          destination: notifyDestination,
          intent: "interest",
          ctaClass: ctaClass(ctaPage, "dates", "card", cardId),
        })
      }
      onNotifyClick={() =>
        openContactForm({
          destination: notifyDestination,
          intent: "interest",
          ctaClass: datesNotifyCta,
        })
      }
    />
  );
}
