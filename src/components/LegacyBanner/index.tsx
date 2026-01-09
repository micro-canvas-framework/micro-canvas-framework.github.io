import React from 'react';
import Link from '@docusaurus/Link';
import { useActiveVersion } from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

const LegacyBanner: React.FC = () => {
    const version = useActiveVersion();

    if (!version || version.name === 'current') {
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
