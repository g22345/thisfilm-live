'use client';

import Image from 'next/image';
import styles from './Partners.module.css';

/* 合作夥伴 Logo 雲 — 全部使用真實 logo 檔案
   - svg logos: use invert filter for white-on-dark
   - png/jpg/gif logos with backgrounds: use rounded container, no invert */

interface Partner {
    name: string;
    file: string;
    hasBackground?: boolean; // true = non-transparent, skip invert filter
}

const partners: Partner[] = [
    // 國際品牌 (all SVG, transparent)
    { name: 'Nike', file: '/images/partners/nike.svg' },
    { name: 'Adidas', file: '/images/partners/adidas.svg' },
    { name: 'Louis Vuitton', file: '/images/partners/louis-vuitton.svg' },
    { name: 'Dior', file: '/images/partners/dior.svg' },
    { name: 'Audi', file: '/images/partners/audi.svg' },
    { name: 'Toyota', file: '/images/partners/toyota.svg' },
    { name: 'Subaru Asia', file: '/images/partners/subaru.svg' },
    // 本地品牌
    { name: '屈臣氏', file: '/images/partners/watsons.svg' },
    { name: '長實集團', file: '/images/partners/cheung-kong.svg' },
    { name: 'Milk Magazine', file: '/images/partners/milk-magazine.svg' },
    // 體育 (PNG with background)
    { name: 'Hong Kong Hockey', file: '/images/partners/hk-hockey.png', hasBackground: true },
    // 政府機構 (mixed formats, some with backgrounds)
    { name: '康文署', file: '/images/partners/lcsd.png', hasBackground: true },
    { name: '地政總署', file: '/images/partners/lands-dept.svg' },
    { name: '新聞處', file: '/images/partners/isd-hk.jpg', hasBackground: true },
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
                            className={`${styles.logoItem} ${partner.hasBackground ? styles.logoItemBg : ''} fade-in fade-in-delay-${(i % 4) + 1}`}
                            title={partner.name}
                        >
                            <Image
                                src={partner.file}
                                alt={partner.name}
                                width={120}
                                height={40}
                                className={partner.hasBackground ? styles.logoImgBg : styles.logoImg}
                                unoptimized
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
