'use client';

import { usePathname } from 'next/navigation';
import styles from './LangSwitch.module.css';

export default function LangSwitch() {
    const pathname = usePathname();
    const isEn = pathname.startsWith('/en');

    const targetPath = isEn
        ? pathname.replace('/en', '') || '/'
        : `/en${pathname}`;

    return (
        <a href={targetPath} className={styles.switch} title={isEn ? '切換至中文' : 'Switch to English'}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            <span>{isEn ? '中文' : 'EN'}</span>
        </a>
    );
}
