'use client';

import styles from './Pricing.module.css';
import { IconShieldBasic, IconStar, IconCrown } from './Icons';

const plans = [
    {
        tier: '?∫Êú¨?¥Êí≠',
        icon: <IconShieldBasic size={32} />,
        price: 'HK$5,000',
        priceSuffix: 'Ëµ?,
        description: '?•È?‰πãÈÅ∏',
        features: [
            '?ÆÊ?‰ΩçÊ???,
            'YouTube / Facebook ?¥Êí≠',
            '?∫Êú¨?ñÂ±§ÔºàÊ†°??+ Ê¥ªÂ??çÔ?',
            '?®Á??ÄË°ìÊîØ??,
        ],
        highlight: false,
    },
    {
        tier: 'Ê®ôÊ??¥Êí≠',
        icon: <IconStar size={32} />,
        price: 'HK$12,000',
        priceSuffix: 'Ëµ?,
        description: '?Ä?óÊ≠°Ëø?,
        features: [
            '?ôÊ?‰ΩçÊ???,
            '?≥Ê??¢Èè°?ûÊîæ',
            'Ë®àÂ??øÂ?Â±?,
            'Á≤æËèØ?áÊÆµÔº?0 Áß?? 3Ôº?,
            'Ê¥ªÂ?Âæ?24 Â∞èÊ??ß‰∫§‰ª?,
        ],
        highlight: true,
    },
    {
        tier: 'Âπ¥Â∫¶?àÁ?',
        icon: <IconCrown size={32} />,
        price: 'HK$35,000',
        priceSuffix: 'Ëµ?/ Âπ?,
        description: '?®Âπ¥?°Ê?',
        features: [
            'Ê∂µË??∏È???+ Ê∞¥È???+ ?¢Ê•≠Á¶?,
            '?™Â??íÊ?',
            'Â∞àÂ±¨ÂÆ¢Êà∂Á∂ìÁ?',
            '?Ä?âÊ¥ª?ïÁ≤æ?ØÁ?ÊÆ?,
            'Â≠∏Ê†°ÂÆ?Ç≥Á¥†Ê?Â•óË?',
        ],
        highlight: false,
    },
];

export default function Pricing() {
    return (
        <section className={`section ${styles.pricing}`} id="pricing">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">?çÂ??πÊ?</span>
                    <h2 className="section-title">
                        ?àÊ¥ª?πÊ?Ôº?span className="highlight">?çÂ?‰∏çÂ??êÁ?</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        ‰ª•‰??∫Â??ÉÂÉπ?ºÔ?ÂØ¶È??±ÂÉπ?ÉÊ†π?öÊ¥ª?ïË?Ê®°Â??ÄÊ±ÇÂ∫¶Ë∫´Ë??†„Ä?
                    </p>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`${styles.planCard} ${plan.highlight ? styles.highlighted : ''} fade-in fade-in-delay-${i + 1}`}
                        >
                            {plan.highlight && (
                                <div className={styles.popularBadge}>?Ä?óÊ≠°Ëø?/div>
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
                                        <span className={styles.checkmark}>??/span>
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="https://wa.me/85270483360?text=‰Ω†Â•ΩÔºåÊ??≥Êü•Ë©¢Â≠∏?°Áõ¥?≠Ê???
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`btn ${plan.highlight ? 'btn-cta' : 'btn-outline'} ${styles.planBtn}`}
                            >
                                WhatsApp ?•Ë©¢?±ÂÉπ
                            </a>
                        </div>
                    ))}
                </div>

                <p className={styles.footnote}>
                    * ‰ª•‰??πÊ†º?Ö‰??ÉËÄÉ„ÄÇÊ??ëÊ??πÊ?Ê¥ªÂ?È°ûÂ??ÅÂ†¥?∞„ÄÅÊ??∑Á??†Á??ê‰?Â∫¶Ë∫´?±ÂÉπ??
                    <br />
                    Ê≠°Ë??ØÁµ°‰∫ÜËß£Ë©≥Ê? ?í{' '}
                    <a href="mailto:info@thisfilmproduction.com">info@thisfilmproduction.com</a>
                </p>
            </div>
        </section>
    );
}
