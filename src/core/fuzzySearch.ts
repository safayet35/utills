/**
 * Perform an advanced lightweight fuzzy search on an array of objects.
 * Supports multiple keys, nested keys (dot-notation), case sensitivity,
 * and partial fuzzy matching.
 *
 * Design decision:
 * - `keys` is OPTIONAL.
 *   If not provided, all enumerable values of the object are searched.
 *   This keeps the API flexible while allowing strict control when needed.
 *
 * @example
 * fuzzySearch(users, "john", { keys: ["name", "email"] });
 *
 * @example
 * fuzzySearch(posts, "react", { keys: ["author.name", "title"] });
 */
export function fuzzySearch<T extends Record<string, any>>(
  list: T[],
  query: string,
  options?: {
    keys?: string[];
    caseSensitive?: boolean;
    threshold?: number;
  }
): T[] {
  if (!Array.isArray(list)) {
    throw new TypeError("fuzzySearch: list must be an array");
  }

  if (typeof query !== "string") {
    throw new TypeError("fuzzySearch: query must be a string");
  }

  const {
    keys,
    caseSensitive = false,
    threshold = 0.4,
  } = options || {};

  if (typeof threshold !== "number" || threshold < 0 || threshold > 1) {
    throw new TypeError("fuzzySearch: threshold must be between 0 and 1");
  }

  if (query.trim() === "") return list;

  const normalize = (value: string) =>
    caseSensitive ? value : value.toLowerCase();

  const normalizedQuery = normalize(query);

  function getValueByPath(obj: any, path: string): string {
    return path
      .split(".")
      .reduce((acc, key) => (acc != null ? acc[key] : undefined), obj) ?? "";
  }

  function similarity(a: string, b: string): number {
    let matches = 0;
    const len = Math.max(a.length, b.length);

    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] === b[i]) matches++;
    }

    return len === 0 ? 0 : matches / len;
  }

  return list.filter((item) => {
    const values: string[] = keys
      ? keys.map((key) => String(getValueByPath(item, key)))
      : Object.values(item).map((v) => String(v));

    return values.some((value) => {
      const source = normalize(value);
      if (source.includes(normalizedQuery)) return true;
      return similarity(source, normalizedQuery) >= threshold;
    });
  });
}