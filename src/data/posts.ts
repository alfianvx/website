import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import type { Post } from "../types";

const reader = createReader(process.cwd(), keystaticConfig);

/** Blog posts managed in Keystatic (content/posts), newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = (await reader.collections.posts.all()).map(
    ({ slug, entry }) => ({
      slug,
      title: entry.title,
      description: entry.description,
      pubDate: entry.pubDate,
      content: entry.content,
    }),
  );
  return posts.sort((a, b) => b.pubDate.localeCompare(a.pubDate));
}
