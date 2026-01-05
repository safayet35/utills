/**
 * Sorts an array of items based on a property, a dot-notation path, or a custom getter function.
 * Returns a new array, leaving the original unmodified.
 *
 * @template T
 * @param {T[]} array - The array to sort.
 * @param {string | ((item: T) => any) | null} [iteratee=null] - The property to sort by. Can be a key, a dot-path string (e.g., 'user.name'), or a getter function. If null/undefined, sorts by the items themselves.
 * @param {object} [options={}] - Configuration options.
 * @param {('asc'|'desc')} [options.order='asc'] - The sort order.
 * @returns {T[]} A new sorted array.
 * @throws {TypeError} If the first argument is not an array.
 *
 * @example
 * // Sort primitives
 * sortBy([3, 1, 2]); // [1, 2, 3]
 *
 * // Sort objects by key
 * sortBy(users, 'age', { order: 'desc' });
 *
 * // Sort by nested property
 * sortBy(users, 'address.city');
 *
 * // Sort by custom function
 * sortBy(items, (item) => item.price * item.quantity);
 */
export declare function sortBy<T>(array: T[], iteratee?: string | ((item: T) => any) | null, options?: {
    order?: 'asc' | 'desc';
}): T[];
//# sourceMappingURL=sortBy.d.ts.map