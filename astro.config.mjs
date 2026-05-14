// astro.config.mjs
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://your-domain.com', // <- set this to your live site URL
  integrations: [sitemap()],
  // ...other config
});
