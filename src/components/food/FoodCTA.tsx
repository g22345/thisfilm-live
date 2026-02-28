'use client';

import styles from './FoodCTA.module.css';

export default function FoodCTA() {
    return (
        <section className={`section ${styles.cta}`} id="food-cta">
            <div className="container">
                <div className={styles.content}>
                    <h2 className="section-title">
                        讓美食照片為你的<span className="highlight">生意說話</span>
                    </h2>
                    <p className={styles.subtitle}>
                        專業美食攝影，讓每道菜都成為吸引顧客的利器。立即預約，提升你的菜式視覺吸引力。
                    </p>
                    <div className={styles.buttons}>
                        <a
                            href="https://wa.me/85270483360?text=你好，我想查詢美食攝影服務"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-cta"
                        >
                            WhatsApp 免費諮詢
                        </a>
                        <a href="mailto:info@thisfilmproduction.com" className="btn btn-outline">
                            電郵查詢
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
