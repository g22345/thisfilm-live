'use client';

import Image from 'next/image';
import styles from '../WhyUs.module.css';
import { IconCamera, IconSignal, IconReplay, IconScissors } from '../Icons';

const features = [
    {
        icon: <IconCamera size={24} />,
        title: 'Multi-Camera Production',
        description: 'Broadcast-grade cameras covering every angle — stage close-ups, audience reactions, and full venue wide shots. No moment is missed.',
    },
    {
        icon: <IconSignal size={24} />,
        title: 'LiveU Independent Network',
        description: 'No school WiFi needed. We bring our own 4G/5G bonding equipment for rock-solid streaming, even inside auditoriums.',
    },
    {
        icon: <IconReplay size={24} />,
        title: 'Instant Replay',
        description: 'Key moments replayed in real time, with school branding and ceremony info overlays for a broadcast-quality viewing experience.',
    },
    {
        icon: <IconScissors size={24} />,
        title: 'Highlight Reel',
        description: 'Post-event highlight edit for admissions marketing, social media, and school archives. Every graduate gets their own keepsake.',
    },
];

export default function WhyUsEn() {
    return (
        <section className={`section ${styles.whyUs}`} id="why-us">
            <div className="container">
                <div className={styles.layout}>
                    <div className={styles.textSide}>
                        <span className="section-label">Why Choose Us</span>
                        <h2 className="section-title">
                            Professional livestream,<br />
                            <span className="highlight">not a makeshift setup</span>
                        </h2>
                        <p className="section-subtitle">
                            Your IT department stays hands-off — our crew arrives with all equipment, sets up, tests, and runs the entire livestream.
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
                                alt="Professional livestream control room"
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
