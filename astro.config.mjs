import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  outDir: './docs',
  site: 'https://docs.centralmind.ai',

  build: {
    assets: 'app_assets',
  },
  integrations: [
    starlight({
      title: 'CentralMind',
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'General',
          items: [{ label: 'Introduction', slug: 'general/introduction' }],
        },
      ],
    }),
    react(),
  ],
});
