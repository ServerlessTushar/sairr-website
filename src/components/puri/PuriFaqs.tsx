import {
  FaqAccordionSection,
  type FaqAccordionSectionProps,
  type FaqItem,
} from "@/components/shared/FaqAccordionSection";

export type { FaqItem };

export type PuriFaqsProps = FaqAccordionSectionProps;

export function PuriFaqs(props: PuriFaqsProps) {
  return <FaqAccordionSection {...props} />;
}
