import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";

type WhySairrTravelSectionProps = {
  image: { src: string; alt: string; width: number; height: number };
  title: string;
  description: string;
  conclusionTitle: string;
  conclusion: string;
};

export function WhySairrTravelSection({
  image,
  title,
  description,
  conclusionTitle,
  conclusion,
}: WhySairrTravelSectionProps) {
  return (
    <section className="bg-[#FDFBF2] pb-20 sm:pb-24 lg:pb-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-7">
          <FadeIn>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="h-auto w-full rounded-xl"
            />
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="text-lg leading-[1.35] text-[#5D5D5D] sm:text-xl">
              <h2 className="font-heading text-2xl font-semibold leading-[1.35] text-[#0E5E6F] sm:text-[26px]">
                {title}
              </h2>
              <p className="mt-8">{description}</p>
              <p className="mt-8 whitespace-pre-line">
                <strong>{conclusionTitle}</strong>
                {"\n"}
                {conclusion}
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
