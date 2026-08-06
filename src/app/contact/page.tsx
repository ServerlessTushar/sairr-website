import { Mail, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ContactForm } from "@/components/forms/ContactForm";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FadeIn } from "@/components/shared/FadeIn";
import { createMetadata } from "@/lib/seo";

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
    href: `https://wa.me/${siteConfig.whatsapp}`,
  },
  {
    icon: Phone,
    label: "Call",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
];

export default function ContactPage() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Contact"
            title="Talk to Sairr"
            description="Whether you know exactly where they want to go or need help choosing, we're here to listen."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <FadeIn className="lg:col-span-2" delay={0.1}>
            <div className="space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.label}
                  href={method.href}
                  target={method.label === "WhatsApp" ? "_blank" : undefined}
                  rel={
                    method.label === "WhatsApp" ? "noopener noreferrer" : undefined
                  }
                  className="flex items-center gap-4 rounded-xl border border-border/60 p-5 transition-all hover:-translate-y-0.5 hover:border-brand/30 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <method.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {method.label}
                    </p>
                    <p className="font-medium">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>

          <FadeIn className="lg:col-span-3" delay={0.2}>
            <div className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:p-8">
              <h2 className="font-heading text-xl font-semibold">
                Send an enquiry
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We typically respond within 24 hours.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
