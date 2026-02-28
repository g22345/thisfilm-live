'use client';

import styles from '../Process.module.css';
import { IconPhone, IconClipboard, IconClapperboard } from '../Icons';

const steps = [
    {
        num: '01',
        icon: <IconPhone size={24} />,
        title: 'Get in Touch',
        description: 'Share your event type, date, and venue details. We\'ll respond within 24 hours.',
    },
    {
        num: '02',
        icon: <IconClipboard size={24} />,
        title: 'Tailored Proposal',
        description: 'Based on your event scale and venue, we\'ll recommend the best camera setup and equipment plan.',
    },
    {
        num: '03',
        icon: <IconClapperboard size={24} />,
        title: 'We Handle Event Day',
        description: 'Our professional crew arrives, sets up, tests, and runs the entire livestream. Your staff can simply enjoy the event.',
    },
];

export default function ProcessEn() {
    return (
        <section className={`section ${styles.process}`} id="process">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">How It Works</span>
                    <h2 className="section-title">
                        <span className="highlight">Three simple steps</span> to go live
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        From enquiry to broadcast, your school doesn&apos;t need to lift a finger.
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
