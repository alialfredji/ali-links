import { describe, expect, it } from 'vitest';
import { parseTheme } from '../src/lib/preferences';

describe('visual preferences', () => {
  it('accepts only known themes', () => {
    expect(parseTheme('light')).toBe('light');
    expect(parseTheme('dark')).toBe('dark');
    expect(parseTheme(null)).toBeNull();
    expect(parseTheme('system')).toBeNull();
    expect(parseTheme('')).toBeNull();
  });
});
