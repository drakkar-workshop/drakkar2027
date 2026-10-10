const rawBase = (import.meta.env.BASE_URL ?? "/") as string;

export const BASE = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;

export function nav(path = ""): string {
  const clean = path.replace(/^\/+/, "");
  return clean ? `${BASE}${clean}` : BASE;
}
