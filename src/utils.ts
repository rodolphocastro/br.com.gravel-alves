/**
 * Difficulties for cycling routes, mapping from a number to a human-readable string.
 */
export const difficulties: { [key: number]: string } = {
  1: "Iniciante",
  2: "Intermediário",
  3: "Avançado",
  4: "Desafio",
  5: "Épico",
  6: "Cicloviagem",
};

/**
 * gets a difficulty rating from its string, normalized and ignoring cases.
 * @param rating the string representing the difficulty rating
 * @returns the key (int) that matches this rating, or -1 if not found
 */
export function getDifficultyFromRating(rating: string): number {
  const result = Object.keys(difficulties).find(
    (key) =>
      difficulties[parseInt(key)]
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") ===
      rating
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, ""),
  );
  return result ? parseInt(result) : -1;
}

/**
 * Social Medias that have icons supported by the portal.
 */
export enum SocialMedia {
  github = "github",
  twitter = "twitter",
  linkedin = "linkedin",
  instagram = "instagram",
  facebook = "facebook",
  youtube = "youtube",
  twitch = "twitch",
  tiktok = "tiktok",
  snapchat = "snapchat",
  reddit = "reddit",
  pinterest = "pinterest",
  medium = "medium",
  dev = "dev",
  dribbble = "dribbble",
  behance = "behance",
  codepen = "codepen",
  producthunt = "producthunt",
  discord = "discord",
  slack = "slack",
  whatsapp = "whatsapp",
  telegram = "telegram",
  strava = "strava",
  email = "email"
}

/**
 * Converts a difficulty rating to a human-readable string
 * @param reading The difficulty rating, if null defaults to 1 and if outside range defaults to the closest value
 */
export function convertDifficultyToRating(reading: number) {
  const lowestKey = Math.min(...Object.keys(difficulties).map(Number))
  const highestKey = Math.max(...Object.keys(difficulties).map(Number))

  reading = reading ?? 1; // Default to 1 if null

  if (reading > highestKey) {
    reading = highestKey;
  }
  else if (reading < lowestKey) {
    reading = lowestKey;
  }

  return difficulties[reading];
}

/**
 * Returns a Strava URL that allows for GPX download based on an existing Strava entry.
 * @param stravaUrl a valid Strava url for a Route or an Activity
 * @returns a new url with the route for GPX download
 */
export function generateGpxLinkForStrava(stravaUrl: string) {
  // if there's already a trailing slash, remove it
  if (stravaUrl.endsWith('/')) {
    stravaUrl = stravaUrl.slice(0, -1);
  }

  return `${stravaUrl}/export_gpx`;
}

/**
 * Takes in the name of a GPX file, hosted within the public/gpx directory, and returns the URL to download it.
 */
export function getGpxUrl(gpxFileName: string): string {
  return `/gpx/${gpxFileName}`;
}

/**
 * Simple, static, implementation of feature flags.
 */
export const featureFlags = {
  'showTotem': false,
}