export function serializeQueryParams(params: Record<string, any>): string {
  return new URLSearchParams(params).toString();
}

export function getURLHostname(url: string): string {
  return new URL(url).hostname;
}
