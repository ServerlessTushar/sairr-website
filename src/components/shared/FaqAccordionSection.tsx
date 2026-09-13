"use client";

import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqAccordionSectionProps = {
  heading: string;
  para?: string;
  faqData: FaqItem[];
  className?: string;
};

export function FaqAccordionSection({
  heading,
  para,
  faqData,
  className,
}: FaqAccordionSectionProps) {
  return (
    <section className={cn("border-t border-charcoal/10 bg-mist", className)}>
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            {heading}
          </h2>
          {para ? (
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate">
              {para}
            </p>
          ) : null}
        </div>

        <Accordion className="mt-8 gap-4 sm:mt-10">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${index}`}
              className="overflow-hidden rounded-2xl border border-charcoal/5 bg-white shadow-[0_2px_12px_rgba(27,29,31,0.04)] not-last:border-b-0"
            >
              <AccordionTrigger
                className="items-start gap-4 px-5 py-5 text-left hover:no-underline sm:px-6 sm:py-6 **:data-[slot=accordion-trigger-icon]:hidden"
              >
                <span className="flex-1 pr-2 text-base font-semibold text-brand sm:text-[1.05rem]">
                  {faq.question}
                </span>
                <ChevronDown
                  className="mt-0.5 size-5 shrink-0 text-charcoal/25 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180 group-aria-expanded/accordion-trigger:text-gold"
                  aria-hidden
                />
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 text-sm leading-relaxed text-slate sm:px-6 sm:pb-6 sm:text-[0.95rem] sm:leading-[1.7]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
