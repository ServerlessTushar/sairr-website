import type { ExperienceHeroSectionData } from "@/components/puri/PuriHero";
import type { PuriMomentCard } from "@/components/puri/puriMomentsData";
import { puriMomentsSectionData } from "@/components/puri/puriMomentsData";
import type { ItineraryDayItem } from "@/components/puri/PuriItinerary";
import { puriItineraryData } from "@/components/puri/puriItineraryData";
import { puriIncludedSectionData } from "@/components/puri/puriIncludedData";
import type { PuriDatesProps } from "@/components/puri/PuriDates";
import { puriDatesSectionData } from "@/components/puri/puriDatesData";
import type { PuriWordsProps } from "@/components/puri/PuriWords";
import { puriWordsSectionData } from "@/components/puri/puriWordsData";
import type { PuriFaqsProps } from "@/components/puri/PuriFaqs";
import { puriFaqsSectionData } from "@/components/puri/puriFaqsData";
import type { ExperienceCtaSectionData } from "@/components/puri/PuriCta";
import { puriCtaSectionData } from "@/components/puri/puriCtaData";
import { puriHeroSectionData } from "@/components/puri/puriHeroData";
import type { DestinationEnquiryConfig } from "@/components/puri/PuriEnquiry";
import {
  getLowestLivePrice,
  lowestLivePriceLabel,
  puriCopy,
  puriDepartures,
} from "@/data/puri";
import type { TravelDestination } from "@/lib/validations/contact";
import { galleryImages, type GalleryImage } from "@/data/gallery";

export type DestinationPageContent = {
  slug: string;
  title: string;
  description: string;
  jsonLdName: string;
  offerPrice: string;
  stickyPriceLabel: string;
  notifyDestination: TravelDestination;
  enquiry: DestinationEnquiryConfig;
  hero: ExperienceHeroSectionData;
  moments: {
    heading: string;
    cards: PuriMomentCard[];
  };
  itineraryHeading: string;
  itinerary: ItineraryDayItem[];
  included: typeof puriIncludedSectionData;
  dates: PuriDatesProps;
  words: PuriWordsProps;
  faqs: PuriFaqsProps;
  gallery: {
    heading: string;
    para: string;
    images: GalleryImage[];
  };
  cta: ExperienceCtaSectionData;
};

const puriPage: DestinationPageContent = {
  slug: "puri",
  title: `${puriCopy.heroTitle} — ${puriCopy.heroTagline}`,
  description: puriCopy.seoDescription,
  jsonLdName: "Bhubaneswar & Jagannath Puri",
  offerPrice: String(getLowestLivePrice()),
  stickyPriceLabel: lowestLivePriceLabel,
  notifyDestination: "Puri & Bhubaneswar",
  enquiry: {
    destinationName: "Puri",
    departures: puriDepartures,
    interestMessage: "Interested in the Puri journey.",
    notifyMessage: "Notify me when the next Puri departure is announced.",
  },
  hero: puriHeroSectionData,
  moments: puriMomentsSectionData,
  itineraryHeading: "Itinerary",
  itinerary: puriItineraryData,
  included: puriIncludedSectionData,
  dates: puriDatesSectionData,
  words: puriWordsSectionData,
  faqs: puriFaqsSectionData,
  gallery: {
    heading: "A Few Frames From The Journey",
    para: "",
    images: galleryImages,
  },
  cta: puriCtaSectionData,
};

const destinationPages: DestinationPageContent[] = [puriPage];

export function getDestinationPage(slug: string) {
  return destinationPages.find((page) => page.slug === slug);
}

export function getDestinationPageParams() {
  return destinationPages.map((page) => ({ slug: page.slug }));
}
