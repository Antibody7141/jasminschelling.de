import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Jede Datei in /content/essays ist ein fertiger Essay.
// Neuer Essay = Datei dorthin, alles andere passiert automatisch.
const essays = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/essays" }),
  schema: z.object({
    title: z.string(),          // lowercase, wie er im Essay steht
    date: z.string(),           // z. B. "2026-09"
    number: z.number(),         // chronologische Nummer 01, 02, ...
    minutes: z.number(),        // Lesezeit
    theme: z.string(),          // eine der fuenf Themen-Kategorien
    excerpt: z.string(),        // zwei Zeilen Teaser
    tag: z.string(),            // Hashtag fuer die Karte, z. B. "#Identitaet..."
    bullets: z.array(z.string()), // "Was darin vorkommt" (Karte)
  }),
});

export const collections = { essays };