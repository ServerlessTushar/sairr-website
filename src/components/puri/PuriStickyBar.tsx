"use client";

import { InterestButton } from "@/components/puri/PuriEnquiry";
import { lowestLivePriceLabel } from "@/data/puri";

export function PuriStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-charcoal/10 bg-mist/95 px-4 py-3 backdrop-blur-lg md:hidden">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm text-charcoal">
          From{" "}
          <span className="font-semibold">{lowestLivePriceLabel}</span>
          <span className="text-slate"> / person</span>
        </p>
        <InterestButton className="h-auto max-w-[11.5rem] shrink-0 rounded-full px-3 py-2 text-center text-[11px] leading-tight whitespace-normal" />
      </div>
    </div>
  );
}
