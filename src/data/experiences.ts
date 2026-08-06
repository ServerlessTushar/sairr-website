export type Experience = {
  slug: string;
  title: string;
  location: string;
  region: string;
  tagline: string;
  duration: string;
  bestSeason: string;
  price: string;
  description: string;
  highlights: string[];
  itinerary: { day: number; title: string; description: string }[];
  included: string[];
  imageSeed: string;
  featured?: boolean;
};

export const experiences: Experience[] = [
  {
    slug: "puri",
    title: "Puri",
    location: "Odisha",
    region: "East India",
    tagline: "Temples, sea breeze & slow mornings",
    duration: "4 Days / 3 Nights",
    bestSeason: "Oct – Feb",
    price: "₹18,999",
    description:
      "A gentle coastal escape built around comfort, culture, and unhurried discovery. Perfect for parents who want spirituality without the rush.",
    highlights: [
      "Sunrise at Jagannath Temple with guided darshan support",
      "Comfortable beachfront stays with ground-floor rooms",
      "Slow-paced local cuisine experiences",
      "Dedicated trip coordinator throughout",
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival & Welcome",
        description:
          "Private transfer to your hotel, welcome briefing, and a relaxed evening walk along the beach.",
      },
      {
        day: 2,
        title: "Temple & Heritage",
        description:
          "Early morning temple visit with priority assistance, followed by lunch and rest at the hotel.",
      },
      {
        day: 3,
        title: "Coastal Calm",
        description:
          "Visit Konark Sun Temple at a comfortable pace, with ample breaks and shaded rest stops.",
      },
      {
        day: 4,
        title: "Departure",
        description:
          "Leisurely breakfast and private transfer to the airport or railway station.",
      },
    ],
    included: [
      "Accommodation in verified senior-friendly hotels",
      "All local transfers in AC vehicles",
      "Dedicated trip coordinator",
      "Breakfast daily",
      "Temple visit assistance",
    ],
    imageSeed: "puri-temple",
    featured: true,
  },
  {
    slug: "munnar",
    title: "Munnar",
    location: "Kerala",
    region: "South India",
    tagline: "Mist, tea gardens & mountain air",
    duration: "5 Days / 4 Nights",
    bestSeason: "Sep – Mar",
    price: "₹24,499",
    description:
      "Rolling hills, cool breezes, and the kind of pace that lets you actually breathe. Designed for travellers who love nature without strenuous trekking.",
    highlights: [
      "Tea estate visits with minimal walking",
      "Scenic drives with frequent photo stops",
      "Ayurvedic wellness session (optional)",
      "Homely Kerala meals",
    ],
    itinerary: [
      {
        day: 1,
        title: "Into the Hills",
        description: "Scenic drive from Kochi with rest stops. Check-in and evening tea.",
      },
      {
        day: 2,
        title: "Tea Country",
        description: "Visit a working tea plantation and enjoy a plantation lunch.",
      },
      {
        day: 3,
        title: "Nature at Ease",
        description: "Eravikulam National Park visit (viewpoint access) and local market.",
      },
      {
        day: 4,
        title: "Wellness Day",
        description: "Optional Ayurvedic massage and a free afternoon to rest.",
      },
      {
        day: 5,
        title: "Return",
        description: "Leisurely departure with drop-off at Kochi airport.",
      },
    ],
    included: [
      "Hill-station accommodation with heating",
      "Private AC vehicle for all transfers",
      "Trip coordinator",
      "Breakfast & dinner daily",
      "All sightseeing entry fees",
    ],
    imageSeed: "munnar-tea",
    featured: true,
  },
  {
    slug: "varanasi",
    title: "Varanasi",
    location: "Uttar Pradesh",
    region: "North India",
    tagline: "Ancient ghats & timeless rituals",
    duration: "4 Days / 3 Nights",
    bestSeason: "Oct – Mar",
    price: "₹21,999",
    description:
      "Experience one of the world's oldest living cities with the care and planning it deserves. Spiritual, serene, and deeply moving.",
    highlights: [
      "Sunrise boat ride on the Ganges",
      "Evening Ganga Aarti from a comfortable viewing spot",
      "Heritage walk at a gentle pace",
      "24/7 on-ground support",
    ],
    itinerary: [
      {
        day: 1,
        title: "Welcome to Kashi",
        description: "Arrival, hotel check-in near the ghats, and an orientation walk.",
      },
      {
        day: 2,
        title: "Ghats & Temples",
        description: "Sunrise boat ride, temple visits, and afternoon rest.",
      },
      {
        day: 3,
        title: "Heritage & Rituals",
        description: "Sarnath excursion and evening Ganga Aarti experience.",
      },
      {
        day: 4,
        title: "Farewell",
        description: "Morning rituals and departure transfer.",
      },
    ],
    included: [
      "Ghat-side hotel with elevator access",
      "Boat ride and all transfers",
      "Dedicated coordinator",
      "Breakfast daily",
      "Temple & heritage guide",
    ],
    imageSeed: "varanasi-ghat",
    featured: true,
  },
  {
    slug: "coorg",
    title: "Coorg",
    location: "Karnataka",
    region: "South India",
    tagline: "Coffee country & quiet luxury",
    duration: "4 Days / 3 Nights",
    bestSeason: "Oct – Mar",
    price: "₹22,499",
    description:
      "Lush plantations, cool climate, and homestay warmth. A restorative getaway for those who appreciate the finer, quieter things.",
    highlights: [
      "Plantation stay with home-cooked meals",
      "Abbey Falls visit (accessible path)",
      "Coffee tasting session",
      "Small group size (max 12)",
    ],
    itinerary: [
      {
        day: 1,
        title: "Plantation Arrival",
        description: "Drive from Bangalore/Mysore. Welcome dinner at the estate.",
      },
      {
        day: 2,
        title: "Estate Life",
        description: "Coffee plantation tour, tasting, and afternoon at leisure.",
      },
      {
        day: 3,
        title: "Waterfalls & Views",
        description: "Abbey Falls and Raja's Seat with comfortable pacing.",
      },
      {
        day: 4,
        title: "Departure",
        description: "Morning walk and transfer back.",
      },
    ],
    included: [
      "Plantation homestay accommodation",
      "All meals included",
      "Private vehicle transfers",
      "Trip coordinator",
      "Plantation tour & tasting",
    ],
    imageSeed: "coorg-coffee",
    featured: false,
  },
];

export function getExperience(slug: string) {
  return experiences.find((e) => e.slug === slug);
}

export function getFeaturedExperiences() {
  return experiences.filter((e) => e.featured);
}
