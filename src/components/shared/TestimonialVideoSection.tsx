"use client";

import { AnimatedSectionHeader } from "@/components/shared/AnimatedSectionHeader";
import { FadeIn } from "@/components/shared/FadeIn";
import { LazyYouTubeEmbed } from "@/components/shared/LazyYouTubeEmbed";
import { cn } from "@/lib/utils";

export type TestimonialVideoSectionProps = {
  heading: string;
  para: string;
  videoUrl?: string;
  videoTitle?: string;
  className?: string;
  flush?: boolean;
};

export function TestimonialVideoSection({
  heading,
  para,
  videoUrl = "",
  videoTitle,
  className,
  flush = false,
}: TestimonialVideoSectionProps) {
  const resolvedTitle = videoTitle ?? heading;

  return (
    <section className={cn("border-t border-charcoal/10 bg-mist", className)}>
      <div
        className={cn(
          "mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-28",
          flush && "max-w-none px-0",
        )}
      >
        <AnimatedSectionHeader
          heading={heading}
          description={para}
          headingClassName="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl"
          descriptionClassName="sm:text-lg"
        />

        <FadeIn delay={0.1} className="mt-8 sm:mt-10 lg:mt-12">
          <LazyYouTubeEmbed
            videoUrl={videoUrl}
            title={resolvedTitle}
          />
        </FadeIn>
      </div>
    </section>
  );
}
