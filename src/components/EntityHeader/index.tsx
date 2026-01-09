import React from 'react';
import styles from './styles.module.css';

type EntityHeaderMeta = {
    label: string;
    value: string;
};

type EntityHeaderProps = {
    title?: string;
    entity: string;
    version?: string;
    status?: string;
    badges?: string[];
    meta?: EntityHeaderMeta[];
};

const EntityHeader: React.FC<EntityHeaderProps> = ({
    title,
    entity,
    version,
    status,
    badges = [],
    meta = [],
}) => {
    const kicker = [entity, version].filter(Boolean).join(' ');

    return (
        <div className={styles.root}>
            <div className={styles.kickerRow}>
                <span className={styles.kicker}>{kicker}</span>
                {status ? <span className={styles.badge}>{status}</span> : null}
            </div>
            {title ? <div className={styles.title}>{title}</div> : null}
            {badges.length > 0 ? (
                <div className={styles.badges}>
                    {badges.map((badge) => (
                        <span className={styles.badgeAlt} key={badge}>
                            {badge}
                        </span>
                    ))}
                </div>
            ) : null}
            {meta.length > 0 ? (
                <div className={styles.meta}>
                    {meta.map((item) => (
                        <div className={styles.metaItem} key={item.label}>
                            <span className={styles.metaLabel}>{item.label}</span>
                            <span className={styles.metaValue}>{item.value}</span>
                        </div>
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default EntityHeader;
