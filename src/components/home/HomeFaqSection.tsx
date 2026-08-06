import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeFaqs } from "@/data/faqs";
import { FaqSection } from "@/components/shared/FaqSection";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { ButtonLink } from "@/components/shared/ButtonLink";

export function HomeFaqSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <SectionHeading
              eyebrow="Questions"
              title="Frequently asked"
              description="Quick answers to help you get started. Have more questions? We're always happy to chat."
            />
            <ButtonLink href="/contact" className="mt-8 bg-brand hover:bg-brand-dark">
              Ask us anything
              <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
          </FadeIn>

          <FadeIn delay={0.15}>
            <FaqSection faqs={homeFaqs} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
