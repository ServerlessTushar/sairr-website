export const UTM_PARAM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_id",
  "utm_content",
  "utm_term",
  "utm_campaign",
] as const;

export type UtmParamKey = (typeof UTM_PARAM_KEYS)[number];
export type UtmParams = Partial<Record<UtmParamKey, string>>;

const STORAGE_KEY = "sairr_utm_params";

export function captureUtmParams(searchParams: URLSearchParams) {
  if (typeof window === "undefined") {
    return;
  }

  const fromUrl: UtmParams = {};

  for (const key of UTM_PARAM_KEYS) {
    const value = searchParams.get(key)?.trim();
    if (value) {
      fromUrl[key] = value;
    }
  }

  if (Object.keys(fromUrl).length > 0) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
  }
}

export function getStoredUtmParams(): UtmParams {
  if (typeof window === "undefined") {
    return {};
  }

  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return {};
    }

    const parsed = JSON.parse(raw) as UtmParams;
    return UTM_PARAM_KEYS.reduce<UtmParams>((accumulator, key) => {
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
