import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Publication = {
    id: string;
    serial: string;
    title: string;
    description: string;
    videoPlaceholderColor: string; // Placeholder for video content
    path?: string;
};

const publications: Publication[] = [
    {
        id: '01',
        serial: '/0.1',
        title: 'Books',
        description: 'Foundational texts on strategic autonomy and defense frameworks.',
        videoPlaceholderColor: '#222',
        path: '/books'
    },
    {
        id: '02',
        serial: '/0.2',
        title: 'Monographs',
        description: 'Single-subject deep dives into emerging threats and tactical responses.',
        videoPlaceholderColor: '#333'
    },
    {
        id: '03',
        serial: '/0.3',
        title: 'Briefs',
        description: 'Rapid-fire intelligence digests for immediate situational awareness.',
        videoPlaceholderColor: '#444'
    },
    {
        id: '04',
        serial: '/0.4',
        title: 'Assessments',
        description: 'Long-range strategic forecasting and net assessments.',
        videoPlaceholderColor: '#555'
    },
    {
        id: '05',
        serial: '/0.5',
        title: 'GEOINT',
        description: 'Geospatial intelligence reports with satellite imagery analysis.',
        videoPlaceholderColor: '#666'
    }
];

export const PublicationsSection: React.FC = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    const navigate = useNavigate();

    return (
        <section id="publications" style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: 'var(--space-4xl) 0',
            borderBottom: '1px solid #111'
        }}>
            <div className="container">
                <h2 style={{
                    fontSize: '2rem',
                    marginBottom: 'var(--space-3xl)',
                    fontWeight: 500
                }}>
                    Our Publications
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {publications.map((pub) => (
                        <div
                            key={pub.id}
                            onMouseEnter={() => setHoveredId(pub.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => pub.path && navigate(pub.path)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: 'var(--space-2xl) 0',
                                borderTop: '1px solid #222',
                                cursor: pub.path ? 'pointer' : 'default',
                                position: 'relative',
                                minHeight: '300px' // Ensure enough height for the "image"
                            }}
                        >
                            {/* LEFT: Description & Serial */}
                            <div style={{
                                flex: '0 0 25%',
                                marginRight: '50px', // Explicit 50px gap as requested
                                opacity: hoveredId === pub.id ? 1 : 0.5,
                                transition: 'opacity 0.3s'
                            }}>
                                <p style={{
                                    fontSize: '1rem',
                                    lineHeight: 1.5,
                                    marginBottom: 'var(--space-xl)',
                                    maxWidth: '280px'
                                }}>
                                    {pub.description}
                                </p>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    <span style={{
                                        fontFamily: 'monospace',
                                        color: '#666',
                                        fontSize: '0.9rem'
                                    }}>
                                        {pub.serial}
                                    </span>
                                    {pub.path && hoveredId === pub.id && (
                                        <span style={{
                                            fontSize: '0.7rem',
                                            color: 'var(--color-red-ops)',
                                            fontWeight: 'bold',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em'
                                        }}>
                                            Click to view Library →
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* RIGHT CONTENT AREA: Video + Title */}
                            <div style={{
                                flex: '1',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                height: '200px'
                            }}>
                                {/* VIDEO (Appears in place of title) */}
                                <div style={{
                                    position: 'absolute',
                                    left: 0,
                                    width: '320px',
                                    height: '180px',
                                    backgroundColor: pub.videoPlaceholderColor,
                                    borderRadius: '4px',
                                    opacity: hoveredId === pub.id ? 1 : 0,
                                    transform: hoveredId === pub.id ? 'scale(1)' : 'scale(0.9)',
                                    transition: 'all 0.4s ease-out',
                                    zIndex: 10,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: hoveredId === pub.id ? '0 20px 50px rgba(0,0,0,0.5)' : 'none'
                                }}>
                                    {hoveredId === pub.id && (
                                        <div style={{
                                            width: '10px',
                                            height: '10px',
                                            backgroundColor: 'red',
                                            borderRadius: '50%',
                                            boxShadow: '0 0 10px red'
                                        }} />
                                    )}
                                </div>

                                {/* TITLE (Slides right to make room) */}
                                <div style={{
                                    transform: hoveredId === pub.id ? 'translateX(350px)' : 'translateX(0)', // Slides right to clear video width (320px + gap)
                                    transition: 'transform 0.5s cubic-bezier(0.19, 1, 0.22, 1)', // Smooth mechanic slide
                                    zIndex: 20,
                                    pointerEvents: 'none' // Let hover pass through to container if needed
                                }}>
                                    <span style={{
                                        fontSize: 'clamp(5rem, 9vw, 8rem)',
                                        fontWeight: 700,
                                        letterSpacing: '-0.03em',
                                        lineHeight: 0.9,
                                        color: hoveredId === pub.id ? '#fff' : '#222',
                                        transition: 'color 0.3s ease',
                                        whiteSpace: 'nowrap'
                                    }}>
                                        {pub.title}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                    {/* Closing Border */}
                    <div style={{ borderTop: '1px solid #222' }} />
                </div>
            </div>
        </section>
    );
};
