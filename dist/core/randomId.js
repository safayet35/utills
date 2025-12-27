const DEFAULT_CHARSET = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const SAFE_CHARSET = "abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ23456789";
/**
 * Generate a secure random ID
 *
 * @example
 * randomId()
 * randomId({ length: 10 })
 * randomId({ length: 12, safe: true })
 */
export function randomId(options = {}) {
    const { length = 16, charset = options.safe ? SAFE_CHARSET : DEFAULT_CHARSET, } = options;
    if (length <= 0) {
        throw new Error("randomId: length must be greater than 0");
    }
    const charsLength = charset.length;
    let result = "";
    // Browser & Node compatible crypto
    const cryptoObj = typeof crypto !== "undefined"
        ? crypto
        : // @ts-ignore
            require("crypto").webcrypto;
    const randomValues = new Uint32Array(length);
    cryptoObj.getRandomValues(randomValues);
    for (let i = 0; i < length; i++) {
        result += charset[randomValues[i] % charsLength];
    }
    return result;
}
//# sourceMappingURL=randomId.js.map