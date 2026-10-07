import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { siteConfig, whatsappHref } from "@/data/site";
import WhatsAppIcon from "@/public/whatsapp.svg";
import InstagramIcon from "@/public/insta.svg";
import LinkedInIcon from "@/public/linkedin.svg";

const CORAL = "#EC575E";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/#destinations", label: "Destinations" },
  { href: "/why-sairr", label: "Why Sairr" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

const bottomLegalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-and-conditions", label: "Terms and Conditions" },
] as const;

const socialLinks = [
  {
    href: whatsappHref(),
    label: "WhatsApp",
    icon: WhatsAppIcon,
    external: true,
  },
  {
    href: siteConfig.social.instagram,
    label: "Instagram",
    icon: InstagramIcon,
    external: true,
  },
  {
    href: siteConfig.social.linkedin,
    label: "LinkedIn",
    icon: LinkedInIcon,
    external: true,
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-mist text-[#5d5d5d]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="max-w-sm">
            <Link href="/" className="inline-block">
              <Image
                src="/sairr-logo.webp"
                alt={siteConfig.name}
                width={130.4}
                height={41.7}
                className="h-[20.85px] w-[65.2px] md:h-[33.36px] md:w-[104.32px]"
              />
            </Link>
            <p className="mt-1 text-sm md:text-[19.4px] leading-relaxed text-[#5D5D5D]">
              With you, wherever you go next.
            </p>

            <div className="mt-5 flex items-center gap-2.5">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <Image src={Icon} alt="" width={18} height={18} className="size-6" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="flex gap-16 sm:gap-20 lg:gap-24">
            <div>
              <div className="text-sm font-semibold text-charcoal">Explore</div>
              <ul className="mt-4 space-y-3">
                {exploreLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#5d5d5d] transition-colors hover:text-charcoal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-sm font-semibold text-charcoal">Connect</div>
              <ul className="mt-4 space-y-3">
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm text-[#5d5d5d] transition-colors hover:text-charcoal"
                  >
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="text-sm text-[#5d5d5d] transition-colors hover:text-charcoal"
                  >
                    {siteConfig.phone}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Link
              href="/about#founder"
              className="mt-8 inline-flex items-center gap-1 text-sm md:text-lg font-[400] text-brand transition-colors hover:text-[#0E5E6F]"
            >
              A note from founder
              <ArrowRight className="size-4" />
            </Link>

        <div
          className="mt-2 border-t pt-4"
          style={{ borderColor: CORAL }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div>
            <p className="text-xs text-[#5d5d5d] mb-1">
              © 2026 {siteConfig.name}. All rights reserved.
            </p>
            <p className="text-xs text-[#5d5d5d] italic">
              Meenadeep Experiences Pvt. Ltd.
            </p>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {bottomLegalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-[#5d5d5d] transition-colors hover:text-charcoal"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
