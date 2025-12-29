import { describe, it, expect } from "vitest";
import { slugify } from "../src/core/slugify.ts";


describe("slugify", () => {
  it("converts basic string to slug", () => {
    expect(slugify("Hello World")).toBe("hello-world");
  });

  it("handles accents and diacritics", () => {
    expect(slugify("Crème Brûlée")).toBe("creme-brulee");
  });

  it("removes special characters", () => {
    expect(slugify("Foo & Bar @ Baz!")).toBe("foo-bar-baz");
  });

  it("supports custom separator", () => {
    expect(slugify("Hello World", { separator: "_" })).toBe("hello_world");
  });

  it("respects lowercase option", () => {
    expect(slugify("Hello World", { lowercase: false })).toBe("Hello-World");
  });

  it("collapses multiple spaces and symbols", () => {
    expect(slugify("Hello    World---Test")).toBe("hello-world-test");
  });

  it("handles empty or symbol-only strings", () => {
    expect(slugify("")).toBe("");
    expect(slugify("!@#$%^")).toBe("");
  });

  it("throws error for invalid input", () => {
    // @ts-ignore
    expect(() => slugify(123)).toThrow(TypeError);
  });
});