"use client";

import { ContactForm } from "@/components/forms/ContactForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { TravelDestination } from "@/lib/validations/contact";

type ContactFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  destination?: TravelDestination;
};

export function ContactFormDialog({
  open,
  onOpenChange,
  destination,
}: ContactFormDialogProps) {
  const isNotifyFlow = Boolean(destination);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-xl sm:p-8">
        <DialogHeader>
          <DialogTitle>
            {isNotifyFlow ? "Get notified" : "Talk to Sairr"}
          </DialogTitle>
          <DialogDescription>
            {isNotifyFlow
              ? `Share your details and we'll notify you when ${destination} dates are announced.`
              : "Share a few details and we'll be in touch within 24 hours."}
          </DialogDescription>
        </DialogHeader>

        <ContactForm
          key={destination ?? "default"}
          defaultDestination={destination}
          onSubmitted={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
