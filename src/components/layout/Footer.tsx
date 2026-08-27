import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import {
  exploreLinks,
  legalLinks,
  siteConfig,
  whatsappHref,
} from "@/data/site";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

const headingClassName =
  "mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-gold";

const linkClassName =
  "inline-flex items-center gap-2.5 text-xs transition-colors hover:text-charcoal";

const connectLinks = [
  {
    href: `mailto:${siteConfig.email}`,
    label: siteConfig.email,
    icon: Mail,
  },
  {
    href: `tel:${siteConfig.phone}`,
    label: siteConfig.phone,
    icon: Phone,
  },
  {
    href: whatsappHref(),
    label: "WhatsApp",
    icon: WhatsAppIcon,
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
    <footer className="border-t border-charcoal/10 bg-mist text-slate">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div>
            <p className={headingClassName}>Sairr</p>
            <p className="max-w-xs text-xs leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h4 className={headingClassName}>Explore</h4>
            <ul className="space-y-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className={headingClassName}>Connect</h4>
            <ul className="space-y-2.5">
              {connectLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      {...("external" in link && link.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className={linkClassName}
                    >
                      <Icon className="size-3.5 shrink-0 text-brand" />
                      <span>{link.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h4 className={headingClassName}>Legal</h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClassName}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-charcoal/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/about#founder"
            className="text-xs text-brand transition-colors hover:text-forest"
          >
            A note from Tanmay, founder →
          </Link>
          <p className="text-[11px] text-slate/80">
            © 2026 {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
