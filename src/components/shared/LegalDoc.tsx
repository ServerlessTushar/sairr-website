import { FadeIn } from "@/components/shared/FadeIn";

export function LegalHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="bg-mist pb-12 pt-20 lg:pb-16 lg:pt-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-charcoal sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-slate sm:text-lg">
            {intro}
          </p>
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
    <section className="border-t border-border pt-8">
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
