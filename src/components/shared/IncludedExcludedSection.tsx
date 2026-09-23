"use client";

import type { ReactNode } from "react";
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
  flush?: boolean;
};

function ItemList({ items }: { items: IncludedExcludedItem[] }) {
  return (
    <ul className="space-y-6 sm:space-y-7">
      {items.map((item) => (
        <li key={item.text} className="flex items-start gap-4">
          <span className="flex size-5 shrink-0 items-center justify-center text-charcoal md:size-8">
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

function InclusionCard({
  variant,
  items,
}: {
  variant: "included" | "excluded";
  items: IncludedExcludedItem[];
}) {
  const isIncluded = variant === "included";

  return (
    <article
      className="flex min-w-0 flex-1 flex-col rounded-2xl bg-white p-6 shadow-[0_4px_24px_rgba(27,29,31,0.06)] sm:p-8"
    >
      <div className="flex items-center gap-3">
        <span
          className={cn(
            "flex size-6 shrink-0 items-center justify-center rounded-full text-white sm:size-7",
            isIncluded ? "bg-[#43AD05]" : "bg-[#C2050B]",
          )}
          aria-hidden
        >
          {isIncluded ? (
            <Check className="size-3.5 stroke-[3] sm:size-4" />
          ) : (
            <X className="size-3.5 stroke-[3] sm:size-4" />
          )}
        </span>
        <h3 className="font-heading text-xl font-semibold text-brand sm:text-2xl">
          {isIncluded ? "Included" : "Not included"}
        </h3>
      </div>

      <div className="mt-8 sm:mt-10">
        <ItemList items={items} />
      </div>
    </article>
  );
}

export function IncludedExcludedSection({
  heading,
  para,
  included,
  excluded,
  className,
  flush = false,
}: IncludedExcludedSectionProps) {
  return (
    <section className={cn("border-t border-charcoal/10 bg-mist", className)}>
      <div
        className={cn(
          "mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28",
          flush && "max-w-none px-0",
        )}
      >
        <AnimatedSectionHeader
          heading={heading}
          description={para}
          headingClassName="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl"
        />

        <FadeIn delay={0.1}>
          <div className="mt-10 flex flex-col gap-6 sm:mt-12 md:flex-row md:gap-8">
            <InclusionCard variant="included" items={included} />
            <InclusionCard variant="excluded" items={excluded} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
