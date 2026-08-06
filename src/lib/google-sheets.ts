import { google } from "googleapis";

type SheetCredentials = {
  clientEmail: string;
  privateKey: string;
};

function getCredentials(): SheetCredentials | null {
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(
    /\\n/g,
    "\n",
  );

  if (!clientEmail || !privateKey) {
    return null;
  }

  return { clientEmail, privateKey };
}

export function isGoogleSheetsConfigured(): boolean {
  return getCredentials() !== null;
}

export async function appendRowToSheet({
  sheetId,
  tabName,
  values,
}: {
  sheetId: string;
  tabName: string;
  values: (string | number | boolean)[];
}) {
  const credentials = getCredentials();

  if (!credentials) {
    throw new Error(
      "Google Sheets is not configured. Set GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.",
    );
  }

  const auth = new google.auth.JWT({
    email: credentials.clientEmail,
    key: credentials.privateKey,
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });

  const sheets = google.sheets({ version: "v4", auth });

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: `${tabName}!A:Z`,
    valueInputOption: "USER_ENTERED",
    insertDataOption: "INSERT_ROWS",
    requestBody: {
      values: [values],
    },
  });
}
