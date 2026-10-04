"use client";

import { useRouter } from "next/navigation";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, ChevronDown } from "lucide-react";
import {
  buildContactUsFormDefaults,
  contactUsFormSchema,
  contactUsTopicOptions,
  type ContactUsFormData,
  type ContactUsFormFieldValues,
} from "@/lib/validations/contact-us";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { getStoredUtmParams } from "@/lib/utm";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const fieldClassName =
  "h-12 rounded-xl border-border/60 bg-mist/80 px-4 text-base shadow-none transition-colors placeholder:text-slate/70 focus-visible:border-brand focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-brand/15 md:text-sm";

const labelClassName =
  "text-xs font-medium uppercase tracking-[0.14em] text-charcoal";

const errorClassName = "text-sm text-destructive";

const textareaClassName =
  "min-h-32 rounded-xl border-border/60 bg-mist/80 px-4 py-3 text-base shadow-none transition-colors placeholder:text-slate/70 focus-visible:border-brand focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-brand/15 md:text-sm";

function SelectChevron() {
  return (
    <ChevronDown
      className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-slate"
      aria-hidden
    />
  );
}

type ContactUsFormProps = {
  onSubmitted?: () => void;
};

export function ContactUsForm({ onSubmitted }: ContactUsFormProps) {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<ContactUsFormFieldValues, unknown, ContactUsFormData>({
    resolver: zodResolver(contactUsFormSchema),
    defaultValues: buildContactUsFormDefaults(),
  });

  const selectedTopic = useWatch({ control, name: "topic" });

  async function onSubmit(data: ContactUsFormData) {
    try {
      const response = await fetch("/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          ...getStoredUtmParams(),
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error ?? "Failed to submit enquiry");
      }

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Name + Phone */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="cu-name" className={labelClassName}>
            Name
          </Label>
          <Input
            id="cu-name"
            placeholder="Your full name"
            aria-invalid={!!errors.name}
            className={cn(fieldClassName, errors.name && "border-destructive")}
            {...register("name")}
          />
          {errors.name && (
            <p className={errorClassName}>{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="cu-phone" className={labelClassName}>
            Phone number
          </Label>
          <Input
            id="cu-phone"
            type="tel"
            inputMode="numeric"
            placeholder="Your 10-digit WhatsApp number"
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
            <p className={errorClassName}>{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Email (optional) */}
      <div className="space-y-2">
        <Label htmlFor="cu-email" className={labelClassName}>
          Email{" "}
          <span className="normal-case tracking-normal text-slate">
            (optional)
          </span>
        </Label>
        <Input
          id="cu-email"
          type="email"
          inputMode="email"
          placeholder="Your email address"
          aria-invalid={!!errors.email}
          className={cn(fieldClassName, errors.email && "border-destructive")}
          {...register("email")}
        />
        {errors.email && (
          <p className={errorClassName}>{errors.email.message}</p>
        )}
      </div>

      {/* Topic */}
      <div className="space-y-2">
        <Label htmlFor="cu-topic" className={labelClassName}>
          What is this about?
        </Label>
        <div className="relative">
          <select
            id="cu-topic"
            aria-invalid={!!errors.topic}
            className={cn(
              fieldClassName,
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
        <Label htmlFor="cu-message" className={labelClassName}>
          Anything else you&apos;d like to tell us?{" "}
          <span className="normal-case tracking-normal text-slate">
            (optional)
          </span>
        </Label>
        <Textarea
          id="cu-message"
          placeholder="Tell us a little more…"
          rows={5}
          aria-invalid={!!errors.message}
          className={cn(
            textareaClassName,
            errors.message && "border-destructive",
          )}
          {...register("message")}
        />
        {errors.message && (
          <p className={errorClassName}>{errors.message.message}</p>
        )}
      </div>

      <div className="flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
        {/* <p className="max-w-sm text-sm leading-relaxed text-slate">
          We read every message personally and usually respond within 24 hours.
        </p> */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 rounded-full bg-brand px-8 text-sm font-semibold hover:bg-forest sm:min-w-[12rem]"
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
