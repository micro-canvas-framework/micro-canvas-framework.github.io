import React from 'react';
import type { Props } from '@theme/DocItem/Content';
import OriginalDocItemContent from '@theme-original/DocItem/Content';
import LegacyBanner from '@site/src/components/LegacyBanner';

const DocItemContent = (props: Props): JSX.Element => {
    return (
        <>
            <LegacyBanner />
            <OriginalDocItemContent {...props} />
        </>
    );
};

export default DocItemContent;
