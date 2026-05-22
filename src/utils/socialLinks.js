export function normalizeSocialLinks(links) {
  return Object.entries(links).map(([type, href]) => ({
    type,
    href,
    isAvailable: Boolean(href),
  }));
}
