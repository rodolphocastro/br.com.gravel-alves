import { expect, it, suite } from 'vitest';
import { convertDifficultyToRating, difficulties } from "../src/utils";

suite('rating conversion', () => {
  it('should round negative out of bounds to the lowest rating', () =>
    expect(convertDifficultyToRating(-100)).toBe(difficulties[1]))

  it('should round out of bounds to the highest rating', () =>
    expect(convertDifficultyToRating(100)).toBe(difficulties[6]))

  it('should default to the lowest if null', () =>
    expect(convertDifficultyToRating(null!)).toBe(difficulties[1]))

});