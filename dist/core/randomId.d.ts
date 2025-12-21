/**
 * Options for randomId generator
 */
export interface RandomIdOptions {
    /**
     * Length of the generated ID
     * @default 16
     */
    length?: number;
    /**
     * Custom characters to use
     * @default alphanumeric (a-zA-Z0-9)
     */
    charset?: string;
    /**
     * If true, removes visually confusing characters (0, O, l, I)
     * @default false
     */
    safe?: boolean;
}
/**
 * Generate a secure random ID
 *
 * @example
 * randomId()
 * randomId({ length: 10 })
 * randomId({ length: 12, safe: true })
 */
export declare function randomId(options?: RandomIdOptions): string;
