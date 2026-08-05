import type { APIRoute } from 'astro';
import { siteConfig } from '../config/site';
import { translations } from '../i18n/translations';
import { localePath } from '../lib/i18n';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const origin = site ?? new URL('https://example.com');
  const en = new URL(localePath('en', '/', import.meta.env.BASE_URL), origin);
  const sv = new URL(localePath('sv', '/', import.meta.env.BASE_URL), origin);
  const body = [
    `# ${siteConfig.name}`,
    ``,
    `> ${translations.en.meta.description}`,
    ``,
    `This is the official public website for ${siteConfig.name}.`,
    ``,
    `## Languages`,
    ``,
    `- [English](${en.href}): ${translations.en.meta.description}`,
    `- [Svenska](${sv.href}): ${translations.sv.meta.description}`,
    ``,
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
