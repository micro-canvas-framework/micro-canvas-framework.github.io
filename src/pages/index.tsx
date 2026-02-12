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

// Mermaid renderer (type declared in src/theme.d.ts in prior pass)
import Mermaid from '@theme/Mermaid';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          <img src="/img/hero.svg" alt="MCF Logo" />
        </Heading>

        {/* Micro-line kept short, plain-language, evidence-first */}
        <p className={styles.heroMicroLine}>
          <Translate id="homepage.heroMicroLine">
            A decision framework for turning uncertainty into defensible progress.
          </Translate>
        </p>

        <p className="hero__subtitle">
          <Translate id="homepage.subtitle">
            From Pre-Discovery to Continuous Improvement, MCF 2.2 helps teams reduce uncertainty and make scaling decisions with confidence.
          </Translate>
        </p>

        <div className={styles.buttons}>
          <Link className={clsx('button button--secondary button--lg', styles.heroCta)} to="/docs/book/how-to-read-mcf">
            <Translate id="homepage.buttonTitle">Browse The MicroCanvas Framework v2.2</Translate>
            <br />
            <i>
              <Translate id="homepage.buttonSubtitle">Start with the Book, validate with the Canon.</Translate>
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

/** Minimal inline icons (no extra deps) */
function Icon({ name }: { name: 'search' | 'book' | 'layers' | 'rocket' | 'shield' | 'loop' }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' as const };
  switch (name) {
    case 'search':
      return (
        <svg {...common}>
          <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke="currentColor" strokeWidth="2" />
          <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'book':
      return (
        <svg {...common}>
          <path
            d="M4 19a2 2 0 0 0 2 2h13V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v13Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M4 17h13" stroke="currentColor" strokeWidth="2" />
        </svg>
      );
    case 'layers':
      return (
        <svg {...common}>
          <path
            d="m12 3 9 5-9 5-9-5 9-5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="m3 12 9 5 9-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <path d="m3 16 9 5 9-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      );
    case 'rocket':
      return (
        <svg {...common}>
          <path
            d="M5 14c0 5 5 5 5 5s0-5 5-10 10-5 10-5 0 5-5 10-10 5-10 5-5 0-5-5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M9 15l-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'shield':
      return (
        <svg {...common}>
          <path
            d="M12 2 20 6v6c0 6-8 10-8 10S4 18 4 12V6l8-4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'loop':
      return (
        <svg {...common}>
          <path
            d="M21 12a9 9 0 1 1-3-6.7"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path d="M21 3v6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
  }
}

type CardProps = {
  icon: 'search' | 'book' | 'layers' | 'rocket' | 'shield' | 'loop';
  title: ReactNode;
  body: ReactNode;
  cta: ReactNode;
  href: string;
};

function McfCard({ icon, title, body, cta, href }: CardProps) {
  return (
    <div className={styles.mcfCard}>
      <div className={styles.mcfCardHeader}>
        <div className={styles.mcfIconPill} aria-hidden="true">
          <Icon name={icon} />
        </div>
      </div>

      <div className={styles.mcfCardContent}>
        <Heading as="h3" className={styles.mcfCardTitle}>
          {title}
        </Heading>
        <p className={styles.mcfCardBody}>{body}</p>
      </div>

      <div className={styles.mcfCardFooter}>
        <Link className={clsx('button button--primary', styles.mcfCardButton)} to={href}>
          {cta} <span aria-hidden="true">→</span>
        </Link>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { siteConfig, i18n } = useDocusaurusContext();

  // Dynamic Canonical and Hreflang setup
  const canonicalUrl = i18n.currentLocale === 'es' ? 'https://www.themicrocanvas.com/es/' : 'https://www.themicrocanvas.com/';

  // Richer Canon vs Book diagram (system view)
  const canonVsBookDiagram = String.raw`%%{init: {"theme":"base","themeVariables":{"fontSize":"12px"}} }%%
flowchart TB
  classDef canon fill:#f6f7ff,stroke:#5b6cff,stroke-width:1px,color:#111;
  classDef book fill:#f7fff7,stroke:#2a9d5b,stroke-width:1px,color:#111;
  classDef boundary fill:#fffaf3,stroke:#f4a261,stroke-width:1px,color:#111;
  classDef artifact fill:#ffffff,stroke:#c9cbd3,stroke-width:1px,color:#111;

  A([MCF 2.2]):::boundary
  A --> C[Canon: what is valid]:::canon
  A --> B[Book: how to interpret and apply]:::book

  subgraph CANON[Canon layer]
    direction TB
    C1[Definitions]:::artifact
    C2[Evidence logic]:::artifact
    C3[Decision theory]:::artifact
    C4[Governance boundaries]:::artifact
    C5[Versioning & termination]:::artifact
    C --> C1
    C --> C2
    C --> C3
    C --> C4
    C --> C5
  end
  class CANON canon

  subgraph BOOK[Book layer]
    direction TB
    B1[Phases & chapter guidance]:::artifact
    B2[Examples & exercises]:::artifact
    B3[Templates & checklists]:::artifact
    B4[Plain-language clarifiers]:::artifact
    B --> B1
    B --> B2
    B --> B3
    B --> B4
  end
  class BOOK book

  C2 -->|constrains| B1
  C3 -->|sets thresholds| B1
  C4 -->|sets boundaries| B2
  C1 -->|anchors terms| B4
  C5 -->|controls change| B3

  D([Decision integrity]):::boundary
  B1 --> D
  B2 --> D
  B3 --> D
  B4 --> D

  E([Defensible commitments]):::boundary
  D --> E
`;

  return (
    <Layout>
      <Head>
        <title>
          {translate({ id: 'homepage.meta.title', message: 'Hello from {siteTitle}' }, { siteTitle: siteConfig.title })}
        </title>
        <meta
          name="description"
          content={translate({
            id: 'homepage.meta.description',
            message:
              'The MicroCanvas Framework (MCF) v2.2 is an open framework for navigating innovation from Pre-Discovery to Continuous Improvement with evidence-first clarity.',
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

      <main className={styles.main}>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="homepage.phaseSpine.title">The phases</Translate>
              </Heading>
              <p className={styles.sectionSubtitle}>
                <Translate id="homepage.phaseSpine.subtitle">
                  A progressive capability spine, from foundations to continuous improvement.
                </Translate>
              </p>
            </div>

            <div className={clsx('row', styles.cardRow)}>
              <div className="col col--4">
                <McfCard
                  icon="search"
                  title={<Translate id="homepage.phase1.title">Phase 1 — Pre-Discovery</Translate>}
                  body={
                    <Translate id="homepage.phase1.body">
                      Build foundational clarity: purpose, innovation intent, governance readiness, and an evidence-oriented culture.
                    </Translate>
                  }
                  cta={<Translate id="homepage.phase1.cta">Start Phase 1</Translate>}
                  href="/docs/book/phase-1/_intro"
                />
              </div>

              <div className="col col--4">
                <McfCard
                  icon="book"
                  title={<Translate id="homepage.phase2.title">Phase 2 — Discovery & Validation</Translate>}
                  body={
                    <Translate id="homepage.phase2.body">
                      Reduce uncertainty with structured validation, decision thresholds, and documented evidence across key assumptions.
                    </Translate>
                  }
                  cta={<Translate id="homepage.phase2.cta">Explore Phase 2</Translate>}
                  href="/docs/book/phase-2/_intro"
                />
              </div>

              <div className="col col--4">
                <McfCard
                  icon="layers"
                  title={<Translate id="homepage.phase3.title">Phase 3 — Efficiency</Translate>}
                  body={
                    <Translate id="homepage.phase3.body">
                      Make delivery reliable: stabilize processes, improve signal quality, and reduce variance that distorts decisions.
                    </Translate>
                  }
                  cta={<Translate id="homepage.phase3.cta">Enter Phase 3</Translate>}
                  href="/docs/book/phase-3/_intro"
                />
              </div>
            </div>

            <div className={clsx('row', styles.cardRow)}>
              <div className="col col--4">
                <McfCard
                  icon="rocket"
                  title={<Translate id="homepage.phase4.title">Phase 4 — Scale</Translate>}
                  body={
                    <Translate id="homepage.phase4.body">
                      Expand only when evidence supports harder-to-undo commitments, with constraints, boundaries, and staged approvals.
                    </Translate>
                  }
                  cta={<Translate id="homepage.phase4.cta">Scale with care</Translate>}
                  href="/docs/book/phase-4/_intro"
                />
              </div>

              <div className="col col--4">
                <McfCard
                  icon="shield"
                  title={<Translate id="homepage.phase5.title">Phase 5 — Continuous Improvement</Translate>}
                  body={
                    <Translate id="homepage.phase5.body">
                      Sustain learning, adapt to disruptions, and keep decisions evidence-aligned as conditions and stakeholders change.
                    </Translate>
                  }
                  cta={<Translate id="homepage.phase5.cta">Sustain & evolve</Translate>}
                  href="/docs/book/phase-5/_intro"
                />
              </div>

              <div className="col col--4">
                <McfCard
                  icon="loop"
                  title={<Translate id="homepage.howToRead.title">How to read MCF</Translate>}
                  body={
                    <Translate id="homepage.howToRead.body">
                      Start with the Book for guidance. Use the Canon to validate terms, boundaries, and what “counts” as evidence.
                    </Translate>
                  }
                  cta={<Translate id="homepage.howToRead.cta">How to read</Translate>}
                  href="/docs/book/how-to-read-mcf"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.altSection)}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="homepage.canonVsBook.title">Canon vs Book</Translate>
              </Heading>
              <p className={styles.sectionSubtitle}>
                <Translate id="homepage.canonVsBook.subtitle">
                  Canon defines validity. Book explains interpretation and application.
                </Translate>
              </p>
            </div>

            <div className={styles.mermaidWrap}>
              <Mermaid value={canonVsBookDiagram} />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="homepage.evidenceInPractice.title">Evidence in practice</Translate>
              </Heading>
              <p className={styles.sectionSubtitle}>
                <Translate id="homepage.evidenceInPractice.subtitle">
                  Real implementations and outcomes. Explore how MCF is applied in different contexts.
                </Translate>
              </p>
            </div>

            <div className={clsx('row', styles.cardRow)}>
              <div className="col col--4">
                <McfCard
                  icon="layers"
                  title={<Translate id="homepage.cs1.title">AFP SIEMBRA</Translate>}
                  body={
                    <Translate id="homepage.cs1.body">
                      Innovation capability building with governance and execution alignment, tied to measurable outcomes.
                    </Translate>
                  }
                  cta={<Translate id="homepage.cs1.cta">Read case study</Translate>}
                  href="https://www.doulab.net/case-studies/afp-siembra"
                />
              </div>

              <div className="col col--4">
                <McfCard
                  icon="shield"
                  title={<Translate id="homepage.cs2.title">OGTIC — RedLab</Translate>}
                  body={
                    <Translate id="homepage.cs2.body">
                      National innovation lab network work: decision structure, methods, and evidence discipline across institutions.
                    </Translate>
                  }
                  cta={<Translate id="homepage.cs2.cta">Read case study</Translate>}
                  href="https://www.doulab.net/case-studies/ogtic-redlab"
                />
              </div>

              <div className="col col--4">
                <McfCard
                  icon="rocket"
                  title={<Translate id="homepage.cs3.title">Alpha Inversiones</Translate>}
                  body={
                    <Translate id="homepage.cs3.body">
                      Strategic transformation support with practical validation loops, operational alignment, and measurable signals.
                    </Translate>
                  }
                  cta={<Translate id="homepage.cs3.cta">Read case study</Translate>}
                  href="https://www.doulab.net/case-studies/alpha-inversiones"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={clsx(styles.section, styles.altSection)}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="homepage.audience.title">Who it’s for</Translate>
              </Heading>
              <p className={styles.sectionSubtitle}>
                <Translate id="homepage.audience.subtitle">
                  Pick the entry point that matches your role and operating context.
                </Translate>
              </p>
            </div>

            <div className={clsx('row', styles.cardRow)}>
              <div className="col col--3">
                <McfCard
                  icon="rocket"
                  title={<Translate id="homepage.aud.startups.title">Startups</Translate>}
                  body={<Translate id="homepage.aud.startups.body">Validate assumptions faster and protect runway with clearer decisions.</Translate>}
                  cta={<Translate id="homepage.aud.startups.cta">Start here</Translate>}
                  href="/docs/book/how-to-read-mcf"
                />
              </div>
              <div className="col col--3">
                <McfCard
                  icon="layers"
                  title={<Translate id="homepage.aud.incubators.title">Incubators & Accelerators</Translate>}
                  body={<Translate id="homepage.aud.incubators.body">Standardize evaluation and guidance with shared evidence language.</Translate>}
                  cta={<Translate id="homepage.aud.incubators.cta">Start here</Translate>}
                  href="/docs/book/how-to-read-mcf"
                />
              </div>
              <div className="col col--3">
                <McfCard
                  icon="shield"
                  title={<Translate id="homepage.aud.institutions.title">Institutions</Translate>}
                  body={<Translate id="homepage.aud.institutions.body">Align governance and delivery, reduce risk, and scale responsibly.</Translate>}
                  cta={<Translate id="homepage.aud.institutions.cta">Start here</Translate>}
                  href="/docs/book/how-to-read-mcf"
                />
              </div>
              <div className="col col--3">
                <McfCard
                  icon="book"
                  title={<Translate id="homepage.aud.research.title">Researchers</Translate>}
                  body={<Translate id="homepage.aud.research.body">Traceable concepts, explicit boundaries, and an epistemic validity layer.</Translate>}
                  cta={<Translate id="homepage.aud.research.cta">Explore Canon</Translate>}
                  href="/docs/canon/definitions"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="homepage.faq.title">FAQ</Translate>
              </Heading>
              <p className={styles.sectionSubtitle}>
                <Translate id="homepage.faq.subtitle">Plain-language answers for first-time readers.</Translate>
              </p>
            </div>

            <div className={styles.faqGrid}>
              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q1">Is MCF 2.2 a methodology or a checklist?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a1">
                    No. It’s a decision framework. The Book gives guidance and examples; the Canon defines what is valid and how evidence should
                    be interpreted.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q2">What do you mean by “evidence”?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a2">
                    Evidence is observable information that can change a decision: user behavior, outcomes, audits, performance signals, and
                    traceable results. Not opinions, hopes, or dashboards without decision relevance.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q3">What is a “threshold” in plain language?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a3">
                    A threshold is the minimum proof you require before you commit. It’s the line that separates “keep learning” from “approve and
                    invest.”
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q4">What kinds of “commitments” are we talking about?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a4">
                    Hiring, long contracts, expanding infrastructure, compliance exposure, public launch, integrations that are hard to unwind, or
                    budget commitments that reduce options if the evidence changes.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q5">Why separate “Canon” and “Book”?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a5">
                    So the framework stays stable. Canon defines validity and boundaries. The Book can evolve as an interpretation layer without
                    changing the core rules.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q6">Is MCF open-source? What license?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a6">
                    Yes. MCF is published as open framework documentation under Creative Commons CC BY-ND 4.0. See the License page for details.
                  </Translate>{' '}
                  <Link to="/docs/license">
                    <Translate id="homepage.faq.licenseLink">Read the license</Translate>
                  </Link>
                  .
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q7">Where do I start if I’m new?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a7">
                    Start with “How to read MCF.” Then enter Phase 1 (Pre-Discovery) to build purpose, intent, governance readiness, and an
                    evidence-oriented culture.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q8">Do I need all phases for every initiative?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a8">
                    Not always. Use the phase spine as a map. The correct move depends on your decision risk, reversibility, and evidence
                    sufficiency.
                  </Translate>
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
