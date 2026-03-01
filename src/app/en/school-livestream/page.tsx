'use client';

import { useEffect } from 'react';
import HeroEn from '@/components/en/HeroEn';
import TrustBadgesEn from '@/components/en/TrustBadgesEn';
import PainPointsEn from '@/components/en/PainPointsEn';
import BeforeAfterEn from '@/components/en/BeforeAfterEn';
import ServicesEn from '@/components/en/ServicesEn';
import WhyUsEn from '@/components/en/WhyUsEn';
import ProcessEn from '@/components/en/ProcessEn';
import PricingEn from '@/components/en/PricingEn';
import PartnersEn from '@/components/en/PartnersEn';
import TrustEn from '@/components/en/TrustEn';
import FAQEn from '@/components/en/FAQEn';
import FooterEn from '@/components/en/FooterEn';
import LangSwitch from '@/components/LangSwitch';

export default function EnSchoolLivestream() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        document.querySelectorAll('.fade-in').forEach((el) => {
            observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <main>
            <LangSwitch />
            <HeroEn />
            <TrustBadgesEn />
            <div className="section-divider" />
            <PainPointsEn />
            <div className="section-divider" />
            <BeforeAfterEn />
            <div className="section-divider" />
            <ServicesEn />
            <div className="section-divider" />
            <WhyUsEn />
            <div className="section-divider" />
            <ProcessEn />
            <div className="section-divider" />
            <PricingEn />
            <div className="section-divider" />
            <PartnersEn />
            <div className="section-divider" />
            <TrustEn />
            <div className="section-divider" />
            <FAQEn />
            <FooterEn />
        </main>
    );
}
