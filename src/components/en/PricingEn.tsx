'use client';

import styles from '../Pricing.module.css';

const tiers = [
    { name: 'Lite', price: 'HK$3,800+', highlight: false },
    { name: 'Standard', price: 'HK$6,800+', highlight: true },
    { name: 'Premium', price: 'HK$9,800+', highlight: false },
];

const features = [
    { label: 'Duration', values: ['Up to 2 hrs', 'Up to 3 hrs', 'Up to 3 hrs'] },
    { label: 'Parent Live Viewing', values: [true, true, true] },
    { label: 'Multi-Camera', values: [false, true, true] },
    { label: 'Professional Audio', values: [false, true, true] },
    { label: 'Subtitle Overlay', values: [false, false, true] },
    { label: 'Full Recording', values: [false, false, true] },
    { label: 'Highlight Reel (Admissions/Promo)', values: [false, false, true] },
];

export default function PricingEn() {
    return (
        <section className={`section ${styles.pricing}`} id="pricing">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">Packages</span>
                    <h2 className="section-title">
                        Choose the right <span className="highlight">livestream plan</span>
                    </h2>
                </div>

                {/* Desktop: Comparison Table */}
                <div className={`${styles.tableWrap} fade-in`}>
                    <table className={styles.table}>
                        <thead>
                            <tr>
                                <th className={styles.featureHeader}></th>
                                {tiers.map((t, i) => (
                                    <th
                                        key={i}
                                        className={`${styles.tierHeader} ${t.highlight ? styles.tierHighlight : ''}`}
                                    >
                                        {t.highlight && <span className={styles.badge}>Most Popular</span>}
                                        <span className={styles.tierLabel}>{t.name}</span>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {features.map((f, i) => (
                                <tr key={i}>
                                    <td className={styles.featureCell}>{f.label}</td>
                                    {f.values.map((v, j) => (
                                        <td
                                            key={j}
                                            className={`${styles.valueCell} ${tiers[j].highlight ? styles.colHighlight : ''}`}
                                        >
                                            {typeof v === 'boolean' ? (
                                                v ? (
                                                    <span className={styles.check}>✓</span>
                                                ) : (
                                                    <span className={styles.dash}>—</span>
                                                )
                                            ) : (
                                                v
                                            )}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                            <tr className={styles.priceRow}>
                                <td className={styles.featureCell}>Price</td>
                                {tiers.map((t, i) => (
                                    <td
                                        key={i}
                                        className={`${styles.priceCell} ${t.highlight ? styles.colHighlight : ''}`}
                                    >
                                        {t.price}
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Mobile: Stacked cards */}
                <div className={`${styles.mobileCards} fade-in`}>
                    {tiers.map((t, i) => (
                        <div key={i} className={`${styles.mobileCard} ${t.highlight ? styles.mobileCardHighlight : ''}`}>
                            <div className={styles.mobileCardHeader}>
                                <div>
                                    <span className={styles.mobileLabel}>{t.name}</span>
                                </div>
                                <span className={styles.mobilePrice}>{t.price}</span>
                            </div>
                            <ul className={styles.mobileFeatures}>
                                {features.map((f, j) => {
                                    const v = f.values[i];
                                    if (typeof v === 'boolean' && !v) return null;
                                    return (
                                        <li key={j} className={styles.mobileFeatureItem}>
                                            <span className={styles.check}>✓</span>
                                            {typeof v === 'string' ? `${f.label}: ${v}` : f.label}
                                        </li>
                                    );
                                })}
                            </ul>
                            {t.highlight && <span className={styles.mobileBadge}>Most Popular</span>}
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className={styles.ctaRow}>
                    <a
                        href="https://wa.me/85270483360?text=Hi, I'd like to learn about your livestream packages"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-cta"
                    >
                        WhatsApp Free Consultation
                    </a>
                </div>

                <p className={styles.footnote}>
                    All plans include YouTube livestream for real-time parent viewing. Need a custom solution? WhatsApp us for a free consultation.
                </p>
            </div>
        </section>
    );
}
