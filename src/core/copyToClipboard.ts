/**
 * Copies a string to the system clipboard.
 * Uses the modern Clipboard API where available, with a fallback to `execCommand`
 * for older browsers or non-secure contexts.
 *
 * @param {string} text - The text to copy.
 * @returns {Promise<boolean>} Resolves to `true` if successful, `false` otherwise.
 *
 * @example
 * await copyToClipboard("Hello World");
 *
 * // Handle result
 * if (await copyToClipboard("Token")) {
 * console.log("Copied!");
 * }
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  if (typeof window === 'undefined' || !text) {
    return false;
  }

  try {
    // 1. Try Modern Async API (Secure contexts only)
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (err) {
    // Continue to fallback if modern API fails
  }

  // 2. Fallback for older browsers or non-HTTPS contexts
  try {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    
    // Ensure the textarea is not visible but part of the DOM
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    textArea.style.top = '0';
    document.body.appendChild(textArea);
    
    textArea.focus();
    textArea.select();
    
    const successful = document.execCommand('copy');
    document.body.removeChild(textArea);
    
    return successful;
  } catch (err) {
    return false;
  }
}