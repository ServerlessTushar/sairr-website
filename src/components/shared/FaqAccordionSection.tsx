"use client";

import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedSectionHeader } from "@/components/shared/AnimatedSectionHeader";
import { FadeIn } from "@/components/shared/FadeIn";
import type { FaqAnswerBlock } from "@/data/faqs";
import { cn } from "@/lib/utils";

export type FaqItem = {
  question: string;
  answer: string | FaqAnswerBlock[];
};

export type FaqAccordionSectionProps = {
  heading: string;
  para?: string;
  faqData: FaqItem[];
  className?: string;
  id?: string;
};

export function FaqAnswer({ answer }: { answer: FaqItem["answer"] }) {
  if (typeof answer === "string") {
    const paragraphs = answer
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    if (paragraphs.length <= 1) return <>{answer}</>;
    return (
      <div className="space-y-3">
        {paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>
    );
  }

  const nodes: React.ReactNode[] = [];
  let bullets: string[] = [];
  const flushBullets = (key: string) => {
    if (!bullets.length) return;
    nodes.push(
      <ul
        key={key}
        className="list-disc space-y-1.5 pl-5 marker:text-charcoal/60"
      >
        {bullets.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    );
    bullets = [];
  };

  answer.forEach((block, index) => {
    if (block.type === "bullet") {
      bullets.push(block.text);
      return;
    }
    flushBullets(`bullets-${index}`);
    if (block.type === "heading") {
      nodes.push(
        <h4
          key={`heading-${index}`}
          className={cn(
            "font-heading text-sm font-semibold text-charcoal sm:text-base",
            block.rule && "border-b border-charcoal/10 pb-2"
          )}
        >
          {block.text}
        </h4>
      );
    } else {
      nodes.push(<p className="text-sm sm:text-base" key={`para-${index}`}>{block.text}</p>);
    }
  });
  flushBullets("bullets-end");

  return <div className="space-y-3">{nodes}</div>;
}

export function FaqAccordionSection({
  heading,
  para,
  faqData,
  className,
  id,
}: FaqAccordionSectionProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-24 border-t border-charcoal/10 bg-mist", className)}
    >
      <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <AnimatedSectionHeader
          heading={heading}
          description={para}
          headingClassName="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl"
        />

        <FadeIn delay={0.1}>
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
                <FaqAnswer answer={faq.answer} />
              </AccordionContent>
            </AccordionItem>
          ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
