import { notFound } from "next/navigation";
import { PuriEnquiryProvider } from "@/components/puri/PuriEnquiry";
import { PuriHero, PuriHeroDetails } from "@/components/puri/PuriHero";
import { PuriMoments } from "@/components/puri/PuriMoments";
import { PuriItinerary } from "@/components/puri/PuriItinerary";
import { PuriIncluded } from "@/components/puri/PuriIncluded";
import { DestinationBookingRail } from "@/components/puri/DestinationBookingRail";
import { PuriWords } from "@/components/puri/PuriWords";
import { PuriFaqs } from "@/components/puri/PuriFaqs";
import { PuriCta } from "@/components/puri/PuriCta";
import { PuriStickyBar } from "@/components/puri/PuriStickyBar";
import { TripGallerySection } from "@/components/home/TripGallerySection";
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

  const bookingRail = (
    <DestinationBookingRail
      title={destination.hero.summaryTitle}
      duration={destination.hero.duration}
      groupSize={destination.hero.groupSize}
      priceLabel={destination.stickyPriceLabel}
      pricingNotes={destination.dates.pricingNotes}
      cards={destination.dates.cardsData}
      notifyDestination={destination.notifyDestination}
    />
  );

  return (
    <>
      <JsonLd data={jsonLd} />
      <PuriEnquiryProvider config={destination.enquiry}>
        <div className="bg-[#FDFBF2] pb-24 md:pb-0">
          <PuriHero sectionData={destination.hero} />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-[minmax(0,1fr)_22rem] lg:items-start lg:gap-10 lg:px-8">
            <div className="min-w-0">
              <PuriHeroDetails sectionData={destination.hero} />
              <div className="py-8 lg:hidden">{bookingRail}</div>
              <PuriMoments
                flush
                heading={destination.moments.heading}
                cards={destination.moments.cards}
              />
              <PuriItinerary
                flush
                heading={destination.itineraryHeading}
                carouselData={destination.itinerary}
              />
              <PuriWords flush {...destination.words} />
              <PuriIncluded flush {...destination.included} />
            </div>

            <aside className="hidden self-stretch lg:block">
              <div className="sticky top-24 max-h-[calc(100dvh-7rem)] overflow-y-auto py-8 pr-1">
                {bookingRail}
              </div>
            </aside>
          </div>

          <TripGallerySection
            heading={destination.gallery.heading}
            para={destination.gallery.para}
            images={destination.gallery.images}
          />
          <PuriFaqs id="faqs" {...destination.faqs} />
          <PuriCta className="!bg-[#0E5E6F]" sectionData={destination.cta} />
          <PuriStickyBar priceLabel={destination.stickyPriceLabel} />
        </div>
      </PuriEnquiryProvider>
    </>
  );
}
