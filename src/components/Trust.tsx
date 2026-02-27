'use client';

import styles from './Trust.module.css';

const stats = [
    { value: '20+', label: '體育總會合作' },
    { value: '100+', label: '場直播完成' },
    { value: '99.9%', label: '直播穩定率' },
    { value: '50萬+', label: '累計觀看人次' },
];

export default function Trust() {
    return (
        <section className={`section ${styles.trust}`} id="trust">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">實力見證</span>
                    <h2 className="section-title">
                        <span className="highlight">有豐富直播經驗</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        從體育總會到學界賽事，我們的直播團隊已累積大量實戰經驗，深得合作夥伴信賴。
                    </p>
                </div>

                <div className={styles.statsGrid}>
                    {stats.map((s, i) => (
                        <div key={i} className={`${styles.statCard} fade-in fade-in-delay-${i + 1}`}>
                            <span className={styles.statValue}>{s.value}</span>
                            <span className={styles.statLabel}>{s.label}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.testimonial}>
                    <div className={styles.quoteIcon}>&ldquo;</div>
                    <blockquote className={styles.quote}>
                        他們的直播質素非常高，畫面清晰、切換流暢，完全不像一般的 YouTube 直播。
                        家長反應十分正面，不少海外親屬亦表示終於可以即時觀看比賽。
                    </blockquote>
                    <div className={styles.quoteAuthor}>
                        <span className={styles.authorName}>— 體育總會合作夥伴</span>
                    </div>
                </div>

                <div className={styles.ctaWrap}>
                    <p className={styles.ctaText}>如欲了解我們如何為貴校度身訂造直播方案，歡迎聯繫。</p>
                    <p className={styles.urgency}>2025 畢業禮檔期快將額滿，立即查詢預約</p>
                    <a
                        href="https://wa.me/85200000000?text=你好，我想查詢畢業禮直播服務"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-cta"
                    >
                        免費諮詢直播方案
                    </a>
                </div>
            </div>
        </section>
    );
}
