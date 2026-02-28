'use client';

import styles from './TrustBadges.module.css';

export default function TrustBadges() {
    return (
        <div className={styles.bar}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.badge}>
                    <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                    </svg>
                    <span>已納入<strong>教育局服務供應商</strong>名冊</span>
                </div>
                <div className={styles.divider} />
                <div className={styles.badge}>
                    <svg className={styles.icon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                        <line x1="1" y1="10" x2="23" y2="10" />
                    </svg>
                    <span>接受<strong>P-Card</strong>付款</span>
                </div>
            </div>
        </div>
    );
}
