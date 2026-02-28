'use client';

import styles from './FoodUseCases.module.css';

const useCases = [
    { emoji: '📍', name: 'Google Maps 菜單照片' },
    { emoji: '📱', name: 'Instagram / Facebook' },
    { emoji: '🛵', name: 'Foodpanda / Deliveroo' },
    { emoji: '📋', name: '實體菜單 / 餐牌' },
    { emoji: '🖥️', name: '餐廳網站' },
];

export default function FoodUseCases() {
    return (
        <section className={`section ${styles.useCases}`} id="use-cases">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">適用場景</span>
                    <h2 className="section-title">
                        可以用在<span className="highlight">哪裡？</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {useCases.map((uc, i) => (
                        <div key={i} className={`${styles.item} fade-in fade-in-delay-${Math.min(i + 1, 4)}`}>
                            <span className={styles.emoji}>{uc.emoji}</span>
                            <span className={styles.name}>{uc.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
