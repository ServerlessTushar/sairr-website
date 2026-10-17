import { z } from "zod";

const cellValue = z.union([z.string(), z.number(), z.boolean()]);

export const sendToSheetSchema = z.object({
  /** Omit to use `GOOGLE_SHEET_ID` from server env (default for site forms). */
  sheetId: z
    .string()
    .min(10, "Sheet ID is invalid")
    .max(100, "Sheet ID is invalid")
    .optional(),
  tabName: z
    .string()
    .min(1, "Tab name is required")
    .max(100, "Tab name is too long")
    .regex(/^[A-Za-z0-9 _-]+$/, "Tab name contains invalid characters"),
  values: z
    .array(cellValue)
    .min(1, "At least one cell value is required")
    .max(50, "Too many columns"),
  columns: z
    .string()
    .regex(/^A:[A-Z]{1,3}$/, "Invalid column range")
    .optional(),
});

export type SendToSheetPayload = z.infer<typeof sendToSheetSchema>;
