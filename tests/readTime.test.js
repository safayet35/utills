import { describe, it, expect } from "vitest";
import { readTime } from "../src/core/readTime.ts";

describe("readTime", () => {
  it("calculates reading time for normal text", () => {
    const result = readTime("This is a simple test text");
    expect(result.words).toBeGreaterThan(0);
    expect(result.minutes).toBe(1);
    expect(result.text).toBe("1 min read");
  });

  it("handles empty text as an edge case", () => {
    const result = readTime("   ");
    expect(result.words).toBe(0);
    expect(result.minutes).toBe(0);
    expect(result.text).toBe("0 min read");
  });

  it("throws an error for invalid input", () => {
    // @ts-expect-error
    expect(() => readTime(123)).toThrow();
  });
});