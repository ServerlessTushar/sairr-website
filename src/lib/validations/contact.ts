import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number is too long")
    .regex(/^[+\d\s-]+$/, "Please enter a valid phone number"),
  planningFor: z
    .string()
    .min(2, "Please tell us who you're planning for")
    .max(200, "Response is too long"),
  destination: z
    .string()
    .min(2, "Please share where you'd like to travel")
    .max(200, "Response is too long"),
  message: z.string().max(1000, "Message is too long").optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
