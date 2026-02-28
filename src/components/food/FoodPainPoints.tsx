'use client';

import styles from './FoodPainPoints.module.css';

const painPoints = [
    {
        emoji: '📱',
        title: '顧客在 Google Maps 看完照片就離開',
        description: '你的餐廳評分不錯，但顧客一看到菜單照片，就直接滑走選了隔壁店。',
    },
    {
        emoji: '📉',
        title: '外賣平台上的照片差距明顯',
        description: 'Foodpanda、Deliveroo 上的照片跟隔壁店一比，差距一目了然。',
    },
    {
        emoji: '🍜',
        title: '明明很好吃，照片拍不出味道',
        description: '你的出品明明很有水準，但手機拍出來總是差點意思，沒有那種讓人想吃的感覺。',
    },
    {
        emoji: '💸',
        title: '請攝影師太貴，自己拍又不夠專業',
        description: '傳統食物攝影動輒數千元，但自己拍的照片放上去又拉低品牌形象。',
    },
    {
        emoji: '⏰',
        title: '搬食物到 Studio，折騰一整天',
        description: '傳統攝影需要把食物帶到影棚，來回折騰半天，食物都涼了。',
    },
];

export default function FoodPainPoints() {
    return (
        <section className={`section ${styles.painPoints}`} id="pain-points">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">餐廳老闆的困境</span>
                    <h2 className="section-title">
                        你是否遇過<span className="highlight-gold">這些情況？</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {painPoints.map((point, index) => (
                        <div
                            key={index}
                            className={`card fade-in fade-in-delay-${Math.min(index + 1, 4)} ${styles.card}`}
                        >
                            <div className={styles.iconWrap}>
                                <span className={styles.emoji}>{point.emoji}</span>
                            </div>
                            <h3 className={styles.cardTitle}>{point.title}</h3>
                            <p className={styles.cardDesc}>{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
