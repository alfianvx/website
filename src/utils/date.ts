const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

/** Formats an ISO date string ("2026-09-12") into "Sep 12, 2026". */
export function formatDate(isoDate: string): string {
  return dateFormatter.format(new Date(`${isoDate}T00:00:00Z`));
}

/** Extracts the year part of an ISO date string. */
export function yearOf(isoDate: string): string {
  return isoDate.slice(0, 4);
}
