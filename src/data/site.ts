export const siteConfig = {
  name: "Sairr",
  legalName: "Meenadeep Experiences Pvt Ltd",
  tagline: "More freedom to explore, less to worry about.",
  description:
    "Thoughtfully designed journeys for 50+ travellers. You show up. We handle the rest.",
  url: "https://sairr.in",
  phone: "+91 98765 43210",
  email: "tanmay@sairr.in",
  whatsapp: "919876543210",
  address: "Chennai, India",
  social: {
    instagram: "https://instagram.com/sairr",
    linkedin: "https://linkedin.com/company/sairr",
  },
} as const;

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/experiences", label: "Experiences" },
  { href: "/why-sairr", label: "Why Sairr" },
  { href: "/about", label: "About" },
] as const;

export const exploreLinks = [
  { href: "/experiences", label: "Experiences" },
  { href: "/why-sairr", label: "Why Sairr" },
  { href: "/about", label: "About Sairr" },
] as const;

export const legalLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms and Conditions" },
  { href: "/cancellation", label: "Cancellation and Refund Policy" },
] as const;
