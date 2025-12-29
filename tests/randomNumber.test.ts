import { describe, it, expect, vi } from "vitest";
import { random } from "../src/core/randomNumber.ts";


describe("random", () => {
  it("generates an integer within the specified range", () => {
    // Run multiple times to ensure bounds are respected
    for (let i = 0; i < 20; i++) {
      const result = random(1, 10);
      expect(Number.isInteger(result)).toBe(true);
      expect(result).toBeGreaterThanOrEqual(1);
      expect(result).toBeLessThanOrEqual(10);
    }
  });

  it("generates a float when options.float is true", () => {
    const result = random(1, 5, { float: true });
    // It's possible but unlikely to get an exact integer, checking generally
    expect(result).toBeGreaterThanOrEqual(1);
    expect(result).toBeLessThan(5); // Standard float logic is usually exclusive max
    // Note: JS random logic for floats is typically [min, max).
  });

  it("returns the exact number if min equals max", () => {
    expect(random(5, 5)).toBe(5);
  });

  it("handles negative ranges", () => {
    const result = random(-10, -5);
    expect(result).toBeGreaterThanOrEqual(-10);
    expect(result).toBeLessThanOrEqual(-5);
  });

  it("throws error if inputs are not numbers", () => {
    // @ts-ignore
    expect(() => random("1", 5)).toThrow(TypeError);
    // @ts-ignore
    expect(() => random(1, "5")).toThrow(TypeError);
  });

  it("throws error if min is greater than max", () => {
    expect(() => random(10, 5)).toThrow(Error);
  });
});