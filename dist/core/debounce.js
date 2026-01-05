/**
 * Creates a debounced version of a function that delays its execution.
 * Useful for optimizing frequent events like search input, resize, or scroll.
 *
 * @example
 * const debouncedFn = debounce((value: string) => {
 *   console.log(value);
 * }, 300);
 *
 * debouncedFn("hello");
 */
export function debounce(fn, delay) {
    if (typeof fn !== "function") {
        throw new TypeError("debounce: fn must be a function");
    }
    if (typeof delay !== "number" || delay < 0) {
        throw new TypeError("debounce: delay must be a non-negative number");
    }
    let timer = null;
    let lastArgs = null;
    const debounced = (...args) => {
        lastArgs = args;
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            timer = null;
            if (lastArgs) {
                fn(...lastArgs);
                lastArgs = null;
            }
        }, delay);
    };
    debounced.cancel = () => {
        if (timer) {
            clearTimeout(timer);
            timer = null;
            lastArgs = null;
        }
    };
    debounced.flush = () => {
        if (timer && lastArgs) {
            clearTimeout(timer);
            fn(...lastArgs);
            timer = null;
            lastArgs = null;
        }
    };
    return debounced;
}
//# sourceMappingURL=debounce.js.map