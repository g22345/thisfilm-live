'use client';

import styles from './PainPoints.module.css';
import { IconCrowd, IconPhoneOff, IconGlobe, IconFilm } from './Icons';

const painPoints = [
    {
        icon: <IconCrowd size={28} />,
        title: '家長無法到場觀看',
        description: '場地容量有限，運動會期間家長只能在場外等候。並非不願入場，而是根本沒有足夠位置。',
    },
    {
        icon: <IconPhoneOff size={28} />,
        title: '自行直播效果不理想',
        description: '以手機搭配三腳架的方式進行直播，容易出現斷線、畫質模糊、收音不清等問題，反而引起家長不滿。',
    },
    {
        icon: <IconGlobe size={28} />,
        title: '海外家長無法參與',
        description: '移民潮後，越來越多家長身處海外。子女的畢業禮、運動會等重要時刻，他們只能缺席。',
    },
    {
        icon: <IconFilm size={28} />,
        title: '缺乏專業宣傳素材',
        description: '活動結束後沒有留下專業影像記錄，無法用於招生宣傳、校史存檔或社交媒體推廣。',
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
