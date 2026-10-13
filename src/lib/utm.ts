/** Query params captured on landing and sent with lead forms. */
export const ATTRIBUTION_PARAM_KEYS = [
  "utm_source",
  "utm_subsource",
  "utm_medium",
  "utm_id",
  "utm_content",
  "utm_term",
  "utm_campaign",
  "gclid",
  "fbclid",
  "ad_id",
  "adset_id",
  "campaign_id",
  "ad_name",
  "adset_name",
  "campaign_name",
  "placement",
  "site_source_name",
] as const;

/** @deprecated Use ATTRIBUTION_PARAM_KEYS — kept for callers that only reference UTMs */
export const UTM_PARAM_KEYS = [
  "utm_source",
  "utm_subsource",
  "utm_medium",
  "utm_id",
  "utm_content",
  "utm_term",
  "utm_campaign",
] as const;

export type AttributionParamKey = (typeof ATTRIBUTION_PARAM_KEYS)[number];
export type UtmParamKey = (typeof UTM_PARAM_KEYS)[number];
export type AttributionParams = Partial<Record<AttributionParamKey, string>>;
export type UtmParams = AttributionParams;

const STORAGE_KEY = "sairr_utm_params";

function readStoredAttributionParams(): AttributionParams {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {};
    }

    const parsed = JSON.parse(raw) as AttributionParams;
    return ATTRIBUTION_PARAM_KEYS.reduce<AttributionParams>((accumulator, key) => {
      const value = parsed[key]?.trim();
      if (value) {
        accumulator[key] = value;
      }
      return accumulator;
    }, {});
  } catch {
    return {};
  }
}

export function captureUtmParams(searchParams: URLSearchParams) {
  if (typeof window === "undefined") {
    return;
  }

  const fromUrl: AttributionParams = {};

  for (const key of ATTRIBUTION_PARAM_KEYS) {
    const value = searchParams.get(key)?.trim();
    if (value) {
      fromUrl[key] = value;
    }
  }

  if (Object.keys(fromUrl).length === 0) {
    return;
  }

  const merged = { ...readStoredAttributionParams(), ...fromUrl };
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
}

export function getStoredUtmParams(): AttributionParams {
  return readStoredAttributionParams();
}
