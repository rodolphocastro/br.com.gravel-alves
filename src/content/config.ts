import { z, defineCollection } from "astro:content";
import { SocialMedia } from "../utils";

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
    icon: z.nativeEnum(SocialMedia),
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
    gpxUrl: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  socials: socialsCollection,
  bio: bioCollection,
  links: linksCollection,
  routes: routesCollection,
};
