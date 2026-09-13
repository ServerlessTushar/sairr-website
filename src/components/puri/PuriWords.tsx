import {
  TestimonialVideoSection,
  type TestimonialVideoSectionProps,
} from "@/components/shared/TestimonialVideoSection";

export type PuriWordsProps = TestimonialVideoSectionProps;

export function PuriWords(props: PuriWordsProps) {
  return <TestimonialVideoSection {...props} />;
}
