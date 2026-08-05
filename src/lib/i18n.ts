import { siteConfig, type Locale } from '../config/site';

export const supportedLocales = Object.keys(siteConfig.locales) as Locale[];

export function selectLocale(languages: readonly string[]): Locale {
  for (const language of languages) {
    const primary = language.toLowerCase().split('-')[0];
    if (supportedLocales.includes(primary as Locale)) return primary as Locale;
  }

  return siteConfig.defaultLocale;
}

export function withBase(path: string, base = '/'): string {
  const normalizedBase = `/${base}`.replace(/\/+/g, '/').replace(/\/$/, '');
  const normalizedPath = `/${path}`.replace(/\/+/g, '/');
  return `${normalizedBase}${normalizedPath}` || '/';
}

export function localePath(locale: Locale, path = '/', base = '/'): string {
  return withBase(`/${locale}/${path}`, base).replace(/\/+/g, '/');
}
