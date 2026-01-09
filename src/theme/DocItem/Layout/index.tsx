import React from 'react';
import type { Props } from '@theme/DocItem/Layout';
import OriginalLayout from '@theme-original/DocItem/Layout';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import EntityHeader from '@site/src/components/EntityHeader';

const DocItemLayout = (props: Props): JSX.Element => {
    const doc = useDoc() as {
        metadata?: { lastUpdatedAt?: number };
        frontMatter?: { entityHeader?: boolean; status?: string; version?: string };
        version?: { name?: string; label?: string };
    };

    const frontMatter = doc?.frontMatter ?? {};
    const showMeta = frontMatter.entityHeader !== false;

    const rawVersion = frontMatter.version ?? doc?.version?.label ?? doc?.version?.name;
    const cleanedVersion = rawVersion ? rawVersion.replace(/\\s*\\(.*\\)$/, '') : '2.2';
    const version = cleanedVersion.toLowerCase().startsWith('mcf')
        ? cleanedVersion
        : `MCF ${cleanedVersion}`;

    const status = frontMatter.status ?? 'Documentation';
    const isLegacy =
        typeof doc?.version?.name === 'string'
            ? doc.version.name !== 'current'
            : typeof doc?.version?.label === 'string'
              ? !doc.version.label.includes('(current)') && doc.version.label !== 'current'
              : false;
    const headerMode = isLegacy ? 'meta' : 'full';

    return (
        <OriginalLayout {...props}>
            {showMeta ? (
                <EntityHeader
                    entity="Documentation"
                    version={version}
                    status={status}
                    lastUpdated={doc?.metadata?.lastUpdatedAt}
                    mode={headerMode}
                />
            ) : null}
            {props.children}
        </OriginalLayout>
    );
};

export default DocItemLayout;
