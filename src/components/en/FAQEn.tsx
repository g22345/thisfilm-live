'use client';

import { useState } from 'react';
import styles from '../FAQ.module.css';

const faqs = [
    {
        question: 'Will indoor venues affect livestream quality?',
        answer:
            'Not at all. For indoor events we adjust equipment for venue lighting and connect directly to the hall\'s audio system, ensuring crystal-clear picture and sound.',
    },
    {
        question: 'How long is a typical graduation? How many cameras are needed?',
        answer:
            'Most events run 1.5–2.5 hours. We recommend at least 2 cameras (stage close-up + wide shot). Our Standard plan uses 3 cameras for full coverage.',
    },
    {
        question: 'Does the livestream use the school\'s WiFi?',
        answer:
            'No. We bring our own LiveU 4G/5G bonding equipment and run on an independent mobile network. Your school\'s bandwidth is completely unaffected.',
    },
    {
        question: 'Which platforms can you stream to?',
        answer:
            'YouTube, Facebook, school websites, and even private links. We support simultaneous multi-platform streaming so every parent can tune in.',
    },
    {
        question: 'How far in advance should we book?',
        answer:
            'We recommend enquiring 1–2 months ahead. Peak graduation season (June–July) fills up fast. Annual contract clients enjoy priority scheduling.',
    },
    {
        question: 'Is there a recording after the livestream?',
        answer:
            'Yes. All livestreams are simultaneously recorded. Standard plan and above include a highlight reel for admissions marketing and social media.',
    },
    {
        question: 'We have a limited budget. Are flexible plans available?',
        answer:
            'Absolutely. We understand every school has different needs. WhatsApp or email us to discuss — we\'ll find a plan that works for you.',
    },
];

export default function FAQEn() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className={`section ${styles.faq}`} id="faq">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">FAQ</span>
                    <h2 className="section-title">
                        Common <span className="highlight">questions</span>
                    </h2>
                </div>

                <div className={styles.list}>
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`${styles.item} ${openIndex === i ? styles.open : ''}`}
                        >
                            <button
                                className={styles.question}
                                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                aria-expanded={openIndex === i}
                            >
                                <span>{faq.question}</span>
                                <span className={styles.toggle}>
                                    {openIndex === i ? '−' : '+'}
                                </span>
                            </button>
                            <div className={styles.answerWrap}>
                                <p className={styles.answer}>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
