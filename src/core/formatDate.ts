/**
 * Formats a date object, timestamp, or string into a specific pattern.
 * Supports escaping text within square brackets (e.g., "[Year]: YYYY").
 *
 * Supported tokens:
 * - YYYY: Full year (2023)
 * - YY: 2-digit year (23)
 * - MM: Month padded (01-12)
 * - M: Month (1-12)
 * - DD: Day padded (01-31)
 * - D: Day (1-31)
 * - HH: 24-hour padded (00-23)
 * - H: 24-hour (0-23)
 * - hh: 12-hour padded (01-12)
 * - h: 12-hour (1-12)
 * - mm: Minutes padded (00-59)
 * - ss: Seconds padded (00-59)
 * - a: AM/PM marker
 *
 * @param {Date | string | number} date - The date to format.
 * @param {string} pattern - The format string. Use [] to escape text.
 * @returns {string} The formatted date string.
 * @throws {TypeError} If the input date is invalid.
 *
 * @example
 * formatDate(new Date(), "YYYY-MM-DD"); // "2023-10-25"
 * formatDate(new Date(), "[Year:] YYYY"); // "Year: 2023"
 */
export function formatDate(date: Date | string | number, pattern: string): string {
  const d = new Date(date);

  if (isNaN(d.getTime())) {
    throw new TypeError("Invalid date provided");
  }

  const map: Record<string, string | number> = {
    YYYY: d.getFullYear(),
    YY: String(d.getFullYear()).slice(-2),
    MM: String(d.getMonth() + 1).padStart(2, "0"),
    M: d.getMonth() + 1,
    DD: String(d.getDate()).padStart(2, "0"),
    D: d.getDate(),
    HH: String(d.getHours()).padStart(2, "0"),
    H: d.getHours(),
    hh: String(d.getHours() % 12 || 12).padStart(2, "0"),
    h: d.getHours() % 12 || 12,
    mm: String(d.getMinutes()).padStart(2, "0"),
    ss: String(d.getSeconds()).padStart(2, "0"),
    a: d.getHours() >= 12 ? "PM" : "AM",
  };

  // Regex logic:
  // 1. Match anything inside brackets: \[([^\]]+)] -> Capture group 1 is the content
  // 2. OR match date tokens: YYYY|YY|...
  const regex = /\[([^\]]+)]|YYYY|YY|MM|M|DD|D|HH|H|hh|h|mm|ss|a/g;

  return pattern.replace(regex, (match, escapedText) => {
    // If we matched [text], escapedText will be "text". Return it directly.
    if (escapedText) {
      return escapedText;
    }
    // Otherwise it's a token, replace it from map
    return String(map[match]);
  });
}