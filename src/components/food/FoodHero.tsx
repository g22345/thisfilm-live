'use client';

import { useState, useRef, useCallback } from 'react';
import styles from './FoodHero.module.css';

export default function FoodHero() {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDragging = useRef(false);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current || !isDragging.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = ((clientX - rect.left) / rect.width) * 100;
        setSliderPos(Math.min(Math.max(x, 5), 95));
    }, []);

    const handlePointerDown = () => { isDragging.current = true; };
    const handlePointerUp = () => { isDragging.current = false; };

    return (
        <section className={styles.hero} id="hero">
            <div className={styles.bgOverlay} />

            <div className={`container ${styles.content}`}>
                <div className={styles.tagline}>
                    WhatsApp ?≥ÁÖß?áÔ?24 Â∞èÊ?‰∫§‰?
                </div>

                <h1 className={styles.headline}>
                    ‰Ω†Á??úÂñÆ?ßÁ?Ôº?br />
                    <span className={styles.accentText}>Ê≠?ú®Ë∂ïËµ∞È°ßÂÆ¢??/span>
                </h1>

                <p className={styles.subheadline}>
                    Â∞àÊ•≠È£üÁâ©ÂΩ±Â??êÂ? ???°È???Studio?ÅÁÑ°?ÄÁ≠â‰??üÊ???
                    <br />
                    WhatsApp ?≥ÁÖß?áÔ?24 Â∞èÊ?‰∫§‰???
                </p>

                <div className={styles.ctas}>
                    <a
                        href="https://wa.me/85270483360?text=‰Ω†Â•ΩÔºåÊ??≥Â?Ë≤ªË©¶?ö‰?ÂºµÈ??©ÂΩ±?èÊ???
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-cta"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        ?çË≤ªË©¶Â?‰∏ÄÂº???
                    </a>
                </div>

                {/* Before/After Slider */}
                <div
                    ref={containerRef}
                    className={styles.sliderContainer}
                    onPointerDown={handlePointerDown}
                    onPointerUp={handlePointerUp}
                    onPointerLeave={handlePointerUp}
                    onPointerMove={(e) => handleMove(e.clientX)}
                    onTouchMove={(e) => {
                        isDragging.current = true;
                        handleMove(e.touches[0].clientX);
                    }}
                >
                    {/* "After" side (full) */}
                    <div className={styles.sliderAfter}>
                        <div className={styles.sliderImagePlaceholder} style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
                            <div className={styles.placeholderContent}>
                                <span className={styles.placeholderEmoji}>??/span>
                                <span className={styles.placeholderLabel}>After ??Â∞àÊ•≠ÂΩ±Â??êÂ?</span>
                            </div>
                        </div>
                        <span className={styles.sliderLabel} style={{ right: '12px' }}>After</span>
                    </div>

                    {/* "Before" side (clipped) */}
                    <div className={styles.sliderBefore} style={{ width: `${sliderPos}%` }}>
                        <div className={styles.sliderImagePlaceholder} style={{ background: 'linear-gradient(135deg, #2d2d2d 0%, #3d3d3d 50%, #4a4a4a 100%)' }}>
                            <div className={styles.placeholderContent}>
                                <span className={styles.placeholderEmoji}>?ì±</span>
                                <span className={styles.placeholderLabel}>Before ???ÆÈÄöÊ?Ê©üÁÖß??/span>
                            </div>
                        </div>
                        <span className={styles.sliderLabel} style={{ left: '12px' }}>Before</span>
                    </div>

                    {/* Slider handle */}
                    <div className={styles.sliderHandle} style={{ left: `${sliderPos}%` }}>
                        <div className={styles.sliderLine} />
                        <div className={styles.sliderThumb}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                <polyline points="9,6 3,12 9,18" />
                                <polyline points="15,6 21,12 15,18" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.scrollLine} />
            </div>
        </section>
    );
}
