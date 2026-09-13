import type { PuriDatesProps } from "@/components/puri/PuriDates";
import {
  formatInr,
  getLiveDepartures,
  puriDepartures,
  puriPricingNotes,
} from "@/data/puri";
import puriDateBgImg from "@/public/experience/puriDatedBg.webp";

function parseDepartureDates(dates: string) {
  const match = dates.match(/^(.+)\s+(\d{4})$/);
  return {
    dateRange: match?.[1] ?? dates,
    year: match?.[2] ?? "",
  };
}

const liveCards = getLiveDepartures().map((departure) => {
  const { dateRange, year } = parseDepartureDates(departure.dates);

  return {
    id: departure.id,
    dateRange,
    year,
    duration: departure.duration,
    travellers: departure.seatsAvailable,
    price: departure.price != null ? formatInr(departure.price) : undefined,
    note: departure.note
      ? departure.note.charAt(0).toUpperCase() + departure.note.slice(1)
      : undefined,
  };
});

const upcomingDeparture = puriDepartures.find((d) => d.status === "upcoming");

export const puriDatesSectionData: PuriDatesProps = {
  id: "dates",
  heading: "Choose Your Dates",
  cardsData: liveCards,
  upcomingBar: upcomingDeparture
    ? { label: upcomingDeparture.dates }
    : undefined,
  pricingNotes: [...puriPricingNotes],
  backgroundImage: puriDateBgImg,
};
