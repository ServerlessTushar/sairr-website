import { FadeIn } from "@/components/shared/FadeIn";
import { FaqSection } from "@/components/shared/FaqSection";
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
        <FadeIn className="mt-8 [&_button]:text-brand" delay={0.05}>
          <FaqSection faqs={puriFaqs} />
        </FadeIn>
      </div>
    </section>
  );
}
