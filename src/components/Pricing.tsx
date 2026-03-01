'use client';

import styles from './Pricing.module.css';

const tiers = [
    { name: 'Lite', label: '輕量版', price: 'HK$3,800起', highlight: false },
    { name: 'Standard', label: '標準版', price: 'HK$6,800起', highlight: true },
    { name: 'Premium', label: '旗艦版', price: 'HK$9,800起', highlight: false },
];

const features = [
    { label: '時數', values: ['最長 2 小時', '最長 3 小時', '最長 3 小時'] },
    { label: '家長即時收看', values: [true, true, true] },
    { label: '雙機多角度', values: [false, true, true] },
    { label: '專業收音', values: [false, true, true] },
    { label: '圖文包裝', values: [false, false, true] },
    { label: '完整錄影保存', values: [false, false, true] },
    { label: '精華剪輯（宣傳/收生用）', values: [false, false, true] },
    { label: '活動硬照拍攝', values: [false, false, true] },
];

export default function Pricing() {
    return (
        <section className={`section ${styles.pricing}`} id="pricing">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">服務方案</span>
                    <h2 className="section-title">
                        選擇最適合的<span className="highlight">直播方案</span>
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
                                        {t.highlight && <span className={styles.badge}>最受歡迎</span>}
                                        <span className={styles.tierLabel}>{t.label}</span>
                                        <span className={styles.tierName}>{t.name}</span>
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
                                <td className={styles.featureCell}>價錢</td>
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
                                    <span className={styles.mobileLabel}>{t.label}</span>
                                    <span className={styles.mobileName}>{t.name}</span>
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
                                            {typeof v === 'string' ? `${f.label}：${v}` : f.label}
                                        </li>
                                    );
                                })}
                            </ul>
                            {t.highlight && <span className={styles.mobileBadge}>最受歡迎</span>}
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className={styles.ctaRow}>
                    <a
                        href="https://wa.me/85270483360?text=你好，我想了解直播服務方案"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-cta"
                    >
                        WhatsApp 免費諮詢
                    </a>
                </div>

                <p className={styles.footnote}>
                    所有方案均包含 YouTube 直播，家長可即時收看。需要客製化？WhatsApp 免費諮詢。
                </p>
            </div>
        </section>
    );
}
