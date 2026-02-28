'use client';

import Image from 'next/image';
import styles from '../Partners.module.css';

const partners = [
    { name: 'Nike', file: '/images/partners/nike.svg' },
    { name: 'Adidas', file: '/images/partners/adidas.svg' },
    { name: 'Louis Vuitton', file: '/images/partners/louis-vuitton.svg' },
    { name: 'Dior', file: '/images/partners/dior.svg' },
    { name: 'Audi', file: '/images/partners/audi.svg' },
    { name: 'Toyota', file: '/images/partners/toyota.svg' },
    { name: 'Subaru Asia', file: '/images/partners/subaru.svg' },
    { name: 'Watsons', file: '/images/partners/watsons.svg' },
    { name: 'CK Hutchison', file: '/images/partners/cheung-kong.svg' },
    { name: 'Milk Magazine', file: '/images/partners/milk-magazine.svg' },
    { name: 'LCSD', file: '/images/partners/lcsd.svg' },
];

export default function PartnersEn() {
    return (
        <section className={styles.partners} id="partners">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label" style={{ justifyContent: 'center' }}>Our Partners</span>
                    <h2 className="section-title" style={{ textAlign: 'center' }}>
                        A production team <span className="highlight">trusted</span> across industries
                    </h2>
                    <p className={styles.subtitle}>
                        From international brands to government bodies, our professional services are widely recognised
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
                    Plus Hong Kong Hockey, Lands Department, Information Services Department and more
                </p>
            </div>
        </section>
    );
}
