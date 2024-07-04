import { z, defineCollection } from "astro:content";

const bioCollection = defineCollection({
  schema: z.object({
    name: z.string(),
    avatar: z.string(),
  }),
});

const socialsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    url: z.string(),
    order: z.number(),
    icon: z
      .array(
        z.enum([
          "github",
          "twitter",
          "linkedin",
          "instagram",
          "facebook",
          "youtube",
          "twitch",
          "tiktok",
          "snapchat",
          "reddit",
          "pinterest",
          "medium",
          "dev",
          "dribbble",
          "behance",
          "codepen",
          "producthunt",
          "discord",
          "slack",
          "whatsapp",
          "telegram",
          "email",
          "strava",
          "komoot"
        ]),
      )
      .length(1),
  }),
});

const linksCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    url: z.string(),
    order: z.number(),
  }),
});

const routesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    km: z.number(),
    altGain: z.number(),
    description: z.string(),
    rating: z.number(),
    stravaUrl: z.string(),
    komootUrl: z.string(),
    gpxFile: z.string(),
    date: z.date(),
  }),
});

/**
 * Collection with content related to the cycling support totem project.
 */
const totemCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    order: z.number(),
  }),
});

export const collections = {
  socials: socialsCollection,
  bio: bioCollection,
  links: linksCollection,
  routes: routesCollection,
  supportTotem: totemCollection,
};
