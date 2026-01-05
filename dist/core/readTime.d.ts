/**
 * Calculate estimated reading time for a given text.
 *
 * @example
 * readTime("This is a short blog post");
 *
 * @example
 * readTime(["This", "is", "also", "valid"], { wordsPerMinute: 180 });
 */
export declare function readTime(input: string | string[], options?: {
    wordsPerMinute?: number;
}): {
    words: number;
    minutes: number;
    text: string;
};
//# sourceMappingURL=readTime.d.ts.map