import { describe, expect, it } from 'vitest';

import { shouldLoadAnalytics } from '../src/lib/analytics';

const productionHostname = 'ali.alfredji.com';
const measurementId = 'G-0H1WJFH61B';

describe('shouldLoadAnalytics', () => {
  it('loads on the production host in a production build', () => {
    expect(
      shouldLoadAnalytics({
        isProduction: true,
        hostname: productionHostname,
        productionHostname,
        measurementId,
      }),
    ).toBe(true);
  });

  it('stays off during development', () => {
    expect(
      shouldLoadAnalytics({
        isProduction: false,
        hostname: productionHostname,
        productionHostname,
        measurementId,
      }),
    ).toBe(false);
  });

  it('stays off for local and placeholder build origins', () => {
    for (const hostname of ['localhost', 'example.com', undefined]) {
      expect(
        shouldLoadAnalytics({
          isProduction: true,
          hostname,
          productionHostname,
          measurementId,
        }),
      ).toBe(false);
    }
  });

  it('stays off when no measurement id is configured', () => {
    expect(
      shouldLoadAnalytics({
        isProduction: true,
        hostname: productionHostname,
        productionHostname,
        measurementId: '',
      }),
    ).toBe(false);
  });
});
