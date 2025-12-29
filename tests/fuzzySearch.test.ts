import { describe, it, expect } from "vitest";
import { fuzzySearch } from "../src/core/fuzzySearch.ts";

describe("fuzzySearch", () => {
  const data = [
    {
      name: "John Doe",
      email: "john@mail.com",
      profile: { username: "johnny" },
    },
    {
      name: "Jane Smith",
      email: "jane@mail.com",
      profile: { username: "jane_s" },
    },
  ];

  it("searches using multiple keys", () => {
    const result = fuzzySearch(data, "mail", {
      keys: ["email", "name"],
    });
    expect(result.length).toBe(2);
  });

  it("searches using nested keys", () => {
    const result = fuzzySearch(data, "johnny", {
      keys: ["profile.username"],
    });
    expect(result.length).toBe(1);
    expect(result[0].name).toBe("John Doe");
  });

  it("returns full list for empty query (edge case)", () => {
    const result = fuzzySearch(data, "");
    expect(result.length).toBe(2);
  });

  it("throws error for invalid list", () => {
    // @ts-expect-error
    expect(() => fuzzySearch(null, "test")).toThrow();
  });
});