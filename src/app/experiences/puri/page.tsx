import { PuriEnquiryProvider } from "@/components/puri/PuriEnquiry";
import { PuriHero } from "@/components/puri/PuriHero";
import { PuriMoments } from "@/components/puri/PuriMoments";
import { PuriItinerary } from "@/components/puri/PuriItinerary";
import { PuriIncluded } from "@/components/puri/PuriIncluded";
import { PuriDates } from "@/components/puri/PuriDates";
import { PuriWords } from "@/components/puri/PuriWords";
import { PuriFaqs } from "@/components/puri/PuriFaqs";
import { PuriCta } from "@/components/puri/PuriCta";
import { PuriStickyBar } from "@/components/puri/PuriStickyBar";
import { JsonLd } from "@/components/shared/JsonLd";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import {
  getLowestLivePrice,
  puriCopy,
  puriDays,
} from "@/data/puri";

export const metadata = createMetadata({
  title: `${puriCopy.heroTitle} — ${puriCopy.heroTagline}`,
  description: puriCopy.seoDescription,
  path: "/experiences/puri",
});

export default function PuriExperiencePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: "Bhubaneswar & Jagannath Puri",
    description: puriCopy.seoDescription,
    touristType: "Senior travellers and families",
    itinerary: {
      "@type": "ItemList",
      itemListElement: puriDays.map((day) => ({
        "@type": "ListItem",
        position: day.day,
        name: `Day ${day.day} · ${day.place}`,
        description: day.subtitle,
      })),
    },
    offers: {
      "@type": "Offer",
      price: String(getLowestLivePrice()),
      priceCurrency: "INR",
    },
    provider: {
      "@type": "TravelAgency",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <PuriEnquiryProvider>
        <div className="bg-mist pb-24 md:pb-0">
          <PuriHero />
          <PuriMoments />
          <PuriItinerary />
          <PuriIncluded />
          <PuriDates />
          <PuriWords />
          <PuriFaqs />
          <PuriCta />
          <PuriStickyBar />
        </div>
      </PuriEnquiryProvider>
    </>
  );
}
