import { describe, it, expect } from "vitest";
import { generateSecret } from "../src/core/index.ts";
describe("generateSecret", () => {
    it("generates a secret with correct length", () => {
        const secret = generateSecret(32);
        expect(secret.length).toBe(32);
    });
    it("generates a string", () => {
        expect(typeof generateSecret(16)).toBe("string");
    });
});
