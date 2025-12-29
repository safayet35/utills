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
export function truncate(
  str: string,
  length: number,
  options: { omission?: string; separator?: string | RegExp } = {}
): string {
  if (typeof str !== 'string') {
    throw new TypeError('Expected input to be a string.');
  }
  if (length < 0) {
    throw new TypeError('Expected length to be a non-negative number.');
  }

  const { omission = '...', separator } = options;

  if (str.length <= length) {
    return str;
  }

  const lengthWithoutOmission = length - omission.length;

  // If the omission itself is longer than or equal to the target length, 
  // we strictly return the omission truncated to fit, or standard behavior.
  // Here we opt to return the omission formatted to length if text space is zero or less.
  if (lengthWithoutOmission <= 0) {
    return omission.slice(0, length);
  }

  let result = str.slice(0, lengthWithoutOmission);

  if (separator) {
    const lastIndex = result.search(new RegExp(separator instanceof RegExp ? separator : new RegExp(separator, 'g')));
    
    // Using lastIndexOf for string separator or match logic for RegExp
    // To be robust and simple: if separator is string, find last occurrence
    if (typeof separator === 'string') {
      const index = result.lastIndexOf(separator);
      if (index > -1) {
        result = result.slice(0, index);
      }
    } else if (separator instanceof RegExp) {
       // For RegExp, we need to find the last match in the sliced string.
       // A simple approach is matching all and taking the last valid ending.
       const match = result.match(separator);
       // This is complex to do perfectly efficiently for all RegExps without over-engineering.
       // Simpler "robust" approach for util: check if the end of 'result' breaks the separator pattern?
       // Let's stick to standard behavior: if separator provided, we try to cut at the last occurrence of it.
       // Iterating match exec is safest.
       let lastMatchIndex = -1;
       let matchResult;
       // Reset global index if global flag is set, though we are creating new RegExp often not needed if local
       // Clone regex to ensure global flag for iteration or simply use string match
       const globalRegex = new RegExp(separator, separator.flags.includes('g') ? separator.flags : separator.flags + 'g');
       while ((matchResult = globalRegex.exec(result)) !== null) {
         lastMatchIndex = matchResult.index;
       }
       
       if (lastMatchIndex > -1) {
         result = result.slice(0, lastMatchIndex);
       }
    }
  }

  return result + omission;
}