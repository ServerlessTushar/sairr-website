import Image from "next/image";
import { whySairrFaqs } from "@/data/faqs";
import { CtaSection } from "@/components/home/CtaSection";
import { PuriFaqs } from "@/components/puri/PuriFaqs";
import { WhySairrIntroSection } from "@/components/why-sairr/WhySairrIntroSection";
import { WhySairrTravelSection } from "@/components/why-sairr/WhySairrTravelSection";
import { WhySairrCareSection } from "@/components/why-sairr/WhySairrCareSection";
import { createMetadata } from "@/lib/seo";

const introSection = {
  title: "The desire to explore doesn't change.\nWhat you want from travel does.",
  description:
    "Sairr designs travel for life after 50, around the person taking it: your pace & preferences, the experiences you want, and the ones you'd rather skip. Every detail is worked out, from the first call to the flight back home.",
  highlight: "So there's less to plan, and more to actually be in.",
  separatorIcon: "/why-sairr/1-bird.svg",
};

const travelSection = {
  image: {
    src: "/why-sairr/TropicalBeachStroll.webp",
    alt: "Friends strolling along a tropical beach",
    width: 1806,
    height: 1192,
  },
  title:
    "Most people don't stop wanting to travel. What changes is what it takes to say yes.",
  description:
    "Plan it yourself, and you're juggling flights, stays, transfers, every detail. Join a conventional group tour, and you're keeping pace with people at a different stage of life. Rely on family, and you're waiting for everyone's calendars to align. Book through a traditional operator, and you're wondering who has your back once the trip begins.",
  conclusionTitle: "There should be another way.",
  conclusion:
    "Your timeline. Your kind of company. Someone on-ground who has your back, from start to finish.\nThat's the gap Sairr exists to fill.",
};

const careSection = {
  title: "Thought through before you leave. Taken care of until you're home.",
  paragraphs: [
    "Before a trip is ever opened for booking, every route, stay, transfer and itinerary is extensively vetted on the ground for pace, hygiene, food, amenities, location, timing, all of it. Each trip is built as a full experience, not assembled after people sign up. We plan for what's right, not what's easiest to sell.",
    "We'd rather go deep on a few hand-picked places than wide across many. Every stay is 4-star and up. Transport that's well-maintained, never packed to the last seat. Your dietary needs, met all the way through. And a trained Sairr host with you, right there on the ground, so you're never the one figuring it out.",
    "And that's not all. Your host will capture the moments too, so you can just be in them.",
    "While you're on the journey with us, your family gets daily updates about your whereabouts and a human point of contact at Sairr, in case they need to reach out to us.",
  ],
  highlight: "That's how we turn the desire to travel into the confidence to go.",
  decorativeIcon: "/why-sairr/2-birds.svg",
  images: [
    {
      src: "/why-sairr/takencare-1.webp",
      alt: "Sairr travellers arriving at their stay",
      width: 765,
      height: 938,
    },
    {
      src: "/why-sairr/takencare-2.webp",
      alt: "Fresh meal prepared for Sairr travellers",
      width: 669,
      height: 822,
    },
    {
      src: "/why-sairr/takencare-3.webp",
      alt: "Sairr group enjoying time together",
      width: 1199,
      height: 715,
    },
  ] as const,
};

const faqSection = {
  heading: "FAQS - Frequently Asked Questions",
  faqData: whySairrFaqs,
};

const ctaContent = {
  title: "There should always be another journey to look forward to.",
  description:
    "Don't let planning be the reason you say no. You just pack your bags. We'll handle the rest.",
  callbackLabel: "Get a Callback",
  whatsappLabel: "WhatsApp us",
};

export const metadata = createMetadata({
  title: "Why Sairr — How We Plan Thoughtful Travel",
  description:
    "Discover how Sairr combines safety, comfort, and family peace of mind to create travel experiences your loved ones will cherish.",
  path: "/why-sairr",
});

export default function WhySairrPage() {
  return (
    <>
      <section
        data-header-hero
        className="relative overflow-hidden"
      >
        <Image
          src="/why-sairr/HeroSectionImg.webp"
          alt="Snow-covered mountain village in a forested valley"
          width={4536}
          height={1799}
          priority
          sizes="100vw"
          className="h-auto w-full"
        />
      </section>

      <WhySairrIntroSection {...introSection} />
      <WhySairrTravelSection {...travelSection} />
      <WhySairrCareSection {...careSection} />

      <PuriFaqs {...faqSection} />

      <CtaSection
        backgroundImage="/why-sairr/ctaSectionBg.webp"
        content={ctaContent}
      />
    </>
  );
}
