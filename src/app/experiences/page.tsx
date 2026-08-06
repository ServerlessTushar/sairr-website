import { experiences } from "@/data/experiences";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { CtaSection } from "@/components/home/CtaSection";
import { createMetadata } from "@/lib/seo";
import { ExperiencePreviewClient } from "./ExperienceGrid";

export const metadata = createMetadata({
  title: "Curated Travel Experiences",
  description:
    "Explore thoughtfully designed travel experiences across India — built for comfort, culture, and connection.",
  path: "/experiences",
});

export default function ExperiencesPage() {
  return (
    <>
      <section className="bg-muted/30 py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Experiences"
              title="Where will their story begin?"
              description="Each journey is designed with care — comfortable pacing, verified stays, and a dedicated coordinator from start to finish."
            />
          </FadeIn>
        </div>
      </section>

      <ExperiencePreviewClient experiences={experiences} />
      <CtaSection />
    </>
  );
}
