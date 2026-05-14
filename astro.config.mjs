// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // REQUIRED by @astrojs/sitemap so it can build absolute URLs
  site: 'https://semences-vivantes.fr', // <- replace with your production URL

  integrations: [
    sitemap(),
    // other integrations...
  ],

  // other config...
});
