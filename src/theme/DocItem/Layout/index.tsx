import React from 'react';
import type { Props } from '@theme/DocItem/Layout';
import OriginalLayout from '@theme-original/DocItem/Layout';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import EntityHeader from '@site/src/components/EntityHeader';

const DocItemLayout = (props: Props): JSX.Element => {
    const doc = useDoc() as {
        metadata?: {
            lastUpdatedAt?: number;
            version?: string;
            unversionedId?: string;
        };
        frontMatter?: {
            entityHeader?: boolean;
            status?: string;
            version?: string;
            layer?: string;
            entityHeaderMode?: 'full' | 'meta' | 'title' | 'compact';
        };
        version?: { name?: string; label?: string };
    };

    const frontMatter = doc?.frontMatter ?? {};
    const showMeta = frontMatter.entityHeader !== false;
    const metadata = doc?.metadata ?? {};

    const rawVersion = frontMatter.version ?? doc?.version?.label ?? doc?.version?.name;
    const cleanedVersion = rawVersion ? rawVersion.replace(/\\s*\\(.*\\)$/, '') : '2.2';
    const version = cleanedVersion.toLowerCase().startsWith('mcf')
        ? cleanedVersion
        : `MCF ${cleanedVersion}`;

    const status = frontMatter.status ?? 'Documentation';
    const layer =
        frontMatter.layer ??
        (status.toLowerCase() === 'explanatory'
            ? 'Book'
            : status.toLowerCase() === 'canonical'
              ? 'Canon'
              : 'Documentation');
    const docVersion = metadata.version;
    const isLegacy = typeof docVersion === 'string' && docVersion !== 'current';
    const headerMode = isLegacy
        ? 'meta'
        : frontMatter.entityHeaderMode ?? 'compact';

    return (
        <OriginalLayout {...props}>
            {showMeta ? (
                <EntityHeader
                    entity={layer}
                    version={version}
                    status={status}
                    lastUpdated={metadata.lastUpdatedAt}
                    mode={headerMode}
                />
            ) : null}
            {props.children}
        </OriginalLayout>
    );
};

export default DocItemLayout;
