"use client";

import { useState, type ReactNode } from "react";
import { Check, X } from "lucide-react";
import { AnimatedSectionHeader } from "@/components/shared/AnimatedSectionHeader";
import { FadeIn } from "@/components/shared/FadeIn";
import { cn } from "@/lib/utils";

export type IncludedExcludedItem = {
  icon: ReactNode;
  text: string;
};

export type IncludedExcludedSectionProps = {
  heading: string;
  para: string;
  included: IncludedExcludedItem[];
  excluded: IncludedExcludedItem[];
  className?: string;
};

type Tab = "included" | "excluded";

function TabButton({
  tab,
  activeTab,
  onSelect,
}: {
  tab: Tab;
  activeTab: Tab;
  onSelect: (tab: Tab) => void;
}) {
  const isActive = activeTab === tab;
  const isIncluded = tab === "included";

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={() => onSelect(tab)}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-semibold transition-colors",
        isActive
          ? "border-charcoal/10 bg-charcoal/5 text-brand"
          : "border-charcoal/10 bg-white text-slate hover:bg-charcoal/[0.03]",
      )}
    >
      <span
        className={cn(
          "flex size-5 shrink-0 items-center justify-center rounded-full text-white",
          isIncluded ? "bg-emerald-500" : "bg-red-500",
        )}
        aria-hidden
      >
        {isIncluded ? (
          <Check className="size-3 stroke-[3]" />
        ) : (
          <X className="size-3 stroke-[3]" />
        )}
      </span>
      {isIncluded ? "Included" : "Not included"}
    </button>
  );
}

function ItemGrid({ items }: { items: IncludedExcludedItem[] }) {
  return (
    <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-8">
      {items.map((item) => (
        <li key={item.text} className="flex items-start gap-4">
          <span className="flex size-5 md:size-8 shrink-0 items-center justify-center text-charcoal">
            {item.icon}
          </span>
          <span className="text-base leading-relaxed text-charcoal">
            {item.text}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function IncludedExcludedSection({
  heading,
  para,
  included,
  excluded,
  className,
}: IncludedExcludedSectionProps) {
  const [activeTab, setActiveTab] = useState<Tab>("included");
  const items = activeTab === "included" ? included : excluded;

  return (
    <section
      className={cn("border-t border-charcoal/10 bg-mist", className)}
    >
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <AnimatedSectionHeader
          heading={heading}
          description={para}
          headingClassName="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl"
        />

        <FadeIn delay={0.1}>
          <div
            className="mt-10 rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(27,29,31,0.06)] sm:mt-12 sm:p-8 lg:p-12"
            role="tabpanel"
          >
          <div
            className="flex flex-wrap gap-2"
            role="tablist"
            aria-label="Inclusions"
          >
            <TabButton
              tab="included"
              activeTab={activeTab}
              onSelect={setActiveTab}
            />
            <TabButton
              tab="excluded"
              activeTab={activeTab}
              onSelect={setActiveTab}
            />
          </div>

            <div className="mt-8 sm:mt-10">
              <ItemGrid items={items} />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
