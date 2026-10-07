export type Testimonial = {
  id: string;
  name: string;
  age: string;
  quote: string;
  destination: string;
  placeholder?: boolean;
  media?:
  | {
    type: "image";
    src: string;
    alt: string;
  }
  | {
    type: "video";
    src: string;
    poster?: string;
  };
};

/** Only real Puri footage belongs here. Placeholder until transcripts exist. */
export const testimonials: Testimonial[] = [
  {
    id: "puri-1",
    name: "Rajeshh Gogia",
    age: "age",
    quote: "Puri had been on my mind for years, but I wasn't sure how I'd manage the hotels, the temple visits, all of it. Sairr's meticulous planning and end-to-end handholding gave me the confidence to finally go.",
    destination: "Gurugram",
    placeholder: true,
    media: {
      type: "image",
      src: "/homepage/testimonial-1.webp",
      alt: "Traveller in Puri",
    },
  },
  {
    id: "puri-2",
    name: "Rajnish & Kavita Agrawal",
    age: "age",
    quote: "Our darshan at Jagannath ji was such a beautiful experience. Sairr had arranged VIP darshan, so we didn't have to stand in line for hours. Everything happened very easily and comfortably. It felt so special.",
    destination: "Delhi",
    placeholder: true,
    media: {
      type: "image",
      src: "/homepage/testimonial-2.webp",
      alt: "Traveller in Puri",
    },
  },
  {
    id: "puri-3",
    name: "Ravee & Vandana Dewan",
    age: "age",
    quote: "It was never like, 'We got you there, now you manage.' Sairr took care of every detail and every one of us like family. Wherever Sairr takes us next, we're going.",
    destination: "Gurugram",
    placeholder: true,
    media: {
      type: "image",
      src: "/homepage/testimonial-3.webp",
      alt: "Traveller in Puri",
    },
  },
  {
    id: "puri-4",
    name: "Deepak Ganju",
    age: "age",
    quote: "I don't like planning at all. Sairr picked us up from home, dropped us back home, and planned everything in between. What more could I ask for?",
    destination: "Gurugram",
    placeholder: true,
    media: {
      type: "image",
      src: "/homepage/testimonial-4.png",
      alt: "Traveller in Puri",
    },
  },
  {
    id: "puri-5",
    name: "Ravindra & Sarita Zalkey",
    age: "age",
    quote: "We met as strangers. But by the end of the trip, it felt like we'd known each other for years. We'd love to travel with Sairr again, with the same people.",
    destination: "Nagpur",
    placeholder: true,
    media: {
      type: "image",
      src: "/homepage/testimonial-5.webp",
      alt: "Traveller in Puri",
    },
  },
];
