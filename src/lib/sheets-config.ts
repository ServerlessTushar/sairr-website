export function getContactSheetConfig() {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const tabName = process.env.GOOGLE_SHEET_TAB_NAME ?? "Leads";

  if (!sheetId) {
    return null;
  }

  return { sheetId, tabName };
}
