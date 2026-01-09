type PublicEnv = {
  /** Public site origin used for metadata, robots, sitemap, etc. Example: https://example.com */
  baseUrl: string;
  /** GA4 Measurement ID (e.g. G-XXXXXXXXXX). Optional. */
  gaId?: string;
};

const FALLBACK_BASE_URL = "https://sriram-boddeda.github.io";

const normalizeBaseUrl = (value: string) => value.replace(/\/+$/, "");

const readOptional = (value: string | undefined): string | undefined => {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
};

export const env: PublicEnv = {
  baseUrl: normalizeBaseUrl(
    readOptional(process.env.NEXT_PUBLIC_BASE_URL) ?? FALLBACK_BASE_URL
  ),
  gaId: readOptional(process.env.NEXT_PUBLIC_GA_ID),
};
