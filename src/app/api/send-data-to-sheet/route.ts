import { NextResponse } from "next/server";
import { appendRowToSheet, isGoogleSheetsConfigured } from "@/lib/google-sheets";
import { sendToSheetSchema } from "@/lib/validations/send-to-sheet";

function getAllowedSheetIds(): string[] | null {
  const value = process.env.GOOGLE_ALLOWED_SHEET_IDS;

  if (!value) {
    return null;
  }

  return value
    .split(",")
    .map((id) => id.trim())
    .filter(Boolean);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = sendToSheetSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid request",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { sheetId, tabName, data } = parsed.data;

    const allowedSheetIds = getAllowedSheetIds();
    if (allowedSheetIds && !allowedSheetIds.includes(sheetId)) {
      return NextResponse.json(
        { success: false, error: "Sheet ID is not allowed" },
        { status: 403 },
      );
    }

    if (!isGoogleSheetsConfigured()) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Google Sheets is not configured yet. Add service account credentials to your environment.",
        },
        { status: 503 },
      );
    }

    const row = Object.values(data).map((value) =>
      typeof value === "boolean" ? String(value) : value,
    );

    await appendRowToSheet({
      sheetId,
      tabName,
      values: row,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("send-data-to-sheet error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to write data to Google Sheet",
      },
      { status: 500 },
    );
  }
}
