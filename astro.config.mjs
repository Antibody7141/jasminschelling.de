import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

// Statische Autorenseite. Kein Adapter nötig fuer statischen Build;
// Cloudflare-Pages-Deploy kommt spaeter ueber den build in dist/.
export default defineConfig({
  site: "https://fuck-im-a-mom-now.de",
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});