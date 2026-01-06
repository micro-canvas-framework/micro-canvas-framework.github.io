import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import Translate, { translate } from '@docusaurus/Translate';
import Head from '@docusaurus/Head';
import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

import styles from './index.module.css';

function HomepageHeader() {
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    <img src="/img/hero.svg" alt="MCF Logo" />
                </Heading>
                <p className="hero__subtitle">
                    <Translate id="homepage.subtitle">
                        Your recipe for rapid innovation, transformative impact, and global prosperity.
                    </Translate>
                </p>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to="/docs/intro">
                        <Translate id="homepage.buttonTitle">
                            Browse The MicroCanvas® Framework v2.1
                        </Translate>
                        <br />
                        <i>
                            <Translate id="homepage.buttonSubtitle">
                                Your recipe for rapid innovation, transformative impact, and global prosperity.
                            </Translate>
                        </i>
                    </Link>
                </div>
            </div>
        </header>
    );
}

function LanguageRedirect() {
    const { i18n } = useDocusaurusContext();
    const { push } = useHistory();

    useEffect(() => {
        if (typeof window === 'undefined') return; // SSR protection
        const alreadyRedirected = sessionStorage.getItem('lang_redirect_done');
        if (alreadyRedirected) return;

        const userLang = navigator.language || navigator.languages[0];
        if (userLang.startsWith('es') && i18n.currentLocale === 'en') {
            push('/es/');
            sessionStorage.setItem('lang_redirect_done', 'true');
        }
    }, [i18n.currentLocale, push]);

    return null;
}

export default function Home(): ReactNode {
    const { siteConfig, i18n } = useDocusaurusContext();

    // Dynamic Canonical and Hreflang setup
    const canonicalUrl =
        i18n.currentLocale === 'es'
            ? 'https://www.themicrocanvas.com/es/'
            : 'https://www.themicrocanvas.com/';

    return (
        <Layout>
            <Head>
                <title>
                    {translate(
                        { id: 'homepage.meta.title', message: 'Hello from {siteTitle}' },
                        { siteTitle: siteConfig.title }
                    )}
                </title>
                <meta
                    name="description"
                    content={translate({
                        id: 'homepage.meta.description',
                        message:
                            "Unlock your innovation potential with the The MicroCanvas® Framework—an innovation model that simplifies and accelerates innovation maturity. Define a transformative purpose, harness customer insights, understand the problem, objectives and key results, and rapidly prototype to drive growth and sustainability.",
                    })}
                />
                {/* Dynamic canonical */}
                <link rel="canonical" href={canonicalUrl} />

                {/* Dynamic hreflang based on supported languages */}
                <link rel="alternate" href="https://www.themicrocanvas.com/" hrefLang="en" />
                <link rel="alternate" href="https://www.themicrocanvas.com/es/" hrefLang="es" />
                <link rel="alternate" href="https://www.themicrocanvas.com/" hrefLang="x-default" />

                {/* OpenGraph locale meta */}
                <meta property="og:locale" content={i18n.currentLocale === 'es' ? 'es_ES' : 'en_US'} />
                <meta property="og:locale:alternate" content={i18n.currentLocale === 'es' ? 'en_US' : 'es_ES'} />
                <meta property="og:site_name" content="The MicroCanvas Framework" />
            </Head>

            <LanguageRedirect />

            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
