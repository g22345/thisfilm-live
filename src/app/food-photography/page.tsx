'use client';

import { useEffect } from 'react';
import FoodHero from '@/components/food/FoodHero';
import FoodPainPoints from '@/components/food/FoodPainPoints';
import FoodBeforeAfter from '@/components/food/FoodBeforeAfter';
import FoodWhyUs from '@/components/food/FoodWhyUs';
import FoodPricing from '@/components/food/FoodPricing';
import FoodProcess from '@/components/food/FoodProcess';
import FoodUseCases from '@/components/food/FoodUseCases';
import FoodFAQ from '@/components/food/FoodFAQ';
import FoodCTA from '@/components/food/FoodCTA';
import FoodFooter from '@/components/food/FoodFooter';

export default function FoodPhotography() {
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
            <FoodHero />
            <div className="section-divider" />
            <FoodPainPoints />
            <div className="section-divider" />
            <FoodBeforeAfter />
            <div className="section-divider" />
            <FoodWhyUs />
            <div className="section-divider" />
            <FoodPricing />
            <div className="section-divider" />
            <FoodProcess />
            <div className="section-divider" />
            <FoodUseCases />
            <div className="section-divider" />
            <FoodFAQ />
            <FoodCTA />
            <FoodFooter />
        </main>
    );
}
