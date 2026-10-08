"use client";

import whatsapp from "@/public/whatsappLogo.svg";
import Image from "next/image";
import { useFloatingCall } from "@/components/layout/FloatingCallContext";

const WHATSAPP_NUMBER = "919971737186"; // include country code, no +

export function FloatingCallButton() {
  const { message } = useFloatingCall();
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
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
