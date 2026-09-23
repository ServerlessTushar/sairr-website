import { notFound } from "next/navigation";
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
  getDestinationPage,
  getDestinationPageParams,
} from "@/data/destinationPages";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getDestinationPageParams();
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const destination = getDestinationPage(slug);
  if (!destination) return {};

  return createMetadata({
    title: destination.title,
    description: destination.description,
    path: `/destinations/${slug}`,
  });
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = getDestinationPage(slug);
  if (!destination) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: destination.jsonLdName,
    description: destination.description,
    touristType: "Senior travellers and families",
    itinerary: {
      "@type": "ItemList",
      itemListElement: destination.itinerary.map((day) => ({
        "@type": "ListItem",
        position: day.day,
        name: `Day ${day.day} · ${day.location}`,
        description: day.desc,
      })),
    },
    offers: {
      "@type": "Offer",
      price: destination.offerPrice,
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
      <PuriEnquiryProvider config={destination.enquiry}>
        <div className="bg-mist pb-24 md:pb-0">
          <PuriHero sectionData={destination.hero} />
          <PuriMoments
            heading={destination.moments.heading}
            cards={destination.moments.cards}
          />
          <PuriItinerary
            heading={destination.itineraryHeading}
            carouselData={destination.itinerary}
          />
          <PuriIncluded {...destination.included} />
          <PuriDates
            {...destination.dates}
            notifyDestination={destination.notifyDestination}
          />
          <PuriWords {...destination.words} />
          <PuriFaqs {...destination.faqs} />
          <PuriCta sectionData={destination.cta} />
          <PuriStickyBar priceLabel={destination.stickyPriceLabel} />
        </div>
      </PuriEnquiryProvider>
    </>
  );
}
