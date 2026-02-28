'use client';

import styles from './Trust.module.css';

const stats = [
    { value: '20+', label: 'é«”è‚²ç¸½æ??ˆä?' },
    { value: '100+', label: '?´ç›´?­å??? },
    { value: '99.9%', label: '?´æ’­ç©©å??? },
    { value: '50??', label: 'ç´¯è?è§€?‹äººæ¬? },
];

export default function Trust() {
    return (
        <section className={`section ${styles.trust}`} id="trust">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">å¯¦å?è¦‹è?</span>
                    <h2 className="section-title">
                        <span className="highlight">?‰è?å¯Œç›´?­ç?é©?/span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        å¾é??²ç¸½?ƒåˆ°å­¸ç?è³½ä?ï¼Œæ??‘ç??´æ’­?˜é?å·²ç´¯ç©å¤§?å¯¦?°ç?é©—ï?æ·±å??ˆä?å¤¥ä¼´ä¿¡è³´??
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
                        ä»–å€‘ç??´æ’­è³ªç??å¸¸é«˜ï??«é¢æ¸…æ™°?å??›æ??¢ï?å®Œå…¨ä¸å?ä¸€?¬ç? YouTube ?´æ’­??
                        å®¶é•·?æ??å?æ­?¢ï¼Œä?å°‘æµ·å¤–è¦ªå±¬äº¦è¡¨ç¤ºçµ‚æ–¼?¯ä»¥?³æ?è§€?‹æ?è³½ã€?
                    </blockquote>
                    <div className={styles.quoteAuthor}>
                        <span className={styles.authorName}>??é«”è‚²ç¸½æ??ˆä?å¤¥ä¼´</span>
                    </div>
                </div>

                <div className={styles.ctaWrap}>
                    <p className={styles.ctaText}>å¦‚æ¬²äº†è§£?‘å€‘å?ä½•ç‚ºè²´æ ¡åº¦èº«è¨‚é€ ç›´?­æ–¹æ¡ˆï?æ­¡è??¯ç¹«??/p>
                    <p className={styles.urgency}>2025 ?¢æ¥­ç¦®æ??Ÿå¿«å°‡é?æ»¿ï?ç«‹å³?¥è©¢?ç?</p>
                    <a
                        href="https://wa.me/85270483360?text=ä½ å¥½ï¼Œæ??³æŸ¥è©¢ç•¢æ¥­ç¦®?´æ’­?å?"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-cta"
                    >
                        ?è²»è«®è©¢?´æ’­?¹æ?
                    </a>
                </div>
            </div>
        </section>
    );
}
