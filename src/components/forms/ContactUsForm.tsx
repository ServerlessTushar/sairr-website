"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, ChevronDown } from "lucide-react";
import {
  buildContactUsFormDefaults,
  contactUsFormSchema,
  contactUsTopicOptions,
  formatContactUsRowForSheet,
  howDidYouHearOptions,
  type ContactUsFormData,
  type ContactUsFormFieldValues,
} from "@/lib/validations/contact-us";
import { submitToGoogleSheet } from "@/lib/submit-to-sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { getStoredUtmParams } from "@/lib/utm";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const fieldClassName =
  "h-10 rounded-xl border-border/60 bg-mist/80 px-4 text-base shadow-none transition-colors placeholder:text-[#5d5d5d]/70 focus-visible:border-brand focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-brand/15 md:text-sm";

const labelClassName =
  "text-xs font-medium uppercase tracking-[0.14em] text-charcoal";

const errorClassName = "text-sm text-destructive";

const textareaClassName =
  "min-h-32 rounded-xl border-border/60 bg-mist/80 px-4 py-3 text-base shadow-none transition-colors placeholder:text-[#5d5d5d]/70 focus-visible:border-brand focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-brand/15 md:text-sm";

function SelectChevron() {
  return (
    <ChevronDown
      className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-[#5d5d5d]"
      aria-hidden
    />
  );
}

type ContactUsFormProps = {
  onSubmitted?: () => void;
  /**
   * Prefill any fields (visible or hidden). Hidden reserved fields always map to
   * sheet columns F–H regardless of whether they are shown in the UI.
   */
  prefill?: Partial<ContactUsFormFieldValues>;
  /** Show reserved sheet columns F–H in the UI (default: hidden inputs only). */
  showReservedFields?: boolean;
  /** Teal panel styling for the contact page. */
  appearance?: "default" | "teal";
};

export function ContactUsForm({
  onSubmitted,
  prefill,
  showReservedFields = false,
  appearance = "default",
}: ContactUsFormProps) {
  const isTeal = appearance === "teal";
  const labels = isTeal
    ? "text-[11px] font-medium uppercase tracking-[0.12em] text-white"
    : labelClassName;
  const fields = isTeal
    ? "h-10 rounded-lg border-0 bg-white px-4 text-base text-charcoal shadow-none transition-colors placeholder:text-[#5d5d5d]/70 focus-visible:ring-2 focus-visible:ring-white/30 md:text-sm"
    : fieldClassName;
  const textareas = isTeal
    ? "min-h-20 rounded-lg border-0 bg-white px-4 py-3 text-base text-charcoal shadow-none transition-colors placeholder:text-[#5d5d5d]/70 focus-visible:ring-2 focus-visible:ring-white/30 md:text-sm"
    : textareaClassName;
  const optionalMuted = isTeal
    ? "normal-case tracking-normal text-white/70"
    : "normal-case tracking-normal text-[#5d5d5d]";
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactUsFormFieldValues, unknown, ContactUsFormData>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: { ...buildContactUsFormDefaults(), ...prefill },
  });

  useEffect(() => {
    reset({ ...buildContactUsFormDefaults(), ...prefill });
  }, [prefill, reset]);

  const selectedTopic = useWatch({ control, name: "topic" });

  async function onSubmit(data: ContactUsFormData) {
    try {
      const payload = {
        ...data,
        ...getStoredUtmParams(),
        page_url: window.location.href,
      };

      await submitToGoogleSheet({
        tabName: "ContactUs",
        columns: "A:J",
        values: formatContactUsRowForSheet(payload),
      });

      onSubmitted?.();
      router.push("/thank-you");
    } catch (error) {
      toast.error("Something went wrong", {
        description:
          error instanceof Error
            ? error.message
            : "Unable to send your message. Please try again or contact us directly.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" noValidate>
      {!showReservedFields ? (
        <>
          <input type="hidden" {...register("preferredDate")} />
          <input type="hidden" {...register("howDidYouHear")} />
          <input
            type="hidden"
            {...register("numberOfTravellers", { valueAsNumber: true })}
          />
        </>
      ) : (
        <div className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="cu-travellers" className={labels}>
                Number of travellers
              </Label>
              <Input
                id="cu-travellers"
                type="number"
                min={1}
                max={999}
                className={fields}
                {...register("numberOfTravellers", { valueAsNumber: true })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cu-preferred-date" className={labels}>
                Preferred date
              </Label>
              <Input
                id="cu-preferred-date"
                type="date"
                className={fields}
                {...register("preferredDate")}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="cu-how-hear" className={labels}>
              How did you hear about us?
            </Label>
            <div className="relative">
              <select
                id="cu-how-hear"
                className={cn(
                  fields,
                  "w-full appearance-none pr-10",
                )}
                {...register("howDidYouHear")}
              >
                <option value="">Select an option</option>
                {howDidYouHearOptions.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              <SelectChevron />
            </div>
          </div>
        </div>
      )}

      {/* Name + Phone */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="cu-name" className={labels}>
            Name
          </Label>
          <Input
            id="cu-name"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            className={cn(fields, errors.name && "border-destructive")}
            {...register("name")}
          />
          {errors.name && (
            <p className={errorClassName}>{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="cu-phone" className={labels}>
            Phone number
          </Label>
          <Input
            id="cu-phone"
            type="tel"
            inputMode="numeric"
            placeholder="Your 10 digit WhatsApp no"
            maxLength={10}
            aria-invalid={!!errors.phone}
            className={cn(fields, errors.phone && "border-destructive")}
            {...register("phone", {
              onChange: (event) => {
                event.target.value = event.target.value
                  .replace(/\D/g, "")
                  .slice(0, 10);
              },
            })}
          />
          {errors.phone && (
            <p className={errorClassName}>{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Email (optional) */}
      <div className="space-y-2">
        <Label htmlFor="cu-email" className={labels}>
          Email{" "}
          <span className={optionalMuted}>
            (optional)
          </span>
        </Label>
        <Input
          id="cu-email"
          type="email"
          inputMode="email"
          placeholder="Your email address"
          aria-invalid={!!errors.email}
          className={cn(fields, errors.email && "border-destructive")}
          {...register("email")}
        />
        {errors.email && (
          <p className={errorClassName}>{errors.email.message}</p>
        )}
      </div>

      {/* Topic */}
      <div className="space-y-2">
        <Label htmlFor="cu-topic" className={labels}>
          What is this about?
        </Label>
        <div className="relative">
          <select
            id="cu-topic"
            aria-invalid={!!errors.topic}
            className={cn(
              fields,
              "w-full appearance-none pr-10",
              !selectedTopic ? "text-[#999]" : "text-gray-900",
              errors.topic && "border-destructive",
            )}
            {...register("topic")}
          >
            <option value="" disabled>
              Select a topic
            </option>
            {contactUsTopicOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <SelectChevron />
        </div>
        {errors.topic && (
          <p className={errorClassName}>{errors.topic.message}</p>
        )}
      </div>

      {/* Message (optional) */}
      <div className="space-y-2">
        <Label htmlFor="cu-message" className={labels}>
          Anything else you&apos;d like to tell us?{" "}
          <span className={optionalMuted}>
            (optional)
          </span>
        </Label>
        <Textarea
          id="cu-message"
          placeholder="Tell us little more"
          rows={5}
          aria-invalid={!!errors.message}
          className={cn(
            textareas,
            errors.message && "border-destructive",
          )}
          {...register("message")}
        />
        {errors.message && (
          <p className={errorClassName}>{errors.message.message}</p>
        )}
      </div>

      <div
        className={cn(
          "flex flex-col gap-4 pt-2",
          !isTeal && "border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between",
        )}
      >
        <Button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "h-10 px-8 text-sm font-semibold",
            isTeal
              ? "w-[12rem] rounded-[4px] bg-[#EC575E] px-6 text-white hover:bg-[#EC575E]/90"
              : "rounded bg-brand hover:bg-forest sm:min-w-[12rem]",
          )}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Send message
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
