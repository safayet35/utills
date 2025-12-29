import { describe, it, expect } from "vitest";
import { sortBy } from "../src/core/sortBy.ts";

describe("sortBy", () => {
  it("sorts numbers in ascending order by default", () => {
    const input = [3, 1, 4, 2];
    expect(sortBy(input)).toEqual([1, 2, 3, 4]);
  });

  it("does not mutate the original array", () => {
    const input = [3, 1, 2];
    const output = sortBy(input);
    expect(input).toEqual([3, 1, 2]);
    expect(output).not.toBe(input);
  });

  it("sorts objects by a top-level key", () => {
    const users = [{ id: 2, name: 'B' }, { id: 1, name: 'A' }];
    expect(sortBy(users, 'id')).toEqual([{ id: 1, name: 'A' }, { id: 2, name: 'B' }]);
  });

  it("sorts objects by a nested key using dot notation", () => {
    const data = [
      { user: { age: 30 } },
      { user: { age: 20 } },
      { user: { age: 40 } }
    ];
    expect(sortBy(data, 'user.age')).toEqual([
      { user: { age: 20 } },
      { user: { age: 30 } },
      { user: { age: 40 } }
    ]);
  });

  it("sorts in descending order", () => {
    const input = [1, 2, 3];
    expect(sortBy(input, null, { order: 'desc' })).toEqual([3, 2, 1]);
  });

  it("sorts using a custom getter function", () => {
    const items = [{ w: 10, h: 2 }, { w: 5, h: 5 }];
    // Sort by area (w * h) -> 20 vs 25
    const result = sortBy(items, (i) => i.w * i.h);
    expect(result).toEqual([{ w: 10, h: 2 }, { w: 5, h: 5 }]);
  });

  it("handles null/undefined values gracefully", () => {
    const input = [2, null, 1, undefined];
    // undefined/null usually sorted to the end or beginning depending on logic.
    // Our logic pushes strict null/undefined away from comparison logic or treats as low.
    // Based on code: if valA is null, return 1 (moves to end in asc).
    const result = sortBy(input);
    // 1, 2, null, undefined
    expect(result).toEqual([1, 2, null, undefined]);
  });

  it("throws error if input is not an array", () => {
    // @ts-ignore
    expect(() => sortBy("not-array")).toThrow(TypeError);
  });
});