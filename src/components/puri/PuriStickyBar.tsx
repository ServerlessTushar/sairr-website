"use client";

import { useContactFormDialog } from "@/components/forms/ContactFormDialogProvider";
import { Button } from "@/components/ui/button";
import { ctaClass } from "@/lib/cta";
import type { TravelDestination } from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

export function PuriStickyBar({
  priceLabel,
  notifyDestination,
  ctaPage = "puri",
}: {
  priceLabel: string;
  notifyDestination: TravelDestination;
  ctaPage?: string;
}) {
  const { openContactForm } = useContactFormDialog();
  const stickyInterestedCta = ctaClass(ctaPage, "sticky", "interested");

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-[#ec575e] px-4 py-3 backdrop-blur-lg md:hidden">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-white">
          From <span className="font-semibold">{priceLabel}</span>
          <span className="text-white"> / person</span>
        </p>
        <Button
          type="button"
          onClick={() =>
            openContactForm({
              destination: notifyDestination,
              intent: "interest",
              ctaClass: stickyInterestedCta,
            })
          }
          className={cn(
            stickyInterestedCta,
            "h-auto max-w-[11.5rem] shrink-0 rounded bg-brand px-3 py-2 text-center text-[11px] leading-tight whitespace-normal hover:bg-forest",
          )}
        >
          I&apos;m interested
        </Button>
      </div>
    </div>
  );
}
