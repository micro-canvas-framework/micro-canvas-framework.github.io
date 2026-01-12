declare module '@theme/MDXContent' {
    import type { ReactNode } from 'react';

    export interface Props {
        readonly children: ReactNode;
    }

    export default function MDXContent(props: Props): ReactNode;
}

declare module '@theme/DocItem/Content' {
    import type { ReactNode } from 'react';

    export interface Props {
        readonly children?: ReactNode;
    }

    export default function DocItemContent(props: Props): ReactNode;
}

declare module '@docusaurus/plugin-content-docs/client' {
    export function useDoc(): any;

    interface DocFrontMatter {
        entityHeader?: boolean;
        status?: string;
        version?: string;
        layer?: string;
        entityHeaderMode?: 'full' | 'meta' | 'title' | 'compact';
    }
}
