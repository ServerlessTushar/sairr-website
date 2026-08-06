import { whySairrFaqs } from "@/data/faqs";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FaqSection } from "@/components/shared/FaqSection";
import { FadeIn } from "@/components/shared/FadeIn";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { CtaSection } from "@/components/home/CtaSection";
import { createMetadata } from "@/lib/seo";
import { WhySairrGrid } from "./WhySairrGrid";

export const metadata = createMetadata({
  title: "Why Sairr — How We Plan Thoughtful Travel",
  description:
    "Discover how Sairr combines safety, comfort, and family peace of mind to create travel experiences your loved ones will cherish.",
  path: "/why-sairr",
});

export default function WhySairrPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0">
          <PlaceholderImage
            seed="why-sairr"
            alt="Family enjoying a comfortable travel experience"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Why Sairr"
              title="Travel planned the way it should be"
              description="We built Sairr because planning travel for parents and seniors shouldn't feel stressful. Here's what makes us different."
              className="text-white [&_p]:text-white/80"
            />
          </FadeIn>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Our promise"
              title="What you can expect"
              description="Six principles that guide every journey we plan."
              align="center"
              className="mx-auto"
            />
          </FadeIn>
          <WhySairrGrid />
        </div>
      </section>

      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <PlaceholderImage
                  seed="how-it-works"
                  alt="Sairr coordinator assisting travellers"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <SectionHeading
                eyebrow="How it works"
                title="Simple for you, seamless for them"
              />
              <ol className="mt-8 space-y-6">
                {[
                  {
                    step: "1",
                    title: "Share your needs",
                    text: "Tell us about your traveller — preferences, health considerations, and dream destinations.",
                  },
                  {
                    step: "2",
                    title: "We design the journey",
                    text: "Our team crafts a detailed plan with verified stays, comfortable pacing, and transparent pricing.",
                  },
                  {
                    step: "3",
                    title: "They travel with confidence",
                    text: "A dedicated coordinator handles everything on-ground while keeping your family informed.",
                  },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {item.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <FaqSection faqs={whySairrFaqs} title="Frequently asked" />
          </FadeIn>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
