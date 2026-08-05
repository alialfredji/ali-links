export const siteConfig = {
  name: 'Your Brand',
  shortName: 'Brand',
  defaultLocale: 'en',
  email: 'hello@example.com',
  socialImage: null as string | null,
  organizationType: 'Organization',
  locales: {
    en: {
      label: 'English',
      languageTag: 'en',
      openGraphLocale: 'en_US',
    },
    sv: {
      label: 'Svenska',
      languageTag: 'sv',
      openGraphLocale: 'sv_SE',
    },
  },
} as const;

export type Locale = keyof typeof siteConfig.locales;
