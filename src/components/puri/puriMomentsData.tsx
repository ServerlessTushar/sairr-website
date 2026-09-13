import type { StaticImageData } from "next/image";
import { puriMoments } from "@/data/puri";
import included3 from "@/public/experience/included-3.webp";
import included4 from "@/public/experience/included-4.webp";
import konarkDay3 from "@/public/experience/konark-puri-day3.webp";
import puriDay2 from "@/public/experience/puri-day2.webp";
import moments5 from "@/public/homepage/moments-5.webp";
import moments6 from "@/public/homepage/moments-6.webp";

export type PuriMomentCard = {
  id: string;
  title: string;
  line: string;
  image: StaticImageData;
  alt: string;
};

const momentImages: Record<(typeof puriMoments)[number]["id"], StaticImageData> =
  {
    darshan: included4,
    mahaprasad: included3,
    flag: puriDay2,
    beach: moments5,
    konark: konarkDay3,
    evening: moments6,
  };

export const puriMomentsSectionData = {
  heading: "Moments That Make Puri",
  cards: puriMoments.map((moment) => ({
    id: moment.id,
    title: moment.title,
    line: moment.line,
    alt: moment.alt,
    image: momentImages[moment.id],
  })) satisfies PuriMomentCard[],
};
