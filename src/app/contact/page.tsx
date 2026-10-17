import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ContactUsForm } from "@/components/forms/ContactUsForm";
import { FadeIn } from "@/components/shared/FadeIn";
import { createMetadata } from "@/lib/seo";
import { phoneHref, siteConfig, whatsappHref } from "@/data/site";
import { cn } from "@/lib/utils";

const TEAL = "#0E5E6F";
const HERO_OVERLAY = "#4A4949";

const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=WeWork%2C+Platina+Tower%2C+Gurugram%2C+Haryana+122002";

const socialLinks = [
  {
    href: siteConfig.social.instagram,
    label: "@sairr.in",
    icon: "/contact/inta.svg",
  },
  {
    href: siteConfig.social.youtube,
    label: "@SairrOfficial",
    icon: "/contact/youtube.svg",
  },
  {
    href: siteConfig.social.linkedin,
    label: "Sairr",
    icon: "/contact/linkedin.svg",
  },
] as const;

function SocialLinkItem({
  href,
  label,
  icon,
  iconClassName = "size-11",
}: {
  href: string;
  label: string;
  icon: string;
  iconClassName?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center gap-1.5 text-center transition-opacity hover:opacity-80"
    >
      <Image
        src={icon}
        alt=""
        width={56}
        height={56}
        aria-hidden
        className={iconClassName}
      />
      <span className="text-xs text-[#5d5d5d] sm:text-sm">{label}</span>
    </a>
  );
}

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
  iconClassName?: string;
  external?: boolean;
  trailingIcon?: boolean;
};

function ContactChannel({
  href,
  title,
  subtitle,
  iconSrc,
  iconClassName,
  external,
  trailingIcon,
}: ContactChannelProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="flex items-center gap-4 rounded-xl border border-[#E8E8E8] bg-white px-4 py-4 transition-colors hover:border-[#0E5E6F]/25 hover:bg-[#FAFAFA] sm:px-5"
    >
      <span
        className={cn(
          "flex size-12 shrink-0 items-center justify-center rounded-lg",
          iconClassName,
        )}
      >
        <Image src={iconSrc} alt="" width={28} height={28} aria-hidden />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-semibold text-[#1a1a1a]">{title}</span>
        <span className="mt-0.5 block text-sm text-[#5d5d5d]">{subtitle}</span>
      </span>
      {trailingIcon ? (
        <ArrowUpRight className="size-5 shrink-0 text-[#5d5d5d]" aria-hidden />
      ) : null}
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
          src="/why-sairr/AlpineRiversideTownInBloom.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-fit object-center"
        />
        <div
          className="absolute inset-0"
          //style={{ backgroundColor: `${HERO_OVERLAY}CC` }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto px-4 py-20 text-center text-white sm:px-6 sm:py-24">
          <FadeIn>
            <h1 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl md:text-[2.75rem] lg:text-[3.125rem]">
              Let&apos;s talk about your next journey
            </h1>
            <p className="mx-auto mt-4 text-base leading-relaxed text-white sm:text-lg md:text-2xl">
              Planning a trip, or just want to know more about Sairr? Write to
              us, call, or WhatsApp.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Contact card */}
      <div className="relative z-10 mx-auto max-w-6xl pb-12 lg:pb-16">
        <div
          className="-mt-16 overflow-hidden rounded-lg bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:-mt-20 sm:rounded-lg lg:-mt-24"
        >
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-stretch">
            {/* Form first on mobile */}
            <div
              className="order-1 flex flex-col px-6 py-10 sm:px-10 sm:py-12 lg:h-full"
              style={{ backgroundColor: TEAL }}
            >
              <FadeIn>
                <h2 className="font-heading text-2xl font-semibold text-white sm:text-[1.75rem]">
                  Get in touch
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base">
                  Ask us anything about travelling with Sairr.
                </p>
                <div className="mt-8">
                  <ContactUsForm appearance="teal" />
                </div>
              </FadeIn>
            </div>

            {/* Direct contact */}
            <div className="order-2 flex flex-col bg-[#F5F0E1] px-6 py-10 sm:px-10 sm:py-12 lg:h-full">
              <FadeIn delay={0.1} className="flex flex-1 flex-col">
                <h2 className="font-heading text-2xl font-semibold text-[#1a1a1a] sm:text-[1.75rem]">
                  Prefer to reach out directly?
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#5d5d5d] sm:text-base">
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
                    iconClassName="bg-[#0E5E6F]"
                    external
                    trailingIcon
                  />
                  <ContactChannel
                    href={phoneHref()}
                    title={siteConfig.phone}
                    subtitle="Speak with our team"
                    iconSrc="/contact/ringing-phone.svg"
                    iconClassName="bg-[#E8EEF0]"
                  />
                  <ContactChannel
                    href={`mailto:${siteConfig.email}`}
                    title={siteConfig.email}
                    subtitle="For detailed enquiries"
                    iconSrc="/contact/mail.svg"
                    iconClassName="bg-[#E8EEF0]"
                  />
                </div>

                <p className="mt-8 text-sm leading-relaxed text-[#5d5d5d]">
                  Our team is available from 10 AM to 8 PM, Monday to Sunday. If
                  you reach us outside these hours, we&apos;ll reply when
                  we&apos;re back.
                </p>

                <div className="mt-6 lg:mt-auto lg:pt-8">
                  <div className="text-sm font-semibold text-[#1a1a1a] flex flex-row items-center gap-1">
                    <Image src="/contact/location.svg" alt="Location" width={20} height={20} /> <span>Address</span>
                  </div>
                  <Link
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm leading-relaxed text-[#5d5d5d] underline-offset-2 hover:text-[#0E5E6F] hover:underline"
                  >
                    WeWork, Platina Tower, Gurugram, Haryana
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>

      {/* Follow along */}
      <section className="mx-4 mb-10 rounded-lg bg-[#E9DFC8]/50 px-5 py-6 sm:mx-6 sm:px-8 md:py-7 lg:mx-auto lg:mb-16 lg:max-w-6xl lg:px-12">
        <FadeIn>
          {/* Mobile */}
          <div className="text-center md:hidden">
            <h2 className="font-heading text-3xl font-semibold text-[#1a1a1a]">
              Follow along
            </h2>
            <p className="mt-1.5 text-sm text-[#5d5d5d]">
              See what Sairr is all about.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-10">
              {socialLinks.map((link) => (
                <SocialLinkItem
                  key={link.href}
                  {...link}
                  iconClassName="size-12"
                />
              ))}
            </div>
          </div>

          {/* Tablet & desktop — ~1/3 copy, divider, ~2/3 icons evenly spaced */}
          <div
            className="hidden md:grid md:grid-cols-[minmax(0,1fr)_1px_minmax(0,2fr)] md:items-center md:gap-x-10 lg:gap-x-14"
          >
            <div className="min-w-0 pr-2 lg:pr-4">
              <h2 className="font-heading text-[1.75rem] font-semibold leading-tight text-[#1a1a1a] lg:text-4xl">
                Follow along
              </h2>
              <p className="mt-1 text-sm text-[#5d5d5d] lg:text-base">
                See what Sairr is all about.
              </p>
            </div>
            <div
              className="h-14 w-px shrink-0 self-center bg-[#EC575E] lg:h-16"
              aria-hidden
            />
            <div className="grid grid-cols-3 items-center justify-items-center">
              {socialLinks.map((link) => (
                <SocialLinkItem
                  key={link.href}
                  {...link}
                  iconClassName="size-12 lg:size-14"
                />
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
