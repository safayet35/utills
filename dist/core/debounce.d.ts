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
export declare function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): {
    (...args: Parameters<T>): void;
    cancel: () => void;
    flush: () => void;
};
//# sourceMappingURL=debounce.d.ts.map