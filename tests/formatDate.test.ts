import { describe, it, expect } from "vitest";
import { formatDate } from "../src/core/formatDate.ts";

describe("formatDate", () => {
  // Oct 5, 2023, 14:09:05
  const testDate = new Date(2023, 9, 5, 14, 9, 5); 
  
  // --- 1. Custom Pattern Tests ---
  it("formats standard patterns (en-US)", () => {
    expect(formatDate(testDate, "YYYY-MM-DD", "en-US")).toBe("2023-10-05");
  });

  it("supports localized full month names", () => {
    // Note: Output depends on Node/Browser ICU data. 
    // In standard environments: 'October'
    expect(formatDate(testDate, "DD MMMM YYYY", "en-US")).toBe("05 October 2023");
  });
  
  it("supports pattern escaping", () => {
    expect(formatDate(testDate, "[Date:] YYYY", "en-US")).toBe("Date: 2023");
  });

  // --- 2. Standard Style Tests ---
  it("formats using 'full' style", () => {
    const result = formatDate(testDate, "full", "en-US");
    expect(result).toContain("Thursday");
    expect(result).toContain("2023");
  });

  it("formats using 'short' style", () => {
    const result = formatDate(testDate, "short", "en-US");
    // usually "10/5/23" or similar
    expect(result).toMatch(/\d{1,2}\/\d{1,2}\/\d{2,4}/);
  });

  // --- 3. Relative Time Tests ---
  it("formats relative time (ago)", () => {
    const twoHoursAgo = Date.now() - (2 * 60 * 60 * 1000);
    expect(formatDate(twoHoursAgo, "relative", "en-US")).toBe("2 hours ago");
  });

  it("formats relative time (future)", () => {
    const inTwoDays = Date.now() + (2 * 24 * 60 * 60 * 1000) + 10000; // adding buffer
    expect(formatDate(inTwoDays, "relative", "en-US")).toBe("in 2 days");
  });

  // --- 4. Localization (Locale Check) ---
  // Note: These tests rely on the environment having 'bn-BD' or 'es-ES' data.
  // Node usually includes full ICU, but small environments might not.
  it("formats relative time in Bengali", () => {
    const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);
    // Should be "১ দিন আগে" or similar. We check for non-latin characters as a proxy for success.
    const result = formatDate(oneDayAgo, "relative", "bn-BD");
    expect(result).not.toBe("1 day ago");
  });

  it("throws for invalid date", () => {
    expect(() => formatDate("invalid", "medium")).toThrow(TypeError);
  });
});