import { describe, it, expect } from "vitest";
import { truncate } from "../src/core/truncate.ts";

describe("truncate", () => {
  it("returns original string if shorter than length", () => {
    expect(truncate("hello", 10)).toBe("hello");
  });
  
  it("truncates string to specified length including default omission", () => {
    // "Hello World" -> "Hello..." (8 chars)
    expect(truncate("Hello World", 8)).toBe("Hello...");
  });

  it("supports custom omission", () => {
    expect(truncate("Hello World", 9, { omission: "[more]" })).toBe("Hel[more]");
  });

  it("supports string separator to preserve words", () => {
    // Standard cut would be "Hello Wor..."
    // With space separator, it should cut at the last space before the limit
    expect(truncate("Hello World Again", 11, { separator: " " })).toBe("Hello...");
  });

  it("supports regex separator", () => {
    // Separator is whitespace
    expect(truncate("Hello World Again", 11, { separator: /\s/ })).toBe("Hello...");
  });

  it("handles edge case where length is shorter than omission", () => {
    // Length 2, omission "..." (len 3). Should return ".."
    expect(truncate("Hello", 2)).toBe("..");
  });

  it("throws error for invalid input", () => {
    // @ts-ignore
    expect(() => truncate(123, 5)).toThrow(TypeError);
    expect(() => truncate("text", -1)).toThrow(TypeError);
  });
});