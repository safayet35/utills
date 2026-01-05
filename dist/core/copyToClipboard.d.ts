/**
 * Copies a string to the system clipboard.
 * Uses the modern Clipboard API where available, with a fallback to `execCommand`
 * for older browsers or non-secure contexts.
 *
 * @param {string} text - The text to copy.
 * @returns {Promise<boolean>} Resolves to `true` if successful, `false` otherwise.
 *
 * @example
 * await copyToClipboard("Hello World");
 *
 * // Handle result
 * if (await copyToClipboard("Token")) {
 * console.log("Copied!");
 * }
 */
export declare function copyToClipboard(text: string): Promise<boolean>;
//# sourceMappingURL=copyToClipboard.d.ts.map