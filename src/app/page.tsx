import { HeroSection } from "@/components/home/HeroSection";
import { JourneysSection } from "@/components/home/JourneysSection";
import { RealTravellersSection } from "@/components/home/RealTravellersSection";
import { TripGallerySection } from "@/components/home/TripGallerySection";
import { CtaSection } from "@/components/home/CtaSection";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { WhySairrSection } from "@/components/home/WhySairrSection";
import { WorkBehindTheEaseSection } from "@/components/home/WorkBehindTheEaseSection";
import { galleryImages } from "@/data/gallery";

export const metadata = createMetadata({
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhySairrSection />
      <div className="-mt-16" />
      <JourneysSection />
      <WorkBehindTheEaseSection />
      <RealTravellersSection />
      <TripGallerySection
        heading="The moments that stay with you."
        para="A glimpse into life on a Sairr journey."
        images={galleryImages}
      />
      <CtaSection />
    </>
  );
}
