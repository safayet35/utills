/**
 * Truncates a string to a specified length, optionally adding a custom omission suffix
 * and handling word boundaries.
 *
 * @param {string} str - The string to truncate.
 * @param {number} length - The maximum length of the resulting string.
 * @param {object} [options={}] - Configuration options.
 * @param {string} [options.omission="..."] - The string to append to the truncated text.
 * @param {string|RegExp} [options.separator] - A pattern to break the string at (e.g., space) to avoid cutting words.
 * @returns {string} The truncated string.
 * @throws {TypeError} If `str` is not a string or `length` is negative.
 *
 * @example
 * truncate("Hello World", 8); // "Hello..."
 * truncate("Hello World", 8, { omission: ".." }); // "Hello .."
 * truncate("Hello World", 5, { separator: " " }); // "..." (backtracks to space)
 */
export declare function truncate(str: string, length: number, options?: {
    omission?: string;
    separator?: string | RegExp;
}): string;
//# sourceMappingURL=truncate.d.ts.map