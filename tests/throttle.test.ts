import { describe, it, expect, vi } from "vitest";
import { throttle } from "../src/core/throttle.ts";

describe("throttle", () => {
  it("should throttle a function", () => {
    vi.useFakeTimers();
    const func = vi.fn();
    const throttled = throttle(func, 1000);
    
    throttled();
    throttled();
    throttled();

    // Leading edge executes immediately
    expect(func).toHaveBeenCalledTimes(1);

    // Fast forward time by 500ms (less than wait)
    vi.advanceTimersByTime(500);
    throttled();
    expect(func).toHaveBeenCalledTimes(1);

    // Fast forward to complete wait
    vi.advanceTimersByTime(500);
    // Trailing edge executes
    expect(func).toHaveBeenCalledTimes(2);
    
    vi.useRealTimers();
  });

  it("should respect leading: false", () => {
    vi.useFakeTimers();
    const func = vi.fn();
    const throttled = throttle(func, 1000, { leading: false });

    throttled();
    expect(func).toHaveBeenCalledTimes(0);

    vi.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1);
    
    vi.useRealTimers();
  });

  it("should respect trailing: false", () => {
    vi.useFakeTimers();
    const func = vi.fn();
    const throttled = throttle(func, 1000, { trailing: false });

    throttled();
    expect(func).toHaveBeenCalledTimes(1);

    throttled();
    vi.advanceTimersByTime(1000);
    // Should not fire again for the second call
    expect(func).toHaveBeenCalledTimes(1);
    
    vi.useRealTimers();
  });

  it("should support cancellation", () => {
    vi.useFakeTimers();
    const func = vi.fn();
    const throttled = throttle(func, 1000);

    throttled();
    throttled(); // Pending trailing call
    throttled.cancel();
    
    vi.advanceTimersByTime(1000);
    expect(func).toHaveBeenCalledTimes(1); // Only leading call happened
    
    vi.useRealTimers();
  });

  it("should throw error if first argument is not a function", () => {
    expect(() => throttle(null as any, 100)).toThrow(TypeError);
  });
});