import React from 'react';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import styles from './styles.module.css';

type EntityHeaderProps = {
    title?: string;
    entity: string;
    version?: string;
    status?: string;
    lastUpdated?: string | number | Date;
};

const formatDate = (value?: string | number | Date): string | null => {
    if (!value) {
        return null;
    }

    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) {
        return null;
    }

    return date.toISOString().slice(0, 10);
};

const EntityHeader: React.FC<EntityHeaderProps> = ({ title, entity, version, status, lastUpdated }) => {
    const doc = useDoc() as {
        metadata?: { title?: string; lastUpdatedAt?: number };
        frontMatter?: { title?: string; last_updated?: string; lastUpdated?: string };
        contentTitle?: string;
    };
    const frontMatter = doc?.frontMatter ?? {};
    const resolvedTitle =
        title ?? frontMatter.title ?? doc?.contentTitle ?? doc?.metadata?.title ?? '';
    const resolvedLastUpdated =
        formatDate(lastUpdated) ??
        formatDate(doc?.metadata?.lastUpdatedAt) ??
        formatDate(frontMatter.last_updated) ??
        formatDate(frontMatter.lastUpdated);

    return (
        <div className={styles.root}>
            <div className={styles.metaLine}>
                <span className={styles.metaItem}>{entity}</span>
                {version ? <span className={styles.metaItem}>{version}</span> : null}
                {status ? <span className={styles.status}>{status}</span> : null}
                {resolvedLastUpdated ? (
                    <span className={styles.lastUpdated}>Last updated: {resolvedLastUpdated}</span>
                ) : null}
            </div>
            {resolvedTitle ? <h1 className={styles.title}>{resolvedTitle}</h1> : null}
        </div>
    );
};

export default EntityHeader;
