import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
// import basicSsl from '@vitejs/plugin-basic-ssl';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://atlas.ourkolkata.in',
  // vite: {
  //   plugins: [basicSsl()],
  //   server: {
  //     https: true,
  //   },
  // },
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
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          bn: 'bn',
        },
      },
    }),
  ],
});
