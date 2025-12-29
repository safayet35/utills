/**
 * Formats a date into a specific pattern, locale-based style, or relative time.
 * Supports internationalization (i18n) via locale codes.
 *
 * @param {Date | string | number} date - The input date.
 * @param {string} [format="medium"] - The pattern (e.g., "YYYY-MM-DD"), style ("full", "long", "medium", "short"), or "relative".
 * @param {string} [locale="en-US"] - The BCP 47 language tag (e.g., "en-US", "bn-BD").
 * @returns {string} The formatted string.
 * @throws {TypeError} If the date is invalid.
 *
 * @example
 * // Custom Pattern
 * formatDate(new Date(), "DD MMMM, YYYY", "bn-BD"); // "২৫ অক্টোবর, ২০২৩"
 *
 * // Standard Styles
 * formatDate(new Date(), "full", "en-US"); // "Wednesday, October 25, 2023"
 *
 * // Relative Time
 * formatDate(Date.now() - 3600000, "relative", "en-US"); // "1 hour ago"
 * formatDate(Date.now() - 3600000, "relative", "bn-BD"); // "১ ঘণ্টা আগে"
 */
export function formatDate(
  date: Date | string | number,
  format: string = "medium",
  locale: string = "en-US"
): string {
  const d = new Date(date);

  if (isNaN(d.getTime())) {
    throw new TypeError("Invalid date provided");
  }

  // 1. Handle "Relative" Time (e.g., "2 hours ago")
  if (format === "relative") {
    const diff = Date.now() - d.getTime();
    const isFuture = diff < 0;
    const absDiff = Math.abs(diff);
    const seconds = Math.floor(absDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);

    // Create localized relative formatter
    // Note: Intl.RelativeTimeFormat is supported in Node 12+ and all modern browsers
    const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });
    const dir = isFuture ? 1 : -1; // 1 for future ("in..."), -1 for past ("...ago")

    if (years > 0) return rtf.format(years * dir, "year");
    if (months > 0) return rtf.format(months * dir, "month");
    if (days > 0) return rtf.format(days * dir, "day");
    if (hours > 0) return rtf.format(hours * dir, "hour");
    if (minutes > 0) return rtf.format(minutes * dir, "minute");
    return rtf.format(seconds * dir, "second");
  }

  // 2. Handle Standard Intl Styles (full, long, medium, short)
  const styles = ["full", "long", "medium", "short"];
  if (styles.includes(format)) {
    return new Intl.DateTimeFormat(locale, {
      dateStyle: format as any,
      // timeStyle can be added optionally, but usually strictly requested for dates
    }).format(d);
  }

  // 3. Handle Custom Token Pattern (e.g., YYYY-MM-DD)
  // We use Intl for specific names (Months, Days) to support the locale
  const getPart = (options: Intl.DateTimeFormatOptions) =>
    new Intl.DateTimeFormat(locale, options).format(d);

  const map: Record<string, string | number> = {
    YYYY: getPart({ year: "numeric" }), // 2023 or ২০২৩ (if locale supports numberingSystem)
    YY: getPart({ year: "2-digit" }),
    MMMM: getPart({ month: "long" }),   // January / জানুয়ারি
    MMM: getPart({ month: "short" }),   // Jan / জানু
    MM: getPart({ month: "2-digit" }),  // 01
    M: getPart({ month: "numeric" }),   // 1
    dddd: getPart({ weekday: "long" }), // Monday / সোমবার
    ddd: getPart({ weekday: "short" }), // Mon / সোম
    DD: getPart({ day: "2-digit" }),    // 25
    D: getPart({ day: "numeric" }),     // 25
    HH: String(d.getHours()).padStart(2, "0"), // Keeping time ISO/numeric for patterns usually
    H: d.getHours(),
    hh: String(d.getHours() % 12 || 12).padStart(2, "0"),
    h: d.getHours() % 12 || 12,
    mm: String(d.getMinutes()).padStart(2, "0"),
    ss: String(d.getSeconds()).padStart(2, "0"),
    a: getPart({ hour: "numeric", hour12: true }).replace(/[^a-zA-Z]/g, ""), // Extract AM/PM locally if possible, or fallback logic
  };
  
  // Custom Regex for replacement
  const regex = /\[([^\]]+)]|YYYY|YY|MMMM|MMM|MM|M|dddd|ddd|DD|D|HH|H|hh|h|mm|ss|a/g;

  return format.replace(regex, (match, escapedText) => {
    if (escapedText) return escapedText;
    return String(map[match]);
  });
}