'use client';

import { useState, useRef, useCallback } from 'react';
import styles from './FoodBeforeAfter.module.css';

const cases = [
    { name: '牛腩麵', emoji: '🍜' },
    { name: '壽司 / 刺身', emoji: '🍣' },
    { name: 'Pizza', emoji: '🍕' },
    { name: '甜品', emoji: '🍰' },
    { name: '火鍋', emoji: '🍲' },
];

function Slider({ item }: { item: typeof cases[0] }) {
    const [pos, setPos] = useState(50);
    const ref = useRef<HTMLDivElement>(null);
    const dragging = useRef(false);

    const handleMove = useCallback((clientX: number) => {
        if (!ref.current || !dragging.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = ((clientX - rect.left) / rect.width) * 100;
        setPos(Math.min(Math.max(x, 5), 95));
    }, []);

    return (
        <div
            ref={ref}
            className={styles.slider}
            onPointerDown={() => { dragging.current = true; }}
            onPointerUp={() => { dragging.current = false; }}
            onPointerLeave={() => { dragging.current = false; }}
            onPointerMove={(e) => handleMove(e.clientX)}
            onTouchMove={(e) => {
                dragging.current = true;
                handleMove(e.touches[0].clientX);
            }}
        >
            {/* After */}
            <div className={styles.side}>
                <div className={styles.imagePlaceholder} style={{ background: 'linear-gradient(135deg, #0f3460 0%, #16213e 50%, #1a1a2e 100%)' }}>
                    <span className={styles.pEmoji}>{item.emoji}</span>
                    <span className={styles.pLabel}>After</span>
                </div>
            </div>

            {/* Before */}
            <div className={styles.side} style={{ position: 'absolute', inset: 0, width: `${pos}%`, overflow: 'hidden', zIndex: 2 }}>
                <div className={styles.imagePlaceholder} style={{ background: 'linear-gradient(135deg, #2d2d2d 0%, #3d3d3d 50%, #4a4a4a 100%)', minWidth: ref.current?.offsetWidth || '100%' }}>
                    <span className={styles.pEmoji}>{item.emoji}</span>
                    <span className={styles.pLabel}>Before</span>
                </div>
            </div>

            {/* Handle */}
            <div className={styles.handle} style={{ left: `${pos}%` }}>
                <div className={styles.handleLine} />
                <div className={styles.handleThumb}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="9,6 3,12 9,18" />
                        <polyline points="15,6 21,12 15,18" />
                    </svg>
                </div>
            </div>

            <span className={styles.name}>{item.name}</span>
        </div>
    );
}

export default function FoodBeforeAfter() {
    return (
        <section className={`section ${styles.section}`} id="before-after">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">案例展示</span>
                    <h2 className="section-title">
                        同一道菜，<span className="highlight">兩種命運。</span>
                    </h2>
                    <p className="section-subtitle" style={{ margin: '0 auto' }}>
                        左邊是普通手機照片，右邊是我們的專業影像提升。食材完全一樣，差別只在一張照片。
                    </p>
                </div>

                <div className={styles.grid}>
                    {cases.map((c, i) => (
                        <div key={i} className={`fade-in fade-in-delay-${Math.min(i + 1, 4)}`}>
                            <Slider item={c} />
                        </div>
                    ))}
                </div>

                <p className={styles.bottomLine}>
                    你的顧客每天都在做同樣的選擇。
                </p>
            </div>
        </section>
    );
}
