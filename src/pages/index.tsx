import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import Mermaid from '@theme/Mermaid';
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
            An evidence-first decision system for innovation maturity and defensible scale.
          </Translate>
        </p>
        <p className={styles.heroMicro}>
          <Translate id="homepage.heroMicro">
            Open-source under CC BY-ND 4.0 · Evidence-first decision system for innovation
          </Translate>
        </p>

        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/book/how-to-read-mcf">
            <Translate id="homepage.buttonTitle">Explore MicroCanvas Framework v2.2</Translate>
            <br />
            <i>
              <Translate id="homepage.buttonSubtitle">
                From Innovation Maturity to Continuous Improvement
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
        <section className="container margin-top--xl margin-bottom--xl">
          <Heading as="h2">
            <Translate id="homepage.section.phases.title">The Six Phases of Evidence-Based Innovation</Translate>
          </Heading>

          <div className="row">
            <div className="col col--4">
              <div className="card shadow--md margin-bottom--lg">
                <div className="card__body">
                  <h3>
                    <Translate id="homepage.section.phases.phase1.title">Phase 1 - Innovation Maturity & Readiness</Translate>
                  </h3>
                  <p>
                    <Translate id="homepage.section.phases.phase1.body">
                      Establish governance, leadership alignment, execution discipline, and cultural capacity required to innovate responsibly.
                    </Translate>
                  </p>
                  <p>
                    <strong>
                      <Translate id="homepage.section.phases.coreQuestionLabel">Core question:</Translate>
                    </strong>{' '}
                    <Translate id="homepage.section.phases.phase1.question">Are we structurally ready to innovate?</Translate>
                  </p>
                </div>
              </div>
            </div>

            <div className="col col--4">
              <div className="card shadow--md margin-bottom--lg">
                <div className="card__body">
                  <h3>
                    <Translate id="homepage.section.phases.phase2.title">Phase 2 - Discovery</Translate>
                  </h3>
                  <p>
                    <Translate id="homepage.section.phases.phase2.body">
                      Identify real problems and decision-worthy opportunities grounded in contextual evidence.
                    </Translate>
                  </p>
                  <p>
                    <strong>
                      <Translate id="homepage.section.phases.coreQuestionLabel">Core question:</Translate>
                    </strong>{' '}
                    <Translate id="homepage.section.phases.phase2.question">Is this worth validating?</Translate>
                  </p>
                </div>
              </div>
            </div>

            <div className="col col--4">
              <div className="card shadow--md margin-bottom--lg">
                <div className="card__body">
                  <h3>
                    <Translate id="homepage.section.phases.phase3.title">Phase 3 - Validation</Translate>
                  </h3>
                  <p>
                    <Translate id="homepage.section.phases.phase3.body">
                      Test assumptions through structured experimentation and measurable learning cycles.
                    </Translate>
                  </p>
                  <p>
                    <strong>
                      <Translate id="homepage.section.phases.coreQuestionLabel">Core question:</Translate>
                    </strong>{' '}
                    <Translate id="homepage.section.phases.phase3.question">Does the evidence justify continued investment?</Translate>
                  </p>
                </div>
              </div>
            </div>

            <div className="col col--4">
              <div className="card shadow--md margin-bottom--lg">
                <div className="card__body">
                  <h3>
                    <Translate id="homepage.section.phases.phase4.title">Phase 4 - Efficiency</Translate>
                  </h3>
                  <p>
                    <Translate id="homepage.section.phases.phase4.body">
                      Operationalize delivery through stable systems, defined thresholds, and repeatable performance.
                    </Translate>
                  </p>
                  <p>
                    <strong>
                      <Translate id="homepage.section.phases.coreQuestionLabel">Core question:</Translate>
                    </strong>{' '}
                    <Translate id="homepage.section.phases.phase4.question">Can this be delivered consistently?</Translate>
                  </p>
                </div>
              </div>
            </div>

            <div className="col col--4">
              <div className="card shadow--md margin-bottom--lg">
                <div className="card__body">
                  <h3>
                    <Translate id="homepage.section.phases.phase5.title">Phase 5 - Scale</Translate>
                  </h3>
                  <p>
                    <Translate id="homepage.section.phases.phase5.body">
                      Expand only when evidence supports defensible commitments of capital, reputation, and organizational capacity.
                    </Translate>
                  </p>
                  <p>
                    <strong>
                      <Translate id="homepage.section.phases.coreQuestionLabel">Core question:</Translate>
                    </strong>{' '}
                    <Translate id="homepage.section.phases.phase5.question">Is expansion justified?</Translate>
                  </p>
                </div>
              </div>
            </div>

            <div className="col col--4">
              <div className="card shadow--md margin-bottom--lg">
                <div className="card__body">
                  <h3>
                    <Translate id="homepage.section.phases.phase6.title">Phase 6 - Continuous Improvement</Translate>
                  </h3>
                  <p>
                    <Translate id="homepage.section.phases.phase6.body">
                      Maintain decision integrity through structured learning, governance review, and evidence renewal.
                    </Translate>
                  </p>
                  <p>
                    <strong>
                      <Translate id="homepage.section.phases.coreQuestionLabel">Core question:</Translate>
                    </strong>{' '}
                    <Translate id="homepage.section.phases.phase6.question">Are we adapting based on evidence?</Translate>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container margin-top--xl margin-bottom--xl">
          <Heading as="h2">
            <Translate id="homepage.section.canonBook.title">Canon vs Book</Translate>
          </Heading>
          <p>
            <Translate id="homepage.section.canonBook.body">
              The Canon defines what is valid within the framework. The Book explains how to interpret and apply it in context.
            </Translate>
          </p>
          <div className="margin-top--lg">
            <Mermaid
              value={`%%{init: {'theme':'base','themeVariables':{'fontSize':'12px'}}}%%
flowchart TD
  A[Canon Layer] --> B[Defines Validity Rules]
  A --> C[Decision Constraints]
  A --> D[Threshold Logic]

  E[Book Layer] --> F[Interpretation]
  E --> G[Examples]
  E --> H[Operational Guidance]

  A --> E
  E --> I[Applied Decision Integrity]

  classDef canon fill:#f5f5f5,stroke:#333,stroke-width:1px;
  classDef book fill:#ffffff,stroke:#555,stroke-width:1px;

  class A,B,C,D canon;
  class E,F,G,H,I book;`}
            />
          </div>
        </section>

        <section className="container margin-top--xl margin-bottom--xl">
          <Heading as="h2">
            <Translate id="homepage.section.audience.title">Who MCF 2.2 Is Designed For</Translate>
          </Heading>

          <div className="row">
            <div className="col col--4">
              <div className="card shadow--md">
                <div className="card__body">
                  <h3>
                    <Translate id="homepage.section.audience.startups.title">Startups & Founders</Translate>
                  </h3>
                  <p>
                    <Translate id="homepage.section.audience.startups.body">
                      Build defensible ventures by linking decisions to real evidence, not intuition or momentum.
                    </Translate>
                  </p>
                </div>
              </div>
            </div>

            <div className="col col--4">
              <div className="card shadow--md">
                <div className="card__body">
                  <h3>
                    <Translate id="homepage.section.audience.incubators.title">Incubators & Accelerators</Translate>
                  </h3>
                  <p>
                    <Translate id="homepage.section.audience.incubators.body">
                      Provide structured innovation governance and maturity assessment across portfolio companies.
                    </Translate>
                  </p>
                </div>
              </div>
            </div>

            <div className="col col--4">
              <div className="card shadow--md">
                <div className="card__body">
                  <h3>
                    <Translate id="homepage.section.audience.institutions.title">Institutions & Researchers</Translate>
                  </h3>
                  <p>
                    <Translate id="homepage.section.audience.institutions.body">
                      Align innovation with defensible decision thresholds, governance integrity, and long-term impact validation.
                    </Translate>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container margin-vert--xl">
          <Heading as="h2">
            <Translate id="homepage.section.evidencePractice.title">Evidence in Practice</Translate>
          </Heading>
          <p>
            <Translate id="homepage.section.evidencePractice.body">
              Explore how MCF 2.2 is applied in real-world innovation systems.
            </Translate>
          </p>
          <div className="row">
            <div className="col col--4">
              <div className="card padding--md">
                <h3>
                  <Translate id="homepage.section.evidencePractice.institutional.title">Institutional Innovation</Translate>
                </h3>
                <p>
                  <Translate id="homepage.section.evidencePractice.institutional.body">
                    Applying evidence thresholds in public sector modernization.
                  </Translate>
                </p>
                <Link to="https://doulab.net" target="_blank" rel="noopener noreferrer">
                  <Translate id="homepage.section.evidencePractice.institutional.cta">View Case Studies</Translate>
                </Link>
              </div>
            </div>
            <div className="col col--4">
              <div className="card padding--md">
                <h3>
                  <Translate id="homepage.section.evidencePractice.startup.title">Startup Validation</Translate>
                </h3>
                <p>
                  <Translate id="homepage.section.evidencePractice.startup.body">
                    Reducing uncertainty before irreversible commitments.
                  </Translate>
                </p>
                <Link to="https://doulab.net" target="_blank" rel="noopener noreferrer">
                  <Translate id="homepage.section.evidencePractice.startup.cta">View Examples</Translate>
                </Link>
              </div>
            </div>
            <div className="col col--4">
              <div className="card padding--md">
                <h3>
                  <Translate id="homepage.section.evidencePractice.governance.title">Governance Design</Translate>
                </h3>
                <p>
                  <Translate id="homepage.section.evidencePractice.governance.body">
                    Aligning decision integrity with execution discipline.
                  </Translate>
                </p>
                <Link to="https://doulab.net" target="_blank" rel="noopener noreferrer">
                  <Translate id="homepage.section.evidencePractice.governance.cta">Learn More</Translate>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="container margin-vert--xl">
          <Heading as="h2">
            <Translate id="homepage.section.faq.title">Frequently Asked Questions</Translate>
          </Heading>

          <details>
            <summary>
              <Translate id="homepage.section.faq.q1">What is MCF in one sentence?</Translate>
            </summary>
            <Translate id="homepage.section.faq.a1">
              MCF 2.2 is an evidence-first decision system for innovation from discovery to continuous improvement.
            </Translate>
          </details>

          <details>
            <summary>
              <Translate id="homepage.section.faq.q2">What does "decision integrity" mean?</Translate>
            </summary>
            <Translate id="homepage.section.faq.a2">
              It means decisions are traceable to evidence, governed by thresholds, and remain reversible until justified.
            </Translate>
          </details>

          <details>
            <summary>
              <Translate id="homepage.section.faq.q3">What is a threshold?</Translate>
            </summary>
            <Translate id="homepage.section.faq.a3">
              A threshold is a defined condition that determines whether a decision can proceed, pause, or reverse.
            </Translate>
          </details>

          <details>
            <summary>
              <Translate id="homepage.section.faq.q4">What kind of evidence?</Translate>
            </summary>
            <Translate id="homepage.section.faq.a4">
              Market validation, operational performance, governance signals, and measurable impact tied to explicit assumptions.
            </Translate>
          </details>

          <details>
            <summary>
              <Translate id="homepage.section.faq.q5">What does reversibility mean?</Translate>
            </summary>
            <Translate id="homepage.section.faq.a5">
              It means preserving the ability to change direction before commitments become irreversible.
            </Translate>
          </details>

          <details>
            <summary>
              <Translate id="homepage.section.faq.q6">Is MCF 2.2 open source?</Translate>
            </summary>
            <Translate id="homepage.section.faq.a6">
              Yes. It is released under CC BY-ND 4.0. You may share it with attribution but may not distribute modified versions.
            </Translate>
          </details>

          <details>
            <summary>
              <Translate id="homepage.section.faq.q7">What is the Canon?</Translate>
            </summary>
            <Translate id="homepage.section.faq.a7">
              The Canon defines what counts as valid within MCF. The Book explains how to interpret and apply it.
            </Translate>
          </details>

          <details>
            <summary>
              <Translate id="homepage.section.faq.q8">Is this only for institutions?</Translate>
            </summary>
            <Translate id="homepage.section.faq.a8">
              No. MCF supports startups, innovation labs, incubators, accelerators, and public institutions.
            </Translate>
          </details>

          <details>
            <summary>
              <Translate id="homepage.section.faq.q9">How do I start?</Translate>
            </summary>
            <Translate id="homepage.section.faq.a9">
              Begin with Pre-Discovery to establish innovation intent, governance readiness, and evidence orientation.
            </Translate>
          </details>
        </section>
      </main>
    </Layout>
  );
}



