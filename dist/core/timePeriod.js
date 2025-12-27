/**
 * Returns the current time period of the day
 *
 * @example
 * timePeriod() // "morning"
 * timePeriod(new Date("2025-01-01T14:00:00")) // "afternoon"
 */
export function timePeriod(date = new Date()) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        throw new Error("timePeriod: invalid date");
    }
    const hour = date.getHours();
    // morning — 5:00 AM to 11:59 AM
    if (hour >= 5 && hour < 12) {
        return "morning";
    }
    // afternoon — 12:00 PM to 4:59 PM
    if (hour >= 12 && hour < 17) {
        return "afternoon";
    }
    // evening — 5:00 PM to 8:59 PM
    if (hour >= 17 && hour < 21) {
        return "evening";
    }
    // night — 9:00 PM to 4:59 AM
    return "night";
}
//# sourceMappingURL=timePeriod.js.map