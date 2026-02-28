'use client';

import styles from '../Trust.module.css';

const stats = [
    { value: '20+', label: 'Sports Federation Partners' },
    { value: '100+', label: 'Events Livestreamed' },
    { value: '99.9%', label: 'Stream Uptime' },
    { value: '50+', label: 'Schools & Organisations' },
];

export default function TrustEn() {
    return (
        <section className={`section ${styles.trust}`} id="trust">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">Track Record</span>
                    <h2 className="section-title">
                        <span className="highlight">Proven livestream experience</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        From sports federations to interschool competitions, our crew has deep hands-on experience and the trust of our partners.
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
                        Whether it&apos;s federation tournaments or school events, they deliver
                        reliable YouTube livestreams every time. Parents — especially those overseas —
                        are always grateful, and it builds real trust.
                    </blockquote>
                    <div className={styles.quoteAuthor}>
                        <span className={styles.authorName}>Sports Federation Partner</span>
                    </div>
                </div>

                <div className={styles.ctaWrap}>
                    <p className={styles.ctaText}>Want to learn how we can tailor a livestream plan for your school? Get in touch.</p>
                    <p className={styles.urgency}>2025 graduation slots filling fast — enquire now to secure your date</p>
                    <a
                        href="https://wa.me/85270483360?text=Hi, I'd like to enquire about graduation livestream services"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-cta"
                    >
                        Free Livestream Consultation
                    </a>
                </div>
            </div>
        </section>
    );
}
