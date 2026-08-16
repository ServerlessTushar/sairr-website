import { ArrowUpRight, Clock3, Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappHref } from "@/data/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { FadeIn } from "@/components/shared/FadeIn";
import { createMetadata } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = createMetadata({
  title: "Talk to Sairr — Plan a Journey",
  description:
    "Get in touch with Sairr to plan a thoughtful travel experience for your loved ones. WhatsApp, call, or send an enquiry.",
  path: "/contact",
});

const contactMethods = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: whatsappHref("Hi Sairr — I'd like to talk about a journey."),
    description: "Fastest way to reach us",
    featured: true,
    external: true,
  },
  {
    icon: Phone,
    label: "Call",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
    description: "Speak with our team",
    featured: false,
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: "For detailed enquiries",
    featured: false,
    external: false,
  },
] as const;

export default function ContactPage() {
  return (
    <section className="border-t border-charcoal/10 bg-sand">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gold">
              Contact
            </p>
            <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
              Talk to Sairr
            </h1>
            <div className="mt-6 h-px w-16 bg-gold" aria-hidden />
            <p className="mt-6 text-lg leading-relaxed text-slate">
              Whether you know exactly where they want to go or need help
              choosing, we&apos;re here to listen.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-start">
          <FadeIn className="lg:sticky lg:top-24" delay={0.1}>
            <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-card shadow-sm">
              <div className="border-b border-charcoal/10 bg-brand/5 px-6 py-5 sm:px-8">
                <p className="text-sm font-medium text-charcoal">
                  Prefer to reach out directly?
                </p>
                <p className="mt-1 text-sm text-slate">
                  Choose whichever channel feels easiest.
                </p>
              </div>

              <div className="space-y-3 p-4 sm:p-5">
                {contactMethods.map((method) => (
                  <a
                    key={method.label}
                    href={method.href}
                    target={method.external ? "_blank" : undefined}
                    rel={
                      method.external ? "noopener noreferrer" : undefined
                    }
                    className={cn(
                      "group flex items-start gap-4 rounded-xl border p-4 transition-all duration-300",
                      method.featured
                        ? "border-brand/20 bg-brand/5 hover:border-brand/35 hover:bg-brand/10"
                        : "border-border/60 bg-mist/40 hover:border-brand/25 hover:bg-white",
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors",
                        method.featured
                          ? "bg-brand text-white"
                          : "bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white",
                      )}
                    >
                      <method.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate">
                          {method.label}
                        </p>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-slate/50 transition-colors group-hover:text-brand" />
                      </div>
                      <p className="mt-1 font-medium text-charcoal">
                        {method.value}
                      </p>
                      <p className="mt-1 text-sm text-slate">
                        {method.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-3 border-t border-charcoal/10 px-6 py-4 text-sm text-slate sm:px-8">
                <Clock3 className="h-4 w-4 shrink-0 text-gold" />
                <span>We typically respond within 24 hours.</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-charcoal/10 bg-card shadow-sm">
              <div className="border-b border-charcoal/10 px-6 py-6 sm:px-8 sm:py-8">
                <p className="text-sm font-medium uppercase tracking-[0.18em] text-gold">
                  Enquiry form
                </p>
                <h2 className="mt-3 font-heading text-2xl font-semibold text-charcoal sm:text-3xl">
                  Send an enquiry
                </h2>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate">
                  Share a few details and we&apos;ll help shape the journey —
                  even if you&apos;re still deciding on the destination.
                </p>
              </div>

              <div className="bg-mist/30 px-6 py-6 sm:px-8 sm:py-8">
                <ContactForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
