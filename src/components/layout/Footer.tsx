import Link from "next/link";
import {
  exploreLinks,
  legalLinks,
  siteConfig,
  whatsappHref,
} from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 bg-mist text-slate">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link
              href="/"
              className="font-heading text-lg font-semibold text-brand"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-xs text-xs leading-relaxed">
              {siteConfig.tagline}
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              Explore
            </h4>
            <ul className="space-y-2">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs transition-colors hover:text-charcoal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              Connect
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-charcoal"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-charcoal"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={whatsappHref()} className="hover:text-charcoal">
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.instagram}
                  className="hover:text-charcoal"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  className="hover:text-charcoal"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
              Legal
            </h4>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-xs transition-colors hover:text-charcoal"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-charcoal/10 pt-6">
          {/* <Link
            href="/about#founder"
            className="text-xs text-brand transition-colors hover:text-brand-dark"
          >
            [ A note from Tanmay, founder → ]
          </Link> */}
          {/* <div className="text-xs text-brand transition-colors hover:text-brand-dark">
            A note from Tanmay, founder →
          </div> */}
        </div>

        <p className="mt-6 text-[11px] text-slate/80">
          © 2026 {siteConfig.name} · {siteConfig.legalName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
