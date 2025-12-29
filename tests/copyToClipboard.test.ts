// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from "vitest";
import { copyToClipboard } from "../src/core/copyToClipboard.ts";

describe("copyToClipboard", () => {
  // ১. অরিজিনাল ইমপ্লিমেন্টেশন সেভ করে রাখা হচ্ছে
  // এখন যেহেতু jsdom আছে, তাই navigator এবং document ডিফাইনড থাকবে
  const originalClipboard = navigator.clipboard; 
  
  // document.execCommand jsdom এ নাও থাকতে পারে, তাই সেফটি চেক
  const originalExecCommand = document.execCommand;

  afterEach(() => {
    vi.restoreAllMocks();
    
    // navigator.clipboard রিস্টোর করা
    Object.defineProperty(navigator, 'clipboard', {
      value: originalClipboard,
      writable: true,
      configurable: true
    });
    
    // document.execCommand রিস্টোর করা
    if (originalExecCommand) {
        document.execCommand = originalExecCommand;
    }
  });

  it("uses navigator.clipboard API when available", async () => {
    const writeTextMock = vi.fn().mockResolvedValue(undefined);

    // navigator.clipboard মক করা হচ্ছে
    Object.defineProperty(navigator, 'clipboard', {
      value: { writeText: writeTextMock },
      writable: true,
      configurable: true,
    });

    const result = await copyToClipboard("modern");
    
    expect(result).toBe(true);
    expect(writeTextMock).toHaveBeenCalledWith("modern");
  });

  it("falls back to execCommand if navigator.clipboard throws", async () => {
    // ১. navigator.clipboard এরর দিবে
    Object.defineProperty(navigator, 'clipboard', {
      value: { 
        writeText: vi.fn().mockRejectedValue(new Error("Failed")) 
      },
      writable: true,
      configurable: true,
    });

    // ২. document.execCommand মক করা
    document.execCommand = vi.fn().mockReturnValue(true);
    
    // createElement স্পাই করা
    const createElementSpy = vi.spyOn(document, 'createElement').mockReturnValue({
      value: "",
      style: {},
      focus: vi.fn(),
      select: vi.fn(),
    } as any);

    vi.spyOn(document.body, 'appendChild').mockImplementation(() => null as any);
    vi.spyOn(document.body, 'removeChild').mockImplementation(() => null as any);

    const result = await copyToClipboard("fallback");
    
    expect(result).toBe(true);
    expect(document.execCommand).toHaveBeenCalledWith("copy");
    expect(createElementSpy).toHaveBeenCalledWith("textarea");
  });

  it("returns false if both methods fail", async () => {
    // ১. Clipboard API মিসিং
    Object.defineProperty(navigator, 'clipboard', {
      value: undefined,
      writable: true,
      configurable: true,
    });

    // ২. execCommand ফেইল করবে
    document.execCommand = vi.fn().mockImplementation(() => {
      throw new Error("ExecCommand failed");
    });

    vi.spyOn(document, 'createElement').mockReturnValue({
        style: {}, focus: vi.fn(), select: vi.fn() 
    } as any);
    vi.spyOn(document.body, 'appendChild').mockImplementation(() => null as any);
    vi.spyOn(document.body, 'removeChild').mockImplementation(() => null as any);

    const result = await copyToClipboard("fail");
    expect(result).toBe(false);
  });

  it("returns false gracefully if text is empty", async () => {
    const result = await copyToClipboard("");
    expect(result).toBe(false);
  });
});