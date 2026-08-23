"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { captureUtmParams } from "@/lib/utm";

export function UtmCapture() {
  const searchParams = useSearchParams();

  useEffect(() => {
    captureUtmParams(searchParams);
  }, [searchParams]);

  return null;
}
