import Image from "next/image";
import { FadeIn } from "@/components/shared/FadeIn";
import bannerImg from "@/public/images/dipanjali-panigrahi-0IXFx5oFNIg-unsplash.jpg";

export function LegalBanner({ title }: { title: string }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <Image
          src={bannerImg}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8 lg:py-36">
        <FadeIn>
          <h1 className="font-heading text-4xl font-semibold uppercase tracking-wide text-white sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
        </FadeIn>
      </div>
    </section>
  );
}

export function Section({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={`section-${number}`}
      className="scroll-mt-24 border-t border-border pt-8"
    >
      <h2 className="font-heading text-xl font-semibold text-charcoal sm:text-2xl">
        <span className="text-brand">{number}.</span> {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate sm:text-base">
        {children}
      </div>
    </section>
  );
}

export function SubHead({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="font-heading text-base font-semibold text-charcoal">
        {title}
      </h3>
      {children ? (
        <p className="mt-1 text-sm leading-relaxed text-slate sm:text-base">
          {children}
        </p>
      ) : null}
    </div>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span
            aria-hidden
            className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
