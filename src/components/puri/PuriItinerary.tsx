import {
  TimelineItinerary,
  type ItineraryDayItem,
  type ItineraryIncludedItem,
} from "@/components/shared/TimelineItinerary";

export type { ItineraryDayItem, ItineraryIncludedItem };

export type PuriItineraryProps = {
  heading: string;
  description?: string;
  carouselData: ItineraryDayItem[];
  id?: string;
  className?: string;
};

export function PuriItinerary({
  heading,
  description,
  carouselData,
  id = "four-days",
  className,
}: PuriItineraryProps) {
  return (
    <TimelineItinerary
      id={id}
      heading={heading}
      description={description}
      carouselData={carouselData}
      className={className}
    />
  );
}
