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
  title: `${siteConfig.name} — Thoughtful Travel for the People You Love`,
  description: siteConfig.description,
  path: "/",
});

const ComingSoon = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col">
      <header className="flex justify-center px-6 pt-12 sm:pt-16">
        <h2 className="text-primary text-4xl md:text-6xl font-bold">Sairr</h2>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-6 pb-20 text-center">
        <h1 className="text-7xl font-medium tracking-tight text-primary sm:text-6xl md:text-7xl">
          Coming soon
        </h1>
        <p className="mt-6 max-w-md text-lg text-foreground/80 sm:text-xl">
          Thoughtful travel for the people you love.
        </p>
      </main>
    </div>
  )
}

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
