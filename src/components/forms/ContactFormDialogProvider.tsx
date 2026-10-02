"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { ContactFormDialog } from "@/components/forms/ContactFormDialog";
import type {
  ContactFormIntent,
  TravelDestination,
} from "@/lib/validations/contact";

export type ContactFormOpenOptions = {
  destination?: TravelDestination;
  intent?: ContactFormIntent;
};

type ContactFormDialogContextValue = {
  openContactForm: (
    options?: ContactFormOpenOptions | TravelDestination,
  ) => void;
};

const ContactFormDialogContext =
  createContext<ContactFormDialogContextValue | null>(null);

function normalizeOpenOptions(
  options?: ContactFormOpenOptions | TravelDestination,
): ContactFormOpenOptions {
  if (typeof options === "string") {
    return { destination: options, intent: "interest" };
  }

  if (!options) {
    return { intent: "contact" };
  }

  return {
    destination: options.destination,
    intent: options.intent ?? "contact",
  };
}

export function ContactFormDialogProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [destination, setDestination] = useState<
    TravelDestination | undefined
  >();
  const [intent, setIntent] = useState<ContactFormIntent>("contact");

  const openContactForm = useCallback(
    (options?: ContactFormOpenOptions | TravelDestination) => {
      const normalized = normalizeOpenOptions(options);
      setDestination(normalized.destination);
      setIntent(normalized.intent ?? "contact");
      setOpen(true);
    },
    [],
  );

  useEffect(() => {
    const fromHash = () => {
      if (window.location.hash !== "#enquire") return;
      openContactForm({ intent: "contact" });
      history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [openContactForm]);

  return (
    <ContactFormDialogContext.Provider value={{ openContactForm }}>
      {children}
      <ContactFormDialog
        open={open}
        onOpenChange={setOpen}
        destination={destination}
        intent={intent}
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
