import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { ContactUsForm } from "@/components/forms/ContactUsForm";
import { FadeIn } from "@/components/shared/FadeIn";
import { createMetadata } from "@/lib/seo";
import { siteConfig, phoneHref, whatsappHref } from "@/data/site";

export const metadata = createMetadata({
  title: "Contact Us — Sairr",
  description:
    "Get in touch with Sairr. Ask us anything about our journeys, partnerships, or anything else.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="min-h-dvh bg-[#FDFBF2]">
      <div className="mx-auto grid min-h-dvh max-w-6xl grid-cols-1 lg:grid-cols-2">

        {/* Left — teal brand panel */}
        <div className="relative flex flex-col items-start justify-center overflow-hidden bg-[#0E5E6F] px-8 py-16 sm:px-12 lg:px-16 lg:py-24">
          <FadeIn>
            <div className="relative inline-block">
              <h1 className="font-heading text-4xl font-semibold leading-tight text-[#FDFBF2] sm:text-5xl">
                Get in touch<br />with Sairr.
              </h1>
              <Image
                src="/destinations/gold-bird-pair.webp"
                alt=""
                width={100}
                height={75}
                className="pointer-events-none absolute -top-8 -right-24 h-auto w-20 opacity-80"
                aria-hidden
              />
            </div>

            {/* Gold divider */}
            <div className="mt-6 h-px w-14 bg-[#C8A867]" aria-hidden />

            <p className="mt-6 text-base leading-relaxed text-[#FDFBF2]/75 sm:text-lg">
              Ask us anything — about our journeys, partnerships, careers, or
              anything else on your mind.
            </p>

            {/* Contact details */}
            <div className="mt-10 space-y-4">
              <a
                href={phoneHref()}
                className="flex items-center gap-3 text-[#FDFBF2]/80 transition-colors hover:text-[#FDFBF2]"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#FDFBF2]/10">
                  <Phone className="size-4" aria-hidden />
                </span>
                <span className="text-sm">{siteConfig.phone}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-[#FDFBF2]/80 transition-colors hover:text-[#FDFBF2]"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#FDFBF2]/10">
                  <Mail className="size-4" aria-hidden />
                </span>
                <span className="text-sm">{siteConfig.email}</span>
              </a>

              <a
                href={whatsappHref("Hi, I'd like to get in touch with Sairr.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#FDFBF2]/80 transition-colors hover:text-[#FDFBF2]"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#FDFBF2]/10">
                  <Image
                    src="/homepage/whatsapp.png"
                    alt=""
                    width={16}
                    height={16}
                    className="size-4 brightness-[10]"
                    aria-hidden
                  />
                </span>
                <span className="text-sm">Chat on WhatsApp</span>
              </a>
            </div>

            {/* Availability note */}
            <p className="mt-10 text-xs leading-relaxed text-[#FDFBF2]/50">
              Our team is available{" "}
              <span className="text-[#FDFBF2]/75">10 AM – 8 PM</span>, Monday
              to Sunday.
            </p>
          </FadeIn>
        </div>

        {/* Right — form panel */}
        <div className="flex flex-col justify-center px-8 py-16 sm:px-12 lg:px-16 lg:py-24">
          <FadeIn>
            <p className="font-heading text-2xl font-semibold text-[#0E5E6F] sm:text-3xl">
              Send us a message
            </p>
            <p className="mt-3 text-sm leading-relaxed text-slate sm:text-base">
              Fill in the form and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="mt-8">
              <ContactUsForm />
            </div>
          </FadeIn>
        </div>

      </div>
    </main>
  );
}
