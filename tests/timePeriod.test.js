import { timePeriod } from "../src/core/timePeriod.ts";
import { describe, it, expect } from "vitest";
console.log("check ", timePeriod(new Date("2025-01-01T05:00:00")));
describe("timePeriod()", () => {
    it("should return morning between 5:00 AM and 11:59 AM", () => {
        expect(timePeriod(new Date("2025-01-01T05:00:00"))).toBe("morning");
        expect(timePeriod(new Date("2025-01-01T11:59:59"))).toBe("morning");
    });
    it("should return afternoon between 12:00 PM and 4:59 PM", () => {
        expect(timePeriod(new Date("2025-01-01T12:00:00"))).toBe("afternoon");
        expect(timePeriod(new Date("2025-01-01T16:59:59"))).toBe("afternoon");
    });
    it("should return evening between 5:00 PM and 8:59 PM", () => {
        expect(timePeriod(new Date("2025-01-01T17:00:00"))).toBe("evening");
        expect(timePeriod(new Date("2025-01-01T20:59:59"))).toBe("evening");
    });
    it("should return night between 9:00 PM and 4:59 AM", () => {
        expect(timePeriod(new Date("2025-01-01T21:00:00"))).toBe("night");
        expect(timePeriod(new Date("2025-01-01T04:59:59"))).toBe("night");
    });
    it("should throw error for invalid date", () => {
        // @ts-expect-error
        expect(() => timePeriod("invalid")).toThrow();
        expect(() => timePeriod(new Date("invalid"))).toThrow("timePeriod: invalid date");
    });
});
