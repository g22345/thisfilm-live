'use client';

import styles from './FoodPricing.module.css';

const plans = [
    {
        tier: 'é«”é???,
        emoji: '?Ÿ¢',
        price: '$480',
        unit: '/ 5 å¼?,
        tagline: 'ä¸æ»¿?ï?è©¦å???¼µ?è²»?ä?ï¼Œé›¶é¢¨éšª??,
        features: [
            'å°ˆæ¥­é£Ÿç‰©å½±å??å?',
            'é¢¨æ ¼è¨ºæ–· + ?æ?å»ºè­°',
            '?…å« 2 æ¬¡ä¿®??,
            '24 å°æ?äº¤ä?',
            '?è²»è©¦å? 1 å¼?,
        ],
        highlight: false,
    },
    {
        tier: 'é¤ç?å¥—é?',
        emoji: '?Ÿ¡',
        price: '$1,500',
        unit: '/ 20 å¼?,
        tagline: '?€?—æ­¡è¿???ä¸€æ¬¡æ?å®šæ•´?¬è??®ã€?,
        features: [
            '?…å«é«”é??¹æ??‰å…§å®?,
            '?¨å??œå–®ç¿»æ–°',
            'çµ±ä?é¢¨æ ¼èª¿æ€?,
            '$75/å¼µï??¸é?è¶Šå?è¶Šå„ª??,
        ],
        highlight: true,
    },
    {
        tier: '?ˆè²»è¨ˆå?',
        emoji: '??',
        price: '$3,000',
        unit: '/ ??,
        tagline: '?·æ??ˆä??????œå–®å¸¸æ›´?°ï?ç¤¾äº¤åª’é??ç??‰å„ªè³ªå…§å®¹ã€?,
        features: [
            'æ¯æ? 15 å¼µå½±?æ???,
            '2 æ¢çŸ­?‡ï?é£Ÿç‰©?•æ?ï¼?,
            '?°è?å¼å³?‚æ›´??,
            'å°ˆå±¬é¢¨æ ¼é¡§å?',
        ],
        highlight: false,
    },
];

export default function FoodPricing() {
    return (
        <section className={`section ${styles.pricing}`} id="pricing">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">?å?å¥—é?</span>
                    <h2 className="section-title">
                        ç°¡å–®?æ?<span className="highlight">å®šåƒ¹</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`${styles.planCard} ${plan.highlight ? styles.highlighted : ''} fade-in fade-in-delay-${i + 1}`}
                        >
                            {plan.highlight && (
                                <div className={styles.popularBadge}>?€?—æ­¡è¿?/div>
                            )}
                            <div className={styles.planEmoji}>{plan.emoji}</div>
                            <h3 className={styles.planTier}>{plan.tier}</h3>
                            <div className={styles.planPrice}>
                                <span className={styles.priceAmount}>{plan.price}</span>
                                <span className={styles.priceSuffix}>{plan.unit}</span>
                            </div>
                            <ul className={styles.featureList}>
                                {plan.features.map((f, j) => (
                                    <li key={j} className={styles.featureItem}>
                                        <span className={styles.checkmark}>??/span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <p className={styles.tagline}>{plan.tagline}</p>
                            <a
                                href="https://wa.me/85270483360?text=ä½ å¥½ï¼Œæ??³æŸ¥è©¢é??©å½±?æ??‡æ???
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn ${plan.highlight ? 'btn-cta' : 'btn-outline'} ${styles.planBtn}`}
                            >
                                WhatsApp ?¥è©¢
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
