import { cn } from "@/lib/utils";

export function PlaceholderVideo({
  label = "Traveller video",
  className,
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex aspect-[4/5] items-center justify-center bg-charcoal/8 sm:aspect-video",
        className,
      )}
    >
      <div className="flex flex-col items-center gap-3 text-slate">
        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-current/30">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5 translate-x-px"
            fill="currentColor"
            aria-hidden
          >
            <path d="M8 5.5v13l11-6.5L8 5.5Z" />
          </svg>
        </span>
        <span className="text-xs tracking-wide">{label}</span>
      </div>
    </div>
  );
}
