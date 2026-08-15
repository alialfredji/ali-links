export function withBase(path: string, base: string) {
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  const normalizedPath = path.replace(/^\//, '');

  return `${normalizedBase}${normalizedPath}`.replace(/\/{2,}/g, '/');
}
