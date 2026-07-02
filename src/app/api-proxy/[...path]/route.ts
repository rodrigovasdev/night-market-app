import { NextRequest, NextResponse } from 'next/server';

const API_INTERNAL_URL = (process.env.NEXT_PUBLIC_NIGHTMARKET_API_URL ?? '').replace(/\/+$/, '');

async function proxyRequest(request: NextRequest, params: Promise<{ path: string[] }>) {
  const { path } = await params;
  const targetUrl = `${API_INTERNAL_URL}/${path.join('/')}${request.nextUrl.search}`;

  const upstreamHeaders = new Headers(request.headers);
  // Bypass the ngrok browser interstitial page (ERR_NGROK_6024)
  upstreamHeaders.set('ngrok-skip-browser-warning', 'true');
  upstreamHeaders.delete('host');

  const init: RequestInit = {
    method: request.method,
    headers: upstreamHeaders,
  };

  if (!['GET', 'HEAD'].includes(request.method)) {
    init.body = request.body;
    (init as { duplex?: string }).duplex = 'half';
  }

  const upstream = await fetch(targetUrl, init);

  const responseHeaders = new Headers(upstream.headers);
  // Remove hop-by-hop headers
  responseHeaders.delete('transfer-encoding');

  return new NextResponse(upstream.body, {
    status: upstream.status,
    headers: responseHeaders,
  });
}

export const GET = (req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) => proxyRequest(req, ctx.params);
export const POST = (req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) => proxyRequest(req, ctx.params);
export const PUT = (req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) => proxyRequest(req, ctx.params);
export const PATCH = (req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) => proxyRequest(req, ctx.params);
export const DELETE = (req: NextRequest, ctx: { params: Promise<{ path: string[] }> }) => proxyRequest(req, ctx.params);
