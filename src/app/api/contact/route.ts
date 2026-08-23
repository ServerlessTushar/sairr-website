import { NextResponse } from "next/server";
import { appendRowToSheet, isGoogleSheetsConfigured } from "@/lib/google-sheets";
import { getContactSheetConfig } from "@/lib/sheets-config";
import { contactFormSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactFormSchema.safeParse(body);

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

    const sheetConfig = getContactSheetConfig();
    if (!sheetConfig) {
      return NextResponse.json(
        {
          success: false,
          error: "GOOGLE_SHEET_ID is not configured.",
        },
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
      values: [
        data.name,
        data.phone,
        data.planningFor,
        data.destination,
        data.message ?? "",
        data.utm_source ?? "",
        data.utm_medium ?? "",
        data.utm_id ?? "",
        data.utm_content ?? "",
        data.utm_term ?? "",
        data.utm_campaign ?? "",
        new Date().toISOString(),
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("contact form error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Failed to submit enquiry",
      },
      { status: 500 },
    );
  }
}
