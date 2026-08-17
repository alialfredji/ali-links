import { profile } from './profile';

export const siteConfig = {
  name: profile.name,
  shortName: profile.name,
  title: 'Ali Alfredji - Software Engineer & Product Builder',
  description:
    'Ali Alfredji is a software engineer, product builder & creator helping people and businesses build & operate better with AI.',
  email: profile.email,
  socialImage: profile.image.src.src,
  socialImageAlt: profile.image.alt,
  languageTag: 'en',
  openGraphLocale: 'en_US',
  productionHostname: 'ali.alfredji.com',
  analytics: {
    // Public GA4 measurement id; it ships in the page HTML by design.
    googleMeasurementId: 'G-0H1WJFH61B',
  },
} as const;
