import Image from "next/image";
import type { ItineraryDayItem } from "@/components/puri/PuriItinerary";
import { puriDays } from "@/data/puri";
import day1 from "@/public/experience/bhubaneshwar-day1.webp";
import day2 from "@/public/experience/puri-day2.webp";
import day3 from "@/public/experience/konark-puri-day3.webp";
import day4 from "@/public/experience/departure-day4.webp";
import mealIcon from "@/public/experience/meal-yellow.webp";

const dayImages = [day1, day2, day3, day4];

export const puriItineraryData: ItineraryDayItem[] = puriDays.map(
  (day, index) => ({
    day: day.day,
    location: day.place,
    desc: day.subtitle,
    details: [...day.activities],
    image: dayImages[index],
    included: [
      {
        icon: (
          <Image
            src={mealIcon}
            alt=""
            width={20}
            height={20}
            className="size-5"
            aria-hidden
          />
        ),
        title: "Meal",
        details: day.meals,
      },
    ],
  }),
);
