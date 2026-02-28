'use client';

import styles from './FoodProcess.module.css';

const steps = [
    {
        num: '01',
        emoji: '📱',
        title: '傳照片給我們',
        description: 'WhatsApp 傳送菜式照片，或由我們從 Google Maps / IG 挑選。',
    },
    {
        num: '02',
        emoji: '🎨',
        title: '專業影像提升',
        description: '我們根據你的餐廳風格，提升燈光、色調、構圖與氛圍。',
    },
    {
        num: '03',
        emoji: '✅',
        title: '24 小時交付',
        description: '收到成品後，直接用於 Google Maps、IG、外賣平台及菜單。',
    },
];

export default function FoodProcess() {
    return (
        <section className={`section ${styles.process}`} id="process">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">合作流程</span>
                    <h2 className="section-title">
                        <span className="highlight">3 步</span>完成
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        從傳照片到交付成品，全程無需你額外操心。
                    </p>
                </div>

                <div className={styles.timeline}>
                    {steps.map((step, i) => (
                        <div key={i} className={`${styles.step} fade-in fade-in-delay-${i + 1}`}>
                            <div className={styles.stepNum}>{step.num}</div>
                            <div className={styles.stepContent}>
                                <span className={styles.stepEmoji}>{step.emoji}</span>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
