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
  flush?: boolean;
};

export function PuriItinerary({
  heading,
  description,
  carouselData,
  id = "four-days",
  className,
  flush,
}: PuriItineraryProps) {
  return (
    <TimelineItinerary
      id={id}
      heading={heading}
      description={description}
      carouselData={carouselData}
      className={className}
      flush={flush}
    />
  );
}
