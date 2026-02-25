'use client';

import { useState } from 'react';
import styles from './FAQ.module.css';

const faqs = [
    {
        question: '直播是否需要使用學校 WiFi？',
        answer:
            '完全不需要。我們自帶 LiveU 4G/5G bonding 設備，全程使用獨立流動網絡，不會佔用學校頻寬。IT 部門完全無需擔心。',
    },
    {
        question: '可以直播到哪些平台？',
        answer:
            'YouTube、Facebook、學校官網，甚至私人連結都可以。我們支援同時串流至多個平台，確保所有家長都能收看。',
    },
    {
        question: '需要提前多久預約？',
        answer:
            '建議於活動前 1–2 個月查詢。旺季時段（運動會期 10–12 月、畢業禮 6–7 月）建議更早聯繫。年度合約客戶享有優先排期。',
    },
    {
        question: '下雨或室內場地可以進行嗎？',
        answer:
            '完全沒問題。室內活動（如畢業禮、音樂會）我們會根據場地燈光調整設備配置。戶外活動遇上雨天，設備亦有防水保護。',
    },
    {
        question: '直播結束後有沒有錄影留存？',
        answer:
            '有。所有直播均會同步錄影。標準方案或以上更包含精華片段剪輯，學校可即時用於招生宣傳及社交媒體内容分享。',
    },
    {
        question: '學校預算有限，有更靈活的方案嗎？',
        answer:
            '有。我們明白每間學校的預算不同，方案可靈活調整。歡迎直接 WhatsApp 或電郵與我們商討，定能找到合適方案。',
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className={`section ${styles.faq}`} id="faq">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">常見問題</span>
                    <h2 className="section-title">
                        您可能想了解的<span className="highlight">問題</span>
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
