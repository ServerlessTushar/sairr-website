import type { Faq } from "@/data/faqs";
import { FaqAnswer } from "@/components/shared/FaqAccordionSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqSection({ faqs, title }: { faqs: Faq[]; title?: string }) {
  return (
    <div>
      {title && (
        <h3 className="mb-6 font-heading text-2xl font-semibold">{title}</h3>
      )}
      <Accordion className="w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={faq.question} value={`faq-${i}`}>
            <AccordionTrigger className="text-left text-base font-medium">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              <FaqAnswer answer={faq.answer} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
