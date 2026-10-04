import { NextResponse } from "next/server";
import { appendRowToSheet, isGoogleSheetsConfigured } from "@/lib/google-sheets";
import { contactUsFormSchema } from "@/lib/validations/contact-us";

const CONTACT_US_TAB = "ContactUs";

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

    const sheetId = process.env.GOOGLE_SHEET_ID;
    if (!sheetId) {
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
      sheetId,
      tabName: CONTACT_US_TAB,
      values: [
        data.name,
        data.phone,
        data.email ?? "",
        data.topic,
        data.message ?? "",
        // reserved hidden fields
        data.numberOfTravellers != null ? String(data.numberOfTravellers) : "",
        data.preferredDate ?? "",
        data.howDidYouHear ?? "",
        // UTM
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
