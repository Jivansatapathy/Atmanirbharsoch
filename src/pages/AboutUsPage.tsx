import React, { useState, useRef } from 'react';
import { Award, Target, Zap, Globe, Shield, Activity, Crosshair, Users, ArrowUpRight } from 'lucide-react';

// --- UTILITY COMPONENTS ---

const NoiseOverlay = () => (
    <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.05\'/%3E%3C/svg%3E")',
        pointerEvents: 'none', zIndex: 50, opacity: 0.4
    }} />
);

const SpotlightCard: React.FC<{ children: React.ReactNode; className?: string; style?: React.CSSProperties }> = ({ children, className, style }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        setOpacity(1);
    };

    const handleMouseLeave = () => setOpacity(0);

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`spotlight-card ${className || ''}`}
            style={{ ...style, position: 'relative', overflow: 'hidden' }}
        >
            <div
                style={{
                    pointerEvents: 'none', position: 'absolute', inset: 0, opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(230, 57, 70, 0.15), transparent 40%)`,
                    zIndex: 2, transition: 'opacity 0.3s'
                }}
            />
            <div style={{ position: 'relative', zIndex: 10 }}>{children}</div>
        </div>
    );
};

// --- MAIN PAGE ---

const AboutUsPage: React.FC = () => {
    return (
        <div style={{ backgroundColor: '#030303', color: '#fff', fontFamily: 'Inter, sans-serif', minHeight: '100vh', position: 'relative', overflowX: 'hidden' }}>
            <NoiseOverlay />

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;900&family=Space+Grotesk:wght@300;500;700&display=swap');
                
                :root {
                    --color-red: #FF2E2E;
                    --color-dark: #0A0A0A;
                    --color-border: rgba(255, 255, 255, 0.08);
                }

                ::selection { background: var(--color-red); color: #000; }
                
                .font-tech { fontFamily: 'Space Grotesk', sans-serif; }
                
                .grid-bg {
                    background-size: 60px 60px;
                    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                                      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
                }

                /* Ultra Smooth Reveal */
                .reveal { opacity: 0; transform: translateY(30px); animation: fadeUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
                .delay-1 { animation-delay: 0.2s; }
                .delay-2 { animation-delay: 0.4s; }
                
                @keyframes fadeUp { to { opacity: 1; transform: translateY(0); } }

                .text-stroke { -webkit-text-stroke: 1px rgba(255,255,255,0.2); color: transparent; }
                
                .bento-grid {
                    display: grid;
                    grid-template-columns: repeat(12, 1fr);
                    gap: 20px;
                }
                .col-span-4 { grid-column: span 4; }
                .col-span-6 { grid-column: span 6; }
                .col-span-8 { grid-column: span 8; }
                .col-span-12 { grid-column: span 12; }
                
                @media (max-width: 1024px) {
                    .col-span-4, .col-span-6, .col-span-8 { grid-column: span 12 !important; }
                }

                .spotlight-card {
                    background: #080808;
                    border: 1px solid var(--color-border);
                    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                }
                .spotlight-card:hover { transform: scale(1.01); border-color: rgba(255,255,255,0.2); }

                .ticker-wrap { overflow: hidden; white-space: nowrap; position: absolute; bottom: 0; width: 100%; border-top: 1px solid var(--color-border); background: #000; }
                .ticker { display: inline-block; animation: marquee 20s linear infinite; padding: 15px 0; }
                @keyframes marquee { 0% { transform: translate3d(0, 0, 0); } 100% { transform: translate3d(-50%, 0, 0); } }

                .glowing-text { text-shadow: 0 0 20px rgba(255, 46, 46, 0.5); }

                /* --- NEW TACTICAL ROSTER STYLES --- */
                .leadership-card { transition: transform 0.4s ease; }
                .leadership-card:hover { transform: translateY(-5px); border-color: #555 !important; }
                .leadership-card:hover .scanner-light { opacity: 1; top: 100%; transition: top 1s linear; }
                
                .mentor-cell:hover { background-color: #0f0f0f !important; }
                .mentor-cell:hover .mentor-icon { color: var(--color-red) !important; stroke: var(--color-red); }
                
                .data-row:hover { background: rgba(255,255,255,0.02); padding-left: 10px; border-left: 2px solid var(--color-red); color: #fff !important; }
                .data-row:hover div { color: #fff !important; }
                
                
                @media (max-width: 768px) {
                    .data-row { grid-template-columns: 1fr; gap: 5px; text-align: left; }
                    .data-row div:last-child { text-align: left; opacity: 0.6; }
                    .advisory-grid { grid-template-columns: 1fr !important; }
                }
                
                @media (min-width: 769px) and (max-width: 1024px) {
                    .advisory-grid { grid-template-columns: repeat(2, 1fr) !important; }
                }
            `}</style>

            {/* --- SECTION 1: HERO CONTROL ROOM --- */}
            <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }} className="grid-bg">
                {/* Background Radar Effect */}
                <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    width: '80vw', height: '80vw', borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.03)',
                    background: 'radial-gradient(circle, rgba(255,46,46,0.03) 0%, transparent 70%)',
                    zIndex: 0
                }} />

                {/* Navbar Placeholder */}
                <nav style={{ padding: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 10 }}>
                    <div className="font-tech" style={{ fontSize: '0.8rem', letterSpacing: '0.2em', color: 'var(--color-red)' }}>
                        // CLASSIFIED: PUBLIC
                    </div>
                    <div style={{ display: 'flex', gap: '8px' }}>
                        {[1, 2, 3].map(i => <div key={i} style={{ width: '4px', height: '4px', background: '#333' }} />)}
                    </div>
                </nav>

                {/* Hero Content */}
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 10 }}>
                    <div style={{ textAlign: 'center', maxWidth: '1400px', width: '100%', padding: '0 20px' }}>
                        <div className="reveal font-tech" style={{
                            fontSize: 'clamp(1rem, 2vw, 1.5rem)', color: 'var(--color-red)', marginBottom: '20px', letterSpacing: '0.5em', textTransform: 'uppercase',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px'
                        }}>
                            <Crosshair size={20} /> ATMA NIRBHAR SOCH
                        </div>

                        <h1 className="reveal delay-1" style={{
                            fontSize: 'clamp(4rem, 12vw, 11rem)', fontWeight: '900', lineHeight: '0.9', letterSpacing: '-0.04em',
                            background: 'linear-gradient(180deg, #fff 0%, #666 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
                        }}>
                            ORIGINAL <br />
                            INDIAN THINKING
                        </h1>

                        <div className="reveal delay-2" style={{
                            marginTop: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
                            borderTop: '1px solid var(--color-border)', paddingTop: '2rem', textAlign: 'left'
                        }}>
                            <div style={{ maxWidth: '400px', fontSize: '1.1rem', color: '#888', lineHeight: '1.5' }}>
                                An Independent Think Tank dedicated to innovative thinking. Developing the <strong style={{ color: '#fff' }}>Bharatiya Soch</strong> for 2047.
                            </div>
                            <div className="font-tech" style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#fff' }}>2047</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--color-red)', letterSpacing: '0.2em' }}>VISION TARGET</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Infinite Ticker */}
                <div className="ticker-wrap font-tech" style={{ fontSize: '0.8rem', letterSpacing: '0.1em', color: '#444' }}>
                    <div className="ticker">
                        STRATEGIC ANALYSIS /// NATIONAL SECURITY /// MULTI-DOMAIN OPERATIONS /// INDO-PACIFIC MONITORING /// SECURITY CONSCIOUSNESS /// MSME REGISTERED ///
                        STRATEGIC ANALYSIS /// NATIONAL SECURITY /// MULTI-DOMAIN OPERATIONS /// INDO-PACIFIC MONITORING /// SECURITY CONSCIOUSNESS /// MSME REGISTERED ///
                    </div>
                </div>
            </section>

            {/* --- SECTION 2: THE INTELLIGENCE (Asymmetrical Layout) --- */}
            <section style={{ padding: '100px 24px', maxWidth: '1400px', margin: '0 auto' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '40px' }}>

                    {/* Sticky Heading */}
                    <div style={{ gridColumn: 'span 12' }}>
                        <h2 className="font-tech" style={{ fontSize: '1rem', color: 'var(--color-red)', marginBottom: '20px' }}>01 // INTELLIGENCE FEED</h2>
                    </div>

                    <div style={{ gridColumn: 'span 4' }} className="col-span-4">
                        <div style={{ position: 'sticky', top: '100px' }}>
                            <h3 style={{ fontSize: '3rem', fontWeight: '700', lineHeight: '1', marginBottom: '30px' }}>
                                Enhanced <br />
                                <span style={{ color: '#444' }}>Security</span> <br />
                                Consciousness
                            </h3>
                            <p style={{ color: '#888', marginBottom: '40px', lineHeight: '1.7' }}>
                                We analyze Indian interests through perspectives from Taiwan, Japan, Koreas, Russia, and the West. A multi-dimensional strategic understanding for the next generation.
                            </p>
                            <button style={{
                                background: 'transparent', border: '1px solid #333', color: '#fff', padding: '15px 30px',
                                display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', transition: 'all 0.3s'
                            }}
                                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--color-red)'; e.currentTarget.style.background = 'rgba(255, 46, 46, 0.1)' }}
                                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#333'; e.currentTarget.style.background = 'transparent' }}
                            >
                                ACCESS BRIEFING <ArrowUpRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Image / Graphic Area */}
                    <div style={{ gridColumn: 'span 8', position: 'relative', height: '600px', borderRadius: '12px', overflow: 'hidden' }} className="col-span-8">
                        <img
                            src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%) contrast(1.2) brightness(0.6)' }}
                            alt="Cyber Ops"
                        />
                        <div style={{
                            position: 'absolute', inset: 0,
                            background: 'linear-gradient(0deg, #030303 0%, transparent 50%)'
                        }} />

                        {/* Floating Data Points */}
                        <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <div>
                                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--color-red)' }}>5+</div>
                                <div className="font-tech" style={{ fontSize: '0.8rem', color: '#ccc' }}>GEOPOLITICAL ZONES</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <Globe size={48} strokeWidth={1} style={{ opacity: 0.5 }} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 3: CORE CAPABILITIES (Bento Grid) --- */}
            <section style={{ padding: '100px 24px', background: '#080808', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '60px', display: 'flex', justifyContent: 'space-between', alignItems: 'end' }}>
                        <h2 className="font-tech" style={{ fontSize: '3rem', fontWeight: '500' }}>CORE <span className="text-stroke">STRENGTHS</span></h2>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <Activity color="var(--color-red)" />
                            <span className="font-tech" style={{ color: '#666' }}>SYSTEM STATUS: ACTIVE</span>
                        </div>
                    </div>

                    <div className="bento-grid">
                        {/* Card 1: Courses */}
                        <SpotlightCard className="col-span-4" style={{ padding: '40px', minHeight: '350px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
                                <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}><Zap color="#fff" /></div>
                                <span className="font-tech" style={{ color: '#444' }}>01</span>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '15px' }}>Strategic Courses</h3>
                            <ul style={{ color: '#888', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
                                <li>+ PLA In-Depth Study</li>
                                <li>+ Multi-Domain Operations</li>
                                <li>+ Unmanned Warfare</li>
                            </ul>
                        </SpotlightCard>

                        {/* Card 2: Research (Large) */}
                        <SpotlightCard className="col-span-8" style={{ padding: '40px', minHeight: '350px', background: 'linear-gradient(135deg, #0a0a0a 0%, #111 100%)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
                                <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}><Target color="var(--color-red)" /></div>
                                <span className="font-tech" style={{ color: '#444' }}>02</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
                                <div>
                                    <h3 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '15px' }}>Security & Research</h3>
                                    <p style={{ color: '#888' }}>Classified & Unclassified Security Projects, Risk Consulting, and Strategic OSINT Analysis for national interests.</p>
                                </div>
                                <div style={{ borderLeft: '1px solid #333', paddingLeft: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <div style={{ fontSize: '4rem', fontWeight: '900', color: '#1a1a1a' }}>100%</div>
                                    <div className="font-tech" style={{ color: 'var(--color-red)' }}>DATA INTEGRITY</div>
                                </div>
                            </div>
                        </SpotlightCard>

                        {/* Card 3: Ecosystem */}
                        <SpotlightCard className="col-span-6" style={{ padding: '40px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '40px' }}>
                                <div style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}><Users color="#fff" /></div>
                                <span className="font-tech" style={{ color: '#444' }}>03</span>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '15px' }}>Ecosystem Integration</h3>
                            <p style={{ color: '#888' }}>Bridging gaps: Military, Academia, Civil Industry & Start-ups.</p>
                        </SpotlightCard>

                        {/* Card 4: Decoration */}
                        <SpotlightCard className="col-span-6" style={{ padding: '0', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <div style={{
                                position: 'absolute', inset: 0,
                                background: 'repeating-linear-gradient(45deg, #111, #111 10px, #151515 10px, #151515 20px)'
                            }} />
                            <div style={{ zIndex: 1, padding: '20px', background: '#000', border: '1px solid #333' }}>
                                <div className="font-tech" style={{ color: 'var(--color-red)', letterSpacing: '0.2em' }}>HYBRID WARFARE READY</div>
                            </div>
                        </SpotlightCard>
                    </div>
                </div>
            </section>

            {/* --- SECTION 4: THE GUIDANCE MONUMENT (REDESIGNED) --- */}
            <section style={{ position: 'relative', padding: '0', overflow: 'hidden', background: '#050505' }}>
                {/* Scanline Effect */}
                <div style={{
                    position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1,
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.02) 2px, rgba(255,255,255,0.02) 4px)',
                    pointerEvents: 'none'
                }} />

                <div style={{
                    maxWidth: '1400px',
                    margin: '0 auto',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(12, 1fr)',
                    minHeight: '700px',
                    position: 'relative',
                    zIndex: 2
                }}>

                    {/* LEFT SIDE: Image Area with Decorative Frame */}
                    <div style={{
                        gridColumn: 'span 5',
                        position: 'relative',
                        background: 'linear-gradient(135deg, #0a0a0a 0%, #050505 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '80px 60px',
                        borderRight: '1px solid rgba(255,255,255,0.08)'
                    }} className="col-span-12">

                        {/* Corner Brackets - Subtle Gray */}
                        <div style={{ position: 'absolute', top: '40px', left: '40px', width: '60px', height: '60px', borderTop: '1px solid rgba(255,255,255,0.15)', borderLeft: '1px solid rgba(255,255,255,0.15)' }} />
                        <div style={{ position: 'absolute', top: '40px', right: '40px', width: '60px', height: '60px', borderTop: '1px solid rgba(255,255,255,0.15)', borderRight: '1px solid rgba(255,255,255,0.15)' }} />
                        <div style={{ position: 'absolute', bottom: '40px', left: '40px', width: '60px', height: '60px', borderBottom: '1px solid rgba(255,255,255,0.15)', borderLeft: '1px solid rgba(255,255,255,0.15)' }} />
                        <div style={{ position: 'absolute', bottom: '40px', right: '40px', width: '60px', height: '60px', borderBottom: '1px solid rgba(255,255,255,0.15)', borderRight: '1px solid rgba(255,255,255,0.15)' }} />

                        {/* Image Placeholder */}
                        <div style={{
                            width: '100%',
                            maxWidth: '400px',
                            aspectRatio: '3/4',
                            background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            <Shield size={80} color="rgba(255,255,255,0.05)" strokeWidth={1} />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background: 'linear-gradient(0deg, rgba(0,0,0,0.9) 0%, transparent 100%)',
                                padding: '30px 20px 20px',
                                color: '#666',
                                fontSize: '0.75rem',
                                fontFamily: 'Space Grotesk, sans-serif',
                                letterSpacing: '0.1em'
                            }}>
                                IMG_LEGACY_001.JPG
                            </div>
                        </div>

                        {/* Status Badge - Subtle */}
                        <div style={{
                            position: 'absolute',
                            top: '40px',
                            right: '50%',
                            transform: 'translateX(50%)',
                            background: '#000',
                            border: '1px solid rgba(255,255,255,0.15)',
                            padding: '8px 20px',
                            fontSize: '0.7rem',
                            letterSpacing: '0.2em',
                            color: '#888',
                            fontFamily: 'Space Grotesk, sans-serif'
                        }}>
                            GUIDANCE PILLAR
                        </div>
                    </div>

                    {/* RIGHT SIDE: Content Area */}
                    <div style={{
                        gridColumn: 'span 7',
                        padding: '80px 60px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        position: 'relative'
                    }} className="col-span-12">

                        {/* Background Pattern - Very Subtle */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            width: '300px',
                            height: '300px',
                            background: 'radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)',
                            opacity: 0.5
                        }} />

                        {/* Header */}
                        <div className="font-tech" style={{
                            fontSize: '0.8rem',
                            color: '#666',
                            letterSpacing: '0.2em',
                            marginBottom: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px'
                        }}>
                            <div style={{ width: '40px', height: '1px', background: '#333' }} />
                            FOUNDER'S LEGACY
                        </div>

                        {/* Name - No Glow */}
                        <h2 style={{
                            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                            fontWeight: '900',
                            marginBottom: '20px',
                            lineHeight: '1',
                            letterSpacing: '-0.02em'
                        }}>
                            LATE DR (MRS) <br />
                            <span style={{ color: '#ccc' }}>MANJU NARANG</span>
                        </h2>

                        {/* Quote - Subtle Border */}
                        <p style={{
                            fontSize: '1.2rem',
                            fontStyle: 'italic',
                            color: '#aaa',
                            lineHeight: '1.7',
                            marginBottom: '40px',
                            borderLeft: '2px solid rgba(255,255,255,0.2)',
                            paddingLeft: '25px',
                            maxWidth: '600px'
                        }}>
                            "The visionary force behind our foundational values and the eternal inspiration for our journey towards 2047."
                        </p>

                        {/* Biographical Details */}
                        <div style={{ marginBottom: '40px', maxWidth: '600px' }}>
                            <p style={{ color: '#888', lineHeight: '1.8', marginBottom: '20px' }}>
                                A pioneering thinker and strategist, she laid the philosophical foundation for developing the Bharatiya Soch. Her vision continues to guide our mission toward a self-reliant and secure India.
                            </p>
                        </div>

                        {/* Key Pillars */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                            gap: '20px',
                            marginTop: '30px'
                        }}>
                            {[
                                { icon: Award, label: 'Legacy', value: 'Eternal' },
                                { icon: Zap, label: 'Wisdom', value: 'Guiding' },
                                { icon: Target, label: 'Vision', value: '2047' },
                            ].map((pillar, i) => {
                                const IconComponent = pillar.icon;
                                return (
                                    <div key={i} style={{
                                        background: 'rgba(255,255,255,0.02)',
                                        border: '1px solid rgba(255,255,255,0.08)',
                                        padding: '20px',
                                        textAlign: 'center',
                                        transition: 'all 0.3s'
                                    }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                                        }}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
                                            <IconComponent size={32} color="#888" strokeWidth={1.5} />
                                        </div>
                                        <div className="font-tech" style={{ fontSize: '0.7rem', color: '#666', letterSpacing: '0.1em', marginBottom: '5px' }}>{pillar.label.toUpperCase()}</div>
                                        <div style={{ fontSize: '1rem', color: '#fff', fontWeight: '600' }}>{pillar.value}</div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Memorial Badge - No Glow */}
                        <div style={{
                            marginTop: '50px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '15px',
                            padding: '15px 25px',
                            background: 'rgba(255,255,255,0.02)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            fontSize: '0.8rem',
                            letterSpacing: '0.15em',
                            color: '#888',
                            fontFamily: 'Space Grotesk, sans-serif'
                        }}>
                            <div style={{
                                width: '8px',
                                height: '8px',
                                background: '#666',
                                borderRadius: '50%'
                            }} />
                            IN MEMORIAM — FOREVER IN OUR MISSION
                        </div>
                    </div>
                </div>

                {/* Bottom Accent Line - Subtle */}
                <div style={{
                    height: '1px',
                    background: 'rgba(255,255,255,0.05)'
                }} />
            </section>

            {/* --- INSPIRATIONAL QUOTE SECTION --- */}
            <section style={{ padding: '80px 24px', background: '#000' }}>
                <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{
                        fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
                        fontStyle: 'italic',
                        color: '#aaa',
                        lineHeight: '1.8',
                        marginBottom: '20px'
                    }}>
                        "Building a self-reliant India through original thinking, strategic foresight, and unwavering commitment to national security and prosperity."
                    </p>
                    <div style={{
                        marginTop: '30px',
                        paddingTop: '20px',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '0.85rem',
                        letterSpacing: '0.15em',
                        color: '#666'
                    }}>
                        ATMA NIRBHAR SOCH — MISSION 2047
                    </div>
                </div>
            </section>

            {/* --- SECTION 5: LEADERSHIP DOSSIER --- */}
            <section style={{ padding: '120px 24px', position: 'relative' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

                    {/* Section Header */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '60px' }}>
                        <div style={{ width: '40px', height: '40px', background: 'var(--color-red)', display: 'grid', placeItems: 'center', color: '#000', fontWeight: 'bold' }}>04</div>
                        <h2 className="font-tech" style={{ fontSize: '2rem', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>Command Authority</h2>
                    </div>

                    {/* The Two Commanders */}
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '40px' }}>

                        {/* CARD 1: FOUNDER */}
                        <div className="leadership-card" style={{
                            position: 'relative', height: '500px', border: '1px solid #333', backgroundColor: '#050505',
                            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '40px', overflow: 'hidden'
                        }}>
                            {/* Background Texture */}
                            <div style={{
                                position: 'absolute', top: 0, right: 0, width: '200px', height: '200px',
                                background: 'repeating-linear-gradient(45deg, #111, #111 2px, transparent 2px, transparent 10px)', opacity: 0.5
                            }} />

                            {/* Floating Status */}
                            <div className="font-tech" style={{ position: 'absolute', top: '30px', left: '30px', fontSize: '0.8rem', color: 'var(--color-red)', border: '1px solid var(--color-red)', padding: '4px 12px' }}>
                                CLEARED: LEVEL 5
                            </div>

                            {/* Content */}
                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '10px', letterSpacing: '0.1em' }}>FOUNDER & CEO</div>
                                <h3 style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: '0.9', marginBottom: '20px', color: '#fff' }}>
                                    MS SONIA <br /> NARANG
                                </h3>
                                <p style={{ color: '#666', maxWidth: '400px', lineHeight: '1.6' }}>
                                    Visionary architect of the Bharatiya Soch initiative. Leading the strategic charge towards 2047.
                                </p>
                            </div>

                            {/* Hover Effect Light */}
                            <div className="scanner-light" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '5px', background: 'var(--color-red)', opacity: 0, boxShadow: '0 0 20px var(--color-red)' }}></div>
                        </div>

                        {/* CARD 2: DIRECTOR */}
                        <div className="leadership-card" style={{
                            position: 'relative', height: '500px', border: '1px solid #333', backgroundColor: '#050505',
                            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '40px', overflow: 'hidden'
                        }}>
                            <div className="font-tech" style={{ position: 'absolute', top: '30px', left: '30px', fontSize: '0.8rem', color: '#fff', border: '1px solid #fff', padding: '4px 12px' }}>
                                OPERATIONS DIRECTOR
                            </div>

                            <div style={{ position: 'relative', zIndex: 2 }}>
                                <div style={{ fontSize: '0.9rem', color: '#888', marginBottom: '10px', letterSpacing: '0.1em' }}>BRIGADIER (RETD)</div>
                                <h3 style={{ fontSize: '3.5rem', fontWeight: '900', lineHeight: '0.9', marginBottom: '20px', color: '#fff' }}>
                                    ANSHUMAN <br /> NARANG
                                </h3>
                                <p style={{ color: '#666', maxWidth: '400px', lineHeight: '1.6' }}>
                                    Military veteran bringing decades of tactical experience and operational wisdom to the think tank.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- SECTION 6: MENTORSHIP GRID (The Board) --- */}
            <section style={{ backgroundColor: '#080808', padding: '100px 24px', borderTop: '1px solid #222' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>

                    <div style={{ marginBottom: '60px', textAlign: 'center' }}>
                        <h2 className="font-tech" style={{ fontSize: '1.5rem', color: '#fff', letterSpacing: '0.2em' }}>/// STRATEGIC ADVISORY BOARD</h2>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(3, 1fr)',
                        gap: '1px',
                        backgroundColor: '#222', // This creates the borders
                        border: '1px solid #222'
                    }}
                        className="advisory-grid"
                    >
                        {[
                            { name: "Lt Gen Rakesh Sharma", status: "RETIRED", branch: "ARMY" },
                            { name: "Air Marshal Diptendu Choudhury", status: "ACTIVE ADVISOR", branch: "AIR FORCE" },
                            { name: "Rear Admiral Monty Khanna", status: "STRATEGIC", branch: "NAVY" },
                            { name: "Maj Gen PJS Sandhu", status: "RESEARCH", branch: "ARMY" },
                            { name: "Maj Gen Mandip Singh", status: "TACTICAL", branch: "ARMY" },
                            { name: "Brig Sanal Kumar", status: "LOGISTICS", branch: "ARMY" },
                        ].map((mentor, i) => (
                            <div key={i} className="mentor-cell" style={{
                                backgroundColor: '#0a0a0a',
                                padding: '40px 30px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                height: '200px',
                                transition: 'all 0.3s'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <Award size={24} color="#333" className="mentor-icon" />
                                    <div className="font-tech" style={{ fontSize: '0.7rem', color: '#444' }}>{mentor.branch}</div>
                                </div>

                                <div>
                                    <div style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '8px', color: '#eee' }}>{mentor.name}</div>
                                    <div className="font-tech" style={{ fontSize: '0.75rem', color: 'var(--color-red)' }}>// {mentor.status}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- SECTION 7: CORE TEAM (Database View) --- */}
            <section style={{ padding: '100px 24px' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                    <div style={{ marginBottom: '40px', borderBottom: '1px solid #333', paddingBottom: '20px', display: 'flex', justifyContent: 'space-between' }}>
                        <h3 className="font-tech" style={{ color: '#888' }}>OPERATIONAL STAFF</h3>
                        <div className="font-tech" style={{ color: '#444' }}>DB_VIEW_ACTIVE</div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                        {[
                            { role: "Honorary Adjunct Research Fellow", name: "Ms Gitanjali Sinha Roy", id: "RES-01" },
                            { role: "Director Social Media", name: "Ms Anushruti Narang", id: "OPS-04" },
                            { role: "Events Management", name: "Colonel Vipul Deswal", id: "EVT-09" },
                            { role: "Research Intern", name: "Mr Zorawar Singh Gill", id: "INT-02" },
                            { role: "Accountant", name: "Mr Gagan Wadhwa", id: "FIN-01" }
                        ].map((person, i) => (
                            <div key={i} className="data-row" style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr 2fr 1fr',
                                padding: '20px 0',
                                borderBottom: '1px solid #1a1a1a',
                                alignItems: 'center',
                                color: '#aaa',
                                transition: 'all 0.2s'
                            }}>
                                <div className="font-tech" style={{ fontSize: '0.8rem', color: '#444' }}>{person.id}</div>
                                <div style={{ fontSize: '1.1rem', fontWeight: '500', color: '#fff' }}>{person.name}</div>
                                <div style={{ fontSize: '0.9rem', textAlign: 'right' }}>{person.role}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FINAL QUOTE SECTION --- */}
            <section style={{
                padding: '120px 24px',
                background: 'linear-gradient(180deg, #030303 0%, #000 100%)',
                borderTop: '1px solid rgba(255,255,255,0.05)'
            }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                    <p style={{
                        fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                        fontWeight: '300',
                        color: '#fff',
                        lineHeight: '1.6',
                        marginBottom: '30px',
                        letterSpacing: '-0.01em'
                    }}>
                        "The future belongs to those who prepare for it today."
                    </p>
                    <div style={{
                        marginTop: '40px',
                        paddingTop: '30px',
                        borderTop: '1px solid rgba(255,255,255,0.1)',
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontSize: '0.85rem',
                        letterSpacing: '0.2em',
                        color: '#666',
                        textTransform: 'uppercase'
                    }}>
                        Together Towards 2047
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutUsPage;