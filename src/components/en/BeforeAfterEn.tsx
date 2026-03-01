'use client';

import Image from 'next/image';
import styles from '../BeforeAfter.module.css';

export default function BeforeAfterEn() {
    return (
        <section className={`section ${styles.section}`} id="before-after">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">See the Difference</span>
                    <h2 className="section-title">
                        Same graduation, <span className="highlight">two experiences.</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {/* Before - Parents DIY */}
                    <div className={`${styles.card} ${styles.cardBefore}`}>
                        <div className={styles.imageWrap}>
                            <Image
                                src="/images/before-diy.jpg"
                                alt="Parents filming on phones"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.label}>
                            <span className={styles.labelIcon}>📱</span>
                            <span className={styles.labelText}>Parents Filming Themselves</span>
                        </div>
                        <ul className={styles.painList}>
                            <li>Blocked by heads in front</li>
                            <li>Poor phone quality, shaky footage</li>
                            <li>Missing key moments</li>
                        </ul>
                    </div>

                    {/* After - THISFILM Pro */}
                    <div className={`${styles.card} ${styles.cardAfter}`}>
                        <div className={styles.imageWrap}>
                            <Image
                                src="/images/after-pro.jpg"
                                alt="THISFILM Professional Livestream"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.label}>
                            <span className={styles.labelIcon}>🎬</span>
                            <span className={styles.labelText}>THISFILM Professional Livestream</span>
                        </div>
                        <ul className={styles.proList}>
                            <li>Multi-camera HD footage</li>
                            <li>Professional audio throughout</li>
                            <li>Overseas parents watch live</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
