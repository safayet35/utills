/**
 * Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds.
 * The throttled function comes with a `cancel` method to cancel delayed `func` invocations.
 *
 * @template T
 * @param {T} func - The function to throttle.
 * @param {number} wait - The number of milliseconds to throttle invocations to.
 * @param {object} [options={}] - The options object.
 * @param {boolean} [options.leading=true] - Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true] - Specify invoking on the trailing edge of the timeout.
 * @returns {((...args: Parameters<T>) => void) & { cancel: () => void }} Returns the new throttled function.
 * @throws {TypeError} If `func` is not a function.
 *
 * @example
 * const updatePosition = (x, y) => console.log(x, y);
 * const throttledUpdate = throttle(updatePosition, 100);
 *
 * // Invoke repeatedly
 * throttledUpdate(1, 2);
 * throttledUpdate(3, 4);
 * // => Logs "1, 2" immediately (leading edge)
 * // => Logs "3, 4" after 100ms (trailing edge)
 */
export declare function throttle<T extends (...args: any[]) => any>(func: T, wait: number, options?: {
    leading?: boolean;
    trailing?: boolean;
}): ((...args: Parameters<T>) => void) & {
    cancel: () => void;
};
//# sourceMappingURL=throttle.d.ts.map