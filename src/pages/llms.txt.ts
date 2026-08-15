import type { APIRoute } from 'astro';
import { profile } from '../config/profile';
import { siteConfig } from '../config/site';
import { withBase } from '../lib/paths';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://example.com');
  const profileUrl = new URL(withBase('/', import.meta.env.BASE_URL), origin);
  const body = [
    `# ${siteConfig.name}`,
    ``,
    `> ${siteConfig.description}`,
    ``,
    profile.bio,
    ``,
    `## Profile`,
    ``,
    `- [Profile links](${profileUrl.href}): ${siteConfig.description}`,
    ``,
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
