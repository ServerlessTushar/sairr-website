import type { PuriDatesProps } from "@/components/puri/PuriDates";
import {
  formatInr,
  getLiveDepartures,
  puriDepartures,
  puriPricingNotes,
} from "@/data/puri";
import puriDateBgImg from "@/public/experience/puriDatedBg.webp";

function parseDepartureDates(dates: string) {
  // Handle format like "8-11 Oct' 26"
  const match = dates.match(/^(.+?)\s+([A-Za-z]+)'\s+(\d{2})$/);
  if (match) {
    return {
      dateRange: match[1],
      year: `20${match[3]}`,
    };
  }
  
  // Fallback to original format like "8-11 October 2026"
  const oldMatch = dates.match(/^(.+)\s+(\d{4})$/);
  return {
    dateRange: oldMatch?.[1] ?? dates,
    year: oldMatch?.[2] ?? "",
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
    note: departure.note,
    selected: departure.id === "nov-2026-1",
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
