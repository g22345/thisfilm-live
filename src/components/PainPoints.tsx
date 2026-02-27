'use client';

import styles from './PainPoints.module.css';
import { IconCrowd, IconPhoneOff, IconClipboard, IconFilm } from './Icons';

const painPoints = [
    {
        icon: <IconCrowd size={28} />,
        title: '家長無法到場觀禮',
        description: '畢業禮座位有限，每位學生只獲派數張入場券。祖父母、海外親屬、甚至部份家長都未能出席子女人生中的重要時刻。',
    },
    {
        icon: <IconPhoneOff size={28} />,
        title: '自行直播效果不理想',
        description: '以手機搭配三腳架的方式進行直播，容易出現斷線、畫質模糊、收音不清等問題。禮堂光線昏暗更令效果大打折扣。',
    },
    {
        icon: <IconClipboard size={28} />,
        title: '校方統籌壓力大',
        description: '畢業禮涉及場地佈置、音響燈光、攝影錄影、直播技術等多個環節。校方需自行協調不同供應商，耗時費神且容易出錯。',
    },
    {
        icon: <IconFilm size={28} />,
        title: '缺乏專業畢業禮影像記錄',
        description: '畢業禮一年只有一次，沒有專業影像記錄，無法用於招生宣傳、校史存檔或社交媒體推廣。學生和家長也失去了珍貴回憶。',
    },
];

export default function PainPoints() {
    return (
        <section className={`section ${styles.painPoints}`} id="pain-points">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">學校面對的現實</span>
                    <h2 className="section-title">
                        這些問題，<span className="highlight-gold">貴校是否正在經歷？</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {painPoints.map((point, index) => (
                        <div
                            key={index}
                            className={`card fade-in fade-in-delay-${index + 1} ${styles.card}`}
                        >
                            <div className={styles.iconWrap}>
                                {point.icon}
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
