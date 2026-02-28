'use client';

import styles from '../PainPoints.module.css';
import { IconCrowd, IconPhoneOff, IconClapperboard, IconFilm } from '../Icons';

const painPoints = [
    {
        icon: <IconCrowd size={28} />,
        title: 'Parents Can\'t Attend',
        description: 'Limited seating means only a few tickets per student. Grandparents, overseas relatives, and even some parents miss this once-in-a-lifetime moment.',
    },
    {
        icon: <IconPhoneOff size={28} />,
        title: 'DIY Livestream Falls Short',
        description: 'Phone-on-tripod setups lead to dropped connections, blurry video, and poor audio. Dim auditorium lighting makes it even worse.',
    },
    {
        icon: <IconClapperboard size={28} />,
        title: 'No Second Chances',
        description: 'Graduation happens once. A technical failure, dropped stream, or audio issue on the day is irreversible — and parents\' disappointment is lasting.',
    },
    {
        icon: <IconFilm size={28} />,
        title: 'No Professional Keepsake',
        description: 'Without proper video production, schools miss out on content for admissions marketing, archives, and social media. Students lose a priceless memory.',
    },
];

export default function PainPointsEn() {
    return (
        <section className={`section ${styles.painPoints}`} id="pain-points">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">The Reality Schools Face</span>
                    <h2 className="section-title">
                        Does your school <span className="highlight-gold">face these challenges?</span>
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
