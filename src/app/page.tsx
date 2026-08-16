import { HeroSection } from "@/components/home/HeroSection";
import { BrandBeliefSection } from "@/components/home/BrandBeliefSection";
import { JourneysSection } from "@/components/home/JourneysSection";
import { WhySairrSection } from "@/components/home/WhySairrSection";
import { RealTravellersSection } from "@/components/home/RealTravellersSection";
import { TripGallerySection } from "@/components/home/TripGallerySection";
import { CtaSection } from "@/components/home/CtaSection";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata = createMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandBeliefSection />
      <JourneysSection />
      <WhySairrSection />
      <RealTravellersSection />
      <TripGallerySection />
      <CtaSection />
    </>
  );
}
