"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
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

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  async function onSubmit(data: ContactFormData) {
    try {
      const response = await fetch("/api/contact", {
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

      reset();
      toast.success("Enquiry sent", {
        description: "Thank you! We'll be in touch within 24 hours.",
      });
    } catch (error) {
      toast.error("Something went wrong", {
        description:
          error instanceof Error
            ? error.message
            : "Unable to send your enquiry. Please try again or contact us directly.",
      });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name" className={labelClassName}>
            Name
          </Label>
          <Input
            id="name"
            placeholder="Your name"
            aria-invalid={!!errors.name}
            className={cn(fieldClassName, errors.name && "border-destructive")}
            {...register("name")}
          />
          {errors.name && (
            <p className={errorClassName}>{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone" className={labelClassName}>
            Phone
          </Label>
          <Input
            id="phone"
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
            <p className={errorClassName}>{errors.phone.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-border/80" aria-hidden />
          <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-gold">
            About the journey
          </p>
          <div className="h-px flex-1 bg-border/80" aria-hidden />
        </div>

        <div className="grid gap-6">
          <div className="space-y-2">
            <Label htmlFor="planningFor" className={labelClassName}>
              Who are you planning for?
            </Label>
            <Input
              id="planningFor"
              placeholder="e.g. My parents, age 65 and 70"
              aria-invalid={!!errors.planningFor}
              className={cn(
                fieldClassName,
                errors.planningFor && "border-destructive",
              )}
              {...register("planningFor")}
            />
            {errors.planningFor && (
              <p className={errorClassName}>{errors.planningFor.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="destination" className={labelClassName}>
              Where would you like to travel?
            </Label>
            <Input
              id="destination"
              placeholder="e.g. Puri, Kerala, or open to suggestions"
              aria-invalid={!!errors.destination}
              className={cn(
                fieldClassName,
                errors.destination && "border-destructive",
              )}
              {...register("destination")}
            />
            {errors.destination && (
              <p className={errorClassName}>{errors.destination.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message" className={labelClassName}>
              Anything else?{" "}
              <span className="normal-case tracking-normal text-slate">
                (optional)
              </span>
            </Label>
            <Textarea
              id="message"
              placeholder="Dietary needs, mobility requirements, preferred dates..."
              rows={5}
              aria-invalid={!!errors.message}
              className={cn(
                "min-h-32 rounded-xl border-border/60 bg-mist/80 px-4 py-3 text-base shadow-none transition-colors placeholder:text-slate/70 focus-visible:border-brand focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-brand/15 md:text-sm",
                errors.message && "border-destructive",
              )}
              {...register("message")}
            />
            {errors.message && (
              <p className={errorClassName}>{errors.message.message}</p>
            )}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-border/60 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-sm text-sm leading-relaxed text-slate">
          We read every enquiry personally and usually respond within 24 hours.
        </p>
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
              Send enquiry
            </>
          )}
        </Button>
      </div>
    </form>
  );
}
