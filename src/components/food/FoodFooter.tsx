'use client';

import styles from './FoodFooter.module.css';

export default function FoodFooter() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.footerGrid}>
                    <div className={styles.brand}>
                        <h3 className={styles.brandName}>THISFILM LIVE PRODUCTION</h3>
                        <p className={styles.brandDesc}>
                            專業美食攝影服務，為餐廳、咖啡店及食品品牌打造令人垂涎的視覺內容。
                        </p>
                    </div>

                    <div className={styles.links}>
                        <h4 className={styles.linksTitle}>快速連結</h4>
                        <ul className={styles.linkList}>
                            <li><a href="#pain-points">常見痛點</a></li>
                            <li><a href="#before-after">拍攝前後</a></li>
                            <li><a href="#pricing">價格方案</a></li>
                            <li><a href="#faq">常見問題</a></li>
                        </ul>
                    </div>

                    <div className={styles.contact}>
                        <h4 className={styles.linksTitle}>聯絡我們</h4>
                        <ul className={styles.linkList}>
                            <li>
                                <a
                                    href="https://wa.me/85270483360"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    WhatsApp
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@thisfilmproduction.com">
                                    info@thisfilmproduction.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://biz.thisfilmproduction.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    biz.thisfilmproduction.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} THISFILM LIVE PRODUCTION. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
