import type { ExperienceHeroSectionData } from "@/components/puri/PuriHero";
import { puriCopy } from "@/data/puri";
import puriHero from "@/public/homepage/puri.webp";
import moments1 from "@/public/homepage/moments-1.webp";
import moments2 from "@/public/homepage/moments-2.webp";
import moments3 from "@/public/homepage/moments-3.webp";
import moments4 from "@/public/homepage/moments-4.webp";
import moments5 from "@/public/homepage/moments-5.webp";
import moments6 from "@/public/homepage/moments-6.webp";
import day1 from "@/public/experience/bhubaneshwar-day1.webp";
import day2 from "@/public/experience/puri-day2.webp";
import day3 from "@/public/experience/konark-puri-day3.webp";
import day4 from "@/public/experience/departure-day4.webp";
import puriMoments from "@/public/experience/puri-moments.webp";
import included1 from "@/public/experience/included-1.webp";
import included2 from "@/public/experience/included-2.webp";
import included3 from "@/public/experience/included-3.webp";
import included4 from "@/public/experience/included-4.webp";
import included5 from "@/public/experience/included-5.webp";
import included6 from "@/public/experience/included-6.webp";

const heroImages = [
  { src: puriHero, alt: "Travellers at the Jagannath Temple in Puri" },
  { src: moments1, alt: "Sairr travellers together in Puri" },
  { src: moments2, alt: "Travellers sharing a meal in Puri" },
  { src: moments3, alt: "Temple chariot in Puri" },
  { src: moments4, alt: "Temple dome in Puri" },
  { src: moments5, alt: "Travellers exploring Puri" },
  { src: moments6, alt: "Group dining during the Puri journey" },
  { src: day1, alt: "Bhubaneswar day one" },
  { src: day2, alt: "Puri day two" },
  { src: day3, alt: "Konark and Puri day three" },
  { src: day4, alt: "Departure day four" },
  { src: puriMoments, alt: "Moments from the Puri journey" },
  { src: included1, alt: "Return flights included" },
  { src: included2, alt: "Comfortable stays in Puri" },
  { src: included3, alt: "Meals on the journey" },
  { src: included4, alt: "VIP darshan at Jagannath Temple" },
  { src: included5, alt: "Private AC transfers" },
  { src: included6, alt: "Dedicated Sairr coordinator" },
];

export const puriHeroSectionData: ExperienceHeroSectionData = {
  heading: "Bhubaneswar & Jagannath Puri",
  duration: "3N/4D",
  tagline: puriCopy.heroTagline,
  highlights: [
    "Thoughtfully designed for the way you travel after 50.",
    "Temple mornings, ancient sites, an afternoon at Konark, evenings by the sea, unhurried.",
  ],
  images: heroImages,
  primaryCtaLabel: "Tell Us You're Interested →",
  secondaryCtaLabel: "See what each day holds",
  secondaryCtaHref: "#four-days",
};
