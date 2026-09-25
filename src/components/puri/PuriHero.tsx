import Image, { type StaticImageData } from "next/image";
import { TextReveal } from "@/components/shared/TextReveal";
import { cn } from "@/lib/utils";

export type HeroImage = {
  src: StaticImageData | string;
  alt: string;
};

export type HeroFact = {
  icon: string;
  label: string;
};

export type HeroHighlight = {
  icon: string;
  title: string;
  detail: string;
};

export type ExperienceHeroSectionData = {
  heading: string;
  summaryTitle: string;
  duration: string;
  groupSize: string;
  tagline: string;
  body: string;
  images: HeroImage[];
  facts: HeroFact[];
  highlights: HeroHighlight[];
};

export type PuriHeroProps = {
  sectionData: ExperienceHeroSectionData;
  className?: string;
};

function HeroPhoto({
  image,
  className,
  priority = false,
  sizes,
}: {
  image: HeroImage;
  className?: string;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <div className={cn("relative overflow-hidden rounded-2xl bg-charcoal/5", className)}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        className="object-cover"
        sizes={sizes}
      />
    </div>
  );
}

export function PuriHero({ sectionData, className }: PuriHeroProps) {
  const [main, tall, topRight, bottomRight] = sectionData.images;

  return (
    <section className={cn("bg-[#FDFBF2]", className)}>
      <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8 lg:pt-10">
        <div className="relative">
          <TextReveal
            as="h1"
            text={sectionData.heading}
            className="max-w-3xl font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]"
          />
          <Image
            src="/destinations/gold-bird-pair.webp"
            alt=""
            width={88}
            height={36}
            className="pointer-events-none absolute top-0 right-0 hidden h-9 w-auto sm:block"
            aria-hidden
          />
        </div>

        <ul className="mt-4 flex flex-col gap-2 text-sm text-charcoal sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
          {sectionData.facts.map((fact) => (
            <li key={fact.label} className="flex items-center gap-2">
              <Image
                src={fact.icon}
                alt=""
                width={16}
                height={16}
                className="size-4 shrink-0"
                aria-hidden
              />
              <span>{fact.label}</span>
            </li>
          ))}
        </ul>

        {main && tall && topRight && bottomRight ? (
          <>
            <div className="mt-6 grid grid-cols-2 gap-3 lg:hidden">
              <HeroPhoto
                image={main}
                priority
                sizes="100vw"
                className="col-span-2 aspect-[582.84/309.42]"
              />
              <HeroPhoto
                image={tall}
                sizes="50vw"
                className="row-span-2 aspect-[291.27/309.42]"
              />
              <HeroPhoto
                image={topRight}
                sizes="50vw"
                className="aspect-[296.65/151.87]"
              />
              <HeroPhoto
                image={bottomRight}
                sizes="50vw"
                className="aspect-[296.65/151.87]"
              />
            </div>

            <div className="relative mt-7 hidden aspect-[1182.12/309.42] lg:block">
              <HeroPhoto
                image={main}
                priority
                sizes="583px"
                className="absolute top-0 left-0 h-full w-[49.304%]"
              />
              <HeroPhoto
                image={tall}
                sizes="292px"
                className="absolute top-0 left-[49.784%] h-full w-[24.639%]"
              />
              <HeroPhoto
                image={topRight}
                sizes="297px"
                className="absolute top-0 left-[74.904%] h-[49.082%] w-[25.096%]"
              />
              <HeroPhoto
                image={bottomRight}
                sizes="297px"
                className="absolute top-[50.918%] left-[74.904%] h-[49.082%] w-[25.096%]"
              />
            </div>
          </>
        ) : null}
      </div>
    </section>
  );
}

export function PuriHeroDetails({ sectionData }: PuriHeroProps) {
  return (
    <div className="pt-6 pb-2 lg:pt-8">
      <p className="max-w-3xl text-sm leading-relaxed text-charcoal sm:text-base">
        {sectionData.body}
      </p>
      <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-5 rounded-2xl bg-white px-4 py-5 shadow-[0_2px_16px_rgba(27,29,31,0.06)] sm:grid-cols-2 sm:px-6 sm:py-6 lg:grid-cols-3">
        {sectionData.highlights.map((item) => (
          <li key={item.title} className="flex items-start gap-3">
            <Image
              src={item.icon}
              alt=""
              width={28}
              height={28}
              className="mt-0.5 size-7 shrink-0"
              aria-hidden
            />
            <span>
              <span className="block text-sm font-semibold text-[#0E5E6F]">
                {item.title}
              </span>
              <span className="mt-0.5 block text-xs leading-snug text-slate">
                {item.detail}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
