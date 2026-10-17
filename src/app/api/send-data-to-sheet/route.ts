import { NextResponse } from "next/server";
import { appendRowToSheet, isGoogleSheetsConfigured } from "@/lib/google-sheets";
import { sendToSheetSchema } from "@/lib/validations/send-to-sheet";

function formatSheetsApiError(error: unknown): string {
  const message =
    error instanceof Error ? error.message : "Failed to write data to Google Sheet";

  if (!/permission|PERMISSION_DENIED|403/i.test(message)) {
    return message;
  }

  const serviceAccount = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL?.trim();
  if (serviceAccount) {
    return `Google Sheets denied access. In Google Sheets, click Share and add ${serviceAccount} as Editor on the spreadsheet (ID in GOOGLE_SHEET_ID).`;
  }

  return "Google Sheets denied access. Share the spreadsheet with your service account email as Editor.";
}

function isSheetIdAllowed(sheetId: string): boolean {
  const allowed = process.env.GOOGLE_ALLOWED_SHEET_IDS;
  if (allowed) {
    return allowed
      .split(",")
      .map((id) => id.trim())
      .filter(Boolean)
      .includes(sheetId);
  }

  const primary = process.env.GOOGLE_SHEET_ID?.trim();
  return !primary || primary === sheetId;
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

    const { tabName, values, columns } = parsed.data;
    const sheetId =
      parsed.data.sheetId?.trim() || process.env.GOOGLE_SHEET_ID?.trim();

    if (!sheetId) {
      return NextResponse.json(
        { success: false, error: "GOOGLE_SHEET_ID is not configured." },
        { status: 503 },
      );
    }

    if (!isSheetIdAllowed(sheetId)) {
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
            "Google Sheets is not configured. Set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.",
        },
        { status: 503 },
      );
    }

    await appendRowToSheet({
      sheetId,
      tabName,
      values,
      columns,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("send-data-to-sheet error:", error);

    return NextResponse.json(
      {
        success: false,
        error: formatSheetsApiError(error),
      },
      { status: 500 },
    );
  }
}
