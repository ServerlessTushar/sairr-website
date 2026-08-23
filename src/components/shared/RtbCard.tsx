import { reasonsToBelieve, type ReasonToBelieve } from "@/data/reasons";
import { cn } from "@/lib/utils";

function Mark({ id }: { id: string }) {
  const common = "h-10 w-10 text-brand";

  switch (id) {
    case "door-to-door":
      return (
        <svg viewBox="0 0 40 40" className={common} fill="none" aria-hidden>
          <circle cx="8" cy="32" r="2.5" fill="currentColor" />
          <circle cx="32" cy="8" r="2.5" fill="currentColor" />
          <path
            d="M10 30c4-10 16-12 20-20"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <path
            d="M24 10h8v8"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "designed":
      return (
        <svg viewBox="0 0 40 40" className={common} fill="none" aria-hidden>
          <rect x="7" y="7" width="26" height="26" stroke="currentColor" strokeWidth="1.25" />
          <path d="M7 16h26M16 7v26" stroke="currentColor" strokeWidth="1.25" />
          <circle cx="27" cy="27" r="3" stroke="currentColor" strokeWidth="1.25" />
        </svg>
      );
    case "quality":
      return (
        <svg viewBox="0 0 40 40" className={common} fill="none" aria-hidden>
          <path
            d="M20 6 24.5 16.5 36 18 27 26l2.5 11L20 31l-9.5 6L13 26 4 18l11.5-1.5L20 6Z"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "with-you":
      return (
        <svg viewBox="0 0 40 40" className={common} fill="none" aria-hidden>
          <circle cx="15" cy="14" r="4" stroke="currentColor" strokeWidth="1.25" />
          <circle cx="26" cy="16" r="3.2" stroke="currentColor" strokeWidth="1.25" />
          <path
            d="M6 32c1.5-6 6-9 9-9s7.5 3 9 9"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
          <path
            d="M22 32c.8-4.5 3.5-7 6-7 2.8 0 6.2 2.2 7.5 7"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      );
    case "family":
      return (
        <svg viewBox="0 0 40 40" className={common} fill="none" aria-hidden>
          <circle cx="20" cy="20" r="3" fill="currentColor" />
          <circle cx="20" cy="20" r="8" stroke="currentColor" strokeWidth="1.25" />
          <circle cx="20" cy="20" r="13.5" stroke="currentColor" strokeWidth="1.25" opacity="0.45" />
          <path
            d="M20 4v4M20 32v4M4 20h4M32 20h4"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeLinecap="round"
          />
        </svg>
      );
    default:
      return null;
  }
}

export function RtbCard({
  reason,
  className,
}: {
  reason: ReasonToBelieve;
  className?: string;
}) {
  return (
    <article className={cn("flex flex-col pt-2", className)}>
      <Mark id={reason.id} />
      <h3 className="mt-5 font-heading text-lg font-semibold leading-snug text-brand">
        {reason.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate">{reason.description}</p>
    </article>
  );
}

export function RtbGrid({ className }: { className?: string }) {
  const firstRow = reasonsToBelieve.slice(0, 3);
  const secondRow = reasonsToBelieve.slice(3);

  return (
    <div className={cn("space-y-12", className)}>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {firstRow.map((reason) => (
          <RtbCard key={reason.id} reason={reason} />
        ))}
      </div>
      <div className="mx-auto grid max-w-3xl gap-10 sm:grid-cols-2">
        {secondRow.map((reason) => (
          <RtbCard key={reason.id} reason={reason} />
        ))}
      </div>
    </div>
  );
}
