import type { Faq } from "@/data/faqs";

export type DepartureStatus = "live" | "upcoming";

export type Departure = {
  id: string;
  dates: string;
  price: number | null;
  seatsAvailable: string;
  status: DepartureStatus;
  origin: string;
  duration: string;
  note?: string;
};

export const puriDepartures: Departure[] = [
  {
    id: "sep-2026",
    dates: "8-11 Oct' 26",
    price: 51000,
    seatsAvailable: "12–20 travellers",
    status: "live",
    origin: "Delhi/NCR",
    duration: "3N/4D",
    note: "BOOK EARLY",
  },
  {
    id: "oct-2026-1",
    dates: "15-18 Oct' 26",
    price: 55000,
    seatsAvailable: "12–20 travellers",
    status: "live",
    origin: "Delhi/NCR",
    duration: "3N/4D",
    note: "BOOK EARLY",
  },
  {
    id: "oct-2026-2",
    dates: "22-25 Oct' 26",
    price: 55000,
    seatsAvailable: "12–20 travellers",
    status: "live",
    origin: "Delhi/NCR",
    duration: "3N/4D",
    note: "BOOK EARLY",
  },
  {
    id: "nov-2026-1",
    dates: "19-22 Nov' 26",
    price: 55000,
    seatsAvailable: "12–20 travellers",
    status: "live",
    origin: "Delhi/NCR",
    duration: "3N/4D",
    note: "BEST WEATHER",
  },
  {
    id: "nov-2026-2",
    dates: "26-29 Nov' 26",
    price: 55000,
    seatsAvailable: "12–20 travellers",
    status: "live",
    origin: "Delhi/NCR",
    duration: "3N/4D",
    note: "BEST WEATHER",
  },
  {
    id: "oct-2026",
    dates: "3-6 Dec' 26",
    price: 55000,
    seatsAvailable: "12–20 travellers",
    status: "live",
    origin: "Delhi/NCR",
    duration: "3N/4D",
    note: "Best weather",
  },
];

export function formatInr(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getLiveDepartures() {
  return puriDepartures.filter((d) => d.status === "live" && d.price != null);
}

export function getLowestLivePrice() {
  const prices = getLiveDepartures().map((d) => d.price as number);
  return Math.min(...prices);
}

export const lowestLivePriceLabel = formatInr(getLowestLivePrice());

export const puriCopy = {
  heroEyebrow: "Puri, July 2026.",
  heroTitle: "Bhubaneswar & Jagannath Puri · 3N/4D",
  heroTagline: "A journey of temples, sea & serenity.",
  heroBody:
    "Thoughtfully designed for the way you travel after 50. Temple mornings, ancient sites, an afternoon at Konark, evenings by the sea — unhurried.",
  heroCaption: "Puri, July 2026 — first Sairr journey",
  category: "Pilgrimage",
  seoDescription:
    "A 3N/4D journey to Bhubaneswar and Jagannath Puri for 50+ travellers. VIP darshan, sea-facing stays, and door-to-door care.",
} as const;

export const puriMoments = [
  {
    id: "darshan",
    title: "The long queue, skipped.",
    line: "VIP darshan at the Jagannath Temple, with a Pandit to guide you through its rituals, traditions and significance as you go.",
    imageSeed: "puri-moment-darshan",
    alt: "VIP darshan at the Jagannath Temple",
  },
  {
    id: "mahaprasad",
    title: "Simple, sacred, wholesome.",
    line: "Mahaprasad, prepared in earthen pots, first offered to Lord Jagannath, then shared by everyone.",
    imageSeed: "puri-moment-mahaprasad",
    alt: "Mahaprasad shared together",
  },
  {
    id: "flag",
    title: "A flag, changed by hand, hundreds of feet up.",
    line: "No harness, just the climb to the Nila Chakra, every evening, for centuries.",
    imageSeed: "puri-moment-nila-chakra",
    alt: "Nila Chakra flag-changing ceremony",
  },
  {
    id: "beach",
    title: "No plan for this one.",
    line: "An evening walk along Puri beach, with the sea, good company and nowhere else to be.",
    imageSeed: "puri-moment-beach",
    alt: "Evening walk on Puri beach",
  },
  {
    id: "konark",
    title: "A chariot, carved entirely from stone.",
    line: "24 wheels and seven horses, standing at Konark for more than 700 years, with a local guide bringing its stories to life.",
    imageSeed: "puri-moment-konark",
    alt: "Konark Sun Temple",
  },
  {
    id: "evening",
    title: "Strangers on day one.",
    line: "Friends by the end of the trip. Music, conversation, and an evening together that somehow goes on a little longer than planned.",
    imageSeed: "puri-moment-evening",
    alt: "An evening together with fellow travellers",
  },
] as const;

export const puriDays = [
  {
    day: 1,
    place: "Bhubaneswar",
    subtitle: "Welcome to the City of Temples",
    activities: [
      "Pick-up from home, flight to Bhubaneswar, airport pick-up.",
      "Check-in, lunch, and rest.",
      "Lingaraj Temple and the Udayagiri & Khandagiri Caves.",
      "Group dinner — our first evening together.",
    ],
    pictures: "Lingaraj Temple · Udayagiri & Khandagiri Caves",
    pictureCount: 2,
    meals: "Lunch, Dinner",
    images: [
      {
        seed: "puri-day1-lingaraj",
        alt: "Lingaraj Temple",
      },
      {
        seed: "puri-day1-caves",
        alt: "Udayagiri and Khandagiri Caves",
      },
    ],
  },
  {
    day: 2,
    place: "Puri",
    subtitle: "The sacred city by the sea",
    activities: [
      "Breakfast, then the drive to Puri via Dhauli Shanti Stupa.",
      "Check-in and lunch.",
      "Evening VIP darshan at the Jagannath Temple with a Pandit.",
      "Mahaprasad, and the Nila Chakra flag-changing ceremony.",
      "Dinner, then a night stroll on Puri beach.",
    ],
    pictures:
      "Dhauli Shanti Stupa · The Jagannath Temple, from outside (exterior only)",
    pictureCount: 2,
    meals: "Breakfast, Lunch, Dinner",
    images: [
      {
        seed: "puri-day2-dhauli",
        alt: "Dhauli Shanti Stupa",
      },
      {
        seed: "puri-day2-jagannath-exterior",
        alt: "The Jagannath Temple, from outside",
      },
    ],
  },
  {
    day: 3,
    place: "Konark · Puri",
    subtitle: "Morning by the Sea, Sun Temple & Local Artisans",
    activities: [
      "A slow morning — pool or beach, with an optional second VIP darshan.",
      "Lunch, then Konark Sun Temple and the crafts village at Raghurajpur.",
      "An evening together — music and conversation.",
    ],
    pictures: "Konark Sun Temple · Raghurajpur, an artisan at work",
    pictureCount: 2,
    meals: "Breakfast, Lunch, Dinner",
    images: [
      {
        seed: "puri-day3-konark-alt",
        alt: "Konark Sun Temple, a different frame",
      },
      {
        seed: "puri-day3-raghurajpur",
        alt: "An artisan at work in Raghurajpur",
      },
    ],
  },
  {
    day: 4,
    place: "Departure",
    subtitle: "Departure: Home, with a Few Good Stories",
    activities: [
      "Breakfast and check-out",
      "Transfer to the airport, flight home, and drop-off at your door",
    ],
    pictures: "The return — dropped at your doorstep",
    pictureCount: 1,
    meals: "Breakfast",
    images: [
      {
        seed: "puri-day4-return",
        alt: "Dropped at your doorstep",
      },
    ],
  },
] as const;

export const puriIncluded = [
  {
    id: "flights",
    icon: "plane" as const,
    text: "Return flights from your origin city",
  },
  {
    id: "stay",
    icon: "building" as const,
    text: "A 4-star & above stay in Bhubaneswar and Puri, sea-facing in Puri",
  },
  {
    id: "meals",
    icon: "plate" as const,
    text: "All meals, at hotels or carefully curated restaurants",
  },
  {
    id: "darshan",
    icon: "praying" as const,
    text: "VIP darshan at the Jagannath Temple, guided by a Pandit",
  },
  {
    id: "transfers",
    icon: "car" as const,
    text: "Door-to-door transfers in private AC vehicles",
  },
  {
    id: "coordinator",
    icon: "person" as const,
    text: "A dedicated Sairr coordinator, with the group throughout",
  },
] as const;

export const puriNotIncluded =
  "Personal shopping · Temple offerings · Room service · Liquor & mini-bar";

export const puriPricingNotes = [
  "Price per person, based on double occupancy",
  "Price based on flight fares from Delhi/NCR",
  "Prices for other origin cities may vary with flight fares",
  "Prices across dates may slightly vary by season",
  "Early booking recommended for better pricing",
  "Reserve your spot @ ₹0, pay only once your departure is confirmed",
] as const;

export const puriFaqs: Faq[] = [
  {
    question: "What's included in the trip?",
    answer:
      "Return flights from your origin city, 4-star & above stays in Bhubaneswar and Puri, sea-facing accommodation in Puri, VIP darshan with a Pandit at the Jagannath Temple, all meals at hotels or carefully curated restaurants, and door-to-door transfers in private AC vehicles. Not included: personal shopping, temple offerings, room service, liquor and the mini-bar.",
  },
  {
    question: "What's the pace of the trip like?",
    answer:
      "Unhurried, by design — this is a journey built for the way you travel after 50, not a race through a checklist. We keep it to no more than three activities a day, so there's always time to enjoy where you are, not just get through it.",
  },
  {
    question: "What's the sightseeing experience like?",
    answer:
      "We don't believe sightseeing should mean arriving, taking a photo, and moving on. Every stop on this trip — VIP darshan at the Jagannath Temple, Lingaraj, the caves, Konark — is a guided experience, with stories and history along the way, not just a drop-off.",
  },
  {
    question: "How is everything managed once we're in Puri?",
    answer:
      "A dedicated Sairr coordinator is on the ground with the group throughout the journey. They're there to take care of the details, answer questions and make sure everything runs smoothly.",
  },
  {
    question: "How will my family stay connected while I'm away?",
    answer:
      "Sairr is designed for two people — you, and the family back home. While you're travelling, your family receives regular updates, so they know how the journey is going without having to keep checking in.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "A travel expert from the Sairr team will personally reach out — to confirm availability, answer your questions, and help you decide if this journey's right for you.",
  },
];

/** Set when the confirmed Puri testimonial film ID is available. */
export const puriTestimonialYoutubeId = "";
