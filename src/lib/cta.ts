function slugifySegment(segment: string) {
  return segment
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Tracking class for lead CTAs. Use as a dedicated class on the button and pass
 * the same value to `openContactForm({ ctaClass })`. Pair with `page_url` in the sheet.
 * Segments should be unique per page (first segment is usually the page key, e.g. `home`, `puri`).
 */
export function ctaClass(...segments: string[]) {
  const slug = segments.map(slugifySegment).filter(Boolean).join("-");
  return `cta-${slug}`;
}
