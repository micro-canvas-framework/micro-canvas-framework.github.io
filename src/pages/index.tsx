
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
        <div className={styles.heroContent}>
          <Heading as="h1" className="hero__title">
            <img src="/img/hero.svg" alt="MCF Logo" />
          </Heading>

          <p className={styles.heroMicroLine}>
            <Translate id="homepage.heroMicroLine">Reduce uncertainty. Make defensible decisions. Scale responsibly.</Translate>
          </p>

          <p className="hero__subtitle">
            <Translate id="homepage.subtitle">
              An open-source framework that helps teams make better innovation decisions - from Discovery to Continuous Improvement.
            </Translate>
          </p>

          <div className={styles.heroButtons}>
            <Link className={clsx('button button--secondary button--lg')} to="/docs/book/how-to-read-mcf">
              <Translate id="homepage.buttonExplorePhases">Explore the phases</Translate>
            </Link>
            <Link className={clsx('button button--primary button--lg')} to="/docs/canon/definitions">
              <Translate id="homepage.buttonReadCanon">Read the Canon</Translate>
            </Link>
            <Link className={clsx('button button--secondary button--lg')} to="#case-studies" data-noBrokenLinkCheck>
              <Translate id="homepage.buttonCaseStudies">View case studies</Translate>
            </Link>
          </div>

          <p className={styles.heroFooterLine}>
            <Translate id="homepage.heroFooterLine">Open-source under CC BY-ND 4.0</Translate>
          </p>
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
  skipBrokenCheck?: boolean;
};

function McfCard({ icon, title, body, cta, href, skipBrokenCheck }: CardProps) {
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
        <Link
          className={clsx('button button--primary', styles.mcfCardButton)}
          to={href}
          data-noBrokenLinkCheck={skipBrokenCheck ? true : undefined}
        >
          {cta} <span aria-hidden="true">-&gt;</span>
        </Link>
      </div>
    </div>
  );
}

export default function Home(): ReactNode {
  const { i18n } = useDocusaurusContext();

  // Dynamic Canonical and Hreflang setup
  const canonicalUrl = i18n.currentLocale === 'es' ? 'https://www.themicrocanvas.com/es/' : 'https://www.themicrocanvas.com/';

  // Canon vs Book diagram (system view)
  const canonVsBookDiagram = String.raw`%%{init: {
  "theme":"base",
  "fontSize":"12px",
  "flowchart":{
    "curve":"linear",
    "nodeSpacing":70,
    "rankSpacing":95,
    "padding":34,
    "htmlLabels": true
  }
}}%%
flowchart TB

  %% Top anchor
  M["<b>MCF&nbsp;2.2&nbsp;</b>"]

  %% Canon Layer
  subgraph CANON["<b>Canon: validity rules</b>&nbsp;&nbsp;"]
    direction TB

    %% Invisible spacer row to create breathing room
    SP1[" "]:::spacer

    subgraph CANONROW[" "]
      direction LR
      C3["Decision thresholds&nbsp;"]
      C2["Evidence logic&nbsp;"]
      C4["Governance boundaries&nbsp;"]
      C1["Definitions&nbsp;"]
      C5["Versioning constraints&nbsp;"]
    end
  end

  %% Book Layer
  subgraph BOOK["<b>Book:&nbsp;interpretation&nbsp;and&nbsp;application</b>&nbsp;&nbsp;"]
    direction TB

    %% Invisible spacer row
    SP2[" "]:::spacer

    subgraph BOOKROW[" "]
      direction LR
      B1["Phase guidance&nbsp;"]
      B2["Examples&nbsp;"]
      B3["Templates and checklists&nbsp;"]
      B4["Plain-language clarifiers&nbsp;"]
    end
  end

  %% Outcomes
  DI["<b>Decision integrity&nbsp;</b>"]
  DC["<b>Defensible commitments&nbsp;&nbsp;</b>"]

  %% Structure
  M --> CANON
  CANON --> BOOK
  BOOK --> DI --> DC

  %% Cross-links
  C3 -. "criteria&nbsp;" .-> B1
  C2 -. "informs&nbsp;" .-> B2
  C4 -. "bounds&nbsp;" .-> B3
  C1 -. "anchors&nbsp;" .-> B4

  %% Styling
  classDef top fill:#fff3e6,stroke:#f59e0b,stroke-width:1px,color:#111827;
  classDef node fill:#fff7ed,stroke:#e2e8f0,stroke-width:1px,color:#111827;
  classDef outcome fill:#ecfeff,stroke:#0891b2,stroke-width:1px,color:#0f172a;
  classDef spacer fill:transparent,stroke:transparent,color:transparent;

  class M top;
  class C1,C2,C3,C4,C5,B1,B2,B3,B4 node;
  class DI,DC outcome;
  class SP1,SP2 spacer;

  style CANON fill:#f8fafc,stroke:#cbd5e1,stroke-width:1px;
  style BOOK fill:#f8fafc,stroke:#cbd5e1,stroke-width:1px;`;

  return (
    <Layout>
      <Head>
        <title>{translate({ id: 'homepage.meta.title', message: 'MCF 2.2 - A Decision Framework' })}</title>
        <meta
          name="description"
          content={translate({
            id: 'homepage.meta.description',
            message:
              'The MicroCanvas Framework (MCF) 2.2 is an open framework for navigating innovation with evidence-first clarity.',
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
                <Translate id="homepage.whyExists.title">Why innovation efforts break down</Translate>
              </Heading>
              <p className={styles.sectionSubtitle}>
                <Translate id="homepage.whyExists.subtitle">
                  Most failures are not about creativity. They are about decisions made without clear criteria or evidence.
                </Translate>
              </p>
            </div>

            <div className={clsx('row', styles.cardRow)}>
  <div className="col col--3">
    <div className={styles.simpleCard}>
      <Heading as="h3" className={styles.simpleCardTitle}>
        <Translate id="homepage.whyExists.card1.title">Unvalidated problem framing</Translate>
      </Heading>
      <p className={styles.simpleCardBody}>
        <Translate id="homepage.whyExists.card1.body">
          Teams start initiatives without a shared, decision-grade problem definition, baseline, or measurement method. This increases rework,
          misalignment, and makes outcomes hard to defend.
        </Translate>
      </p>
      <small className="text--muted">
        <Translate id="homepage.whyExists.card1.src">
          Source: Project Management Institute (2017) Pulse of the Profession 2017: Success Rates Rise.
        </Translate>
      </small>
    </div>
  </div>

  <div className="col col--3">
    <div className={styles.simpleCard}>
      <Heading as="h3" className={styles.simpleCardTitle}>
        <Translate id="homepage.whyExists.card2.title">Decisions without proper evidence</Translate>
      </Heading>
      <p className={styles.simpleCardBody}>
        <Translate id="homepage.whyExists.card2.body">
          Teams commit time, budget, or technical direction before agreeing what proof is “enough” to proceed. This increases sunk-cost pressure
          and turns learning into justification instead of decision input.
        </Translate>
      </p>
      <small className="text--muted">
        <Translate id="homepage.whyExists.card2.src">
          Source: Staw, B.M. (1976) ‘Knee-deep in the big muddy: A study of escalating commitment to a chosen course of action’, Organizational
          Behavior and Human Performance.
        </Translate>
      </small>
    </div>
  </div>

  <div className="col col--3">
    <div className={styles.simpleCard}>
      <Heading as="h3" className={styles.simpleCardTitle}>
        <Translate id="homepage.whyExists.card3.title">Objectives without measurable outcomes</Translate>
      </Heading>
      <p className={styles.simpleCardBody}>
        <Translate id="homepage.whyExists.card3.body">
          Objectives are written as activity (“do X”) instead of outcomes (“change Y”). When outcomes are not explicit, trade-offs and resource
          decisions become subjective.
        </Translate>
      </p>
      <small className="text--muted">
        <Translate id="homepage.whyExists.card3.src">Source: Doerr, J. (2018) Measure What Matters. Portfolio/Penguin.</Translate>
      </small>
    </div>
  </div>

  <div className="col col--3">
    <div className={styles.simpleCard}>
      <Heading as="h3" className={styles.simpleCardTitle}>
        <Translate id="homepage.whyExists.card4.title">Metrics that do not inform decisions</Translate>
      </Heading>
      <p className={styles.simpleCardBody}>
        <Translate id="homepage.whyExists.card4.body">
          Dashboards show outputs and activity, but not validated learning, risk reduction, or readiness to commit. When metrics cannot change a
          decision, they do not improve decision quality.
        </Translate>
      </p>
      <small className="text--muted">
        <Translate id="homepage.whyExists.card4.src">Source: W. Edwards Deming (1986) Out of the Crisis. MIT Press.</Translate>
      </small>
    </div>
  </div>
</div>

<div className={clsx('row', styles.cardRow, 'margin-top--lg')}>
  <div className="col col--3">
    <div className={styles.simpleCard}>
      <Heading as="h3" className={styles.simpleCardTitle}>
        <Translate id="homepage.whyExists.card5.title">Premature hard-to-undo commitments</Translate>
      </Heading>
      <p className={styles.simpleCardBody}>
        <Translate id="homepage.whyExists.card5.body">
          Organizations lock architecture, hiring, vendor contracts, or long timelines before core assumptions are tested. As reversibility drops,
          the quality of evidence required should rise.
        </Translate>
      </p>
      <small className="text--muted">
        <Translate id="homepage.whyExists.card5.src">Source: Ries, E. (2011) The Lean Startup. Crown Business.</Translate>
      </small>
    </div>
  </div>

  <div className="col col--3">
    <div className={styles.simpleCard}>
      <Heading as="h3" className={styles.simpleCardTitle}>
        <Translate id="homepage.whyExists.card6.title">Limited exploration of alternatives</Translate>
      </Heading>
      <p className={styles.simpleCardBody}>
        <Translate id="homepage.whyExists.card6.body">
          Teams converge on a preferred solution without structured comparison or adversarial testing. This increases fragility when conditions
          change or hidden constraints appear.
        </Translate>
      </p>
      <small className="text--muted">
        <Translate id="homepage.whyExists.card6.src">
          Source: Kahneman, D., Lovallo, D. and Sibony, O. (2011) ‘Before you make that big decision’, Harvard Business Review.
        </Translate>
      </small>
    </div>
  </div>

  <div className="col col--3">
    <div className={styles.simpleCard}>
      <Heading as="h3" className={styles.simpleCardTitle}>
        <Translate id="homepage.whyExists.card7.title">Governance detached from evidence</Translate>
      </Heading>
      <p className={styles.simpleCardBody}>
        <Translate id="homepage.whyExists.card7.body">
          Oversight reviews focus on status and outputs instead of evidence quality and decision readiness. This weakens accountability and makes
          scaling decisions harder to justify.
        </Translate>
      </p>
      <small className="text--muted">
        <Translate id="homepage.whyExists.card7.src">
          Source: Project Management Institute (2017) Pulse of the Profession 2017: Success Rates Rise.
        </Translate>
      </small>
    </div>
  </div>

  <div className="col col--3">
    <div className={styles.simpleCard}>
      <Heading as="h3" className={styles.simpleCardTitle}>
        <Translate id="homepage.whyExists.card8.title">Culture that suppresses learning</Translate>
      </Heading>
      <p className={styles.simpleCardBody}>
        <Translate id="homepage.whyExists.card8.body">
          When teams cannot surface uncertainty early, weak signals stay hidden until costs are high. Psychological safety enables earlier
          detection of risk and faster corrective learning.
        </Translate>
      </p>
      <small className="text--muted">
        <Translate id="homepage.whyExists.card8.src">
          Source: Google re:Work (n.d.) ‘Project Aristotle’; Edmondson, A. (1999) ‘Psychological safety and learning behavior in work teams’,
          Administrative Science Quarterly.
        </Translate>
      </small>
    </div>
  </div>
</div>
          </div>
        </section>
        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="homepage.phaseSpine.title">The phases</Translate>
              </Heading>
              <p className={styles.sectionSubtitle}>
                <Translate id="homepage.phaseSpine.subtitle">
                  A progressive spine that reduces uncertainty and prepares stronger, defensible decisions.
                </Translate>
              </p>
            </div>

            <div className={clsx('row', styles.cardRow)}>
              <div className="col col--4">
                <McfCard
                  icon="search"
                  title={<Translate id="homepage.phase1.title">Phase 1: Pre-Discovery</Translate>}
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
                  title={<Translate id="homepage.phase2.title">Phase 2: Structured Discovery and Validation</Translate>}
                  body={
                    <Translate id="homepage.phase2.body">
                      Reduce uncertainty with validation, decision thresholds, and documented evidence across key assumptions.
                    </Translate>
                  }
                  cta={<Translate id="homepage.phase2.cta">Explore Phase 2</Translate>}
                  href="/docs/book/phase-2/_intro"
                />
              </div>

              <div className="col col--4">
                <McfCard
                  icon="layers"
                  title={<Translate id="homepage.phase3.title">Phase 3: Efficiency</Translate>}
                  body={
                    <Translate id="homepage.phase3.body">
                      Stabilize delivery, improve signal quality, and reduce variance that distorts decisions.
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
                  title={<Translate id="homepage.phase4.title">Phase 4: Scale</Translate>}
                  body={
                    <Translate id="homepage.phase4.body">
                      Expand only when evidence supports harder-to-undo commitments, with boundaries and staged approvals.
                    </Translate>
                  }
                  cta={<Translate id="homepage.phase4.cta">Scale with care</Translate>}
                  href="/docs/book/phase-4/_intro"
                />
              </div>

              <div className="col col--4">
                <McfCard
                  icon="shield"
                  title={<Translate id="homepage.phase5.title">Phase 5: Continuous Improvement</Translate>}
                  body={
                    <Translate id="homepage.phase5.body">
                      Sustain learning, adapt to disruptions, and keep decisions evidence-aligned as conditions change.
                    </Translate>
                  }
                  cta={<Translate id="homepage.phase5.cta">Sustain and evolve</Translate>}
                  href="/docs/book/phase-5/_intro"
                />
              </div>

              <div className="col col--4">
                <McfCard
                  icon="loop"
                  title={<Translate id="homepage.howToRead.title">How to read MCF</Translate>}
                  body={
                    <Translate id="homepage.howToRead.body">
                      Start with the Book for guidance. Use the Canon to validate terms, boundaries, and what counts as evidence.
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
                  Canon defines validity. Book explains interpretation and application across the phases.
                </Translate>
              </p>
            </div>

            <div className={styles.mermaidScroll}>
              <Mermaid value={canonVsBookDiagram} />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading as="h2" className={styles.sectionTitle}>
                <Translate id="homepage.startHere.title">Start here</Translate>
              </Heading>
              <p className={styles.sectionSubtitle}>
                <Translate id="homepage.startHere.subtitle">Pick the path that matches your immediate need.</Translate>
              </p>
            </div>

            <div className={clsx('row', styles.cardRow)}>
              <div className="col col--3">
                <McfCard
                  icon="book"
                  title={<Translate id="homepage.startHere.card1.title">New to MCF</Translate>}
                  body={<Translate id="homepage.startHere.card1.body">Start with a guided overview and key concepts.</Translate>}
                  cta={<Translate id="homepage.startHere.card1.cta">Read the guide</Translate>}
                  href="/docs/book/how-to-read-mcf"
                />
              </div>
              <div className="col col--3">
                <McfCard
                  icon="shield"
                  title={<Translate id="homepage.startHere.card2.title">Need definitions</Translate>}
                  body={<Translate id="homepage.startHere.card2.body">Use the Canon to anchor terms and boundaries.</Translate>}
                  cta={<Translate id="homepage.startHere.card2.cta">Open Canon</Translate>}
                  href="/docs/canon/definitions"
                />
              </div>
              <div className="col col--3">
                <McfCard
                  icon="layers"
                  title={<Translate id="homepage.startHere.card3.title">Run a phase review</Translate>}
                  body={<Translate id="homepage.startHere.card3.body">Use the phase intros to assess readiness and evidence.</Translate>}
                  cta={<Translate id="homepage.startHere.card3.cta">Open phases</Translate>}
                  href="/docs/book/phase-1/_intro"
                />
              </div>
              <div className="col col--3">
                <McfCard
                  icon="rocket"
                  title={<Translate id="homepage.startHere.card4.title">See evidence in practice</Translate>}
                  body={<Translate id="homepage.startHere.card4.body">Review real implementations and outcomes.</Translate>}
                  cta={<Translate id="homepage.startHere.card4.cta">View cases</Translate>}
                  href="#case-studies"
                  skipBrokenCheck
                />
              </div>
            </div>
          </div>
        </section>

        <section id="case-studies" className={styles.section}>
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
                  title={<Translate id="homepage.cs2.title">OGTIC - RedLab</Translate>}
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
                <Translate id="homepage.audience.title">Who is it for?</Translate>
              </Heading>
              <p className={styles.sectionSubtitle}>
                <Translate id="homepage.audience.subtitle">
                  Pick the entry point that matches your institution and operating context.
                </Translate>
              </p>
            </div>

            <div className={clsx('row', styles.cardRow)}>
              <div className="col col--3">
                <McfCard
                  icon="shield"
                  title={<Translate id="homepage.aud.gov.title">Government and public sector</Translate>}
                  body={
                    <Translate id="homepage.aud.gov.body">
                      Decision clarity across policy, procurement, and service delivery with explicit evidence thresholds.
                    </Translate>
                  }
                  cta={<Translate id="homepage.aud.gov.cta">Start with the Book</Translate>}
                  href="/docs/book/how-to-read-mcf"
                />
              </div>
              <div className="col col--3">
                <McfCard
                  icon="rocket"
                  title={<Translate id="homepage.aud.private.title">Private enterprises</Translate>}
                  body={
                    <Translate id="homepage.aud.private.body">
                      Governance-aligned innovation without over-commitment, using evidence to guide scaling decisions.
                    </Translate>
                  }
                  cta={<Translate id="homepage.aud.private.cta">Start with the Book</Translate>}
                  href="/docs/book/how-to-read-mcf"
                />
              </div>
              <div className="col col--3">
                <McfCard
                  icon="book"
                  title={<Translate id="homepage.aud.academia.title">Academia and research</Translate>}
                  body={
                    <Translate id="homepage.aud.academia.body">
                      Traceable concepts, stable definitions, and a Canon layer that preserves research interpretability.
                    </Translate>
                  }
                  cta={<Translate id="homepage.aud.academia.cta">Explore Canon</Translate>}
                  href="/docs/canon/definitions"
                />
              </div>
              <div className="col col--3">
                <McfCard
                  icon="layers"
                  title={<Translate id="homepage.aud.ecosystem.title">Ecosystem builders</Translate>}
                  body={
                    <Translate id="homepage.aud.ecosystem.body">
                      Labs, incubators, and accelerators that need shared evaluation language and evidence discipline.
                    </Translate>
                  }
                  cta={<Translate id="homepage.aud.ecosystem.cta">Start with the Book</Translate>}
                  href="/docs/book/how-to-read-mcf"
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
                    No. It is a decision framework. The Book gives guidance and examples; the Canon defines what is valid and how evidence should be
                    interpreted.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q2">What do you mean by evidence?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a2">
                    Evidence is observable information that can change a decision: behavior, outcomes, audits, performance signals, and traceable
                    results.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q3">What is a decision threshold?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a3">
                    A threshold is the minimum evidence quality required before you commit. Higher irreversibility means higher thresholds.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q4">What are irreversible commitments?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a4">
                    Decisions that are expensive to unwind: long contracts, major hiring, regulatory exposure, or irreversible platform shifts.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q5">Why separate Canon and Book?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a5">
                    So the framework stays stable. Canon defines validity and boundaries. The Book can evolve without changing the core rules.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q6">Where should I start if I am new?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a6">
                    Start with How to read MCF. Then enter Phase 1 to build purpose, intent, governance readiness, and an evidence-oriented culture.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q7">Do I need all phases for every initiative?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a7">
                    Not always. Use the phase spine as a map. The right move depends on decision risk, reversibility, and evidence sufficiency.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q8">What is the difference between a framework and a methodology?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a8">
                    A framework defines boundaries and decision logic. A methodology prescribes step-by-step execution.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q9">How does MCF relate to Design Thinking, Lean Startup, Agile, or OKRs?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a9">
                    MCF can use those methods as tools, but it centers on decision integrity: which evidence is required and when.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q10">What counts as evidence in practice?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a10">
                    Observable signals tied to decisions: user behavior, audit results, performance metrics, or validated outcomes that can shift a
                    commitment.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q11">How does governance fit into MCF?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a11">
                    Governance sets boundaries and accountability for commitments. MCF keeps those boundaries explicit and evidence-based.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q12">Is MCF only for startups?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a12">
                    No. It is designed for startups, enterprises, public institutions, and ecosystem builders.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q13">What is the Canon?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a13">
                    Canon defines validity and boundaries. It is the normative layer that constrains interpretation and evidence claims.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q14">What is the Book?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a14">
                    The Book is the explanatory layer. It translates Canon into accessible guidance, phases, and examples.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q15">How do versions work?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a15">
                    Versions preserve interpretability over time. Canon changes are tracked so prior decisions remain auditable.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q16">Is MCF open source and what is the license?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a16">
                    Yes. MCF is published under Creative Commons Attribution-NoDerivatives 4.0 International (CC BY-ND 4.0).
                  </Translate>{' '}
                  <Link to="/docs/license">
                    <Translate id="homepage.faq.licenseLink">Read the license</Translate>
                  </Link>
                  .
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q17">Can I adapt the framework for internal use?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a17">
                    You can adopt it internally. Redistribution of modified versions is limited by the license.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q18">What is decision integrity?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a18">
                    It means decisions are traceable, evidence-backed, and constrained by explicit thresholds and boundaries.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q19">How long does it take to apply MCF?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a19">
                    It depends on context and readiness. MCF is designed to fit existing cycles while improving decision quality over time.
                  </Translate>
                </p>
              </details>

              <details className={styles.faqItem}>
                <summary>
                  <Translate id="homepage.faq.q20">Do I need to be an expert to use MCF?</Translate>
                </summary>
                <p>
                  <Translate id="homepage.faq.a20">
                    No. The Book is written for practical use, and the Canon provides precision when needed.
                  </Translate>
                </p>
              </details>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <p className={styles.licenseBlock}>
              <Translate id="homepage.licenseBlock">
                The MicroCanvas Framework 2.2 is open source under Creative Commons CC BY-ND 4.0. You may share and reference it with attribution;
                modified distributions require compliance with the license.
              </Translate>
            </p>
            <Link to="/docs/license">
              <Translate id="homepage.licenseLink">Read the license</Translate>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}













