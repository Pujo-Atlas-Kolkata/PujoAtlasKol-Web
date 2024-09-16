import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import basicSsl from '@vitejs/plugin-basic-ssl';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
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
  integrations: [
    react(),
    tailwind(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
