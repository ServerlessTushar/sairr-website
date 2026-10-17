import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactUsForm } from "@/components/forms/ContactUsForm";
import { FadeIn } from "@/components/shared/FadeIn";
import { createMetadata } from "@/lib/seo";
import { SocialFollow } from "@/components/shared/SocialFollow";
import { phoneHref, siteConfig, whatsappHref } from "@/data/site";
import { cn } from "@/lib/utils";

const TEAL = "#0E5E6F";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=WeWork%2C+Platina+Tower%2C+Gurugram%2C+Haryana+122002";

export const metadata = createMetadata({
  title: "Contact Us — Sairr",
  description:
    "Get in touch with Sairr. Ask us anything about our journeys, partnerships, or anything else.",
  path: "/contact",
});

type ContactChannelProps = {
  href: string;
  title: string;
  subtitle: string;
  iconSrc: string;
  /** White-filled asset (e.g. WhatsApp); tinted teal on default icon bg, white on hover */
  whiteIcon?: boolean;
  external?: boolean;
};

function ContactChannel({
  href,
  title,
  subtitle,
  iconSrc,
  whiteIcon,
  external,
}: ContactChannelProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-center gap-4 rounded-xl border border-[#E8E8E8] bg-white px-4 py-4 transition-colors hover:bg-[#F8F7F7] sm:px-5"
    >
      <span
        className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[#E8EEF0] transition-colors group-hover:bg-[#0E5E6F]"
      >
        <Image
          src={iconSrc}
          alt=""
          width={28}
          height={28}
          aria-hidden
          className={cn(
            "transition-[filter]",
            whiteIcon
              ? "[filter:brightness(0)_saturate(100%)_invert(29%)_sepia(35%)_saturate(1288%)_hue-rotate(153deg)_brightness(93%)_contrast(92%)] group-hover:[filter:brightness(0)_invert(1)]"
              : "group-hover:brightness-0 group-hover:invert",
          )}
        />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-semibold text-[#1a1a1a]">{title}</span>
        <span className="mt-0.5 block text-sm text-[#5d5d5d]">{subtitle}</span>
      </span>
      <ArrowUpRight
        className="size-5 shrink-0 text-[#5d5d5d] opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden
      />
    </a>
  );
}

export default function ContactPage() {
  return (
    <main className="bg-[#FDFBF2]">
      {/* Hero */}
      <section
        data-header-hero
        className="relative flex min-h-[min(52vw,420px)] items-center justify-center overflow-hidden sm:min-h-[380px] lg:min-h-[420px]"
      >
        <Image
          src="/contact/contact-bg.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-fit object-center"
        />
        <div className="absolute inset-0 bg-[#4A4949]/40" aria-hidden />
        <div className="relative z-10 mx-auto px-4 py-20 text-center text-white sm:px-6 sm:py-24">
          <FadeIn>
            <h1 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.75rem] lg:text-[3.125rem]">
              Let&apos;s talk about your next journey
            </h1>
            <p className="mx-auto mt-1 text-base leading-relaxed text-white sm:text-lg md:text-2xl">
              Planning a trip, or just want to know more about Sairr? Write to
              us, call, or WhatsApp.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact card */}
      <div className="relative z-10 mx-auto max-w-6xl pb-12">
        <div
          className="-mt-16 overflow-hidden rounded-lg bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:-mt-20 sm:rounded-lg lg:-mt-[7.5rem]"
        >
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-stretch">
            {/* Form first on mobile */}
            <div
              className="order-1 flex flex-col px-6 py-6 sm:px-10 sm:py-6 lg:h-full"
              style={{ backgroundColor: TEAL }}
            >
              <FadeIn>
                <h2 className="font-heading text-2xl font-semibold text-white sm:text-[1.75rem]">
                  Get in touch
                </h2>
                <p className="mt-0 text-sm leading-relaxed text-white/85 sm:text-base">
                  Ask us anything about travelling with Sairr.
                </p>
                <div className="mt-6">
                  <ContactUsForm appearance="teal" />
                </div>
              </FadeIn>
            </div>

            {/* Direct contact */}
            <div className="order-2 flex flex-col bg-[#F5F0E1] px-6 py-6 sm:px-10 sm:py-6 lg:h-full">
              <FadeIn delay={0.1} className="flex flex-1 flex-col">
                <h2 className="font-heading text-2xl font-semibold text-[#1a1a1a] sm:text-[1.75rem]">
                  Prefer to reach out directly?
                </h2>
                <p className="mt-0 text-sm leading-relaxed text-[#6B7075] sm:text-base">
                  Choose whichever channel feels easiest.
                </p>

                <div className="mt-8 space-y-3">
                  <ContactChannel
                    href={whatsappHref(
                      "Hi, I'd like to know more about travelling with Sairr.",
                    )}
                    title="Chat with us"
                    subtitle="Usually faster replies"
                    iconSrc="/contact/chat.svg"
                    whiteIcon
                    external
                  />
                  <ContactChannel
                    href={phoneHref()}
                    title={siteConfig.phone}
                    subtitle="Speak with our team"
                    iconSrc="/contact/ringing-phone.svg"
                  />
                  <ContactChannel
                    href={`mailto:${siteConfig.email}`}
                    title={siteConfig.email}
                    subtitle="For detailed enquiries"
                    iconSrc="/contact/mail.svg"
                  />
                </div>

                <p className="mt-5 text-sm leading-relaxed text-[#5d5d5d]">
                  Our team is available from 10 AM to 8 PM, Monday to Sunday. If
                  you reach us outside these hours, we&apos;ll reply when
                  we&apos;re back.
                </p>

                <div className="mt-6 lg:mt-auto lg:pt-8 flex flex-row items-center gap-1">
                  <div className="text-sm font-semibold text-[#1a1a1a] flex flex-row items-center gap-1">
                    <Image src="/contact/location.svg" alt="Location" width={20} height={20} /> <span>Address: </span>
                  </div>
                  <Link
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-sm leading-relaxed text-[#5d5d5d] underline-offset-2 hover:text-[#0E5E6F] hover:underline"
                  >
                    WeWork, Platina Tower, Gurugram, Haryana
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      <SocialFollow />
    </main>
  );
}
