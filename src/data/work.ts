import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../keystatic.config";
import type { WorkExperience } from "../types";

const reader = createReader(process.cwd(), keystaticConfig);

/** Work experience managed in Keystatic (content/work), ordered by `order`. */
export async function getWorkExperience(): Promise<WorkExperience[]> {
  const entries = await reader.collections.work.all();
  return entries
    .sort((a, b) => a.entry.order - b.entry.order)
    .map(({ entry }) => ({
      company: entry.company,
      role: entry.role,
      period: entry.period,
      highlights: entry.highlights,
    }));
}
