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
            <div className="grid grid-cols-2 items-stretch placeholder-orange-200 gap-2 sm:items-start sm:gap-8">
              <Image
                src={arrivalImage.src}
                alt={arrivalImage.alt}
                width={arrivalImage.width}
                height={arrivalImage.height}
                className="h-auto w-full rounded-xl"
              />
              <div className="flex h-full min-h-0 justify-end sm:contents">
                <Image
                  src={mealImage.src}
                  alt={mealImage.alt}
                  width={mealImage.width}
                  height={mealImage.height}
                  className="h-full w-full sm:w-[86%] rounded-xl max-sm:object-cover sm:h-auto sm:w-[86%] sm:justify-self-end"
                />
              </div>
              <Image
                src={groupImage.src}
                alt={groupImage.alt}
                width={groupImage.width}
                height={groupImage.height}
                className="col-span-2 mt-0 md:mt-5 h-auto w-full rounded-xl sm:mt-8 sm:w-3/4 sm:justify-self-end"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
