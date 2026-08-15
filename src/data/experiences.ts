export type ExperienceStatus = "live" | "completed" | "coming-soon";

export type Experience = {
  slug: string;
  title: string;
  location: string;
  region: string;
  tagline: string;
  duration: string;
  logistics: string;
  datesLabel: string;
  bestSeason: string;
  price: string;
  description: string;
  highlights: string[];
  itinerary: { day: number; title: string; description: string }[];
  included: string[];
  imageSeed: string;
  /** Local photo when we have one. Puri uses the real pilot image. */
  imageSrc?: string;
  /** AI-generated stand-in — replace before launch. */
  aiPlaceholder?: boolean;
  status: ExperienceStatus;
  statusLabel: string;
  /** Product feature on the card — separate from trip availability (e.g. VIP darshan). */
  featureLabel?: string;
  featured?: boolean;
  hasDetailPage?: boolean;
};

export const experiences: Experience[] = [
  {
    slug: "puri",
    title: "Puri",
    location: "Odisha",
    region: "East India",
    tagline: "Jagannath Puri — sacred coast of Odisha",
    duration: "3N/4D",
    logistics: "3N/4D · Delhi → Puri",
    datesLabel: "30 July – 2 August 2026",
    bestSeason: "Oct – Feb",
    price: "From ₹45,000 per person",
    description:
      "A gentle coastal journey around Jagannath Puri — temple, sea, and unhurried days. Built for 50+ travellers who want the sacred without the scramble.",
    highlights: [
      "VIP darshan support at Jagannath Temple",
      "Comfortable stays with rest built into the day",
      "Coordinator with you from door to door",
      "Family updates throughout",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & welcome",
        description:
          "Transfer to your hotel, a quiet briefing, and an easy evening by the coast.",
      },
      {
        day: 2,
        title: "Temple & heritage",
        description:
          "Jagannath darshan with assistance, then lunch and rest — not a packed afternoon.",
      },
      {
        day: 3,
        title: "Coastal calm",
        description:
          "Konark at a comfortable pace, with shade, breaks, and no rush back.",
      },
      {
        day: 4,
        title: "Return",
        description:
          "Breakfast, then transfer home. The journey is ours until you're back.",
      },
    ],
    included: [
      "4-star+ stay",
      "All local transfers",
      "Dedicated coordinator",
      "Breakfast daily",
      "Temple visit assistance",
    ],
    imageSeed: "puri-temple",
    imageSrc: "/sairr-coming-soon.jpeg",
    status: "completed",
    statusLabel: "Completed · July 2026",
    featureLabel: "VIP darshan included",
    featured: true,
    hasDetailPage: true,
  },
  {
    slug: "tirupati",
    title: "Tirupati",
    location: "Andhra Pradesh",
    region: "South India",
    tagline: "Dates coming soon",
    duration: "",
    logistics: "",
    datesLabel: "Dates coming soon",
    bestSeason: "",
    price: "",
    description: "A thoughtfully paced journey to Tirupati. Dates to follow.",
    highlights: [],
    itinerary: [],
    included: [],
    imageSeed: "tirupati-temple",
    aiPlaceholder: true,
    status: "coming-soon",
    statusLabel: "Coming soon",
    featured: true,
    hasDetailPage: false,
  },
  {
    slug: "kerala",
    title: "Kerala",
    location: "Kerala",
    region: "South India",
    tagline: "Dates coming soon",
    duration: "",
    logistics: "",
    datesLabel: "Dates coming soon",
    bestSeason: "",
    price: "",
    description: "Backwaters, coast, and unhurried days. Dates to follow.",
    highlights: [],
    itinerary: [],
    included: [],
    imageSeed: "kerala-backwaters",
    aiPlaceholder: true,
    status: "coming-soon",
    statusLabel: "Coming soon",
    featured: true,
    hasDetailPage: false,
  },
  {
    slug: "dubai",
    title: "Dubai",
    location: "UAE",
    region: "International",
    tagline: "Dates coming soon",
    duration: "",
    logistics: "",
    datesLabel: "Dates coming soon",
    bestSeason: "",
    price: "",
    description:
      "An international journey — Sairr isn't domestic-only. Dates to follow.",
    highlights: [],
    itinerary: [],
    included: [],
    imageSeed: "dubai-skyline",
    aiPlaceholder: true,
    status: "coming-soon",
    statusLabel: "Coming soon",
    featured: true,
    hasDetailPage: false,
  },
];

export function getExperience(slug: string) {
  return experiences.find((e) => e.slug === slug && e.hasDetailPage);
}

export function getFeaturedExperiences() {
  return experiences.filter((e) => e.featured);
}

export function getDetailExperiences() {
  return experiences.filter((e) => e.hasDetailPage);
}
