import React from 'react';
import { Button } from '../ui/Button';
import { useTypewriter } from '../../hooks/useTypewriter';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export const Hero: React.FC = () => {
    const hindiText = useTypewriter('एक सोच "टीम भारत" के उज्जवल भविष्य की', 100);
    const isMobile = useMediaQuery('(max-width: 768px)');

    return (
        <section style={{
            minHeight: '90vh',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row', // Stack on mobile
            backgroundColor: 'var(--color-black)',
            color: 'var(--color-white)',
            borderBottom: '1px solid #333',
            position: 'relative',
            overflow: 'hidden',
            gap: isMobile ? '0' : '20px'
        }}>
            {/* Content Pane */}
            <div style={{
                flex: isMobile ? 'initial' : 0.45,
                width: isMobile ? '100%' : 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingLeft: isMobile ? 'var(--space-md)' : '5vw',
                paddingRight: isMobile ? 'var(--space-md)' : 'var(--space-md)',
                paddingTop: isMobile ? 'var(--space-2xl)' : 'var(--space-md)',
                paddingBottom: isMobile ? 'var(--space-xl)' : '0',
                zIndex: 2,
                position: 'relative',
                order: isMobile ? 2 : 1 // On mobile, if we want video top, change this. Let's keep content top (1) video bottom (2) or vice versa. Standard is Text then Visual. Let's stick to DOM order (Row: Left=1, Right=2. Column: Top=1, Bottom=2).
            }}>
                <h1 style={{
                    marginBottom: 'var(--space-md)',
                    position: 'relative',
                    display: 'inline-block',
                    color: 'var(--color-white)',
                    textTransform: 'uppercase',
                    fontSize: isMobile ? '3rem' : '5rem', // Responsive Font
                    lineHeight: '0.9',
                    fontWeight: '900',
                    letterSpacing: '-0.02em'
                }}>
                    EMPOWERING<br />
                    <span style={{ color: 'var(--color-red-ops)' }}>BHARATIYA</span> MINDS
                </h1>
                <p style={{
                    fontSize: isMobile ? '1.25rem' : '1.75rem',
                    color: '#e5e5e5',
                    maxWidth: '90%',
                    lineHeight: '1.4',
                    marginBottom: 'var(--space-2xl)',
                    minHeight: '3rem',
                    fontFamily: 'sans-serif',
                    opacity: 0.9
                }}>
                    {hindiText}<span className="cursor-blink">|</span>
                </p>

                <div style={{ display: 'flex', gap: 'var(--space-md)' }}>
                    <Button className="btn-scope">Join the Mission</Button>
                    <Button className="btn-secondary-white btn-scope-white">Subscribe</Button>
                </div>
            </div>

            {/* Video Pane */}
            <div style={{
                flex: isMobile ? 'initial' : 0.55,
                width: '100%',
                height: isMobile ? '40vh' : 'auto', // Fixed height on mobile
                position: 'relative',
                minHeight: isMobile ? '300px' : '100%',
                backgroundColor: '#000',
                order: isMobile ? 1 : 2
            }}>
                <video
                    width="100%"
                    height="100%"
                    src="/e3086c808f70e9a7209e93e173a33adc53faa47f.mp4"
                    title="Tactical Briefing"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        objectFit: 'cover',
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        opacity: 0.8 // Slight dim for HUD contrast
                    }}
                ></video>

                {/* Military HUD Overlay */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    pointerEvents: 'none',
                    zIndex: 10,
                    boxShadow: 'inset 0 0 100px rgba(0,0,0,0.8)' // Vignette
                }}>
                    {/* Grid Pattern */}
                    <svg width="100%" height="100%" style={{ position: 'absolute', opacity: 0.15 }}>
                        <defs>
                            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>

                    {/* REC Indicator */}
                    <div style={{
                        position: 'absolute',
                        top: '2rem',
                        right: '2rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontFamily: 'monospace',
                        color: 'var(--color-red-ops)',
                        fontSize: '0.85rem',
                        letterSpacing: '0.1em',
                        fontWeight: 'bold',
                        background: 'rgba(0,0,0,0.5)',
                        padding: '0.25rem 0.5rem',
                        backdropFilter: 'blur(4px)'
                    }}>
                        <div style={{
                            width: '8px',
                            height: '8px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--color-red-ops)',
                            boxShadow: '0 0 8px var(--color-red-ops)'
                        }}></div>
                        REC • TACTICAL FEED
                    </div>

                    {/* Corner Brackets */}
                    <div style={{ position: 'absolute', top: '2rem', left: '2rem', width: '3rem', height: '3rem', borderTop: '2px solid rgba(255,255,255,0.3)', borderLeft: '2px solid rgba(255,255,255,0.3)' }}></div>
                    <div style={{ position: 'absolute', top: '2rem', right: '2rem', width: '3rem', height: '3rem', borderTop: '2px solid rgba(255,255,255,0.3)', borderRight: '2px solid rgba(255,255,255,0.3)' }}></div>
                    <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', width: '3rem', height: '3rem', borderBottom: '2px solid rgba(255,255,255,0.3)', borderLeft: '2px solid rgba(255,255,255,0.3)' }}></div>
                    <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', width: '3rem', height: '3rem', borderBottom: '2px solid rgba(255,255,255,0.3)', borderRight: '2px solid rgba(255,255,255,0.3)' }}></div>

                    {/* Center Crosshair */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '20px',
                        height: '20px',
                        border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                        <div style={{ position: 'absolute', top: '50%', left: '-10px', right: '-10px', height: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                        <div style={{ position: 'absolute', left: '50%', top: '-10px', bottom: '-10px', width: '1px', background: 'rgba(255,255,255,0.2)' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
