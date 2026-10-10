import type { PuriDatesProps } from "@/components/puri/PuriDates";
import {
  departureToExperienceDateFields,
  formatDepartureRange,
  formatInr,
  getLiveDepartures,
  puriDepartures,
  puriPricingNotes,
} from "@/data/puri";
import puriDateBgImg from "@/public/experience/puriDatedBg.webp";

const liveCards = getLiveDepartures().map((departure) => {
  const { dateRange, year } = departureToExperienceDateFields(departure.dates);

  return {
    id: departure.id,
    dateRange,
    year,
    bookingDates: departure.dates,
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
    ? { label: formatDepartureRange(upcomingDeparture.dates) }
    : undefined,
  pricingNotes: [...puriPricingNotes],
  backgroundImage: puriDateBgImg,
};
