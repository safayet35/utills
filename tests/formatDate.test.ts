import { describe, it, expect } from "vitest";
import { formatDate } from "../src/core/formatDate.ts";

describe("formatDate", () => {
  const testDate = new Date(2023, 9, 5, 14, 9, 5); // Oct 5, 2023, 2:09:05 PM

  it("formats standard YYYY-MM-DD", () => {
    expect(formatDate(testDate, "YYYY-MM-DD")).toBe("2023-10-05");
  });

  it("formats with slashes DD/MM/YYYY", () => {
    expect(formatDate(testDate, "DD/MM/YYYY")).toBe("05/10/2023");
  });

  it("handles 12-hour time with AM/PM", () => {
    expect(formatDate(testDate, "hh:mm a")).toBe("02:09 PM");
  });

  it("handles 24-hour time", () => {
    expect(formatDate(testDate, "HH:mm:ss")).toBe("14:09:05");
  });

  it("accepts timestamp numbers", () => {
    const timestamp = testDate.getTime();
    expect(formatDate(timestamp, "YYYY")).toBe("2023");
  });

  // Updated test case: Using brackets for escaping
  it("preserves escaped characters using brackets", () => {
    expect(formatDate(testDate, "[Year:] YYYY -> [Month:] MM")).toBe("Year: 2023 -> Month: 10");
  });
  
  it("handles mix of escaped text and tokens", () => {
    expect(formatDate(testDate, "[Time is] hh:mm a")).toBe("Time is 02:09 PM");
  });

  it("throws error for invalid date", () => {
    expect(() => formatDate("invalid-date", "YYYY")).toThrow(TypeError);
  });
});