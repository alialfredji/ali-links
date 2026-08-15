import { describe, expect, it } from 'vitest';

import { withBase } from '../src/lib/paths';

describe('withBase', () => {
  it('keeps root deployments rooted', () => {
    expect(withBase('/', '/')).toBe('/');
    expect(withBase('/favicon.svg', '/')).toBe('/favicon.svg');
  });

  it('prefixes paths for subdirectory deployments', () => {
    expect(withBase('/', '/ali-links/')).toBe('/ali-links/');
    expect(withBase('/favicon.svg', '/ali-links/')).toBe(
      '/ali-links/favicon.svg',
    );
  });

  it('normalizes missing and duplicate slashes', () => {
    expect(withBase('sitemap-index.xml', '/ali-links')).toBe(
      '/ali-links/sitemap-index.xml',
    );
  });
});
