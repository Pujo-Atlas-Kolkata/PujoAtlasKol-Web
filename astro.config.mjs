import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import basicSsl from '@vitejs/plugin-basic-ssl';
import sitemap from '@astrojs/sitemap';
import sentry from '@sentry/astro';

const SENTRY_AUTH_TOKEN = import.meta.env.SENTRY_AUTH_TOKEN;
const ENVIRONMENT = import.meta.env.ENVIRONMENT;

// https://astro.build/config
export default defineConfig({
  site: 'https://atlas.ourkolkata.in',
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
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          bn: 'bn',
        },
      },
    }),
    sentry({
      dsn: 'https://890946af3d67e3bea01d2cc4790944dd@o4508063377195008.ingest.us.sentry.io/4508063379816448',
      sourceMapsUploadOptions: {
        project: 'javascript-astro-frontend-web',
        authToken: SENTRY_AUTH_TOKEN,
      },
      enabled: ENVIRONMENT === 'production' || ENVIRONMENT === 'staging',
    }),
  ],
});
