// Server-side (SSR / Server Components): call the API directly — no CORS issue.
// Client-side (browser): requests go to /api-proxy which Next.js rewrites to the
// actual API URL server-to-server, completely avoiding browser CORS restrictions.
const isServer = typeof window === 'undefined';

const rawApiUrl = isServer
  ? process.env.NEXT_PUBLIC_NIGHTMARKET_API_URL?.trim()
  : '/api-proxy/api';

if (!rawApiUrl) {
  throw new Error(
    'Missing NIGHTMARKET_API_INTERNAL_URL. Define it in .env.local and restart the Next.js server.'
  );
}

export const API_URL = isServer ? rawApiUrl.replace(/\/+$/, '') : '/api-proxy';
