"use client";

import { useEffect } from "react";
import { useFloatingCall } from "@/components/layout/FloatingCallContext";

export function SetFloatingCallMessage({ message }: { message: string }) {
  const { setMessage } = useFloatingCall();

  useEffect(() => {
    setMessage(message);
  }, [message, setMessage]);

  return null;
}
