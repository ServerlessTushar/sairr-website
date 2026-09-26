import Image from "next/image";
import type { IncludedExcludedItem } from "@/components/puri/PuriIncluded";
import { puriIncluded, puriNotIncluded } from "@/data/puri";
import included1 from "@/public/destinations/flight.svg";
import included2 from "@/public/destinations/seaside-view.svg";
import included3 from "@/public/destinations/food.svg";
import included4 from "@/public/destinations/car.svg";
import included5 from "@/public/destinations/tickets.svg";
import included6 from "@/public/destinations/temple.svg";
import included7 from "@/public/destinations/profile.svg";

const includedImages = [
  included1,
  included2,
  included3,
  included4,
  included5,
  included6,
  included7
];

function itemIcon(src: (typeof includedImages)[number]) {
  return (
    <Image
      src={src}
      alt=""
      width={40}
      height={40}
      className="size-10 object-contain"
      aria-hidden
    />
  );
}

export const puriIncludedSectionData = {
  heading: "",
  para:
    "",
  included: puriIncluded.map(
    (item, index): IncludedExcludedItem => ({
      icon: itemIcon(includedImages[index]),
      text: item.text,
    }),
  ),
  excluded: puriNotIncluded.split(" · ").map(
    (text): IncludedExcludedItem => ({
      text: text.trim(),
    }),
  ),
};
