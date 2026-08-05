import { describe, expect, it } from 'vitest';
import { localePath, selectLocale, withBase } from '../src/lib/i18n';

describe('locale routing', () => {
  it('selects Swedish from regional browser preferences', () => {
    expect(selectLocale(['sv-SE', 'en-US'])).toBe('sv');
  });

  it('falls back to English for unsupported languages', () => {
    expect(selectLocale(['de-DE'])).toBe('en');
  });

  it('keeps paths inside a GitHub Pages base', () => {
    expect(localePath('sv', '/', '/project/')).toBe('/project/sv/');
    expect(withBase('/favicon.svg', '/project/')).toBe('/project/favicon.svg');
  });
});
