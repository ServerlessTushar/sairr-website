import { FadeIn } from "@/components/shared/FadeIn";

export function LegalBanner({
  title,
  subtitle,
  effectiveDate,
}: {
  title: string;
  subtitle?: string;
  effectiveDate?: string;
}) {
  return (
    <section className="bg-[#0E5E6F]">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8 lg:py-32">
        <FadeIn>
          <h1 className="font-heading text-4xl font-semibold text-[#FDFBF2] sm:text-5xl lg:text-[3.5rem]">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-4 text-lg text-[#FDFBF2]/80 sm:text-xl">
              {subtitle}
            </p>
          ) : null}
          {effectiveDate ? (
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#FDFBF2]/60">
              Effective: {effectiveDate}
            </p>
          ) : null}
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
