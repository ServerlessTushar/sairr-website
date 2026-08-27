import type { LucideProps } from "lucide-react";
import { Building2, Car, Plane, User, Utensils } from "lucide-react";
import { cn } from "@/lib/utils";

const iconClass = "size-5";

function PrayingHands({ className, ...props }: LucideProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn(iconClass, className)}
      aria-hidden
      {...props}
    >
      <path d="M9.5 21v-6.2c0-1.2-.5-2.3-1.4-3.1L5 8.5" />
      <path d="M9.5 14.8 7 11.2c-.6-.8-.7-1.9-.3-2.8L8.2 5" />
      <path d="M14.5 21v-6.2c0-1.2.5-2.3 1.4-3.1L19 8.5" />
      <path d="M14.5 14.8 17 11.2c.6-.8.7-1.9.3-2.8L15.8 5" />
      <path d="M12 21v-7" />
    </svg>
  );
}

const icons = {
  plane: Plane,
  building: Building2,
  plate: Utensils,
  praying: PrayingHands,
  car: Car,
  person: User,
} as const;

export function IncludedIcon({
  name,
  className,
}: {
  name: keyof typeof icons;
  className?: string;
}) {
  const Icon = icons[name];
  return (
    <span
      className={cn(
        "flex size-10 shrink-0 items-center justify-center text-brand",
        className,
      )}
    >
      <Icon className={iconClass} strokeWidth={1.5} />
    </span>
  );
}
