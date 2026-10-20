// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import keystatic from "@keystatic/astro";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import netlify from "@astrojs/netlify";

// Single source of truth for the production origin — feeds canonical URLs,
// og:url, the sitemap, robots.txt and JSON-LD. When the final domain is
// known, change it here (or set the SITE_URL env var in the deploy).
const site = process.env.SITE_URL ?? "https://www.gusjabungaf.dev";

// https://astro.build/config
export default defineConfig({
  site,

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    sitemap(),
    // Keystatic's admin UI (local file storage) only needs to run in dev.
    // Static builds set SKIP_KEYSTATIC so no server routes are injected —
    // the site stays a plain static build with no adapter.
    ...(process.env.SKIP_KEYSTATIC ? [] : [keystatic()]),
  ],

  fonts: [
    {
      // Figtree (by Evan Desmond) via Google Fonts — Astro downloads the
      // files at build time and serves them self-hosted, with subsets split so
      // browsers only fetch what the page needs.
      provider: fontProviders.google(),
      name: "Figtree",
      cssVariable: "--font-figtree",
      weights: ["300 900"],
      styles: ["normal"],
      subsets: ["latin", "latin-ext"],
      fallbacks: ["ui-sans-serif", "system-ui", "sans-serif"],
    },
  ],

  adapter: netlify(),
});