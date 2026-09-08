export type GalleryLayout = "default" | "wide" | "tall" | "large";

export type GalleryImage = {
  id: string;
  seed: string;
  alt: string;
  caption: string;
  location: string;
  journey: string;
  journeyLabel: string;
  layout?: GalleryLayout;
  src?: string;
  aiPlaceholder?: boolean;
  objectPosition?: string;
};

export const galleryJourneys = [
  { slug: "all", label: "All journeys" },
  { slug: "puri", label: "Puri" },
  { slug: "tirupati", label: "Tirupati" },
  { slug: "kerala", label: "Kerala" },
  { slug: "dubai", label: "Dubai" },
] as const;

export const galleryImages: GalleryImage[] = [
  {
    id: "moments-1",
    seed: "moments-1",
    src: "/homepage/moments-1.webp",
    alt: "Sairr travellers together in Puri",
    caption: "Dolpo & Western Nepal",
    location: "Puri, Odisha",
    journey: "puri",
    journeyLabel: "Puri",
    objectPosition: "center",
  },
  {
    id: "moments-2",
    seed: "moments-2",
    src: "/homepage/moments-2.webp",
    alt: "Travellers sharing a meal in Puri",
    caption: "Dolpo & Western Nepal",
    location: "Puri, Odisha",
    journey: "puri",
    journeyLabel: "Puri",
    objectPosition: "center",
  },
  {
    id: "moments-3",
    seed: "moments-3",
    src: "/homepage/moments-3.webp",
    alt: "Temple chariot in Puri",
    caption: "Dolpo & Western Nepal",
    location: "Puri, Odisha",
    journey: "puri",
    journeyLabel: "Puri",
    objectPosition: "center",
  },
  {
    id: "moments-4",
    seed: "moments-4",
    src: "/homepage/moments-4.webp",
    alt: "Temple dome in Puri",
    caption: "Dolpo & Western Nepal",
    location: "Puri, Odisha",
    journey: "puri",
    journeyLabel: "Puri",
    objectPosition: "center",
  },
  {
    id: "moments-5",
    seed: "moments-5",
    src: "/homepage/moments-5.webp",
    alt: "Travellers exploring Puri",
    caption: "Dolpo & Western Nepal",
    location: "Puri, Odisha",
    journey: "puri",
    journeyLabel: "Puri",
    objectPosition: "center",
  },
  {
    id: "moments-6",
    seed: "moments-6",
    src: "/homepage/moments-6.webp",
    alt: "Group dining during the Puri journey",
    caption: "Dolpo & Western Nepal",
    location: "Puri, Odisha",
    journey: "puri",
    journeyLabel: "Puri",
    objectPosition: "center",
  },
];

export function getGalleryImages(journey: string = "all") {
  if (journey === "all") return galleryImages;
  return galleryImages.filter((image) => image.journey === journey);
}
