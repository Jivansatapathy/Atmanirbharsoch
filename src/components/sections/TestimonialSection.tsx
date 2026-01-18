import React, { useRef, useEffect } from 'react';

const testimonials = [
    {
        company: 'JANE\'S DEFENCE WEEKLY',
        quote: "The most comprehensive open-source intelligence platform for the Indo-Pacific theater. Their analysis of Project 75 Alpha is unmatched in the public domain."
    },
    {
        company: 'FOREIGN POLICY',
        quote: "A critical resource for understanding the shifting geopolitical dynamics of South Asia. Essential reading for policymakers and defense analysts alike."
    },
    {
        company: 'THE DIPLOMAT',
        quote: "Bridging the gap between technical defense procurement data and strategic policy implications. A masterclass in modern OSINT journalism."
    },
    {
        company: 'DEFENSE NEWS',
        quote: "Breaking stories that matter. Their coverage of the Tejas Mk2 engine timeline provided clarity when official channels were silent."
    },
    {
        company: 'WAR ON THE ROCKS',
        quote: "Finally, a platform that treats Indian defense strategy with the depth and rigor it deserves. No fluff, just hard operational data."
    },
    {
        company: 'STRITRAT',
        quote: "The 'Operational Environments' dashboard is a game-changer for visualizing conflict zones in real-time. Highly recommended for situational awareness."
    }
];

export const TestimonialSection: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let animationFrameId: number;

        const scroll = () => {
            if (container.scrollLeft >= (container.scrollWidth / 2)) {
                container.scrollLeft = 0;
            } else {
                container.scrollLeft += 0.5; // Smooth slow scroll
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, []);

    // Duplicate for infinite scroll
    const displayedTestimonials = [...testimonials, ...testimonials];

    return (
        <section style={{
            padding: 'var(--space-4xl) 0',
            background: '#0a0a0a',
            borderTop: '1px solid #222',
            borderBottom: '1px solid #222',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ marginBottom: 'var(--space-2xl)' }}>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 'var(--space-md)', color: '#ffffff' }}>
                    MISSION IMPACT.
                </h2>
                <p style={{ color: '#888', maxWidth: '600px', fontSize: '1.1rem' }}>
                    Deployment feedback from global strategic partners.
                </p>
            </div>

            <div
                ref={scrollContainerRef}
                style={{
                    display: 'flex',
                    gap: '20px',
                    overflowX: 'hidden', // Hide scrollbar
                    whiteSpace: 'nowrap',
                    padding: '0 var(--space-md)'
                }}
            >
                {displayedTestimonials.map((t, i) => (
                    <div
                        key={i}
                        style={{
                            minWidth: '350px',
                            maxWidth: '350px',
                            background: '#111',
                            border: '1px solid #333',
                            padding: '30px',
                            whiteSpace: 'normal', // Allow text wrap inside card
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            flexShrink: 0 // Prevent shrinking
                        }}
                    >
                        <div style={{
                            fontSize: '0.9rem',
                            fontWeight: 'bold',
                            letterSpacing: '0.1em',
                            marginBottom: '20px',
                            color: '#fff',
                            fontFamily: 'monospace'
                        }}>
                             // {t.company}
                        </div>
                        <p style={{
                            fontSize: '1rem',
                            lineHeight: 1.6,
                            color: '#aaa',
                            fontStyle: 'italic'
                        }}>
                            "{t.quote}"
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};
