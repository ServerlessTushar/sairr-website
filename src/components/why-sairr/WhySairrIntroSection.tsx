import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";

type WhySairrIntroSectionProps = {
  title: string;
  description: string;
  highlight: string;
  separatorIcon: string;
};

export function WhySairrIntroSection({
  title,
  description,
  highlight,
  separatorIcon,
}: WhySairrIntroSectionProps) {
  return (
    <section className="bg-[#FDFBF2] py-20 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <h1 className="font-heading whitespace-pre-line text-3xl font-semibold leading-tight text-black sm:text-4xl lg:text-[2.75rem]">
            {title}
          </h1>
          <p className="mx-auto mt-8 max-w-4xl text-lg leading-snug text-muted-foreground sm:text-2xl">
            {description}
          </p>
          <p className="mt-7 text-xl font-bold text-muted-foreground sm:text-2xl">
            {highlight}
          </p>
          <div className="mt-11 flex items-center justify-center gap-5 sm:gap-7">
            <span className="h-px w-20 bg-[#C8A867] sm:w-34" />
            <Image
              src={separatorIcon}
              alt=""
              width={57}
              height={19}
              aria-hidden
              className="h-auto w-12 sm:w-14"
            />
            <span className="h-px w-20 bg-[#C8A867] sm:w-34" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
