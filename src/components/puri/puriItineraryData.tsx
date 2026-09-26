import Image from "next/image";
import type { ItineraryDayItem } from "@/components/puri/PuriItinerary";
import { puriDays } from "@/data/puri";

const serviceIcons = {
  car: "/destinations/car.svg",
  flight: "/destinations/flight.svg",
  host: "/destinations/profile.svg",
  transfers: "/destinations/car.svg",
  tickets: "/destinations/tickets.svg",
  temple: "/destinations/temple.svg",
  meals: "/destinations/food.svg",
} as const;

const dayServices = [
  [
    [serviceIcons.car, "Home pickup & Transfers", ""],
    [serviceIcons.flight, "Flight", ""],
    [serviceIcons.host, "Dedicated host", ""],
    [serviceIcons.tickets, "Guide & entry tickets", ""],
    [serviceIcons.meals, "", " Lunch and Dinner"],
  ],
  [
    [serviceIcons.host, "Dedicated host", ""],
    [serviceIcons.transfers, "Transfers", ""],
    [serviceIcons.temple, "VIP Darshan", ""],
    [serviceIcons.meals, "", "Lunch and Dinner"],
  ],
  [
    [serviceIcons.host, "Dedicated host", ""],
    [serviceIcons.transfers, "Transfers", ""],
    [serviceIcons.tickets, "Guide & entry tickets", ""],
    [serviceIcons.meals, "", "Breakfast · Lunch · Dinner"],
  ],
  [
    [serviceIcons.host, "Dedicated host", ""],
    [serviceIcons.flight, "Flight", ""],
    [serviceIcons.meals, "", "Breakfast"],
    [serviceIcons.car, "Home drop-off", ""],
  ],
] as const;

function ServiceIcon({ src }: { src: string }) {
  return (
    <Image
      src={src}
      alt=""
      width={22}
      height={22}
      className="size-[22px] object-contain"
      aria-hidden
    />
  );
}

export const puriItineraryData: ItineraryDayItem[] = puriDays.map(
  (day, index) => ({
    day: day.day,
    location: day.place,
    desc: day.desc,
    para1: day.para1,
    para2: day.para2,
    summary: day.summary,
    activities1: day.activities1,
    activities2: day.activities2,
    image: `/experience/itinerary-${index + 1}-big.webp`,
    smallImage: `/experience/itinerary-${index + 1}-small.webp`,
    included: dayServices[index].map(([icon, title, details]) => ({
      icon: <ServiceIcon src={icon} />,
      title,
      details,
    })),
  }),
);
