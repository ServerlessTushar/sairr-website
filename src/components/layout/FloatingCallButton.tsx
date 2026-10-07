import whatsapp from "@/public/whatsapp-icon.svg";
import Image from "next/image";

const CALL_NUMBER = "9876543210";

export function FloatingCallButton() {
  return (
    <a
      href={`tel:${CALL_NUMBER}`}
      aria-label={`Call ${CALL_NUMBER}`}
      className="fixed right-5 bottom-20 z-50 rounded-full shadow-lg sm:right-8 sm:bottom-8"
    >
      <Image 
        src={whatsapp}
        alt="WhatsApp"
        width={65}
        height={65}
        className="w-[50px] h-[50px]"
      />
    </a>
  );
}
