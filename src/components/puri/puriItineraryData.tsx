import Image, { type StaticImageData } from "next/image";
import type { ItineraryDayItem } from "@/components/puri/PuriItinerary";
import { puriDays } from "@/data/puri";
import itinerary1Big from "@/public/experience/itinerary-1-big.webp";
import itinerary1Small from "@/public/experience/itinerary-1-small.webp";
import itinerary2Big from "@/public/experience/itinerary-2-big.webp";
import itinerary2Small from "@/public/experience/itinerary-2-small.webp";
import itinerary3Big from "@/public/experience/itinerary-3-big.webp";
import itinerary3Small from "@/public/experience/itinerary-3-small.webp";
import itinerary4Big from "@/public/experience/itinerary-4-big1.webp";
import itinerary4Small from "@/public/experience/itinerary-4-big1.webp";
import carIcon from "@/public/destinations/car.svg";
import flightIcon from "@/public/destinations/flight.svg";
import foodIcon from "@/public/destinations/food.svg";
import profileIcon from "@/public/destinations/profile.svg";
import ticketsIcon from "@/public/destinations/tickets.svg";
import templeIcon from "@/public/destinations/temple.svg";

/** Collapsed + expanded art per itinerary day — update imports when files change. */
const itineraryImagesByDay: Record<
  number,
  { image: StaticImageData; smallImage: StaticImageData }
> = {
  1: { image: itinerary1Big, smallImage: itinerary1Small },
  2: { image: itinerary2Big, smallImage: itinerary2Small },
  3: { image: itinerary3Big, smallImage: itinerary3Small },
  4: { image: itinerary4Big, smallImage: itinerary4Small },
};

const serviceIcons = {
  car: carIcon,
  flight: flightIcon,
  host: profileIcon,
  transfers: carIcon,
  tickets: ticketsIcon,
  temple: templeIcon,
  meals: foodIcon,
} as const;

type IncludedRow = readonly [keyof typeof serviceIcons, string, string];

const includedByDay: Record<number, readonly IncludedRow[]> = {
  1: [
    ["car", "Home pickup & Transfers", ""],
    ["flight", "Flight", ""],
    ["host", "Dedicated host", ""],
    ["tickets", "Guide & entry tickets", ""],
    ["meals", "", "Lunch · Dinner"],
  ],
  2: [
    ["host", "Dedicated host", ""],
    ["transfers", "Transfers", ""],
    ["temple", "VIP Darshan", ""],
    ["meals", "", "Breakfast · Lunch · Dinner"],
  ],
  3: [
    ["host", "Dedicated host", ""],
    ["transfers", "Transfers", ""],
    ["tickets", "Guide & entry tickets", ""],
    ["meals", "", "Breakfast · Lunch · Dinner"],
  ],
  4: [
    ["host", "Dedicated host", ""],
    ["flight", "Flight", ""],
    ["meals", "", "Breakfast"],
    ["car", "Home drop-off", ""],
  ],
};

function ServiceIcon({ src }: { src: StaticImageData }) {
  const isProfile = src === profileIcon;
  return (
    <Image
      src={src}
      alt=""
      width={22}
      height={22}
      className={
        isProfile ? "size-[14px] object-contain" : "size-[22px] object-contain"
      }
      aria-hidden
    />
  );
}

export const puriItineraryData: ItineraryDayItem[] = puriDays.map((day) => {
  const media = itineraryImagesByDay[day.day];
  const includedRows = includedByDay[day.day];

  if (!media) {
    throw new Error(`Missing itinerary images for day ${day.day}`);
  }
  if (!includedRows) {
    throw new Error(`Missing included services for day ${day.day}`);
  }

  return {
    day: day.day,
    location: day.place,
    desc: day.desc,
    para1: day.para1,
    para2: day.para2,
    summary: day.summary,
    activities1: day.activities1,
    activities2: day.activities2,
    image: media.image,
    smallImage: media.smallImage,
    included: includedRows.map(([iconKey, title, details]) => ({
      icon: <ServiceIcon src={serviceIcons[iconKey]} />,
      title,
      details,
    })),
  };
});
