import Image from "next/image";
import Link from "next/link";
import { whatsappHref } from "@/data/site";
import { FadeIn } from "@/components/shared/FadeIn";
import whatsappIcon from "@/public/homepage/whatsapp.png";
import bgImg from "@/public/homepage/where-u-meaning.webp";

const TEAL = "#0E5E6F";
const CORAL = "#EC575E";
const GRAY_BTN = "#E8E8E8";

export function CtaSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={bgImg}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <FadeIn>
          <div className="mx-auto max-w-4xl rounded-3xl bg-white px-8 py-8 text-center shadow-[0_8px_40px_rgba(27,29,31,0.12)] sm:px-12 sm:py-9 lg:px-14">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: TEAL }}
            >
              Start a conversation
            </p>

            <h2 className="mt-3 font-heading text-3xl font-semibold leading-[1.15] tracking-tight text-charcoal sm:text-[2rem]">
              Where have you been meaning to go?
            </h2>

            <p className="mt-3 text-base leading-snug text-slate">
              Tell us, even if you&apos;re not sure yet. We&apos;ll make it
              happen for you
            </p>

            <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-lg px-6 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: CORAL }}
              >
                Request a Call Back
              </Link>

              <Link
                href={whatsappHref("Hi Sairr — I'd like to talk about a journey.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold text-charcoal transition-opacity hover:opacity-90"
                style={{ backgroundColor: GRAY_BTN }}
              >
                <Image
                  src={whatsappIcon}
                  alt=""
                  width={22}
                  height={22}
                  className="size-[22px] shrink-0"
                />
                WhatsApp us
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
