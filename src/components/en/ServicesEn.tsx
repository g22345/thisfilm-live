'use client';

import styles from '../Services.module.css';
import { IconGradCap, IconRunning } from '../Icons';

const graduationEvents = [
    { name: 'Graduation Ceremony', season: 'Jun–Jul', hot: true, hotLabel: 'Now Booking' },
    { name: 'Prize-giving / Closing', season: 'Jun–Jul', hot: false },
    { name: 'Annual Concert / Drama', season: 'Dec–Mar', hot: false },
    { name: 'Anniversary Ceremony', season: 'Varies', hot: true, hotLabel: 'High Demand' },
    { name: 'Open Day', season: 'Oct–Jan', hot: false },
    { name: 'STEM Exhibition', season: 'Year-round', hot: false },
];

const sportsEvents = [
    { name: 'Athletics Day', season: 'Oct–Apr', hot: false },
    { name: 'Swimming Gala', season: 'Mar–May', hot: false },
    { name: 'Inter-school Competitions', season: 'Year-round', hot: false },
    { name: 'Sports Day / Carnival', season: 'Nov–Mar', hot: false },
];

export default function ServicesEn() {
    return (
        <section className={`section ${styles.services}`} id="services">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">Service Scope</span>
                    <h2 className="section-title">
                        Beyond graduation — <span className="highlight">covering all school events</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        From graduation to sports days, our services cover every major school event throughout the year.
                    </p>
                </div>

                <div className={styles.columns}>
                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <span className={styles.columnIcon}><IconGradCap size={24} /></span>
                            <h3 className={styles.columnTitle}>Graduation Season (Jun–Jul)</h3>
                        </div>
                        <div className={styles.eventList}>
                            {graduationEvents.map((event, i) => (
                                <div key={i} className={styles.eventItem}>
                                    <div className={styles.eventName}>
                                        {event.name}
                                        {event.hot && <span className={styles.hotBadge}>{event.hotLabel || 'Popular'}</span>}
                                    </div>
                                    <span className={styles.eventSeason}>{event.season}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.column}>
                        <div className={styles.columnHeader}>
                            <span className={styles.columnIcon}><IconRunning size={24} /></span>
                            <h3 className={styles.columnTitle}>Sports Events</h3>
                        </div>
                        <div className={styles.eventList}>
                            {sportsEvents.map((event, i) => (
                                <div key={i} className={styles.eventItem}>
                                    <div className={styles.eventName}>
                                        {event.name}
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
