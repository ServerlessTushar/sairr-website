import type { ReactNode } from "react";

export type Faq = {
  question: string;
  answer: string | ReactNode;
};

export const homeFaqs: Faq[] = [
  {
    question: "Who is Sairr for?",
    answer:
      "Sairr is for anyone who wants to gift meaningful travel to parents, grandparents, or loved ones who deserve comfort, care, and a thoughtfully planned journey.",
  },
  {
    question: "Do you handle medical needs?",
    answer:
      "Yes. We plan around mobility requirements, dietary restrictions, and medication schedules. Share your needs during enquiry and we'll design accordingly.",
  },
  {
    question: "Can family members join the trip?",
    answer:
      "Absolutely. Many of our experiences work beautifully for multi-generational families. Let us know who's travelling and we'll tailor the pace.",
  },
  {
    question: "How do I book?",
    answer:
      "Start with an enquiry via our contact form or WhatsApp. We'll discuss your needs, share a detailed plan, and confirm once you're comfortable.",
  },
];

export const experienceFaqs: Faq[] = [
  {
    question: "What's included in the price?",
    answer:
      "Each experience page lists exactly what's included — accommodation, transfers, meals, and coordinator support. No hidden costs.",
  },
  {
    question: "Can the itinerary be customised?",
    answer:
      "Yes. The published itinerary is our recommended plan, but we adjust pace, activities, and accommodation based on your traveller's needs.",
  },
  {
    question: "What if something goes wrong during the trip?",
    answer:
      "Every trip has a dedicated on-ground coordinator available 24/7. We also maintain emergency contacts with local hospitals and your family.",
  },
];

export const whySairrFaqs: Faq[] = [
  {
    question: "How is Sairr different from a travel agent or traditional tour operator?",
    answer:
      "A traditional tour operator sells the same trip to everyone. A travel agent books what already exists elsewhere.\nSairr designs and operates trips specifically for travellers over 50, and the families who care how it goes. Every itinerary, stay and transfer is checked against what matters at this stage of life. Every trip page shows exactly what's included before you commit. No surprises.\nWe have a simple test: if we wouldn't send our own family on it, we won't recommend it to you.\nWe're not here to sell you a trip. We're here to give you the confidence to take one.",
  },
  {
    question: "Is Sairr only for travellers over 50?",
    answer:
      "Sairr's group trips are currently designed for travellers over 50, people at a similar life stage, moving at a similar pace. But we also run private trips, where a family or a group of friends, across ages, can travel together, on the same standard of planning and care.",
  },
  {
    question: "Does Sairr only offer group trips?",
    answer:
      "No. Group trips are one way to travel with Sairr. Our group trips for travellers over 50 run on scheduled dates and durations, with itineraries designed around what works best for them.\nWe also do private trips, where a family or a group of friends, across ages, can travel together on dates and duration that suit them.",
  },
  {
    question: "What's a typical group size on a Sairr trip?",
    answer:
      "Our scheduled group trips for travellers over 50 typically have 10 to 15 people. We keep our groups small enough to feel personal, without becoming a large tour group.\nFor private trips, we typically recommend a group of 10 or more to deliver the same standard of experience and service. Smaller groups are welcome too, the experience doesn't change. Just get in touch and we'll work out what's best for you.",
  },
  {
    question: "Are Sairr trips fixed, or can they be tailored?",
    answer:
      "Yes, for private trips. Group trips aren't individually tailored; they're designed as one complete itinerary for the whole group, built around what's right for a traveller at this stage and the handpicked experiences you shouldn't skip. A place can be worth seeing and still not be worth the extra hours it costs, so we leave some things out on purpose, to keep the trip worthwhile without making it tiring.\nPrivate trips can be completely tailored around your dates, interests and trip duration. We usually recommend adding a few days to one of our existing itineraries rather than cutting it down, because they're built around the places and experiences we believe are worth doing when you're there. But tailored doesn't mean we'll say yes to everything, if we don't think something adds real value, we'll tell you.",
  },
  {
    question: "Can I travel solo with Sairr?",
    answer:
      "Yes, and it might be one of the best ways to experience Sairr. You join as an individual, alongside others at a similar stage of life, all discovering a new place together. The people you meet can become just as much a part of the experience as the places you see. A Sairr host is with the group the whole way, coordinating the trip, so you're never really on your own, even though you started that way.",
  },
  {
    question: "What is it like travelling with a group of people I don't know?",
    answer:
      "You may not know anyone when the trip begins. But shared experiences, meals and a few good conversations have a way of bringing people closer. Strangers often become companions, and sometimes, people you'd love to travel with again.\nMost people on a Sairr group trip start out as strangers, and that's fine, because the group isn't put together randomly. Everyone's at a similar stage of life, moving at a similar pace, on a trip designed around them. A Sairr host is there with the group, holding things together, not just fellow travellers figuring it out on their own.",
  },
  {
    question: "How does Sairr choose which destinations to run?",
    answer:
      "We add destinations carefully, not quickly. Puri was the first, and every destination since goes through the same standard, the same vetting, before it's ever opened for booking. If there's somewhere you'd love to go that we haven't launched yet, tell us, we're always listening, and it might become our next one.\nWhat's live right now is listed on our destinations page.",
  },
  {
    question: "How does Sairr determine its pricing?",
    answer:
      "We don't start with a price and build a trip around it. We design the experience first, then work backwards to what it costs.\nSometimes that means a flight instead of a longer train or taxi ride that leaves you needing a day to recover. A better stay over a cheaper one. Food we trust. A transfer we won't cut corners on. The price covers all of it, door to door, nothing left to figure out or pay for later.\nWe'd rather a trip cost more and be right, than cost less and fall short somewhere you'd notice.\nIf you're comparing us on price alone, fair enough, we're not built to win that comparison. We're built to get the experience right, the price reflects what that takes. The difference between a good trip and a great one is usually in the details you don't think about until you're there.",
  },
];
