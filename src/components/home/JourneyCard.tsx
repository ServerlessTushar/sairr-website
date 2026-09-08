import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whatsappHref } from "@/data/site";
import { cn } from "@/lib/utils";

const TEAL = "#0E5E6F";
const CORAL = "#EC575E";

export type Journey = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: StaticImageData;
  status: "booking-open" | "coming-soon";
  perks?: string[];
  href?: string;
  notifyMessage?: string;
};

function StatusBadge({ status }: { status: Journey["status"] }) {
  const isOpen = status === "booking-open";

  return (
    <span
      className={cn(
        "absolute top-8 right-0 z-10 rounded-l-full pl-3 pr-6 py-1.5 text-[10px] font-semibold tracking-[0.14em] uppercase",
        "bg-white",
        isOpen ? "text-[#EC575E]" : "text-[#6B7075]",
      )}
    >
      {isOpen ? "Booking open" : "Coming soon"}
    </span>
  );
}

function NotifyMeUnderline() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 88 10"
      fill="none"
      className="absolute -bottom-0.5 left-0 h-2.5 w-[105%] max-w-none"
      preserveAspectRatio="none"
    >
      <path
        d="M1 7.5C14 4.5 28 4 44 5.5C58 6.5 72 7 87 6.5"
        stroke={CORAL}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path
        d="M2 8.5C16 5.5 30 5 46 6.5C60 7.5 74 8 86 7.5"
        stroke={CORAL}
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M0.5 6.5C13 3.5 27 3 43 4.5C57 5.5 71 6 87.5 5"
        stroke={CORAL}
        strokeWidth="0.9"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  );
}

export function JourneyCard({ journey }: { journey: Journey }) {
  const isOpen = journey.status === "booking-open";

  return (
    <article className="relative flex h-full flex-col rounded-2xl bg-white p-4 shadow-[0_4px_24px_rgba(27,29,31,0.08)]">
      <StatusBadge status={journey.status} />

      <div className="relative aspect-4/3 overflow-hidden rounded-xl">
        <Image
          src={journey.image}
          alt={journey.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
      </div>

      <div className="flex flex-1 flex-col pt-4">
        <p
          className="text-right text-xs font-semibold"
          style={{ color: TEAL }}
        >
          {journey.category}
        </p>

        <h3 className="mt-1 font-heading text-2xl font-semibold tracking-tight text-charcoal">
          {journey.title}
        </h3>

        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate">
          {journey.description}
        </p>

        <div className="mt-4">
          {isOpen && journey.perks && (
            <p className="text-xs leading-relaxed text-slate">
              {journey.perks.map((perk, i) => (
                <span key={perk} className="text-[#0E5E6F]">
                  {i > 0 && (
                    <span className="mx-1.5 text-[#0E5E6F]" style={{ color: TEAL, fontSize: "14px" }}>
                      •
                    </span>
                  )}
                  {perk}
                </span>
              ))}
            </p>
          )}

          {isOpen && journey.href ? (
            <Link
              href={journey.href}
              className="mt-4 inline-flex items-center gap-1 text-sm font-semibold transition-opacity hover:opacity-80"
              style={{ color: CORAL }}
            >
              Explore Journey
              <ArrowRight className="size-4" />
            </Link>
          ) : (
            <Link
              href={whatsappHref(
                journey.notifyMessage ??
                  `I'd like to be notified when ${journey.title} dates are announced.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="relative mt-4 inline-block pb-1 text-sm font-semibold text-charcoal transition-colors hover:opacity-80"
            >
              Notify Me
              <NotifyMeUnderline />
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
