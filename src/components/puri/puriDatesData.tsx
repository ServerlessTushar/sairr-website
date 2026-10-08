import type { PuriDatesProps } from "@/components/puri/PuriDates";
import {
  formatInr,
  getLiveDepartures,
  puriDepartures,
  puriPricingNotes,
} from "@/data/puri";
import puriDateBgImg from "@/public/experience/puriDatedBg.webp";

const MONTH_ABBREV_TO_FULL: Record<string, string> = {
  Jan: "January",
  Feb: "February",
  Mar: "March",
  Apr: "April",
  May: "May",
  Jun: "June",
  Jul: "July",
  Aug: "August",
  Sep: "September",
  Oct: "October",
  Nov: "November",
  Dec: "December",
};

function parseDepartureDates(dates: string) {
  const ranged = dates.match(
    /^(\d+)\s+([A-Za-z]+)\s*-\s*(\d+)\s+([A-Za-z]+)['']\s*(\d{2})$/,
  );
  if (ranged) {
    const [, startDay, startMonth, endDay, endMonth, yearShort] = ranged;
    const fullStart = MONTH_ABBREV_TO_FULL[startMonth] ?? startMonth;
    const fullEnd = MONTH_ABBREV_TO_FULL[endMonth] ?? endMonth;
    const year = `20${yearShort}`;

    if (startMonth.toLowerCase() === endMonth.toLowerCase()) {
      return {
        dateRange: `${startDay}-${endDay} ${fullStart}`,
        year,
      };
    }

    return {
      dateRange: `${startDay} ${fullStart} - ${endDay} ${fullEnd}`,
      year,
    };
  }

  // Legacy: "8-11 Oct' 26"
  const match = dates.match(/^(.+?)\s+([A-Za-z]+)['']\s+(\d{2})$/);
  if (match) {
    const monthAbbrev = match[2];
    const fullMonth = MONTH_ABBREV_TO_FULL[monthAbbrev] ?? monthAbbrev;
    return {
      dateRange: `${match[1]} ${fullMonth}`,
      year: `20${match[3]}`,
    };
  }

  // Fallback to original format like "8-11 October 2026"
  const oldMatch = dates.match(/^(.+?)\s+([A-Za-z]+)\s+(\d{4})$/);
  if (oldMatch) {
    return {
      dateRange: `${oldMatch[1]} ${oldMatch[2]}`,
      year: oldMatch[3],
    };
  }

  return { dateRange: dates, year: "" };
}

const liveCards = getLiveDepartures().map((departure) => {
  const { dateRange, year } = parseDepartureDates(departure.dates);

  return {
    id: departure.id,
    dateRange,
    year,
    bookingDateLabel: departure.dates,
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
