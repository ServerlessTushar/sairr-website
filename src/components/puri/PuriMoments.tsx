import Image from "next/image";
import { Check } from "lucide-react";
import { puriMoments } from "@/data/puri";
import puriMomentsImg from "@/public/experience/puri-moments.webp";

function MomentCheckIcon() {
  return (
    <span
      className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-gold/25 text-gold sm:size-8"
      aria-hidden
    >
      <Check className="size-3.5 stroke-[2.5] sm:size-4" />
    </span>
  );
}

export function PuriMoments() {
  return (
    <section className="border-t border-charcoal/10">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative aspect-4/5 w-full sm:aspect-5/6 lg:aspect-auto lg:min-h-144">
          <Image
            src={puriMomentsImg}
            alt="Travellers at the Jagannath Temple in Puri"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>

        <div className="flex flex-col justify-center bg-sand px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20 xl:px-20">
          <h2 className="font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl">
            Moments That Make Puri
          </h2>

          <ul className="mt-8 space-y-6 sm:mt-10 sm:space-y-7">
            {puriMoments.map((moment) => (
              <li key={moment.id} className="flex gap-3.5 sm:gap-4">
                <MomentCheckIcon />
                <p className="text-base leading-relaxed text-charcoal sm:text-[1.0625rem] sm:leading-[1.65]">
                  <span className="font-medium">{moment.title}</span> {moment.line}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
