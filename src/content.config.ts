import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const program = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/program" }),
  schema: z.object({
    date: z.string(),
    label: z.string(),
    slots: z.array(
      z.object({
        time: z.string(),
        endTime: z.string().optional(),
        title: z.string(),
        kind: z.enum([
          "registration",
          "welcome",
          "talks",
          "discussion",
          "keynote",
          "posters",
          "break",
          "hands-on",
          "closing",
          "other",
        ]),
        people: z.string().optional(),
        description: z.string().optional(),
      })
    ),
  }),
});

const keynotes = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/keynotes" }),
  schema: z.object({
    day: z.number(),
    time: z.string(),
    speaker: z.string(),
    affiliation: z.string(),
    bio: z.string(),
    talkTitle: z.string(),
    abstract: z.string(),
    link: z.string().optional(),
    announced: z.boolean().default(false),
  }),
});

const posters = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posters" }),
  schema: z.object({
    number: z.string(),
    day: z.number(),
    title: z.string(),
    authors: z.string(),
    affiliation: z.string(),
    pdf: z.string().optional(),
    announced: z.boolean().default(false),
  }),
});

export const collections = { program, keynotes, posters };
