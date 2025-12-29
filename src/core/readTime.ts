/**
 * Calculate estimated reading time for a given text.
 *
 * @example
 * readTime("This is a short blog post");
 *
 * @example
 * readTime(["This", "is", "also", "valid"], { wordsPerMinute: 180 });
 */
export function readTime(
  input: string | string[],
  options?: { wordsPerMinute?: number }
): { words: number; minutes: number; text: string } {
  if (typeof input !== "string" && !Array.isArray(input)) {
    throw new TypeError("readTime: input must be a string or an array of strings");
  }

  const wordsPerMinute =
    options?.wordsPerMinute ?? 200;

  if (typeof wordsPerMinute !== "number" || wordsPerMinute <= 0) {
    throw new TypeError("readTime: wordsPerMinute must be a positive number");
  }

  const text =
    Array.isArray(input) ? input.join(" ") : input;

  if (text.trim().length === 0) {
    return { words: 0, minutes: 0, text: "0 min read" };
  }

  const words = text.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.ceil(words / wordsPerMinute));

  return {
    words,
    minutes,
    text: `${minutes} min read`,
  };
}