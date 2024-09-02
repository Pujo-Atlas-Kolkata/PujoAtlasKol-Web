import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'bn'],
    fallback: {
      bn: 'en',
    },
    routing: {
      fallbackType: 'rewrite',
    },
  },
  integrations: [react(), tailwind()],
});
