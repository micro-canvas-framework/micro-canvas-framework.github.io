import React from 'react';
import Link from '@docusaurus/Link';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

const LegacyBanner: React.FC = () => {
    const doc = useDoc();
    const version = doc?.metadata?.version;

    if (typeof version !== 'string' || version === 'current') {
        return null;
    }

    return (
        <div className={styles.banner}>
            <div className={styles.title}>You're viewing legacy documentation (MCF 2.1).</div>
            <div className={styles.body}>
                For the current canonical specification and updates, switch to MCF 2.2.
            </div>
            <Link className={styles.link} to="/docs/canon/_intro">
                Go to Canon intro
            </Link>
        </div>
    );
};

export default LegacyBanner;
