const rawApiUrl = process.env.NEXT_PUBLIC_NIGHTMARKET_API_URL?.trim();

if (!rawApiUrl) {
  throw new Error(
    'Missing NEXT_PUBLIC_NIGHTMARKET_API_URL. Define it in .env.local and restart the Next.js server.'
  );
}

export const API_URL = rawApiUrl.replace(/\/+$/, '');
