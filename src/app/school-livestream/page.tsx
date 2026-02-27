'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Services from '@/components/Services';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import Partners from '@/components/Partners';
import Trust from '@/components/Trust';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function SchoolLivestream() {
    useEffect(() => {
        // Intersection Observer for fade-in animations
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
            <Hero />
            <div className="section-divider" />
            <PainPoints />
            <div className="section-divider" />
            <Services />
            <div className="section-divider" />
            <WhyUs />
            <div className="section-divider" />
            <Process />
            <div className="section-divider" />
            <Pricing />
            <div className="section-divider" />
            <Partners />
            <div className="section-divider" />
            <Trust />
            <div className="section-divider" />
            <FAQ />
            <Footer />
        </main>
    );
}
