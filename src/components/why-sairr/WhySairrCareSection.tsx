import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";

type ImageData = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type WhySairrCareSectionProps = {
  title: string;
  paragraphs: string[];
  highlight: string;
  decorativeIcon: string;
  images: readonly [ImageData, ImageData, ImageData];
};

export function WhySairrCareSection({
  title,
  paragraphs,
  highlight,
  decorativeIcon,
  images,
}: WhySairrCareSectionProps) {
  const [arrivalImage, mealImage, groupImage] = images;

  return (
    <section className="bg-[#E9DFC8]/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <FadeIn>
            <h2 className="max-w-xl font-heading text-2xl font-semibold leading-[1.35] text-[#0E5E6F] sm:text-[26px]">
              {title}
            </h2>
          </FadeIn>
          <Image
            src={decorativeIcon}
            alt=""
            width={61}
            height={20}
            aria-hidden
            className="absolute right-0 top-0 h-auto w-14 sm:w-[61px]"
          />
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-2 lg:gap-20">
          <FadeIn>
            <div className="text-lg leading-[1.35] text-[#5D5D5D] sm:text-xl">
            <div className="space-y-8">
              {paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-8 font-bold">{highlight}</p>
          </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="grid grid-cols-2 items-start gap-5 sm:gap-8">
              <Image
                src={arrivalImage.src}
                alt={arrivalImage.alt}
                width={arrivalImage.width}
                height={arrivalImage.height}
                className="h-auto w-full rounded-xl"
              />
              <Image
                src={mealImage.src}
                alt={mealImage.alt}
                width={mealImage.width}
                height={mealImage.height}
                className="h-auto w-[86%] justify-self-end rounded-xl"
              />
              <Image
                src={groupImage.src}
                alt={groupImage.alt}
                width={groupImage.width}
                height={groupImage.height}
                className="col-span-2 mt-5 h-auto w-3/4 justify-self-end rounded-xl sm:mt-8"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
