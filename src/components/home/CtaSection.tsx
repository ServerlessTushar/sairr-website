import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappHref } from "@/data/site";
import { FadeIn } from "@/components/shared/FadeIn";
import { ButtonLink } from "@/components/shared/ButtonLink";

const contactLinks = [
  {
    icon: Phone,
    label: "Call",
    href: `tel:${siteConfig.phone}`,
    value: siteConfig.phone,
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    value: siteConfig.email,
  },
] as const;

export function CtaSection() {
  return (
    <section className="border-t border-charcoal/10 bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <FadeIn>
          <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-card shadow-sm">
            <div className="grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
              <div className="px-6 py-8 sm:px-8 sm:py-10 lg:py-12">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
                  Start a conversation
                </p>
                <h2 className="mt-4 font-heading text-3xl font-semibold leading-[1.2] tracking-tight text-charcoal sm:text-4xl">
                  Where have you been meaning to go?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-relaxed text-slate">
                  Tell us — even if you&apos;re not sure yet. Share who
                  you&apos;re planning for and we&apos;ll help shape the
                  journey.
                </p>
                <Link
                  href="/experiences"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-brand transition-colors hover:text-forest"
                >
                  Or explore our journeys
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="border-t border-charcoal/10 bg-brand/5 px-6 py-8 sm:px-8 sm:py-10 lg:border-t-0 lg:border-l lg:py-12">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <p className="mt-4 text-sm font-medium text-charcoal">
                  Fastest way to reach us
                </p>
                <p className="mt-1 text-sm text-slate">
                  A quick WhatsApp message is all it takes to get started.
                </p>
                <ButtonLink
                  href={whatsappHref(
                    "Hi Sairr — I'd like to talk about a journey.",
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  className="mt-6 h-11 w-full rounded-lg bg-brand px-6 font-sans text-sm font-medium text-white hover:bg-forest sm:w-auto"
                >
                  Talk to us on WhatsApp
                </ButtonLink>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-6">
                  {contactLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="inline-flex items-center gap-2 text-sm text-slate transition-colors hover:text-brand"
                    >
                      <link.icon className="h-4 w-4 shrink-0" />
                      <span>{link.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
