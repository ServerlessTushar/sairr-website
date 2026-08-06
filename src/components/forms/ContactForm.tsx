"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send } from "lucide-react";
import {
  contactFormSchema,
  type ContactFormData,
} from "@/lib/validations/contact";
import { contactLeadsSheet } from "@/data/sheets";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

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
      const response = await fetch("/api/send-data-to-sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          sheetId: contactLeadsSheet.sheetId,
          tabName: contactLeadsSheet.tabName,
          data: {
            Timestamp: new Date().toISOString(),
            Name: data.name,
            Phone: data.phone,
            "Planning For": data.planningFor,
            Destination: data.destination,
            Message: data.message ?? "",
          },
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          placeholder="Your name"
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        {errors.name && (
          <p className="text-sm text-destructive">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Phone</Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+91 98765 43210"
          aria-invalid={!!errors.phone}
          {...register("phone")}
        />
        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="planningFor">Who are you planning for?</Label>
        <Input
          id="planningFor"
          placeholder="e.g. My parents, age 65 and 70"
          aria-invalid={!!errors.planningFor}
          {...register("planningFor")}
        />
        {errors.planningFor && (
          <p className="text-sm text-destructive">
            {errors.planningFor.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="destination">Where would you like to travel?</Label>
        <Input
          id="destination"
          placeholder="e.g. Puri, Kerala, or open to suggestions"
          aria-invalid={!!errors.destination}
          {...register("destination")}
        />
        {errors.destination && (
          <p className="text-sm text-destructive">
            {errors.destination.message}
          </p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">
          Anything you&apos;d like us to know?{" "}
          <span className="text-muted-foreground">(optional)</span>
        </Label>
        <Textarea
          id="message"
          placeholder="Dietary needs, mobility requirements, preferred dates..."
          rows={4}
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-brand hover:bg-brand-dark"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Enquiry
          </>
        )}
      </Button>
    </form>
  );
}
