'use client';

import Image from 'next/image';
import styles from './WhyUs.module.css';
import { IconCamera, IconSignal, IconReplay, IconScissors } from './Icons';

const features = [
    {
        icon: <IconCamera size={24} />,
        title: '專業多機位攝製',
        description: '採用廣播級攝影設備，多角度全方位覆蓋。畢業禮台上頒獎、台下家長反應、全景場面 — 每個珍貴瞬間都不會遺漏。',
    },
    {
        icon: <IconSignal size={24} />,
        title: 'LiveU 獨立網絡',
        description: '無需佔用學校 WiFi 資源。我們自帶 4G/5G bonding 設備，禮堂內亦能穩定直播。',
    },
    {
        icon: <IconReplay size={24} />,
        title: '即時精彩回放',
        description: '學生上台一刻即時重播，搭配學校校徽及典禮資訊圖層，為觀眾提供專業觀看體驗。',
    },
    {
        icon: <IconScissors size={24} />,
        title: '精華片段剪輯',
        description: '直播結束後提供精華剪輯，學校可即時用於招生宣傳、社交媒體及校內存檔。每位畢業生都能獲得屬於自己的畢業回憶。',
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
