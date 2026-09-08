import Image, { type StaticImageData } from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";
import chosenStays from "@/public/homepage/chosen-stays.webp";
import breathableTransport from "@/public/homepage/breathable-transport.webp";
import worthyItineraries from "@/public/homepage/worthy-itineries.webp";
import prevalidateExp from "@/public/homepage/pre-validate-experience.webp";

const CORAL = "#EC575E";

type WhySairrItem = {
  id: string;
  icon: StaticImageData;
  title: string;
  description: string;
};

const whySairrItems: WhySairrItem[] = [
  {
    id: "chosen-stays",
    icon: chosenStays,
    title: "Stays chosen for 50+ travellers.",
    description:
      "4-star+ hotels and resorts, selected for comfort, location and quality.",
  },
  {
    id: "worthy-itineraries",
    icon: worthyItineraries,
    title: "Itineraries worth your time.",
    description:
      "Hand-picked experiences, thoughtfully paced and never rushed.",
  },
  {
    id: "breathable-transport",
    icon: breathableTransport,
    title: "Transport with room to breathe.",
    description:
      "Hygienic, comfortable transport, never filled to the last seat.",
  },
  {
    id: "pre-validate",
    icon: prevalidateExp,
    title: "We validate it before you experience it.",
    description:
      "Routes, stays and food checked on ground before we open a journey.",
  },
];

function WhySairrCard({ item }: { item: WhySairrItem }) {
  return (
    <article className="flex items-center gap-4 rounded-2xl bg-white p-5 sm:gap-5 sm:p-6">
      <div className="relative size-[4.5rem] shrink-0 sm:size-20">
        <Image
          src={item.icon}
          alt=""
          fill
          className="object-contain"
          sizes="80px"
        />
      </div>

      <div
        className="w-px shrink-0 self-stretch"
        style={{ backgroundColor: CORAL }}
        aria-hidden
      />

      <div className="min-w-0">
        <h3 className="font-sans text-base font-semibold leading-snug text-charcoal sm:text-[1.05rem]">
          {item.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-slate">
          {item.description}
        </p>
      </div>
    </article>
  );
}

export function WhySairrSection() {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-semibold leading-[1.2] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              The work behind the ease.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
              Every journey is carefully planned, vetted and refined before you
              set off.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:gap-5 lg:mt-14 lg:grid-cols-2 lg:gap-6">
          {whySairrItems.map((item) => (
            <WhySairrCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
