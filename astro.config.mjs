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
      logo: { dark: './src/assets/logo-dark.svg', light: './src/assets/logo-light.svg' },

      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'General',
          items: [{ label: 'Introduction', slug: '' }],
        },
        {
          label: 'Terms of Service',
          items: [
            { label: 'Terms of Service', slug: 'content/terms' },
            { label: 'Privacy Policy', slug: 'content/privacy' },
            { label: 'Cookie Policy', slug: 'content/cookie' },
          ],
        },
      ],
    }),
    react(),
  ],
});
