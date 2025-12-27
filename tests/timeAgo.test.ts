import { describe, it, expect } from "vitest";
import { timeAgo } from "../src/core/index.ts";

describe("timeAgo", () => {
  it("returns 'just now' for current time", () => {
    const now = new Date();

    const result = timeAgo(now);

    expect(result).toContain("now");
  });

  it("handles past dates", () => {
    const past = new Date(Date.now() - 60 * 1000);

    const result = timeAgo(past);

    expect(result).toContain("minute");
  });
});