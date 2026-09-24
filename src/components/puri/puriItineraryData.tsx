import Image from "next/image";
import type { ItineraryDayItem } from "@/components/puri/PuriItinerary";
import { puriDays } from "@/data/puri";

const serviceIcons = {
  car: "/destinations/gold-car.svg",
  flight: "/destinations/gold-plane.svg",
  host: "/destinations/gold-user-check.svg",
  transfers: "/destinations/gold-handshake.svg",
  tickets: "/destinations/gold-tickets.svg",
  temple: "/destinations/gold-temple.svg",
  meals: "/destinations/gold-food.svg",
} as const;

const dayServices = [
  [
    [serviceIcons.car, "Home pickup", ""],
    [serviceIcons.flight, "Flight", ""],
    [serviceIcons.host, "Dedicated host", ""],
    [serviceIcons.transfers, "Transfers", ""],
    [serviceIcons.tickets, "Guide & entry tickets", ""],
    [serviceIcons.meals, "", "Lunch · Dinner"],
  ],
  [
    [serviceIcons.host, "Dedicated host", ""],
    [serviceIcons.transfers, "Transfers", ""],
    [serviceIcons.temple, "VIP Darshan", ""],
    [serviceIcons.meals, "", "Lunch · Dinner"],
  ],
  [
    [serviceIcons.host, "Dedicated host", ""],
    [serviceIcons.transfers, "Transfers", ""],
    [serviceIcons.tickets, "Guide & entry tickets", ""],
    [serviceIcons.meals, "", "Breakfast · Lunch · Dinner"],
  ],
  [
    [serviceIcons.host, "Dedicated host", ""],
    [serviceIcons.transfers, "Transfers", ""],
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
    desc: day.subtitle,
    details: [...day.activities],
    image: `/experience/itinerary-${index + 1}-big.webp`,
    smallImage: `/experience/itinerary-${index + 1}-small.webp`,
    included: dayServices[index].map(([icon, title, details]) => ({
      icon: <ServiceIcon src={icon} />,
      title,
      details,
    })),
  }),
);
