"use client";

import { ContactForm } from "@/components/forms/ContactForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  getContactFormCopy,
  type ContactFormIntent,
  type TravelDestination,
} from "@/lib/validations/contact";

type ContactFormDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  destination?: TravelDestination;
  intent: ContactFormIntent;
  ctaClass?: string;
};

export function ContactFormDialog({
  open,
  onOpenChange,
  destination,
  intent,
  ctaClass,
}: ContactFormDialogProps) {
  const { title, description } = getContactFormCopy(intent, destination);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[min(90dvh,48rem)] overflow-y-auto sm:max-w-xl sm:p-8">
        <DialogHeader className="text-center mb-2">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <ContactForm
          key={`${intent}-${destination ?? "default"}-${ctaClass ?? ""}`}
          intent={intent}
          defaultDestination={destination}
          ctaClass={ctaClass}
          onSubmitted={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
