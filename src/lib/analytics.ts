export interface AnalyticsContext {
  isProduction: boolean;
  hostname: string | undefined;
  productionHostname: string;
  measurementId: string;
}

export function shouldLoadAnalytics({
  isProduction,
  hostname,
  productionHostname,
  measurementId,
}: AnalyticsContext) {
  if (!isProduction) return false;
  if (!measurementId) return false;

  return hostname === productionHostname;
}
