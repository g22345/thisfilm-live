'use client';

import styles from './Process.module.css';

const steps = [
    {
        num: '01',
        icon: '📞',
        title: '聯繫我們了解需求',
        description: '告知活動類型、日期及場地等基本資訊，我們將於 24 小時內回覆。',
    },
    {
        num: '02',
        icon: '📋',
        title: '度身訂造直播方案',
        description: '根據活動規模及場地環境，為學校建議最合適的機位配置及設備方案。',
    },
    {
        num: '03',
        icon: '🎬',
        title: '活動當日全程負責',
        description: '專業團隊到場架設、測試及直播，學校無需額外安排，全程由我們處理。',
    },
];

export default function Process() {
    return (
        <section className={`section ${styles.process}`} id="process">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">合作流程</span>
                    <h2 className="section-title">
                        <span className="highlight">三個步驟</span>，即可啟動直播
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        從查詢到直播完成，全程無需學校額外操心。
                    </p>
                </div>

                <div className={styles.timeline}>
                    {steps.map((step, i) => (
                        <div key={i} className={`${styles.step} fade-in fade-in-delay-${i + 1}`}>
                            <div className={styles.stepNum}>{step.num}</div>
                            <div className={styles.stepContent}>
                                <span className={styles.stepIcon}>{step.icon}</span>
                                <h3 className={styles.stepTitle}>{step.title}</h3>
                                <p className={styles.stepDesc}>{step.description}</p>
                            </div>
                            {i < steps.length - 1 && <div className={styles.connector} />}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
