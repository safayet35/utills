/**
 * Generates a random number between a minimum and maximum value.
 * By default, returns an integer with inclusive bounds.
 *
 * @param {number} min - The minimum value (inclusive).
 * @param {number} max - The maximum value (inclusive for integers, exclusive for floats).
 * @param {object} [options={}] - Configuration options.
 * @param {boolean} [options.float=false] - If true, returns a floating-point number.
 * @returns {number} A random number between min and max.
 * @throws {TypeError} If min or max are not numbers.
 * @throws {Error} If min is greater than max.
 *
 * @example
 * random(1, 5); // Returns an integer between 1 and 5 (e.g., 3)
 * random(1.5, 5.5, { float: true }); // Returns a float (e.g., 2.74...)
 */
export function random(
  min: number,
  max: number,
  options: { float?: boolean } = {}
): number {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('Arguments "min" and "max" must be numbers.');
  }

  if (min > max) {
    throw new Error('The "min" value must be less than or equal to the "max" value.');
  }

  const { float = false } = options;

  if (float) {
    return Math.random() * (max - min) + min;
  }

  // Integer implementation (Inclusive Min, Inclusive Max)
  // Math.floor(Math.random() * (max - min + 1)) + min
  return Math.floor(Math.random() * (max - min + 1)) + min;
}