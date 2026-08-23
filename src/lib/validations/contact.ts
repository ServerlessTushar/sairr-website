import { z } from "zod";

const utmField = z.string().max(200).optional();

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  planningFor: z
    .string()
    .min(2, "Please tell us who you're planning for")
    .max(200, "Response is too long"),
  destination: z
    .string()
    .min(2, "Please share where you'd like to travel")
    .max(200, "Response is too long"),
  message: z.string().max(1000, "Message is too long").optional(),
  utm_source: utmField,
  utm_medium: utmField,
  utm_id: utmField,
  utm_content: utmField,
  utm_term: utmField,
  utm_campaign: utmField,
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
