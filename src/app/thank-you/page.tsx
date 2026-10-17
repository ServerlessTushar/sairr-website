import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { FadeIn } from "@/components/shared/FadeIn";
import { SocialFollow } from "@/components/shared/SocialFollow";
import { phoneHref, whatsappHref } from "@/data/site";
import { createMetadata } from "@/lib/seo";

const TEAL = "#0E5E6F";

export const metadata = createMetadata({
  title: "Thank You — Sairr",
  description:
    "Thank you for reaching out to Sairr. Our travel experts will be in touch with you soon.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <main className="bg-[#FDFBF2]">
      <section
        data-header-hero
        className="relative flex min-h-[min(52vw,420px)] items-start overflow-hidden sm:min-h-[380px] lg:min-h-[420px]"
      >
        <Image
          src="/thankyou-banner2.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#4A4949]/30" aria-hidden />

        <div className="relative z-10 w-full px-4 pt-4 sm:px-6 sm:pt-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to Home
          </Link>
        </div>
      </section>

      <div className="relative z-10 mx-auto max-w-6xl pb-10 lg:pb-12">
        <div
          className="-mt-20 overflow-hidden rounded-lg bg-white shadow-[0_20px_50px_rgba(0,0,0,0.08)] sm:-mt-24 lg:-mt-36"
        >
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-stretch">
            <div
              className="flex flex-col px-6 sm:px-10 py-6 lg:min-h-[20rem] lg:h-full"
              style={{ backgroundColor: TEAL }}
            >
              <FadeIn className="flex flex-1 flex-col">
                <div className="relative inline-block">
                  <h1 className="font-heading text-4xl font-normal leading-tight text-white sm:text-5xl lg:text-[4.688rem]">
                    Thank you
                  </h1>
                  <Image
                    src="/golden-2birds.svg"
                    alt=""
                    width={100}
                    height={75}
                    className="pointer-events-none absolute -top-6 right-0 h-auto w-16 opacity-90 sm:-top-1 sm:w-20 lg:right-4"
                    aria-hidden
                  />
                </div>

                <p className="mt-2 max-w-md text-base leading-relaxed text-white sm:text-lg">
                  We&apos;ve received your details. We&apos;ll call or message
                  you on the number you shared.
                </p>

                <div className="mt-auto pt-6">
                  <div className="rounded-lg border border-[#C8A867] px-4 py-4 backdrop-blur-[2px]">
                    <p className="text-[13px] leading-relaxed text-white">
                      Our team is available from{" "}
                      <span className="font-medium text-white">10 AM to 8 PM</span>
                      , Monday to Sunday. If you reach us outside these hours,
                      we&apos;ll reply when we&apos;re back.
                    </p>
                  </div>
                </div>
              </FadeIn>
            </div>

            <div className="flex flex-col bg-[#F5F0E1] px-6 py-6 md:pt-8 md:pb-6 sm:px-10 lg:h-full">
              <FadeIn delay={0.1} className="flex flex-1 flex-col">
                <h2 className="font-heading text-2xl font-semibold text-black sm:text-[1.75rem]">
                  Prefer to talk now?
                </h2>
            
                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <a
                    href={phoneHref()}
                    className="inline-flex h-12 md:h-[3.2rem] items-center justify-center gap-2 rounded-[4px] bg-[#EC575E] px-6 text-sm md:text-[18.93px] font-semibold text-white transition-colors hover:bg-[#EC575E]/90 sm:min-w-[13.5rem]"
                  >
                    <Image
                      src="/phone.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="size-5 md:size-6"
                      aria-hidden
                    />
                    Call us
                  </a>
                  <a
                    href={whatsappHref(
                      "Hi, I just submitted an enquiry and would like to know more.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 md:h-[3.2rem] items-center justify-center gap-2 rounded-[4px] border border-[#0E5E6F]/15 bg-white px-6 text-sm font-semibold text-[#1a1a1a] transition-colors hover:bg-white/80 sm:min-w-[13.5rem]"
                  >
                    <Image
                      src="/whatsapp-icon.svg"
                      alt=""
                      width={20}
                      height={20}
                      className="size-5 md:size-6"
                      aria-hidden
                    />
                    WhatsApp us
                  </a>
                </div>

                <div className="mt-10 flex items-center gap-4 pt-10 lg:mt-auto">
                  <Image
                    src="/thank-card-img.png"
                    alt=""
                    width={107}
                    height={78}
                    className="h-[78px] w-[107px] shrink-0 rounded-md object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-lg font-semibold text-[#0E5E6F] sm:text-xl">
                      Planning with family or friends?
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-black sm:text-[15px]">
                      We also offer private journeys, tailored to your group.
                      Just let us know.
                    </p>
                  </div>
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
