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
export declare function randomNumber(min: number, max: number, options?: {
    float?: boolean;
}): number;
//# sourceMappingURL=randomNumber.d.ts.map