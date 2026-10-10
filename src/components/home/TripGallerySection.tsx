"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/shared/FadeIn";
import { TextReveal } from "@/components/shared/TextReveal";
import { TripGalleryGrid } from "@/components/home/TripGalleryGrid";
import type { StaticImageData } from "next/image";
import type { GalleryImage } from "@/data/gallery";
import goldenBirdsIcon from "@/public/homepage/golden-birds.png";

export type TripGallerySectionProps = {
  heading: string;
  para: string;
  images: GalleryImage[];
  variant?: "home" | "destination";
  showBird?: boolean;
  birdImage?: StaticImageData | string;
};

export function TripGallerySection({
  heading,
  para,
  images,
  variant = "home",
  showBird = true,
  birdImage,
}: TripGallerySectionProps) {
  const isDestination = variant === "destination";
  const birdSource =
    birdImage ??
    (isDestination ? "/destinations/white-bird-pair.svg" : goldenBirdsIcon);

  return (
    <section
      id="gallery"
      className={isDestination ? "bg-[#E9DFC8]" : "bg-[#FDFBF2]"}
    >
      <div
        className={
          isDestination
            ? "mx-auto max-w-7xl px-4 pt-14 pb-14 sm:px-6 sm:pt-16 lg:px-8 lg:pt-18 lg:pb-16"
            : "mx-auto max-w-7xl px-4 py-1 pb-14 sm:px-6 lg:px-8 lg:pt-0 lg:pb-24"
        }
      >
        <FadeIn>
          <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-10 lg:px-12">
            {showBird ? (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.55 }}
                className="pointer-events-none absolute top-2 right-0 translate-x-2 sm:-top-4 sm:translate-x-4 md:translate-x-8 lg:-translate-x-8"
                aria-hidden
              >
                <Image
                  src={birdSource}
                  alt=""
                  width={120}
                  height={90}
                  className="h-auto w-16 sm:w-20 md:w-24"
                />
              </motion.div>
            ) : null}

            <TextReveal
              as="h2"
              text={heading}
              className="font-heading text-3xl font-semibold tracking-tight text-black sm:text-4xl"
            />
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="mt-3 text-base leading-relaxed text-[#5d5d5d] sm:text-xl"
            >
              {para}
            </motion.p>
          </div>
        </FadeIn>

        <TripGalleryGrid images={images} className="mt-8 lg:mt-10" />
      </div>
    </section>
  );
}
