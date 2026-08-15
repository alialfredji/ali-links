export const themeValues = ['light', 'dark'] as const;

export type Theme = (typeof themeValues)[number];

export function parseTheme(value: string | null): Theme | null {
  return value === 'light' || value === 'dark' ? value : null;
}
