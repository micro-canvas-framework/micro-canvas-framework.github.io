import { Config } from '@docusaurus/types';

const config: Config = {
    title: 'The MicroCanvas Framework (MCF) 2.1',
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
                    editUrl: 'https://github.com/micro-canvas-framework/micro-canvas-framework.github.io/edit/master/', // adjust to your repo
                },
                blog: {
                    showReadingTime: true,
                    editUrl: 'https://github.com/micro-canvas-framework/micro-canvas-framework.github.io/edit/master/blog/',
                },
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
    ],

    themeConfig: {
        navbar: {
            title: 'MCF 2.1',
            logo: {
                alt: 'The MicroCanvas Framework Logo',
                src: 'img/logo.svg',
            },
            items: [
                { to: '/docs/intro', label: 'Framework', position: 'left' },
                { to: '/blog', label: 'Blog', position: 'left' },
                {
                    href: 'https://github.com/micro-canvas-framework/micro-canvas-framework.github.io',
                    label: 'GitHub',
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
                            to: '/docs/intro',
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
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Blog',
                            to: '/blog',
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
