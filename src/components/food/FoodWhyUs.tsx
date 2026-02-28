'use client';

import styles from './FoodWhyUs.module.css';

const features = [
    {
        emoji: '🎯',
        title: '風格診斷',
        description: '我們會先分析你的餐廳風格，建議最適合的拍攝方向。日式、茶餐廳、西餐、火鍋 — 每種都有專屬方案。',
    },
    {
        emoji: '⚡',
        title: '24 小時交付',
        description: '傳統攝影需等 5-7 個工作天。我們 24 小時內交到你手上。',
    },
    {
        emoji: '📱',
        title: 'WhatsApp 傳照片即可',
        description: '無需搬食物到 Studio。在餐廳拍好，WhatsApp 傳給我們就完成。',
    },
    {
        emoji: '💰',
        title: '不到傳統攝影一半價格',
        description: '專業食物攝影收費 $900 起。我們由 $480 起，效果更出色。',
    },
];

export default function FoodWhyUs() {
    return (
        <section className={`section ${styles.whyUs}`} id="why-us">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">為何選擇我們</span>
                    <h2 className="section-title">
                        專業影像提升，<span className="highlight">不只是拍得好看。</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {features.map((f, i) => (
                        <div key={i} className={`${styles.card} fade-in fade-in-delay-${i + 1}`}>
                            <div className={styles.iconWrap}>
                                <span className={styles.emoji}>{f.emoji}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{f.title}</h3>
                            <p className={styles.cardDesc}>{f.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
