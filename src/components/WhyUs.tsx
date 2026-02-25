'use client';

import Image from 'next/image';
import styles from './WhyUs.module.css';

const features = [
    {
        icon: '🎥',
        title: '專業多機位攝製',
        description: '採用廣播級攝影設備，多角度全方位覆蓋，確保每個精彩瞬間都不會遺漏。',
    },
    {
        icon: '📡',
        title: 'LiveU 獨立網絡',
        description: '無需佔用學校 WiFi 資源。我們自帶 4G/5G bonding 設備，全程使用獨立流動網絡。',
    },
    {
        icon: '🔄',
        title: '即時慢鏡回放',
        description: '精彩時刻即時重播，搭配專業計分板圖層，為觀眾提供媲美電視賽事般的觀看體驗。',
    },
    {
        icon: '✂️',
        title: '精華片段剪輯',
        description: '直播結束後提供精華剪輯，學校可即時用於招生宣傳、社交媒體及校內存檔。',
    },
];

export default function WhyUs() {
    return (
        <section className={`section ${styles.whyUs}`} id="why-us">
            <div className="container">
                <div className={styles.layout}>
                    <div className={styles.textSide}>
                        <span className="section-label">為何選擇我們</span>
                        <h2 className="section-title">
                            專業直播服務，<br />
                            <span className="highlight">而非臨時拍攝方案</span>
                        </h2>
                        <p className="section-subtitle">
                            學校 IT 部門無需額外負擔 — 我們團隊攜帶全套設備到場，從安裝、測試到直播，全程一站式處理。
                        </p>

                        <div className={styles.featureGrid}>
                            {features.map((f, i) => (
                                <div key={i} className={`${styles.feature} fade-in fade-in-delay-${i + 1}`}>
                                    <span className={styles.featureIcon}>{f.icon}</span>
                                    <div>
                                        <h4 className={styles.featureTitle}>{f.title}</h4>
                                        <p className={styles.featureDesc}>{f.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.imageSide}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src="/images/control-room.jpg"
                                alt="專業直播控制台"
                                width={600}
                                height={400}
                                className={styles.image}
                            />
                            <div className={styles.imageGlow} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
