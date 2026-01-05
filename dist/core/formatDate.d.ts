/**
 * Formats a date into a specific pattern, locale-based style, or relative time.
 * Supports internationalization (i18n) via locale codes.
 *
 * @param {Date | string | number} date - The input date.
 * @param {string} [format="medium"] - The pattern (e.g., "YYYY-MM-DD"), style ("full", "long", "medium", "short"), or "relative".
 * @param {string} [locale="en-US"] - The BCP 47 language tag (e.g., "en-US", "bn-BD").
 * @returns {string} The formatted string.
 * @throws {TypeError} If the date is invalid.
 *
 * @example
 * // Custom Pattern
 * formatDate(new Date(), "DD MMMM, YYYY", "bn-BD"); // "২৫ অক্টোবর, ২০২৩"
 *
 * // Standard Styles
 * formatDate(new Date(), "full", "en-US"); // "Wednesday, October 25, 2023"
 *
 * // Relative Time
 * formatDate(Date.now() - 3600000, "relative", "en-US"); // "1 hour ago"
 * formatDate(Date.now() - 3600000, "relative", "bn-BD"); // "১ ঘণ্টা আগে"
 */
export declare function formatDate(date: Date | string | number, format?: string, locale?: string): string;
//# sourceMappingURL=formatDate.d.ts.map