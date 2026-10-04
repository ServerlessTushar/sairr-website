import type { PuriFaqsProps } from "@/components/puri/PuriFaqs";
import type { Faq } from "@/data/faqs";

const puriFaqs: Faq[] = [
  {
    question: "What's included in the trip?",
    answer:
      "Return flights from your origin city, 4-star & above stays in Bhubaneswar and Puri, sea-facing accommodation in Puri, VIP darshan with a Pandit at the Jagannath Temple, local guides and entry tickets for all sightseeing, all meals at hotels or carefully curated restaurants, and door-to-door transfers in private AC vehicles. \nNot included: personal shopping, temple offerings, room service, liquor and the mini-bar.",
  },
  {
    question: "What's the pace of the trip like?",
    answer:
      "Unhurried, by design. This is a trip built for the way you travel after 50, not a race through a checklist. We keep it to no more than three activities a day, so there's always time to enjoy where you are, not just get through it.",
  },
  {
    question: "What's the darshan & sightseeing experience like?",
    answer: (
      <div className="space-y-3 text-sm leading-relaxed sm:text-[0.95rem] sm:leading-[1.7]">
        <p><strong>Darshan:</strong> At the Jagannath Temple, you skip the long queue and go straight in for VIP darshan, with a Pandit alongside you to explain the rituals, traditions and significance as you go. You'll also experience Mahaprasad and witness the evening flag change at the Nila Chakra.</p>
        <p><strong>Sightseeing:</strong> We don't believe sightseeing should mean arriving, taking a photo, and moving on. From Lingaraj Temple and the Udayagiri & Khandagiri Caves to the Konark Sun Temple, every major stop is guided, with local experts sharing the stories, history and significance behind each place.</p>
      </div>
    ),
  },
  {
    question: "What kind of stay can I expect in Bhubaneswar & Puri?",
    answer:
      "All our stays in Bhubaneswar and Puri are at 4-star & above properties. We thoughtfully curate 2–3 properties in each city, all vetted by our on-ground team for their food, service, room quality, location and overall experience. In Puri, all our curated properties are sea-facing, so you can enjoy the coast even when you're back at the hotel.\nWe book your stay based on availability around your travel dates, but whichever property you stay at, the standard remains the same.",
  },
  {
    question: "Is the Puri trip only for travellers over 50?",
    answer:
      "Puri group trips are designed for travellers over 50: people at a similar stage of life, moving at a similar pace. But we also run private trips, where a family or a group of friends, across ages, can travel together with the same standard of planning and care.",
  },
  {
    question: "What's the group size for the Puri trip?",
    answer:
      "Our scheduled Puri trips for travellers over 50 typically have 10–15 people. We keep our groups small enough to feel personal, without becoming a large tour group.\nFor private Puri trips, we typically recommend 10 or more travellers to deliver the same standard of experience and service. Smaller groups are welcome too. The experience doesn't change. Just get in touch and we'll work out what's best for you.",
  },
  {
    question: "Does Sairr only offer group Puri trips?",
    answer:
      "No. Our group Puri trips run on scheduled dates and durations for travellers over 50, with itineraries designed around what works best for them.\nWe also do private Puri trips, where a family or a group of friends, across ages, can travel together on dates and for as long as suits them.",
  },
  {
    question: "Can I travel solo to Puri with Sairr?",
    answer:
      "Yes. You'll have plenty of company along the way. You join as an individual, alongside others at a similar stage of life, all discovering a new place together. The people you meet can become just as much a part of the experience as the places you see. A Sairr host is with the group the whole way, coordinating the trip, so you're never really on your own, even though you started that way.",
  },
  {
    question: "Can I customise the Puri trip?",
    answer:
      "Yes, if you're travelling privately with friends or family. We can tailor the trip around your dates, interests and preferred duration, while keeping the same standard of planning and care.\nWe usually recommend adding a few days to one of our existing itineraries rather than cutting it down, because they're built around the places and experiences we believe are worth doing when you're there. But tailored doesn't mean we'll say yes to everything, if we don't think something adds real value, we'll tell you. \nOur group trips to Puri aren't individually tailored; they're thoughtfully designed around the right pace and experiences for travellers over 50.",
  },
  {
    question: "What happens after I submit the form?",
    answer:
      "One of our travel expert will personally reach out to you, to confirm availability, answer your questions, and help you plan the next steps.",
  },
  {
    question: "What is the payment & cancellation policy?",
    answer: (
      <div className="space-y-3 text-sm leading-relaxed sm:text-[0.95rem] sm:leading-[1.7]">
        <h4 className="font-heading text-sm font-semibold text-charcoal sm:text-base">Payment Policy</h4>
        <p>Secure your spot at no cost and pay only once the trip is confirmed. Once your departure meets the minimum group size and is confirmed to run, we collect a 50% advance to secure your flights, stay, transport and other arrangements. We'll keep you updated on your departure's status until then.</p>
        <p>The remaining 50% is due 21 days before departure. If you book within 21 days of departure, full payment is required upfront.</p>
        <p>Please note: If the balance payment is not received by the due date, the booking will be treated as a cancellation as of that date, and the cancellation charges applicable at that time will apply.</p>
        <h4 className="font-heading text-sm font-semibold text-charcoal sm:text-base border-t border-charcoal/10 pt-3">Cancellation Policy</h4>
        <ul className="list-disc space-y-1.5 pl-5 marker:text-charcoal/60">
          <li>30 days or more before departure: Full refund, minus any applicable flight cancellation charges.</li>
          <li>15–29 days before departure: 50% of the trip cost is retained as a cancellation fee.</li>
          <li>8–14 days before departure: 75% of the trip cost is retained as a cancellation fee.</li>
          <li>7 days or less before departure: The trip cost is non-refundable.</li>
        </ul>
        {/* <p>Please note: If a departure doesn't meet the minimum group size and can't be confirmed, you won't be charged anything, and you're welcome to choose another departure for the same trip.</p> */}
      </div>
    ),
  },
];

export const puriFaqsSectionData: PuriFaqsProps = {
  heading: "FAQs - Frequently Asked Questions ",
  faqData: puriFaqs,
};
