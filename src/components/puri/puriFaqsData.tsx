import type { PuriFaqsProps } from "@/components/puri/PuriFaqs";
import { puriFaqs } from "@/data/puri";

export const puriFaqsSectionData: PuriFaqsProps = {
  heading: "FAQs",
  faqData: puriFaqs.map(({ question, answer }) => ({
    question,
    answer,
  })),
};
