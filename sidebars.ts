import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        'book/how-to-read-mcf',
        {
            type: 'category',
            label: 'Canon',
            items: [
                'canon/_intro',
                'canon/definitions',
                'canon/epistemic-model',
                'canon/evidence-logic',
                'canon/decision-theory',
                'canon/stage-mechanics',
                'canon/governance-boundaries',
                'canon/failure-modes',
                'canon/versioning-termination',
                'canon/framework-boundaries',
            ],
        },
        {
            type: 'category',
            label: 'Meta',
            items: ['meta/changelog', 'meta/references'],
        },
        {
            type: 'category',
            label: 'Book',
            items: [
                'book/_intro',
                {
                    type: 'category',
                    label: 'Front matter',
                    items: [
                        'book/front-matter/_intro',
                        'book/front-matter/frontmatter-foreword',
                        'book/front-matter/frontmatter-preface',
                        'book/front-matter/frontmatter-how-to-use',
                        'book/front-matter/frontmatter-the-author',
                    ],
                },
                'book/evidence-first-thinking',
                'book/epistemic-stages',
                'book/decision-logic',
                'book/governance-and-roles',
                'book/failure-modes',
                'book/versioning-and-change-control',
                'book/boundaries-and-misuse',
                {
                    type: 'category',
                    label: 'Phase 1 — Foundations',
                    items: [
                        'book/phase-1/_intro',
                        'book/phase-1/chapter1-intro-innovation-maturity',
                        'book/phase-1/chapter2-innovation-maturity-assessment',
                        'book/phase-1/chapter3-innovation-governance',
                        'book/phase-1/chapter4-transforming-culture-mindset',
                        'book/phase-1/chapter5-agile-project-execution',
                        'book/phase-1/chapter6-defining-clear-okrs',
                        'book/phase-1/chapter7-training-agile-lean-innovation',
                        'book/phase-1/chapter8-governance-pilots-iterations',
                        'book/phase-1/chapter9-leadership-alignment-expansion',
                        'book/phase-1/chapter10-review-adjust-finalize-phase1',
                    ],
                },
                {
                    type: 'category',
                    label: 'Phase 2 - Structured Discovery & Validation',
                    items: [
                        'book/phase-2/_intro',
                        'book/phase-2/chapter11-uncovering-opportunities-analyzing-customers',
                        'book/phase-2/chapter12-defining-problem-strategic-objectives',
                        'book/phase-2/chapter13-exploring-alternative-solutions',
                        'book/phase-2/chapter14-transformative-purpose',
                        'book/phase-2/chapter15-marketing-engagement-sales',
                        'book/phase-2/chapter16-user-stories-rapid-prototyping',
                        'book/phase-2/chapter17-experimentation-testing',
                        'book/phase-2/chapter18-feedback-loops-iterative-refinement',
                        'book/phase-2/chapter19-validating-the-business-model',
                        'book/phase-2/chapter20-user-validation-expanded-pilot-testing',
                        'book/phase-2/chapter21-regulatory-review-scalability',
                        'book/phase-2/chapter22-strategic-review-next-steps',
                    ],
                },
                {
                    type: 'category',
                    label: 'Phase 3 - Efficiency - Process Optimization and Operations',
                    items: [
                        'book/phase-3/_intro',
                        'book/phase-3/chapter23-operational-processes',
                        'book/phase-3/chapter24-automation-data-driven-decision-making',
                        'book/phase-3/chapter25-quality-control-risk-management',
                    ],
                },
                {
                    type: 'category',
                    label: 'Phase 4 - Scaling - Accelerating Growth and Expansion',
                    items: [
                        'book/phase-4/_intro',
                        'book/phase-4/chapter26-scaling-strategy',
                        'book/phase-4/chapter27-infrastructure-org-alignment',
                        'book/phase-4/chapter28-strategic-partnerships-ecosystem-integration',
                        'book/phase-4/chapter29-growth-metrics-continuous-adjustment',
                    ],
                },
                {
                    type: 'category',
                    label: 'Phase 5 - Continuous Improvement - Adaptation and Future Readiness',
                    items: [
                        'book/phase-5/_intro',
                        'book/phase-5/chapter30-continuous-learning',
                        'book/phase-5/chapter31-future-disruptions-adaptive-strategies',
                        'book/phase-5/chapter32-enhancing-impact',
                        'book/phase-5/chapter33-sustaining-innovation-long-term',
                    ],
                },
                {
                    type: 'category',
                    label: 'Conclusion and Tools',
                    items: [
                        'book/conclusion/_intro',
                        'book/conclusion/chapter34-conclusion-transformative-impact',
                        'book/conclusion/chapter35-appendices-tools',
                    ],
                },
            ],
        },
    ],
};

export default sidebars;
