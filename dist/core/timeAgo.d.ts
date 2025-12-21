/**
 * Returns human readable relative time
 *
 * @example
 * timeAgo(new Date())
 * timeAgo("2025-01-01")
 * timeAgo(1700000000000)
 */
export declare function timeAgo(date: Date | string | number, locale?: string): string;
