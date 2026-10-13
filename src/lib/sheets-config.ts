export function getContactSheetConfig() {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const tabName = process.env.GOOGLE_SHEET_TAB_NAME ?? "Leads";

  if (!sheetId) {
    return null;
  }

  return { sheetId, tabName };
}

export function getContactUsSheetConfig() {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const tabName = process.env.GOOGLE_SHEET_CONTACT_US_TAB ?? "ContactUs";

  if (!sheetId) {
    return null;
  }

  return { sheetId, tabName };
}
