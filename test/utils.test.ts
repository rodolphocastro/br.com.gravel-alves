import { expect, it, suite } from 'vitest';
import { convertDifficultyToRating, difficulties, featureFlags, generateGpxLinkForStrava, getDifficultyFromRating, getGpxUrl } from "../src/utils";

suite('rating conversion', () => {
  it('should round negative out of bounds to the lowest rating', () =>
    expect(convertDifficultyToRating(-100)).toBe(difficulties[1]))

  it('should round out of bounds to the highest rating', () =>
    expect(convertDifficultyToRating(100)).toBe(difficulties[6]))

  it('should default to the lowest if null', () =>
    expect(convertDifficultyToRating(null!)).toBe(difficulties[1]))

  it('should be retrivable from a human readable string', () => {
    const rating = "épico"
    const got = getDifficultyFromRating(rating)
    expect(got).not.toBeNull()
    expect(got).toBe(5)
  })

});

suite('feature flags', () => {
  it('should expose a flag object', () => expect(featureFlags).not.toBeNull())
});

suite('gpx helpers', () => {
  it('should generate a valid Strava gpx link', () => {
    const wellKnownLink = "https://www.strava.com/activities/11475920081"
    const got = generateGpxLinkForStrava(wellKnownLink)
    expect(got).toContain(wellKnownLink)
    expect(got).toContain("export_gpx")
  })

  it('should generate a valid public url for gpx downloads', () => {
    const wellKnownGpxFile = "myFile.gpx"
    const got = getGpxUrl(wellKnownGpxFile)
    expect(got).toContain(`/gpx/`)
    expect(got).toContain(wellKnownGpxFile)
  })
});
