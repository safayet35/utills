/**
 * Returns human readable relative time
 *
 * @example
 * timeAgo(new Date())
 * timeAgo("2025-01-01")
 * timeAgo(1700000000000)
 */
export function timeAgo(
  date: Date | string | number,
  locale: string = "en"
): string {
  const inputDate = new Date(date)
  const now = new Date()

  if (isNaN(inputDate.getTime())) {
    throw new Error("timeAgo: invalid date")
  }

  const diff = now.getTime() - inputDate.getTime()

  if (diff < 1000) return "just now"

  const rtf = new Intl.RelativeTimeFormat(locale, { numeric: "auto" })

  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ["year", 1000 * 60 * 60 * 24 * 365],
    ["month", 1000 * 60 * 60 * 24 * 30],
    ["day", 1000 * 60 * 60 * 24],
    ["hour", 1000 * 60 * 60],
    ["minute", 1000 * 60],
    ["second", 1000],
  ]

  for (const [unit, ms] of units) {
    const value = Math.floor(diff / ms)
    if (value >= 1) {
      return rtf.format(-value, unit)
    }
  }

  return "just now"
}