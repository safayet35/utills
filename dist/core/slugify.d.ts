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
export declare function slugify(str: string, options?: {
    separator?: string;
    lowercase?: boolean;
}): string;
//# sourceMappingURL=slugify.d.ts.map