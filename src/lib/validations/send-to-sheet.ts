import { z } from "zod";

export const sendToSheetSchema = z.object({
  sheetId: z
    .string()
    .min(10, "Sheet ID is required")
    .max(100, "Sheet ID is invalid"),
  tabName: z
    .string()
    .min(1, "Tab name is required")
    .max(100, "Tab name is too long")
    .regex(/^[A-Za-z0-9 _-]+$/, "Tab name contains invalid characters"),
  data: z
    .record(z.string(), z.union([z.string(), z.number(), z.boolean()]))
    .refine((data) => Object.keys(data).length > 0, {
      message: "At least one data field is required",
    })
    .refine((data) => Object.keys(data).length <= 50, {
      message: "Too many data fields",
    }),
});

export type SendToSheetPayload = z.infer<typeof sendToSheetSchema>;
