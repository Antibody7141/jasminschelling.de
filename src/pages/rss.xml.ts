import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { WORDMARK } from "../utils";

export async function GET(context: { site: string }) {
  const essays = (await getCollection("essays")).sort((a, b) =>
    b.data.date.localeCompare(a.data.date)
  );
  return rss({
    title: `${WORDMARK} — Essays & Notizen`,
    description:
      "Essays und Notizen über das Elternsein ohne Weichzeichner. Von Jasmin Schelling.",
    site: context.site,
    items: essays.map((e) => ({
      title: e.data.title,
      pubDate: new Date(`${e.data.date}-01`),
      description: e.data.excerpt,
      link: `/essays/${e.id}/`,
    })),
  });
}
