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
export declare function fuzzySearch<T extends Record<string, any>>(list: T[], query: string, options?: {
    keys?: string[];
    caseSensitive?: boolean;
    threshold?: number;
}): T[];
//# sourceMappingURL=fuzzySearch.d.ts.map