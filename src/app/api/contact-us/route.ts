import { NextResponse } from "next/server";
import { appendRowToSheet, isGoogleSheetsConfigured } from "@/lib/google-sheets";
import { getContactUsSheetConfig } from "@/lib/sheets-config";
import {
  contactUsFormSchema,
  formatContactUsRowForSheet,
} from "@/lib/validations/contact-us";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactUsFormSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid form data",
          details: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const sheetConfig = getContactUsSheetConfig();
    if (!sheetConfig) {
      return NextResponse.json(
        { success: false, error: "GOOGLE_SHEET_ID is not configured." },
        { status: 503 },
      );
    }

    if (!isGoogleSheetsConfigured()) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Google Sheets credentials are not configured. Set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.",
        },
        { status: 503 },
      );
    }

    const data = parsed.data;

    await appendRowToSheet({
      sheetId: sheetConfig.sheetId,
      tabName: sheetConfig.tabName,
      columns: "A:J",
      values: formatContactUsRowForSheet(data),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("contact-us form error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error ? error.message : "Failed to submit enquiry",
      },
      { status: 500 },
    );
  }
}
