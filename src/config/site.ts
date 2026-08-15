import { profile } from './profile';

export const siteConfig = {
  name: profile.name,
  shortName: profile.name,
  description: profile.bio,
  email: profile.email,
  socialImage: null as string | null,
  languageTag: 'en',
  openGraphLocale: 'en_US',
} as const;
