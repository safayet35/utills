/**
 * Converts a string into a URL-friendly slug.
 * Handles accents, special characters, and whitespace.
 *
 * @param {string} str - The string to convert.
 * @param {object} [options={}] - Configuration options.
 * @param {string} [options.separator="-"] - The character to separate words.
 * @param {boolean} [options.lowercase=true] - Whether to convert the string to lowercase.
 * @returns {string} The URL-friendly slug.
 * @throws {TypeError} If `str` is not a string.
 *
 * @example
 * slugify("Hello World"); // "hello-world"
 * slugify("Café & Latté"); // "cafe-latte"
 * slugify("User ID_123", { separator: "_" }); // "user_id_123"
 */
export function slugify(
  str: string,
  options: { separator?: string; lowercase?: boolean } = {}
): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  const separator = options.separator ?? '-';
  const lowercase = options.lowercase ?? true;

  // 1. Normalize unicode characters (separate accents from letters)
  // 2. Remove accents (diacritics)
  let slug = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  if (lowercase) {
    slug = slug.toLowerCase();
  }

  // 3. Replace any character that is NOT a letter or number with a space
  //    This automatically handles existing separators, special chars, emojis, etc.
  slug = slug.replace(/[^a-z0-9]/gi, ' ');

  // 4. Collapse multiple spaces into one and trim leading/trailing spaces
  slug = slug.trim().replace(/\s+/g, ' ');

  // 5. Replace spaces with the defined separator
  return slug.replace(/\s/g, separator);
}