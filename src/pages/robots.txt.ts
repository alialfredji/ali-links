import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://example.com');
  const sitemap = new URL(
    'sitemap-index.xml',
    new URL(import.meta.env.BASE_URL, origin),
  );
  const body = [
    `User-agent: *`,
    `Allow: /`,
    ``,
    `Sitemap: ${sitemap.href}`,
    ``,
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
