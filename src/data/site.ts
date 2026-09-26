export const siteConfig = {
  name: "Sairr",
  legalName: "Meenadeep Experiences Pvt Ltd",
  tagline: "More freedom to explore, less to worry about.",
  description:
    "Thoughtfully designed journeys for 50+ travellers. You show up. We handle the rest.",
  url: "https://sairr.in",
  phone: "+91 99717 37186",
  email: "hello@sairr.in",
  whatsapp: "919971737186",
  address: "Gurgaon, India",
  social: {
    instagram: "https://www.instagram.com/sairr.in?igsh=Znk3cDZpbG4ydDdi",
    linkedin: "https://www.linkedin.com/company/sairr/about/?viewAsMember=true",
  },
} as const;

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#destinations", label: "Destinations" },
  { href: "/why-sairr", label: "Why Sairr" },
  { href: "/about", label: "About" },
] as const;

export const exploreLinks = [
  { href: "/#destinations", label: "Destinations" },
  { href: "/why-sairr", label: "Why Sairr" },
  { href: "/about", label: "About Sairr" },
] as const;

export const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
  { href: "/cancellation", label: "Cancellation and Refund Policy" },
] as const;
