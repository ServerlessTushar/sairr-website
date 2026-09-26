"use client";

import type { ReactNode } from "react";
import { Check, X } from "lucide-react";
import { AnimatedSectionHeader } from "@/components/shared/AnimatedSectionHeader";
import { FadeIn } from "@/components/shared/FadeIn";
import { cn } from "@/lib/utils";

export type IncludedExcludedItem = {
  icon?: ReactNode;
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

function IncludedList({ items }: { items: IncludedExcludedItem[] }) {
  return (
    <ul className="grid gap-x-8 gap-y-6 md:grid-cols-2 lg:gap-x-12">
      {items.map((item) => (
        <li key={item.text} className="flex items-start gap-5">
          <span className="flex size-6 shrink-0 items-center justify-center text-charcoal md:size-8">
            {item.icon}
          </span>
          <span className="text-sm leading-relaxed text-charcoal sm:text-base">
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
  flush = false,
}: IncludedExcludedSectionProps) {
  const hasHeader = Boolean(heading.trim() || para.trim());

  return (
    <section className={cn("bg-[#FDFBF2]", className)}>
      <div
        className={cn(
          "mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12",
          hasHeader && "sm:pt-12 lg:pt-16",
          flush && "max-w-none px-0",
        )}
      >
        {hasHeader ? (
          <AnimatedSectionHeader
            heading={heading}
            description={para}
            headingClassName="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl"
          />
        ) : null}

        <FadeIn delay={0.1}>
          <div className={cn(hasHeader && "mt-10 sm:mt-12")}>
            <section aria-labelledby="included-heading">
              <div className="flex items-center gap-4">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#43AD05] text-white" aria-hidden>
                  <Check className="size-4.5 stroke-[3]" />
                </span>
                <h3 id="included-heading" className="font-sans text-[20px] font-semibold text-brand sm:text-[26px]">
                  What&apos;s Included
                </h3>
              </div>
              <div className="mt-6 sm:mt-8">
                <IncludedList items={included} />
              </div>
            </section>

            <div className="my-8 border-t-[1.1px] border-[#EC575E] sm:my-10" aria-hidden />

            <section aria-labelledby="excluded-heading">
              <div className="flex items-center gap-4">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#C2050B] text-white" aria-hidden>
                  <X className="size-4.5 stroke-[3]" />
                </span>
                <h3 id="excluded-heading" className="font-sans text-[20px] font-semibold text-brand sm:text-[26px]">
                  What&apos;s not included
                </h3>
              </div>
              <ul className="mt-6 grid list-disc gap-x-10 gap-y-3 pl-6 text-sm leading-relaxed text-charcoal marker:text-charcoal sm:mt-8 sm:grid-cols-2 sm:text-base lg:gap-x-16">
                {excluded.map((item) => (
                  <li key={item.text} className="pl-1">{item.text}</li>
                ))}
              </ul>
            </section>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
