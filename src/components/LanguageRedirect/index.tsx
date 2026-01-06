import { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function LanguageRedirect() {
    const { i18n } = useDocusaurusContext();
    const { push } = useHistory();

    useEffect(() => {
        const userLang = navigator.language || navigator.languages[0];
        if (userLang.startsWith('es') && i18n.currentLocale === 'en') {
            push('/es/');
        }
    }, [i18n.currentLocale, push]);

    return null;
}
