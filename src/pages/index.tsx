import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
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
            MCF 2.2 is an evidence-first decision system for innovation, from discovery to durable scale.
          </Translate>
        </p>

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/book/how-to-read-mcf">
            <Translate id="homepage.buttonTitle">Browse The MicroCanvas Framework v2.2</Translate>
            <br />
            <i>
              <Translate id="homepage.buttonSubtitle">
                Start with “How to read MCF”, then follow the Book by phase.
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

type CardItem = {
  titleId: string;
  title: string;
  bodyId: string;
  body: string;
  linkTo: string;
  linkId: string;
  linkText: string;
};

function CardGrid({
  title,
  titleId,
  subtitle,
  subtitleId,
  items,
}: {
  title: string;
  titleId: string;
  subtitle: string;
  subtitleId: string;
  items: CardItem[];
}) {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHeader}>
        <Heading as="h2" className={styles.sectionTitle}>
          <Translate id={titleId}>{title}</Translate>
        </Heading>
        <p className={styles.sectionSubtitle}>
          <Translate id={subtitleId}>{subtitle}</Translate>
        </p>
      </div>

      <div className={styles.cardGrid}>
        {items.map((c) => (
          <Link key={c.titleId} to={c.linkTo} className={styles.cardLink}>
            <div className={styles.card}>
              <Heading as="h3" className={styles.cardTitle}>
                <Translate id={c.titleId}>{c.title}</Translate>
              </Heading>
              <p className={styles.cardBody}>
                <Translate id={c.bodyId}>{c.body}</Translate>
              </p>
              <span className={styles.cardMeta}>
                <Translate id={c.linkId}>{c.linkText}</Translate>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function FrameworkCards() {
  const cards: CardItem[] = [
    {
      titleId: 'homepage.cards.evidence.title',
      title: 'Evidence-first, not narrative',
      bodyId: 'homepage.cards.evidence.body',
      body: 'Decisions are justified by traceable evidence quality and explicit thresholds, not optimism or activity.',
      linkTo: '/docs/canon/evidence-logic',
      linkId: 'homepage.cards.evidence.cta',
      linkText: 'Read evidence logic',
    },
    {
      titleId: 'homepage.cards.boundaries.title',
      title: 'Canon boundaries stay authoritative',
      bodyId: 'homepage.cards.boundaries.body',
      body: 'The Book explains how to apply MCF. Canon defines what counts as valid, bounded, and defensible.',
      linkTo: '/docs/canon/framework-boundaries',
      linkId: 'homepage.cards.boundaries.cta',
      linkText: 'Read framework boundaries',
    },
    {
      titleId: 'homepage.cards.phases.title',
      title: 'Five phases, renewable commitments',
      bodyId: 'homepage.cards.phases.body',
      body: 'Progress is not linear: reversibility, deferral, and renewal protect decision integrity as scale increases.',
      linkTo: '/docs/book/how-to-read-mcf',
      linkId: 'homepage.cards.phases.cta',
      linkText: 'How to read MCF',
    },
  ];

  return (
    <CardGrid
      title="What MCF 2.2 is"
      titleId="homepage.section.what.title"
      subtitle="A structured way to reduce uncertainty, preserve optionality, and make commitments defensible over time."
      subtitleId="homepage.section.what.subtitle"
      items={cards}
    />
  );
}

function StartHereCards() {
  const cards: CardItem[] = [
    {
      titleId: 'homepage.cards.start.title',
      title: 'Start with the reading guide',
      bodyId: 'homepage.cards.start.body',
      body: 'Understand the Book/Cannon split, how evidence is used, and how to avoid misuse.',
      linkTo: '/docs/book/how-to-read-mcf',
      linkId: 'homepage.cards.start.cta',
      linkText: 'Open the guide',
    },
    {
      titleId: 'homepage.cards.decision.title',
      title: 'Decision logic and thresholds',
      bodyId: 'homepage.cards.decision.body',
      body: 'Use decision thresholds to choose when to advance, pause, defer, or reverse.',
      linkTo: '/docs/book/decision-logic',
      linkId: 'homepage.cards.decision.cta',
      linkText: 'Go to decision logic',
    },
    {
      titleId: 'homepage.cards.governance.title',
      title: 'Governance and roles',
      bodyId: 'homepage.cards.governance.body',
      body: 'Scale safely by making ownership, boundaries, and escalation paths explicit and auditable.',
      linkTo: '/docs/book/governance-and-roles',
      linkId: 'homepage.cards.governance.cta',
      linkText: 'Go to governance',
    },
  ];

  return (
    <CardGrid
      title="How to start"
      titleId="homepage.section.start.title"
      subtitle="If you only do one thing: keep decisions tied to evidence, thresholds, and reversibility."
      subtitleId="homepage.section.start.subtitle"
      items={cards}
    />
  );
}

function HomeCTA() {
  return (
    <section className="margin-vert--xl">
      <div className="container">
        <div className="row">
          <div className="col col--10 col--offset-1">
            <div className="card">
              <div className="card__body">
                <Heading as="h2" className="margin-bottom--sm">
                  <Translate id="homepage.cta.title">Use MCF to make better decisions, faster</Translate>
                </Heading>
                <p className="margin-bottom--md">
                  <Translate id="homepage.cta.body">
                    The goal is not “more innovation activity.” The goal is defensible commitments: what to pursue, what to defer, and what
                    to reverse when evidence weakens.
                  </Translate>
                </p>
                <div className="button-group">
                  <Link className="button button--primary" to="/docs/book/how-to-read-mcf">
                    <Translate id="homepage.cta.primary">Browse the Book</Translate>
                  </Link>
                  <Link className="button button--outline button--primary" to="/docs/canon/definitions">
                    <Translate id="homepage.cta.secondary">Browse Canon definitions</Translate>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig, i18n } = useDocusaurusContext();

  // Dynamic Canonical and Hreflang setup
  const canonicalUrl =
    i18n.currentLocale === 'es' ? 'https://www.themicrocanvas.com/es/' : 'https://www.themicrocanvas.com/';

  return (
    <Layout>
      <Head>
        <title>
          {translate({ id: 'homepage.meta.title', message: '{siteTitle}' }, { siteTitle: siteConfig.title })}
        </title>

        <meta
          name="description"
          content={translate({
            id: 'homepage.meta.description',
            message:
              'The MicroCanvas Framework (MCF) v2.2 is an evidence-first decision system for innovation. Use Canon constraints and Book guidance to reduce uncertainty, preserve optionality, and scale defensibly across five phases.',
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
        <FrameworkCards />
        <StartHereCards />
        <HomeCTA />
      </main>
    </Layout>
  );
}
