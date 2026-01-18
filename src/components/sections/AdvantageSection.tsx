import React, { useState } from 'react';

type Feature = {
    title: string;
    description: string;
};

const features: Feature[] = [
    {
        title: 'Automate your multi-domain ISR system',
        description:
            'Eliminate the traditional bottleneck of manual intelligence collection. Integrate disparate monitoring feeds into a unified, automated collection-to-insight pipeline that fundamentally changes the economics of site monitoring.',
    },
    {
        title: 'Predictive intelligence tuned for your specific mission',
        description:
            'Deploy mission-specific algorithms that adapt to your operational environment. Our systems learn from local patterns to distinguish standard activity from critical anomalies with high-fidelity precision.',
    },
    {
        title: 'Accurate intelligence built on trusted data',
        description:
            'Verify sources with cryptographic certainty. Every data point is traceable to its origin, ensuring your operational decisions are based on the highest integrity intelligence available.',
    },
];

export const AdvantageSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            style={{
                backgroundColor: '#000',
                color: '#fff',
                padding: 'var(--space-2xl) 0',
                borderBottom: '1px solid #333',
                overflow: 'visible' // CRITICAL: Ensures sticky position works
            }}
        >
            <div
                style={{
                    maxWidth: 'var(--grid-max-width)',
                    margin: '0 auto',
                    padding: '0 var(--space-md)',
                    display: 'flex',
                    gap: 'var(--space-2xl)',
                    alignItems: 'flex-start',
                    // minHeight removed: Height matches content exactly
                }}
            >
                {/* LEFT — Sticky Visual */}
                <div
                    style={{
                        position: 'sticky',
                        top: '80px',
                        flex: '0 0 50%',
                    }}
                >
                    <h2
                        style={{
                            fontSize: '3rem',
                            lineHeight: '1.1',
                            marginBottom: 'var(--space-xl)',
                            fontWeight: 700,
                        }}
                    >
                        The Atma Nirbhar Soch
                        <br />
                        advantage
                    </h2>

                    <div
                        style={{
                            width: '100%',
                            borderRadius: 'var(--radius-md)',
                            overflow: 'hidden',
                            border: '1px solid #333',
                            position: 'relative',
                            aspectRatio: '16 / 9',
                        }}
                    >
                        <video
                            src="/indian-military-strikes-pakistan-pakistan-administered-kashmir-aj-shorts-1080-publer.io.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                            }}
                        />

                        {/* Tactical Overlay */}
                        <div
                            style={{
                                position: 'absolute',
                                inset: 0,
                                boxShadow: 'inset 0 0 60px rgba(0,0,0,0.85)',
                                pointerEvents: 'none',
                            }}
                        />
                    </div>
                </div>

                {/* RIGHT — Feature Stack */}
                <div
                    style={{
                        flex: 1,
                        paddingTop: 'var(--space-2xl)',
                    }}
                >
                    {features.map((feature, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                style={{
                                    borderTop: '1px solid #333',
                                    padding: 'var(--space-lg) 0',
                                    cursor: 'pointer',
                                }}
                                onClick={() =>
                                    setOpenIndex(isOpen ? null : index)
                                }
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        marginBottom: isOpen
                                            ? 'var(--space-md)'
                                            : 0,
                                    }}
                                >
                                    <h3
                                        style={{
                                            fontSize: '1.75rem',
                                            fontWeight: 500,
                                            margin: 0,
                                            color: isOpen ? '#fff' : '#777',
                                            transition: 'color 0.2s ease',
                                        }}
                                    >
                                        {feature.title}
                                    </h3>

                                    <span
                                        style={{
                                            fontSize: '2rem',
                                            fontWeight: 300,
                                            color: '#666',
                                            transform: isOpen
                                                ? 'rotate(45deg)'
                                                : 'rotate(0deg)',
                                            transition:
                                                'transform 0.3s ease',
                                        }}
                                    >
                                        +
                                    </span>
                                </div>

                                <div
                                    style={{
                                        overflow: 'hidden',
                                        maxHeight: isOpen ? '300px' : '0',
                                        transition:
                                            'max-height 0.35s ease',
                                    }}
                                >
                                    <p
                                        style={{
                                            fontSize: '1.1rem',
                                            lineHeight: '1.6',
                                            color: '#ccc',
                                            maxWidth: '90%',
                                            margin: 0,
                                        }}
                                    >
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
