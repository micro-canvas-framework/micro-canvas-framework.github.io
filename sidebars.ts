import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
    tutorialSidebar: [
        {
            type: 'doc',
            id: 'introduction',
            label: 'Introduction',
        },
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
            label: 'Front Matter',
            items: [
                'frontmatter/frontmatter-foreword',
                'frontmatter/frontmatter-how-to-use',
                'frontmatter/frontmatter-preface',
                'frontmatter/frontmatter-the-author',
            ],
        },
        {
            type: 'category',
            label: 'Phase 1: Pre-Discovery',
            items: [
                'Part01/chapter2-innovation-maturity-assessment',
                'Part01/chapter3-innovation-governance',
                'Part01/chapter4-transforming-culture-mindset',
                'Part01/chapter5-agile-project-execution',
                'Part01/chapter6-defining-clear-okrs',
                'Part01/chapter7-training-agile-lean-innovation',
                'Part01/chapter8-governance-pilots-iterations',
                'Part01/chapter9-leadership-alignment-expansion',
                'Part01/chapter10-review-adjust-finalize-phase1',
            ],
        },
        {
            type: 'category',
            label: 'Phase 2: Structured Discovery and Validation',
            items: [
                'Part02/chapter11-uncovering-opportunities-analyzing-customers',
                'Part02/chapter12-defining-problem-strategic-objectives',
                'Part02/chapter13-exploring-alternative-solutions',
                'Part02/chapter14-transformative-purpose',
                'Part02/chapter15-marketing-engagement-sales',
                'Part02/chapter16-user-stories-rapid-prototyping',
                'Part02/chapter17-experimentation-testing',
                'Part02/chapter18-feedback-loops-iterative-refinement',
                'Part02/chapter19-validating-the-business-model',
                'Part02/chapter20-user-validation-expanded-pilot-testing',
                'Part02/chapter21-regulatory-review-scalability',
                'Part02/chapter22-strategic-review-next-steps',
            ],
        },
    ],
};

export default sidebars;
