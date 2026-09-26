import type { Faq } from "@/data/faqs";
import { prod_tt_sasportal_v1alpha1 } from "googleapis";

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
    desc: "Welcome to the City of Temples",
    para1: "We pick you up from home for the flight to Bhubaneswar, where a Sairr host receives you and walks with you for the rest of the journey. From there, it's check-in, lunch, and a little time to settle in before the city opens up for the afternoon.",
    activities1: [
      { loc: "Lingaraj Temple", desc: "An 11th-century temple of Kalinga architecture, dedicated to Lord Shiva. Rising 180 feet above a complex of 150 smaller shrines, it is the largest temple in Bhubaneswar, second only to the Jagannath Temple you'll visit in Puri. A Pandit accompanies you inside, sharing its history and significance along the way." },
      { loc: "Udayagiri & Khandagiri Caves", desc: "More than 2,000 years old, this group of 33 caves was carved into two hills for Jain monks. A guide walks you through the carvings and inscriptions, and what they reveal about the monks who lived here." },
      { loc: "If time permits, the ISKCON Temple", desc: "a quieter, more contemporary stop to round off the evening." },
      { loc: "", desc: "Followed by dinner and an overnight stay in Bhubaneswar." },
    ],
    para2: "",
    activities2: [],
    summary: "",
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
    desc: "The Sacred City by the Sea",
    para1: "After breakfast, we leave Bhubaneswar for Puri, about 65km and around an hour and a half away. The drive takes you from Odisha's temple city to the coast, where the Jagannath Temple has shaped life for centuries. Along the way, we make two short stops.",
    activities1: [
      { loc: "Dhauli Shanti Stupa", desc: "A quiet stop on the way, marking the site associated with the Kalinga War. It's said Emperor Ashoka stood here, looked at what the battle had cost, and gave up violence for good. The white dome, with statues of Buddha set around it, was built in 1972 in memory of that change of heart." },
      { loc: "If time permits, Sakshi Gopal Temple", desc: "A temple dedicated to Krishna as Sakshi Gopal, where local tradition tells of him walking to the village to prove a devotee's broken promise true, staying on as its witness ever since." },
    ],
    para2: "From there, we continue to Puri, arriving in time for lunch and check-in at the sea-facing resort. After some time to settle in, we head out to experience the city's spiritual heart. The Jagannath Temple dates back to around the 12th century and is one of Hinduism's four sacred Char Dham pilgrimage sites.",
    activities2: [
      { loc: "VIP darshan at the Jagannath Temple", desc: "You skip the long queue and go straight in for darshan, with a Pandit alongside you to explain the rituals, traditions and significance of Lord Jagannath as you go." },
      { loc: "Mahaprasad", desc: "Rice, dal and sweets, offered to Jagannath first and then shared with you. You'll also visit the temple's kitchen, where meals for thousands are cooked daily in stacked earthen pots over an open fire, the top pot always cooking first. Wholesome, simple, and a meal that stays with you." },
      { loc: "The Nila Chakra:", desc: "As evening falls, the temple's flag is changed by hand, hundreds of feet up, the same way it has been for centuries." },
    ],
    summary: "The day closes the way it should: dinner, conversations, and a quiet walk along Puri beach, no plan, no rush.",
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
    place: "Konark & Puri",
    desc: "Morning by the Sea, Sun Temple & Local Artisans",
    para1: "Today is the lightest day of the trip, with plenty of time to slow down. After breakfast, the morning is yours: spend it by the pool, take a walk along the beach, or simply enjoy a quiet few hours at the resort. Anyone who'd like a second VIP darshan can also head to the Jagannath Temple this morning. After lunch at the resort, we set out for Konark in the afternoon.",
    activities1: [
      { loc: "Konark Sun Temple", desc: "Built in the 13th century as a monumental chariot for the Sun God, with twelve pairs of intricately carved wheels and seven horses. A UNESCO World Heritage Site, its wheels aren't just decoration, each one works as a sundial, still telling the time by shadow. A guide brings its stories, symbolism and extraordinary craftsmanship to life as you explore." },
      { loc: "Raghurajpur", desc: "A heritage crafts village nearby, known for Pattachitra, a centuries-old style of cloth painting still practised by artisan families in their own homes. Meet them at work, and browse or take home a piece of Odisha's artistic heritage." },
    ],
    para2: "Back at the resort, conversations continue around the dinner table. It's our last evening together, and by now, this feels less like a group of travellers and more like a group of friends.",
    activities2: [],
    summary: "",
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
    place: " Departure",
    desc: "Home, with a Few Good Stories",
    para1: "",
    activities1: [],
    para2: "",
    activities2: [],
    summary: "Pack up after breakfast and check out of the resort. We drive to Bhubaneswar airport, where your Sairr host sees you off. Once you land, we'll take you all the way back to your doorstep, with a few good stories, plenty of memories, and a camera roll full of pictures.",
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
    text: "Return flights from your origin city to Bhubaneswar, with meals included",
  },
  {
    id: "stay",
    icon: "building" as const,
    text: "3 nights in 4-star & above hotels or resorts (1N in Bhubaneswar, 2N in Puri), including a sea-facing stay in Puri",
  },
  {
    id: "meals",
    icon: "plate" as const,
    text: "Breakfast, lunch and dinner throughout the journey, at hotels or curated restaurants",
  },
  {
    id: "transfers",
    icon: "car" as const,
    text: "Door-to-door transfers in private AC vehicles",
  },
  {
    id: "ticket",
    icon: "ticket" as const,
    text: "Entry tickets & local guides at key sites like Konark Sun Temple and Udayagiri & Khandagiri Caves",
  },
  {
    id: "darshan",
    icon: "praying" as const,
    text: "VIP darshan at the Jagannath Temple, guided by a Pandit",
  },
  {
    id: "coordinator",
    icon: "person" as const,
    text: "A dedicated Sairr coordinator, with the group throughout",
  },
] as const;

export const puriNotIncluded =
  `Personal shopping and tips · Room service / in-room dining · Temple offerings and donations · Alcohol and mini-bar · Any activities or services not mentioned in "What's Included"`;

export const puriPricingNotes = [
  "Price per person, based on double occupancy",
  "Price based on flight fares from Delhi/NCR",
  "Prices for other origin cities may vary with flight fares",
  "Prices across dates may slightly vary by season",
  "Early booking recommended for better pricing",
  "Reserve your spot @ ₹0, pay only once your departure is confirmed"
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
