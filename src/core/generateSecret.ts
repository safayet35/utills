/**
 * Generate a cryptographically secure secret token
 *
 * @example
 * generateSecret()
 * generateSecret(32)
 * generateSecret(64)
 */
export function generateSecret(length: number = 32): string {
  if (length <= 0) {
    throw new Error("generateSecret: length must be greater than 0")
  }

  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  const charsetLength = charset.length

  // Browser & Node compatible crypto
  const cryptoObj =
    typeof crypto !== "undefined"
      ? crypto
      : // @ts-ignore
        require("crypto").webcrypto

  const randomValues = new Uint32Array(length)
  cryptoObj.getRandomValues(randomValues)

  let secret = ""
  for (let i = 0; i < length; i++) {
    secret += charset[randomValues[i] % charsetLength]
  }

  return secret
}