import React from 'react';
import { Shield, Globe, TrendingUp } from 'lucide-react';

export const AboutSection: React.FC = () => {
    return (
        <section style={{
            backgroundColor: '#050505', // Slightly lighter than pure black for depth
            color: '#fff',
            padding: 'var(--space-4xl) 0',
            borderBottom: '1px solid #333',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Texture/Grid (Subtle) */}
            <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: 0.2,
                pointerEvents: 'none'
            }} />

            <div style={{
                maxWidth: '1000px', // Wider read width for impact
                margin: '0 auto',
                padding: '0 var(--space-md)',
                position: 'relative',
                zIndex: 2
            }}>
                {/* Header / Meta Info */}
                <div style={{
                    borderBottom: '1px solid var(--color-red-ops)',
                    paddingBottom: 'var(--space-md)',
                    marginBottom: 'var(--space-2xl)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    fontFamily: 'monospace',
                    letterSpacing: '0.05em',
                    color: '#888'
                }}>
                    <span>// MISSION PROFILE</span>
                    <span>EST. 02 DEC 2024</span>
                </div>

                {/* Main Headline */}
                <h2 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)', // Responsive large text
                    lineHeight: '1.1',
                    marginBottom: 'var(--space-xl)',
                    fontWeight: '700',
                    maxWidth: '90%'
                }}>
                    Independent Think Tank for <span style={{ color: 'var(--color-red-ops)' }}>Original Indian Thinking</span>.
                </h2>

                {/* Content Block 1 - Introduction */}
                <div style={{
                    fontSize: '1.5rem', // Large premium text
                    lineHeight: '1.5',
                    marginBottom: 'var(--space-2xl)',
                    color: '#ccc',
                    fontWeight: 300
                }}>
                    <p style={{ marginBottom: 'var(--space-lg)' }}>
                        Atma Nirbhar Soch was established to promote innovative thinking amongst all Indian minds.
                        In accordance with the rich ancient civilisational culture of India, this unique organisation wants to develop the
                        <strong style={{ color: '#fff', fontWeight: 600 }}> ‘BHARATIYA SOCH’ </strong>
                        for a strong India and <strong style={{ color: '#fff', fontWeight: 600 }}>TEAM BHARAT</strong> to achieve the vision of
                        <strong style={{ color: 'var(--color-red-ops)', fontWeight: 700 }}> ‘BHARATIYA SHAKTI 2047’</strong>.
                    </p>
                </div>

                {/* Grid Layout for Detailed Aims */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: 'var(--space-2xl)',
                    borderTop: '1px solid #333',
                    paddingTop: 'var(--space-2xl)'
                }}>
                    {/* Security Focus */}
                    <div>
                        <h3 style={{
                            fontSize: '1.25rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: 'var(--space-md)',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <Shield size={28} color="var(--color-red-ops)" />
                            Security Consciousness
                        </h3>
                        <p style={{ color: '#999', lineHeight: '1.6', fontSize: '1.1rem' }}>
                            We aim to enhance Indian national security consciousness especially with focus on our neighbours.
                            Providing interested young Indian minds with material from authentic perspectives—both official and unofficial.
                        </p>
                    </div>

                    {/* Global Analysis */}
                    <div>
                        <h3 style={{
                            fontSize: '1.25rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: 'var(--space-md)',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <Globe size={28} color="var(--color-red-ops)" />
                            Strategic Analysis
                        </h3>
                        <p style={{ color: '#999', lineHeight: '1.6', fontSize: '1.1rem' }}>
                            Analysis from Taiwan, Japan, Koreas, Russia and the West including US, ensuring a comprehensive understanding
                            of Indian interests in a complex global landscape.
                        </p>
                    </div>

                    {/* Growth Trajectory - Centered */}
                    <div style={{
                        gridColumn: '1 / -1', // Span full width
                        textAlign: 'center', // Center content
                        maxWidth: '800px', // Prevent too wide lines
                        margin: '0 auto' // Center block
                    }}>
                        <h3 style={{
                            fontSize: '1.25rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                            marginBottom: 'var(--space-md)',
                            color: '#fff',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center', // Center icon/text flex
                            gap: '12px'
                        }}>
                            <TrendingUp size={28} color="var(--color-red-ops)" />
                            Growth Trajectory
                        </h3>
                        <p style={{ color: '#999', lineHeight: '1.6', fontSize: '1.1rem' }}>
                            Registered as a MSME, expanding from an online institute to a hybrid learning centre.
                            Building to become the leading Think Tank cum Learning Centre in India.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};
