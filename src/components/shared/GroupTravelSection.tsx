import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export type GroupTravelSectionProps = {
  heading: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  buttonLabel?: string;
  buttonHref?: string;
  className?: string;
};

export function GroupTravelSection({
  heading,
  description,
  imageSrc,
  imageAlt,
  buttonLabel = "Talk To Us",
  buttonHref = "#enquire",
  className,
}: GroupTravelSectionProps) {
  return (
    <section className={cn("bg-[#FDFBF2] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12", className)}>
      <div className="mx-auto grid max-w-6xl overflow-hidden rounded-2xl bg-[#0E5E6F] text-white md:grid-cols-[minmax(0,1fr)_254.69px]">
        <div className="flex flex-col items-start justify-center px-6 py-6 sm:px-8 sm:py-5 lg:px-10 lg:py-4">
          <h2 className="text-xl leading-tight font-medium sm:text-2xl">
            {heading}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-snug text-white/95">
            {description}
          </p>
          <Link
            href={buttonHref}
            className="mt-4 inline-flex min-h-10 min-w-36 items-center justify-center rounded-lg bg-[#EC575E] px-5 py-2 text-sm font-medium text-white shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition-colors hover:bg-[#dc4850] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {buttonLabel}
          </Link>
        </div>

        <div className="relative min-h-64 aspect-[254.69/233.81] md:h-[233.81px] md:min-h-0 md:aspect-auto">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 40vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
