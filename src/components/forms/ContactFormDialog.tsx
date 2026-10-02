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
};

export function ContactFormDialog({
  open,
  onOpenChange,
  destination,
  intent,
}: ContactFormDialogProps) {
  const { title, description } = getContactFormCopy(intent, destination);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-h-[min(90dvh,48rem)] overflow-y-auto sm:max-w-xl sm:p-8">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <ContactForm
          key={`${intent}-${destination ?? "default"}`}
          intent={intent}
          defaultDestination={destination}
          onSubmitted={() => onOpenChange(false)}
        />
      </DialogContent>
    </Dialog>
  );
}
