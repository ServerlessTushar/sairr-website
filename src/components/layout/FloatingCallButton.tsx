import { Phone } from "lucide-react";

const CALL_NUMBER = "9876543210";

export function FloatingCallButton() {
  return (
    <a
      href={`tel:${CALL_NUMBER}`}
      aria-label={`Call ${CALL_NUMBER}`}
      className="fixed right-5 bottom-5 z-50 flex size-14 items-center justify-center rounded-full bg-brand text-white shadow-lg shadow-forest/30 transition-colors hover:bg-forest focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold sm:right-6 sm:bottom-6"
    >
      <Phone className="size-6" strokeWidth={2} />
    </a>
  );
}
