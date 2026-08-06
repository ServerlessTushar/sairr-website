import { ComingSoon } from "@/components/home/ComingSoon";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { ExperiencePreview } from "@/components/home/ExperiencePreview";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { HomeFaqSection } from "@/components/home/HomeFaqSection";
import { CtaSection } from "@/components/home/CtaSection";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const metadata = createMetadata({
  title: `${siteConfig.name} — Website Coming Soon`,
  description: siteConfig.description,
  path: "/",
});

const HomeComponent = () => {
  return (
    <>
      <HeroSection />
      <WhyChooseSection />
      <ExperiencePreview />
      <HowItWorksSection />
      <TestimonialsSection />
      <HomeFaqSection />
      <CtaSection />
    </>
  )
}

export default function HomePage() {
  return (
    <>
      <ComingSoon />
    </>
  );
}
