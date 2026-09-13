import Image from "next/image";
import type { IncludedExcludedItem } from "@/components/puri/PuriIncluded";
import { puriIncluded, puriNotIncluded } from "@/data/puri";
import included1 from "@/public/experience/included-1.webp";
import included2 from "@/public/experience/included-2.webp";
import included3 from "@/public/experience/included-3.webp";
import included4 from "@/public/experience/included-4.webp";
import included5 from "@/public/experience/included-5.webp";
import included6 from "@/public/experience/included-6.webp";
import notIncludedIcon from "@/public/experience/not-included.webp";

const includedImages = [
  included1,
  included2,
  included3,
  included4,
  included5,
  included6,
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

function excludedItemIcon() {
  return (
    <Image
      src={notIncludedIcon}
      alt=""
      width={40}
      height={40}
      className="size-10 object-contain"
      aria-hidden
    />
  );
}

export const puriIncludedSectionData = {
  heading: "What's Taken Care Of",
  para:
    "Every stay, every transfer, every day's pace — chosen with care, not left to chance.",
  included: puriIncluded.map(
    (item, index): IncludedExcludedItem => ({
      icon: itemIcon(includedImages[index]),
      text: item.text,
    }),
  ),
  excluded: puriNotIncluded.split(" · ").map(
    (text): IncludedExcludedItem => ({
      icon: excludedItemIcon(),
      text: text.trim(),
    }),
  ),
};
