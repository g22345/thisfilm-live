'use client';

import styles from './Pricing.module.css';
import { IconShieldBasic, IconStar, IconCrown } from './Icons';

const plans = [
    {
        tier: '基本直播',
        icon: <IconShieldBasic size={32} />,
        price: 'HK$5,000',
        priceSuffix: '起',
        description: '入門之選',
        features: [
            '單機位拍攝',
            'YouTube / Facebook 直播',
            '基本圖層（校名 + 活動名）',
            '全程技術支援',
        ],
        highlight: false,
    },
    {
        tier: '標準直播',
        icon: <IconStar size={32} />,
        price: 'HK$12,000',
        priceSuffix: '起',
        description: '最受歡迎',
        features: [
            '雙機位拍攝',
            '即時慢鏡回放',
            '計分板圖層',
            '精華片段（30 秒 × 3）',
            '活動後 24 小時內交付',
        ],
        highlight: true,
    },
    {
        tier: '年度合約',
        icon: <IconCrown size={32} />,
        price: 'HK$35,000',
        priceSuffix: '起 / 年',
        description: '全年無憂',
        features: [
            '涵蓋陸運會 + 水運會 + 畢業禮',
            '優先排期',
            '專屬客戶經理',
            '所有活動精華片段',
            '學校宣傳素材套裝',
        ],
        highlight: false,
    },
];

export default function Pricing() {
    return (
        <section className={`section ${styles.pricing}`} id="pricing">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">服務方案</span>
                    <h2 className="section-title">
                        靈活方案，<span className="highlight">配合不同預算</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        以下為參考價格，實際報價會根據活動規模及需求度身訂造。
                    </p>
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
                            <div className={styles.planEmoji}>{plan.icon}</div>
                            <h3 className={styles.planTier}>{plan.tier}</h3>
                            <p className={styles.planDesc}>{plan.description}</p>
                            <div className={styles.planPrice}>
                                <span className={styles.priceAmount}>{plan.price}</span>
                                <span className={styles.priceSuffix}>{plan.priceSuffix}</span>
                            </div>
                            <ul className={styles.featureList}>
                                {plan.features.map((f, j) => (
                                    <li key={j} className={styles.featureItem}>
                                        <span className={styles.checkmark}>✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="https://wa.me/85200000000?text=你好，我想查詢學校直播服務"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn ${plan.highlight ? 'btn-cta' : 'btn-outline'} ${styles.planBtn}`}
                            >
                                WhatsApp 查詢報價
                            </a>
                        </div>
                    ))}
                </div>

                <p className={styles.footnote}>
                    * 以上價格僅供參考。我們會根據活動類型、場地、時長等因素提供度身報價。
                    <br />
                    歡迎聯絡了解詳情 →{' '}
                    <a href="mailto:info@thisfilmproduction.com">info@thisfilmproduction.com</a>
                </p>
            </div>
        </section>
    );
}
