import { collections } from "../../src/content/config";
import { expect, it, suite } from "vitest";

suite("collections", () => {
  it("should have a bio collection", () => expect(collections.bio).toBeDefined());
  it("should have a socials collection", () => expect(collections.socials).toBeDefined());
  it("should have a links collection", () => expect(collections.links).toBeDefined());
  it("should have a routes collection", () => expect(collections.routes).toBeDefined());
});