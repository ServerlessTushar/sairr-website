import type { StaticImageData } from "next/image";
import { puriMoments } from "@/data/puri";
import moments1 from "@/public/destinations/puri-moments-1.webp";
import moments3 from "@/public/destinations/puri-moments-3.webp";

export type PuriMomentCard = {
  id: string;
  title: string;
  line: string;
  image: StaticImageData;
  alt: string;
};

const momentImages: Record<(typeof puriMoments)[number]["id"], StaticImageData> =
  {
    darshan: moments1,
    mahaprasad: moments1,
    flag: moments3,
    beach: moments1,
    konark: moments1,
    evening: moments1,
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
