import { z } from "zod";

const utmField = z.string().max(200).optional();

export const contactUsTopicOptions = [
  "Planning a trip",
  "Question about Sairr",
  "Partnership or collaboration",
  "Careers",
  "Something else",
] as const;

export type ContactUsTopic = (typeof contactUsTopicOptions)[number];

export const howDidYouHearOptions = [
  "Instagram",
  "Facebook",
  "Google",
  "YouTube",
  "Friend or family",
  "An online ad",
  "Other",
] as const;

export type HowDidYouHear = (typeof howDidYouHearOptions)[number];

export const contactUsFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit WhatsApp number"),
  email: z
    .string()
    .max(200, "Email is too long")
    .refine(
      (val) => val === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      { message: "Please enter a valid email address" },
    )
    .optional(),
  topic: z
    .string()
    .min(1, "Please select a topic")
    .refine(
      (val) =>
        (contactUsTopicOptions as readonly string[]).includes(val),
      { message: "Please select a valid topic" },
    ),
  message: z.string().max(1000, "Message is too long").optional(),

  // --- hidden / reserved fields ---
  numberOfTravellers: z
    .number({ invalid_type_error: "Please enter a valid number" })
    .int()
    .positive()
    .max(999)
    .optional(),
  preferredDate: z.string().max(50).optional(), // ISO date string from date picker
  howDidYouHear: z
    .string()
    .max(100)
    .refine(
      (val) =>
        val === "" ||
        (howDidYouHearOptions as readonly string[]).includes(val),
      { message: "Please select a valid option" },
    )
    .optional(),

  // UTM
  utm_source: utmField,
  utm_medium: utmField,
  utm_id: utmField,
  utm_content: utmField,
  utm_term: utmField,
  utm_campaign: utmField,
});

export type ContactUsFormFieldValues = z.input<typeof contactUsFormSchema>;
export type ContactUsFormData = z.output<typeof contactUsFormSchema>;

export function buildContactUsFormDefaults(): ContactUsFormFieldValues {
  return {
    name: "",
    phone: "",
    email: "",
    topic: "",
    message: "",
    numberOfTravellers: undefined,
    preferredDate: "",
    howDidYouHear: "",
  };
}
