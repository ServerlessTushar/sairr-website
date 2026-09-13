import { LazyYouTubeEmbed } from "@/components/shared/LazyYouTubeEmbed";
import { cn } from "@/lib/utils";

export type TestimonialVideoSectionProps = {
  heading: string;
  para: string;
  videoUrl?: string;
  videoTitle?: string;
  className?: string;
};

export function TestimonialVideoSection({
  heading,
  para,
  videoUrl = "",
  videoTitle,
  className,
}: TestimonialVideoSectionProps) {
  const resolvedTitle = videoTitle ?? heading;

  return (
    <section className={cn("border-t border-charcoal/10 bg-mist", className)}>
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate sm:text-lg">
          {para}
        </p>

        <div className="mt-8 sm:mt-10 lg:mt-12">
          <LazyYouTubeEmbed
            videoUrl={videoUrl}
            title={resolvedTitle}
          />
        </div>
      </div>
    </section>
  );
}
