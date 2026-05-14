import { defineConfig } from 'astro/config';
// import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://semences-vivantes.fr',
  compressHTML: true,
  //integrations: [sitemap()],
});
