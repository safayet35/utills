import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { debounce } from "../src/core/debounce.ts";


describe("debounce", () => {
  beforeEach(() => {
    vi.useFakeTimers(); // fake timers enable
  });

  afterEach(() => {
    vi.useRealTimers(); // restore real timers
  });

  it("calls function after delay", () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 50);
    
    debounced("test");
    expect(fn).not.toBeCalled();

    vi.advanceTimersByTime(50);
    expect(fn).toBeCalledTimes(1);
  });

  it("flushes immediately (edge case)", () => {
    const fn = vi.fn();
    const debounced = debounce(fn, 100);

    debounced("flush");
    debounced.flush();

    expect(fn).toBeCalledTimes(1);
  });

  it("throws error for invalid input", () => {
    // @ts-expect-error
    expect(() => debounce(null, 100)).toThrow();
  });
});