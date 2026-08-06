export const siteConfig = {
  name: "Sairr",
  tagline: "Thoughtful travel for the people you love",
  description:
    "Sairr curates comfortable, meaningful travel experiences for seniors and families — so you can gift journeys, not just trips.",
  url: "https://sairr.in",
  phone: "+91 98765 43210",
  email: "hello@sairr.in",
  whatsapp: "919876543210",
  address: "Chennai, India",
  social: {
    instagram: "https://instagram.com/sairr",
    linkedin: "https://linkedin.com/company/sairr",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/experiences", label: "Experiences" },
  { href: "/why-sairr", label: "Why Sairr" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Talk to us" },
] as const;
