import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock3 } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { phoneHref, siteConfig, whatsappHref } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Thank You — Sairr",
  description:
    "Thank you for reaching out to Sairr. Our travel experts will be in touch with you soon.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <main className="min-h-dvh bg-[#FDFBF2]">
      <div className="mx-auto grid min-h-dvh max-w-6xl grid-cols-1 lg:grid-cols-2">

        {/* Left — teal brand panel */}
        <div className="relative flex flex-col items-start justify-center overflow-hidden bg-[#0E5E6F] px-8 py-16 sm:px-12 lg:px-16 lg:py-24">
          <FadeIn>
            <div className="relative mt-6 inline-block">
              <h1 className="font-heading text-4xl font-semibold leading-tight text-[#FDFBF2] sm:text-5xl">
                Thank you for<br />reaching out to Sairr.
              </h1>
              <Image
                src="/destinations/gold-bird-pair.webp"
                alt=""
                width={100}
                height={75}
                className="pointer-events-none absolute -top-8 -right-10 h-auto w-20 opacity-80"
                aria-hidden
              />
            </div>

            {/* Gold divider */}
            <div className="mt-6 h-px w-14 bg-[#C8A867]" aria-hidden />

            <p className="mt-6 text-base leading-relaxed text-[#FDFBF2]/75 sm:text-lg">
              We&apos;ve got your details. One of our travel experts will be in touch with you soon.
            </p>

            {/* Availability badge */}
            <div className="mt-8 flex items-start gap-3 rounded-lg border border-[#FDFBF2]/10 bg-[#FDFBF2]/5 px-4 py-4">
              <Clock3 className="mt-0.5 size-4 shrink-0 text-[#C8A867]" aria-hidden />
              <p className="text-sm leading-relaxed text-[#FDFBF2]/70">
                Our experts are available{" "}
                <span className="font-medium text-[#FDFBF2]">10 AM – 8 PM</span>,
                Monday to Sunday.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right — cream action panel */}
        <div className="flex flex-col items-start justify-center px-8 py-16 sm:px-12 lg:px-16 lg:py-24">
          <FadeIn>
            <p className="font-heading text-2xl font-semibold text-[#0E5E6F] sm:text-3xl">
              Want to connect sooner?
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              {/* Call button */}
              <a
                href={phoneHref()}
                className="inline-flex h-12 items-center justify-center gap-2 rounded bg-[#EC575E] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#D04A52] sm:min-w-40"
              >
                <svg className="size-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.62 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.8a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.73 16z" />
                </svg>
                Call Us
              </a>

              {/* WhatsApp button */}
              <a
                href={whatsappHref("Hi, I just submitted an enquiry and would like to know more.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded border border-[#0E5E6F]/20 bg-white px-6 text-sm font-semibold text-[#0E5E6F] transition-colors hover:bg-[#0E5E6F]/5 sm:min-w-40"
              >
                <Image
                  src="/homepage/whatsapp.png"
                  alt=""
                  width={18}
                  height={18}
                  className="size-[18px]"
                  aria-hidden
                />
                WhatsApp
              </a>
            </div>

            {/* Divider */}
            <div className="mt-10 h-px w-full bg-charcoal/10" aria-hidden />

            <Link
              href="/"
              className="mt-10 inline-flex items-center gap-1.5 text-sm font-medium text-[#0E5E6F] underline-offset-4 hover:underline"
            >
              <ArrowLeft className="size-3.5" aria-hidden />
              Back to home
            </Link>
          </FadeIn>
        </div>

      </div>
    </main>
  );
}
