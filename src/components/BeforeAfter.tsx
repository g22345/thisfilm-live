'use client';

import Image from 'next/image';
import styles from './BeforeAfter.module.css';

export default function BeforeAfter() {
    return (
        <section className={`section ${styles.section}`} id="before-after">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">效果對比</span>
                    <h2 className="section-title">
                        同一場畢業禮，<span className="highlight">兩種體驗。</span>
                    </h2>
                </div>

                <div className={styles.grid}>
                    {/* Before - Parents DIY */}
                    <div className={`${styles.card} ${styles.cardBefore}`}>
                        <div className={styles.imageWrap}>
                            <Image
                                src="/images/before-diy.jpg"
                                alt="家長自行拍攝"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.label}>
                            <span className={styles.labelIcon}>📱</span>
                            <span className={styles.labelText}>家長自行拍攝</span>
                        </div>
                        <ul className={styles.painList}>
                            <li>被前排人頭遮擋</li>
                            <li>手機畫質差、抖動</li>
                            <li>錯過重要時刻</li>
                        </ul>
                    </div>

                    {/* After - THISFILM Pro */}
                    <div className={`${styles.card} ${styles.cardAfter}`}>
                        <div className={styles.imageWrap}>
                            <Image
                                src="/images/after-pro.jpg"
                                alt="THISFILM 專業直播"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className={styles.label}>
                            <span className={styles.labelIcon}>🎬</span>
                            <span className={styles.labelText}>THISFILM 專業直播</span>
                        </div>
                        <ul className={styles.proList}>
                            <li>多機位高清畫面</li>
                            <li>全程專業收音</li>
                            <li>海外家長即時收看</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
