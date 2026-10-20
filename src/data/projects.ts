import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import type { Project } from "../types";

const reader = createReader(process.cwd(), keystaticConfig);

/** Projects managed in Keystatic (content/projects), ordered by `order`. */
export async function getProjects(): Promise<Project[]> {
  const entries = await reader.collections.projects.all();
  return entries
    .sort((a, b) => a.entry.order - b.entry.order)
    .map(({ slug, entry }) => ({
      slug,
      title: entry.title,
      description: entry.description,
      period: entry.period,
      role: entry.role,
      tech: entry.tech,
      highlights: entry.highlights,
    }));
}
