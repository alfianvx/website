import type { Post } from "../types";
import { yearOf } from "./date";

/** Groups posts by year, newest year first. Posts are expected newest-first. */
export function groupPostsByYear(posts: Post[]): [string, Post[]][] {
  const groups = new Map<string, Post[]>();

  for (const post of posts) {
    const year = yearOf(post.pubDate);
    const bucket = groups.get(year) ?? [];
    bucket.push(post);
    groups.set(year, bucket);
  }

  return [...groups.entries()].sort(([a], [b]) => Number(b) - Number(a));
}

/** Rough reading time, assuming 200 words per minute. */
export function readingTimeOf(post: Post): string {
  const words = post.content.join(" ").split(/\s+/).length;
  return `${Math.max(1, Math.round(words / 200))} min read`;
}
