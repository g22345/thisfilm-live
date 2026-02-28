'use client';

import styles from './FoodPricing.module.css';

const plans = [
    {
        tier: '單品',
        emoji: '📸',
        price: '$480',
        unit: '/ 5 張',
        tagline: '適合初次體驗美食攝影的小店老闆',
        features: [
            '專業攝影師到場',
            '燈光 + 造型擺設',
            '包含 2 套餐',
            '24 小時交圖',
            '修圖精選 1 張',
        ],
        highlight: false,
    },
    {
        tier: '套餐組合',
        emoji: '🍽️',
        price: '$1,500',
        unit: '/ 20 張',
        tagline: '最受歡迎、一次過搞定全部菜式',
        features: [
            '包含所有單品服務',
            '多角度拍攝',
            '修圖精選',
            '$75/張 額外加購更優惠',
        ],
        highlight: true,
    },
    {
        tier: '品牌企劃',
        emoji: '🎯',
        price: '$3,000',
        unit: '/ 月',
        tagline: '每月定期更新菜式，打造持續吸引力的視覺素材',
        features: [
            '每月 15 張精選修圖',
            '2 小時專業拍攝',
            '社交媒體裁切',
            '專屬設計顧問',
        ],
        highlight: false,
    },
];

export default function FoodPricing() {
    return (
        <section className={`section ${styles.pricing}`} id="pricing">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">價格方案</span>
                    <h2 className="section-title">
                        簡單<span className="highlight">透明</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`${styles.planCard} ${plan.highlight ? styles.highlighted : ''} fade-in fade-in-delay-${i + 1}`}
                        >
                            {plan.highlight && (
                                <div className={styles.popularBadge}>最受歡迎</div>
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
                                        <span className={styles.checkmark}>✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <p className={styles.tagline}>{plan.tagline}</p>
                            <a
                                href="https://wa.me/85270483360?text=你好，我想查詢美食攝影服務"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn ${plan.highlight ? 'btn-cta' : 'btn-outline'} ${styles.planBtn}`}
                            >
                                WhatsApp 查詢
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
