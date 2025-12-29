import { describe, it, expect } from "vitest";
import { paginate } from "../src/core/paginate.ts";

describe("paginate", () => {
  const items = Array.from({ length: 25 }, (_, i) => i + 1);

  it("returns correct page data for normal case", () => {
    const result = paginate(items, { page: 2, pageSize: 10 });
    expect(result.data.length).toBe(10);
    expect(result.page).toBe(2);
    expect(result.totalPages).toBe(3);
    expect(result.hasNext).toBe(true);
    expect(result.hasPrev).toBe(true);
  });

  it("handles page overflow as edge case", () => {
    const result = paginate(items, { page: 10, pageSize: 10 });
    expect(result.page).toBe(3);
    expect(result.data.length).toBe(5);
    expect(result.hasNext).toBe(false);
  });

  it("throws error for invalid input", () => {
    // @ts-expect-error
    expect(() => paginate("invalid", { page: 1 })).toThrow();
  });
});