declare module '@theme/Heading' {
    import type { ComponentType, ReactNode } from 'react';
    const Heading: ComponentType<{
        as?: `h${1 | 2 | 3 | 4 | 5 | 6}`;
        className?: string;
        id?: string;
        children: ReactNode; // 👈 ADD this line!
    }>;
    export default Heading;
}
