import whatsapp from "@/public/whatsappLogo.svg";
import Image from "next/image";

const CALL_NUMBER = "9876543210";

export function FloatingCallButton() {
  return (
    <a
      href={`tel:${CALL_NUMBER}`}
      aria-label={`Call ${CALL_NUMBER}`}
      className="fixed right-5 bottom-5 z-50 rounded-full shadow-lg sm:right-6 sm:bottom-6"
    >
      <Image 
        src={whatsapp}
        alt="WhatsApp"
        width={65}
        height={65}
        className="w-[55px] h-[55px] md:w-[65px] md:h-[65px]"
      />
    </a>
  );
}
