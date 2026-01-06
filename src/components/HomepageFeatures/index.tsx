import type { ReactNode } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Translate, { translate } from '@docusaurus/Translate'; // ✅ ADD this
import styles from './styles.module.css';

type FeatureItem = {
    title: string;
    Svg: React.ComponentType<React.ComponentProps<'svg'>>;
    description: ReactNode;
};

const FeatureList: FeatureItem[] = [
    {
        title: translate({
            id: 'homepage.feature1.title',
            message: 'Easy to Implement',
        }),
        Svg: require('@site/static/img/easy-to-implement-mcf.svg').default,
        description: (
            <Translate id="homepage.feature1.description">
                The MicroCanvas® Framework is designed for immediate impact. Launch your innovation initiatives quickly with a straightforward, adaptable approach that fits your unique needs.
            </Translate>
        ),
    },
    {
        title: translate({
            id: 'homepage.feature2.title',
            message: 'Focus on What Matters',
        }),
        Svg: require('@site/static/img/focus-on-what-matters.svg').default,
        description: (
            <Translate id="homepage.feature2.description">
                Our framework helps you zero in on strategic goals and measurable outcomes. Concentrate on creating transformative solutions while we streamline the complexity of the innovation process.
            </Translate>
        ),
    },
    {
        title: translate({
            id: 'homepage.feature3.title',
            message: 'Built on Proven Methodologies',
        }),
        Svg: require('@site/static/img/built-on-proven-methodologies.svg').default,
        description: (
            <Translate id="homepage.feature3.description">
                Leverage the power of agile and lean practices. Customize your innovation journey with robust, industry-proven techniques that drive continuous improvement and scalable growth.
            </Translate>
        ),
    },
];

function Feature({ title, Svg, description }: FeatureItem) {
    return (
        <div className={clsx('col col--4')}>
            <div className="text--center">
                <Svg className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function HomepageFeatures(): ReactNode {
    return (
        <section className={styles.features}>
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}
