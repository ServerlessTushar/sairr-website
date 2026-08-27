"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { puriDepartures } from "@/data/puri";
import { getStoredUtmParams } from "@/lib/utm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const enquirySchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  preferredDate: z.string().min(1, "Please choose a date"),
  partySize: z
    .string()
    .min(1, "Please tell us the party size")
    .refine((value) => {
      const n = Number(value);
      return Number.isInteger(n) && n >= 1 && n <= 20;
    }, "Party size must be between 1 and 20"),
});

type EnquiryFormData = z.infer<typeof enquirySchema>;

type EnquiryIntent = "interest" | "notify";

type EnquiryContextValue = {
  openEnquiry: (options?: { departureId?: string; intent?: EnquiryIntent }) => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function usePuriEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("usePuriEnquiry must be used within PuriEnquiryProvider");
  }
  return context;
}

const fieldClassName =
  "h-12 rounded-xl border-border/60 bg-mist/80 px-4 text-base shadow-none transition-colors placeholder:text-slate/70 focus-visible:border-brand focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-brand/15 md:text-sm";

const labelClassName =
  "text-xs font-medium uppercase tracking-[0.14em] text-charcoal";

export function PuriEnquiryProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const [departureId, setDepartureId] = useState(puriDepartures[0]?.id ?? "");
  const [intent, setIntent] = useState<EnquiryIntent>("interest");

  const openEnquiry = useCallback(
    (options?: { departureId?: string; intent?: EnquiryIntent }) => {
      const nextIntent = options?.intent ?? "interest";
      setIntent(nextIntent);
      setDepartureId(
        options?.departureId ??
          (nextIntent === "notify" ? "upcoming" : (puriDepartures[0]?.id ?? "")),
      );
      setOpen(true);
    },
    [],
  );

  useEffect(() => {
    const fromHash = () => {
      if (window.location.hash === "#enquire") {
        openEnquiry();
      }
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [openEnquiry]);

  const value = useMemo(() => ({ openEnquiry }), [openEnquiry]);

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      <EnquirySheet
        open={open}
        onOpenChange={setOpen}
        departureId={departureId}
        intent={intent}
      />
    </EnquiryContext.Provider>
  );
}

function EnquirySheet({
  open,
  onOpenChange,
  departureId,
  intent,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  departureId: string;
  intent: EnquiryIntent;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFormData>({
    resolver: zodResolver(enquirySchema),
    defaultValues: {
      name: "",
      phone: "",
      preferredDate: departureId,
      partySize: "2",
    },
  });

  useEffect(() => {
    if (!open) return;
    reset((current) => ({
      ...current,
      preferredDate: departureId,
    }));
  }, [departureId, open, reset]);

  async function onSubmit(data: EnquiryFormData) {
    const departure = puriDepartures.find((d) => d.id === data.preferredDate);
    const dateLabel = departure?.dates ?? data.preferredDate;

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          planningFor: `Party of ${data.partySize}`,
          destination: `Puri — ${dateLabel}`,
          message:
            intent === "notify"
              ? "Notify me when the next Puri departure is announced."
              : "Interested in the Puri journey.",
          ...getStoredUtmParams(),
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.success) {
        throw new Error(result.error ?? "Failed to submit enquiry");
      }

      reset();
      onOpenChange(false);
      if (window.location.hash === "#enquire") {
        history.replaceState(null, "", window.location.pathname);
      }
      toast.success("Enquiry sent", {
        description: "A travel expert from Sairr will reach out personally.",
      });
    } catch (error) {
      toast.error("Something went wrong", {
        description:
          error instanceof Error
            ? error.message
            : "Unable to send your enquiry. Please try again or contact us on WhatsApp.",
      });
    }
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full gap-0 bg-mist sm:max-w-md"
      >
        <SheetHeader className="border-b border-charcoal/10 px-6 py-6">
          <SheetTitle className="font-heading text-2xl font-semibold text-charcoal">
            {intent === "notify"
              ? "Notify me"
              : "Tell us you're interested"}
          </SheetTitle>
          <SheetDescription className="text-sm leading-relaxed text-slate">
            Name, phone, preferred date, and party size — we&apos;ll take it
            from there.
          </SheetDescription>
        </SheetHeader>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-1 flex-col gap-5 overflow-y-auto px-6 py-6"
          noValidate
        >
          <div className="space-y-2">
            <Label htmlFor="puri-name" className={labelClassName}>
              Name
            </Label>
            <Input
              id="puri-name"
              placeholder="Your name"
              aria-invalid={!!errors.name}
              className={cn(fieldClassName, errors.name && "border-destructive")}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="puri-phone" className={labelClassName}>
              Phone
            </Label>
            <Input
              id="puri-phone"
              type="tel"
              inputMode="numeric"
              placeholder="9876543210"
              maxLength={10}
              aria-invalid={!!errors.phone}
              className={cn(fieldClassName, errors.phone && "border-destructive")}
              {...register("phone", {
                onChange: (event) => {
                  event.target.value = event.target.value
                    .replace(/\D/g, "")
                    .slice(0, 10);
                },
              })}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="puri-date" className={labelClassName}>
              Preferred date
            </Label>
            <select
              id="puri-date"
              aria-invalid={!!errors.preferredDate}
              className={cn(
                fieldClassName,
                "w-full appearance-none",
                errors.preferredDate && "border-destructive",
              )}
              {...register("preferredDate")}
            >
              {puriDepartures.map((departure) => (
                <option key={departure.id} value={departure.id}>
                  {departure.dates}
                </option>
              ))}
            </select>
            {errors.preferredDate && (
              <p className="text-sm text-destructive">
                {errors.preferredDate.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="puri-party" className={labelClassName}>
              Party size
            </Label>
            <Input
              id="puri-party"
              type="number"
              min={1}
              max={20}
              inputMode="numeric"
              aria-invalid={!!errors.partySize}
              className={cn(
                fieldClassName,
                errors.partySize && "border-destructive",
              )}
              {...register("partySize")}
            />
            {errors.partySize && (
              <p className="text-sm text-destructive">
                {errors.partySize.message}
              </p>
            )}
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 h-12 rounded-full bg-brand px-8 text-sm font-semibold text-white hover:bg-forest"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send
              </>
            )}
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}

export function InterestButton({
  className,
  children = "Tell us you're interested",
  departureId,
  intent = "interest",
  variant = "primary",
}: {
  className?: string;
  children?: React.ReactNode;
  departureId?: string;
  intent?: EnquiryIntent;
  variant?: "primary" | "ghost";
}) {
  const { openEnquiry } = usePuriEnquiry();

  if (variant === "ghost") {
    return (
      <button
        type="button"
        onClick={() => openEnquiry({ departureId, intent })}
        className={cn(
          "text-left font-medium text-brand underline-offset-4 transition-colors hover:text-forest hover:underline",
          className,
        )}
      >
        {children}
      </button>
    );
  }

  return (
    <Button
      type="button"
      onClick={() => openEnquiry({ departureId, intent })}
      className={cn(
        "h-12 rounded-full bg-brand px-6 font-sans text-sm font-medium text-white hover:bg-forest",
        className,
      )}
    >
      {children}
    </Button>
  );
}
