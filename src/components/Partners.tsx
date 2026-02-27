'use client';

import Image from 'next/image';
import styles from './Partners.module.css';

/* 合作夥伴 Logo 雲
   Only keep logos that display cleanly with invert filter.
   Others mentioned in text below the grid. */

const partners = [
    // Row 1: 國際品牌 (all clean SVGs)
    { name: 'Nike', file: '/images/partners/nike.svg' },
    { name: 'Adidas', file: '/images/partners/adidas.svg' },
    { name: 'Louis Vuitton', file: '/images/partners/louis-vuitton.svg' },
    { name: 'Dior', file: '/images/partners/dior.svg' },
    { name: 'Audi', file: '/images/partners/audi.svg' },
    { name: 'Toyota', file: '/images/partners/toyota.svg' },
    { name: 'Subaru Asia', file: '/images/partners/subaru.svg' },
    // Row 2: 本地品牌 (clean SVGs only)
    { name: '長實集團', file: '/images/partners/cheung-kong.svg' },
    { name: 'Milk Magazine', file: '/images/partners/milk-magazine.svg' },
    // 政府機構 (SVG with fills changed to black for invert)
    { name: '康文署', file: '/images/partners/lcsd.svg' },
];

export default function Partners() {
    return (
        <section className={styles.partners} id="partners">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label" style={{ justifyContent: 'center' }}>合作夥伴</span>
                    <h2 className="section-title" style={{ textAlign: 'center' }}>
                        深受各界<span className="highlight">信賴</span>的製作團隊
                    </h2>
                    <p className={styles.subtitle}>
                        從國際品牌到政府機構，我們的專業服務廣受認可
                    </p>
                </div>

                <div className={styles.logoGrid}>
                    {partners.map((partner, i) => (
                        <div
                            key={i}
                            className={`${styles.logoItem} fade-in fade-in-delay-${(i % 4) + 1}`}
                            title={partner.name}
                        >
                            <Image
                                src={partner.file}
                                alt={partner.name}
                                width={120}
                                height={40}
                                className={styles.logoImg}
                                unoptimized
                            />
                        </div>
                    ))}
                </div>

                <p className={styles.morePartners}>
                    以及屈臣氏、Hong Kong Hockey、地政總署、新聞處等多個政府及機構
                </p>
            </div>
        </section>
    );
}
