import { Config } from '@docusaurus/types';
import redirects from './src/redirects.generated.js';

const config: Config = {
    title: 'The MicroCanvas Framework (MCF) 2.2',
    tagline: 'Your recipe for rapid innovation, transformative impact, and global prosperity.',
    url: 'https://www.themicrocanvas.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    favicon: 'img/favicon.ico',
    organizationName: 'micro-canvas-framework', // GitHub org/user name.
    projectName: 'micro-canvas-framework.github.io', // GitHub repo name.

    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'es'],
        localeConfigs: {
            en: {
                label: 'English',
                direction: 'ltr',
                htmlLang: 'en-US',
            },
            es: {
                label: 'Español',
                direction: 'ltr',
                htmlLang: 'es-ES',
            },
        },
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.ts'),
                    routeBasePath: '/docs', // ✅ VERY IMPORTANT: Docs live under /docs now!
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: false,
                    lastVersion: 'current',
                    versions: {
                        current: {
                            label: '2.2 (current)',
                            path: '',
                        },
                        '2.1': {
                            label: '2.1 (legacy)',
                        },
                    },
                    exclude: [
                        '**/*.test.{js,ts,jsx,tsx}',
                        '**/__tests__/**',
                        '**/*.d.ts',
                        '**/_*.{js,jsx,ts,tsx}',
                    ],
                },
                blog: false,
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            },
        ],
    ],

    plugins: [
        [
            '@docusaurus/plugin-sitemap',
            {
                id: 'custom-sitemap',
                changefreq: 'weekly',
                priority: 0.5,
                ignorePatterns: ['/tags/**'], // Optional: ignore /tags pages if you want
                filename: 'sitemap.xml',
               // trailingSlash: true, // or false depending on your URL style
            },
        ],
        [
            '@docusaurus/plugin-client-redirects',
            {
                redirects,
            },
        ],
    ],

    themeConfig: {
        navbar: {
            title: 'MCF 2.2',
            logo: {
                alt: 'The MicroCanvas Framework Logo',
                src: 'img/logo.svg',
            },
            items: [
                { to: '/docs/book/how-to-read-mcf', label: 'Framework', position: 'left' },
                {
                    href: 'https://github.com/micro-canvas-framework/micro-canvas-framework.github.io',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    type: 'docsVersionDropdown',
                    position: 'right',
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Framework',
                            to: '/docs/book/how-to-read-mcf',
                        },
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/micro-canvas-framework/micro-canvas-framework.github.io',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Doulab by Informatik LLC. Built with Docusaurus.`,
        },
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
        },
    },
};

export default config;
