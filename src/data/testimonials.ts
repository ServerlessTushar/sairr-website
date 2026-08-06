export type Testimonial = {
  name: string;
  relation: string;
  quote: string;
  experience: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Priya Menon",
    relation: "Daughter, Chennai",
    quote:
      "I booked Puri for my parents' 40th anniversary. Sairr handled everything — from temple timings to their dietary needs. They came back glowing.",
    experience: "Puri",
  },
  {
    name: "Rajesh Iyer",
    relation: "Son, Bangalore",
    quote:
      "My father had never travelled without us. The Sairr coordinator made him feel so cared for that he's already asking about Munnar.",
    experience: "Munnar",
  },
  {
    name: "Anita Sharma",
    relation: "Planning for parents, Delhi",
    quote:
      "What sold me was the transparency. Every detail was on the website before I even called. No surprises, just a beautiful trip.",
    experience: "Varanasi",
  },
  {
    name: "Karthik & Meera",
    relation: "Couple, Hyderabad",
    quote:
      "We wanted a trip we could enjoy together without worrying about logistics. Sairr let us focus on each other, not the itinerary.",
    experience: "Coorg",
  },
];
