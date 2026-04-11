import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://ict-support-limburg.nl',
    vite: {
        plugins: [tailwindcss()]
    },
    integrations: [
        react(),
        sitemap({
            filter: (page) => !page.includes('/404'),
            i18n: {
                defaultLocale: 'nl',
                locales: {
                    nl: 'nl-NL',
                    en: 'en-GB',
                },
            },
        }),
    ],
});
