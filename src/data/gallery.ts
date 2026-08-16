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
    id: "puri-coast",
    seed: "puri-gallery-coast",
    src: "/sairr-coming-soon.jpeg",
    alt: "Travellers enjoying the coast near Puri",
    caption: "Unhurried evenings by the Bay of Bengal",
    location: "Puri, Odisha",
    journey: "puri",
    journeyLabel: "Puri",
    layout: "large",
    objectPosition: "center 30%",
  },
  {
    id: "puri-temple",
    seed: "puri-gallery-temple",
    src: "/sairr-coming-soon.jpeg",
    alt: "Travellers near Jagannath Temple, Puri",
    caption: "Sacred moments, comfortably paced",
    location: "Jagannath Temple",
    journey: "puri",
    journeyLabel: "Puri",
    layout: "tall",
    objectPosition: "center 20%",
  },
  {
    id: "puri-group",
    seed: "puri-gallery-group",
    src: "/sairr-coming-soon.jpeg",
    alt: "Sairr travellers together in Puri",
    caption: "Small groups, familiar faces",
    location: "Puri, Odisha",
    journey: "puri",
    journeyLabel: "Puri",
    objectPosition: "center 40%",
  },
  {
    id: "puri-arrival",
    seed: "puri-gallery-arrival",
    src: "/sairr-coming-soon.jpeg",
    alt: "Travellers arriving for the Puri journey",
    caption: "From doorstep to destination — we handle the rest",
    location: "Puri, Odisha",
    journey: "puri",
    journeyLabel: "Puri",
    layout: "wide",
    objectPosition: "center 35%",
  },
  {
    id: "puri-meal",
    seed: "puri-gallery-meal",
    src: "/sairr-coming-soon.jpeg",
    alt: "Shared meal during the Puri journey",
    caption: "Good food, good company, no rush",
    location: "Puri, Odisha",
    journey: "puri",
    journeyLabel: "Puri",
    objectPosition: "center 50%",
  },
  {
    id: "tirupati-preview",
    seed: "tirupati-gallery-1",
    alt: "Tirupati temple hills at sunrise",
    caption: "Coming soon — Tirupati at a gentle pace",
    location: "Tirupati, Andhra Pradesh",
    journey: "tirupati",
    journeyLabel: "Tirupati",
    layout: "tall",
    aiPlaceholder: true,
  },
  {
    id: "kerala-preview",
    seed: "kerala-gallery-1",
    alt: "Kerala backwaters at golden hour",
    caption: "Coming soon — backwaters and coastal calm",
    location: "Kerala",
    journey: "kerala",
    journeyLabel: "Kerala",
    aiPlaceholder: true,
  },
  {
    id: "dubai-preview",
    seed: "dubai-gallery-1",
    alt: "Dubai skyline at dusk",
    caption: "Coming soon — international journeys with Sairr",
    location: "Dubai, UAE",
    journey: "dubai",
    journeyLabel: "Dubai",
    layout: "wide",
    aiPlaceholder: true,
  },
];

export function getGalleryImages(journey: string = "all") {
  if (journey === "all") return galleryImages;
  return galleryImages.filter((image) => image.journey === journey);
}
