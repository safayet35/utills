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
export function sortBy<T>(
  array: T[],
  iteratee: string | ((item: T) => any) | null = null,
  options: { order?: 'asc' | 'desc' } = {}
): T[] {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array');
  }

  const { order = 'asc' } = options;
  const direction = order === 'desc' ? -1 : 1;

  // Helper to retrieve value from a path string
  const get = (obj: any, path: string): any => {
    return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
  };

  return [...array].sort((a, b) => {
    let valA: any;
    let valB: any;

    if (typeof iteratee === 'function') {
      valA = iteratee(a);
      valB = iteratee(b);
    } else if (typeof iteratee === 'string') {
      valA = get(a, iteratee);
      valB = get(b, iteratee);
    } else {
      valA = a;
      valB = b;
    }

    // Handle null/undefined values (push to bottom typically, or treat as regular comparison)
    // Here we treat them as less than others to keep logic simple and consistent
    if (valA === valB) return 0;
    if (valA === null || valA === undefined) return 1 * direction;
    if (valB === null || valB === undefined) return -1 * direction;

    // Standard string/number comparison
    if (typeof valA === 'string' && typeof valB === 'string') {
      return valA.localeCompare(valB) * direction;
    }

    return (valA < valB ? -1 : 1) * direction;
  });
}