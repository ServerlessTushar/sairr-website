import { ArrowRight } from "lucide-react";
import { PlaceholderImage } from "@/components/shared/PlaceholderImage";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Sairr — Our Story",
  description:
    "Meet the founder behind Sairr and learn why we're building thoughtful travel experiences for seniors and families across India.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl sm:aspect-[4/5]">
                <PlaceholderImage
                  seed="founder-sairr"
                  alt="Sairr founder"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div id="founder" className="scroll-mt-24">
                <SectionHeading
                  eyebrow="About Sairr"
                  title="Built from a personal need"
                />
                <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Sairr started with a simple frustration: planning a meaningful
                    trip for my parents shouldn&apos;t have felt this hard. Every
                    agency promised the world, but none understood what actually
                    mattered — pace, comfort, dignity, and peace of mind.
                  </p>
                  <p>
                    So I built what I wished existed. A travel company that plans
                    every detail with the same care I&apos;d want for my own
                    family. No jargon, no rush, no surprises.
                  </p>
                  <p>
                    Today, Sairr helps families across India gift journeys their
                    loved ones will talk about for years. We&apos;re small by
                    design — because every trip deserves personal attention.
                  </p>
                </div>
                <ButtonLink href="/contact" className="mt-8 bg-brand hover:bg-brand-dark">
                  Start a conversation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </ButtonLink>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <blockquote className="font-heading text-2xl font-medium italic leading-relaxed text-foreground sm:text-3xl">
              &ldquo;We don&apos;t sell trips. We help families create memories
              that last.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm text-muted-foreground">
              — Founder, Sairr
            </p>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
