"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { ContactFormDialog } from "@/components/forms/ContactFormDialog";
import type { TravelDestination } from "@/lib/validations/contact";

type ContactFormDialogContextValue = {
  openContactForm: (destination?: TravelDestination) => void;
};

const ContactFormDialogContext =
  createContext<ContactFormDialogContextValue | null>(null);

export function ContactFormDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [destination, setDestination] = useState<
    TravelDestination | undefined
  >();

  const openContactForm = useCallback((nextDestination?: TravelDestination) => {
    setDestination(nextDestination);
    setOpen(true);
  }, []);

  return (
    <ContactFormDialogContext.Provider value={{ openContactForm }}>
      {children}
      <ContactFormDialog
        open={open}
        onOpenChange={setOpen}
        destination={destination}
      />
    </ContactFormDialogContext.Provider>
  );
}

export function useContactFormDialog() {
  const context = useContext(ContactFormDialogContext);

  if (!context) {
    throw new Error(
      "useContactFormDialog must be used within ContactFormDialogProvider",
    );
  }

  return context;
}
