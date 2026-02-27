'use client';

import styles from './Services.module.css';
import { IconRunning, IconGradCap } from './Icons';

const sportsEvents = [
    { name: '陸運會', season: '10–4 月', hot: true },
    { name: '水運會', season: '3–5 月', hot: false },
    { name: '校際比賽', season: '全年', hot: false },
    { name: '體育日 / 嘉年華', season: '11–3 月', hot: false },
];

const nonSportsEvents = [
    { name: '畢業禮', season: '6–7 月', hot: true },
    { name: '周年音樂會 / 話劇', season: '12–3 月', hot: false },
    { name: '校慶典禮', season: '視乎學校', hot: true },
    { name: '開放日', season: '10–1 月', hot: false },
    { name: '頒獎禮 / 結業禮', season: '6–7 月', hot: false },
    { name: 'STEM 展覽', season: '全年', hot: false },
];

export default function Services() {
    return (
        <section className={`section ${styles.services}`} id="services">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">服務範圍</span>
                    <h2 className="section-title">
                        不僅限於體育日 — <span className="highlight">全方位覆蓋學校活動</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        從陸運會到畢業禮，我們的服務涵蓋學校全年各類大小活動。
                    </p>
                </div>

                <div className={styles.columns}>
                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <span className={styles.columnIcon}><IconRunning size={24} /></span>
                            <h3 className={styles.columnTitle}>體育類活動</h3>
                        </div>
                        <div className={styles.eventList}>
                            {sportsEvents.map((event, i) => (
                                <div key={i} className={styles.eventItem}>
                                    <div className={styles.eventName}>
                                        {event.name}
                                        {event.hot && <span className={styles.hotBadge}>熱門</span>}
                                    </div>
                                    <span className={styles.eventSeason}>{event.season}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <span className={styles.columnIcon}><IconGradCap size={24} /></span>
                            <h3 className={styles.columnTitle}>非體育類活動</h3>
                        </div>
                        <div className={styles.eventList}>
                            {nonSportsEvents.map((event, i) => (
                                <div key={i} className={styles.eventItem}>
                                    <div className={styles.eventName}>
                                        {event.name}
                                        {event.hot && <span className={styles.hotBadge}>高需求</span>}
                                    </div>
                                    <span className={styles.eventSeason}>{event.season}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
