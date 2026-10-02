"use client";

import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { FloatingCallButton } from "@/components/layout/FloatingCallButton";
import { Header } from "@/components/layout/Header";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCallButton />
    </>
  );
}
