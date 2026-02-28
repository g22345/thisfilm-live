'use client';

import { useState } from 'react';
import styles from './FoodFAQ.module.css';

const faqs = [
    {
        question: '你們是用 AI 製作的嗎？',
        answer: '我們採用先進的數碼影像處理技術，結合專業食物攝影知識，提升現有照片的品質。每張圖片均經過人工審核，確保食物的真實呈現。',
    },
    {
        question: '跟傳統攝影有什麼分別？',
        answer: '傳統攝影需要將食物搬到 Studio，等待 5-7 個工作天。我們只需你 WhatsApp 傳送照片，24 小時交付，價格不到一半，效果毫不遜色。',
    },
    {
        question: '會改變食物的外觀嗎？',
        answer: '我們的原則是「提升而非改變」。所有食材、配料、擺盤均保持原樣，僅提升燈光、色調、背景與氛圍。顧客收到的食物與照片保持一致。',
    },
    {
        question: '可以先試做一張嗎？',
        answer: '當然可以！我們提供免費試做 1 張服務。滿意後再下單，完全零風險。',
    },
    {
        question: '如何開始？',
        answer: 'WhatsApp 傳送照片給我們即可。我們會先分析你的餐廳風格，建議最適合的拍攝方向，再開始製作。',
    },
    {
        question: '修改次數有限制嗎？',
        answer: '每張圖片包含 2 次免費修改。大部分客戶在第一版已經滿意。',
    },
];

export default function FoodFAQ() {
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
