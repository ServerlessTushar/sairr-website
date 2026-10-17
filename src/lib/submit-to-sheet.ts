import type { SendToSheetPayload } from "@/lib/validations/send-to-sheet";

export async function submitToGoogleSheet(
  payload: Omit<SendToSheetPayload, "sheetId"> &
    Partial<Pick<SendToSheetPayload, "sheetId">>,
) {
  const response = await fetch("/api/send-data-to-sheet", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result = (await response.json()) as {
    success?: boolean;
    error?: string;
  };

  if (!response.ok || !result.success) {
    throw new Error(result.error ?? "Failed to save to sheet");
  }
}
