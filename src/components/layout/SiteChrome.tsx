"use client";

import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { FloatingCallProvider } from "@/components/layout/FloatingCallContext";
import { Header } from "@/components/layout/Header";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <FloatingCallProvider>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCallButton />
    </FloatingCallProvider>
  );
}
