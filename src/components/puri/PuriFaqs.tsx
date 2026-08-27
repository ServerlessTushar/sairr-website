import { ChevronDown } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { puriFaqs } from "@/data/puri";

export function PuriFaqs() {
  return (
    <section className="border-t border-charcoal/10 bg-mist">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <FadeIn>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
            FAQs
          </p>
        </FadeIn>
        <FadeIn className="mt-8" delay={0.05}>
          <Accordion className="gap-3">
            {puriFaqs.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${i}`}
                className="overflow-hidden rounded-2xl border border-charcoal/10 bg-card shadow-sm not-last:border-b-0"
              >
                <AccordionTrigger className="items-center gap-4 px-5 py-4 text-left text-base font-medium text-charcoal hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
                  <span className="flex-1 pr-2">{faq.question}</span>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gold text-charcoal">
                    <ChevronDown className="size-4 transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180" />
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-4 text-sm leading-relaxed text-slate">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
