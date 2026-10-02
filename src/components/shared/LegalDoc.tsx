import { FadeIn } from "@/components/shared/FadeIn";

export function LegalBanner({
  title,
  subtitle,
  body,
}: {
  title: string;
  subtitle?: string;
  body?: string;
}) {
  return (
    <section className="bg-[#0E5E6F]">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <FadeIn>
          <h1 className="font-heading text-4xl font-semibold uppercase tracking-widest text-[#FDFBF2] sm:text-5xl lg:text-[3.25rem]">
            {title}
          </h1>
          {/* thin gold divider */}
          <div className="mx-auto mt-4 h-px w-16 bg-[#C8A867]" aria-hidden />
          {subtitle ? (
            <p className="mt-5 font-heading text-2xl font-semibold text-[#FDFBF2] sm:text-3xl">
              {subtitle}
            </p>
          ) : null}
          {body ? (
            <p className="mt-3 text-sm leading-relaxed text-[#FDFBF2]/70 sm:text-base">
              {body}
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
