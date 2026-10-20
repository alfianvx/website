import type { APIRoute } from "astro";

/**
 * robots.txt — generated from the same `site` value as the sitemap so the
 * advertised sitemap URL always matches the production origin.
 */
export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL(
    "sitemap-index.xml",
    site ?? "http://localhost:4321",
  );

  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemapURL.href}\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } },
  );
};
