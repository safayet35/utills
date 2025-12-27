import { describe, it, expect } from "vitest";
import { randomId } from "../src/core/index.ts";

describe("randomId", () => {
  it("returns a string of given length", () => {
    const id = randomId({length:12});

    expect(typeof id).toBe("string");
    expect(id.length).toBe(12);
  });

  it("returns different values on multiple calls", () => {
    const a = randomId(10);
    const b = randomId(10);

    expect(a).not.toBe(b);
  });
});