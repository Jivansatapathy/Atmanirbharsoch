import React, { useState } from 'react';
import { Play, Maximize2, Radio, ChevronRight } from 'lucide-react';

type Video = {
    id: string;
    title: string;
    thumbnail: string;
    duration: string;
};

const videos: Video[] = [
    { id: 'REC-001', title: 'AIP: LIVE DEMO', thumbnail: '#1a1a1a', duration: '14:20' },
    { id: 'REC-002', title: 'GOTHAM: FIELD OPS', thumbnail: '#222', duration: '08:45' },
    { id: 'REC-003', title: 'FOUNDRY: DEV LOG', thumbnail: '#111', duration: '22:10' },
    { id: 'REC-004', title: 'APOLLO: MISSION BRIEF', thumbnail: '#181818', duration: '05:30' },
];

// --- OPTION 1: SURVEILLANCE GRID (Original) ---
const VariantGrid: React.FC = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);
    return (
        <div className="container" style={{ marginBottom: '100px' }}>
            <div style={{ color: '#666', marginBottom: '20px', fontFamily: 'monospace' }}>// OPTION 01: SURVEILLANCE WALL</div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
                gap: '2px',
                backgroundColor: '#111',
                border: '1px solid #111'
            }}>
                {videos.map((video) => (
                    <div
                        key={video.id}
                        onMouseEnter={() => setHoveredId(video.id)}
                        onMouseLeave={() => setHoveredId(null)}
                        style={{
                            position: 'relative',
                            aspectRatio: '16/9',
                            backgroundColor: '#050505',
                            cursor: 'pointer',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{
                            width: '100%', height: '100%', backgroundColor: video.thumbnail, transform: hoveredId === video.id ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.5s ease', opacity: hoveredId === video.id ? 0.4 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <div style={{ width: '100%', height: '100%', backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)', backgroundSize: '20px 20px', opacity: 0.1 }} />
                        </div>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', pointerEvents: 'none' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', opacity: 0.7 }}>
                                <span style={{ fontFamily: 'monospace', backgroundColor: 'var(--color-red-ops)', color: '#000', padding: '2px 6px', fontSize: '0.7rem', fontWeight: 700 }}>REC</span>
                                <span style={{ fontFamily: 'monospace', color: '#fff' }}>{video.id}</span>
                            </div>
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '60px', height: '60px', border: '1px solid #fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: hoveredId === video.id ? 1 : 0, transition: 'all 0.3s ease', backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)' }}>
                                <Play fill="#fff" size={24} style={{ marginLeft: '4px' }} />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '5px', transform: hoveredId === video.id ? 'translateY(0)' : 'translateY(10px)', opacity: hoveredId === video.id ? 1 : 0.8, transition: 'all 0.3s ease' }}>{video.title}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${hoveredId === video.id ? '#fff' : '#333'}`, paddingTop: '10px', transition: 'border-color 0.3s' }}>
                                    <span style={{ fontFamily: 'monospace', fontSize: '0.8rem', color: '#888' }}>DURATION: {video.duration}</span>
                                    <Maximize2 size={16} color="#fff" style={{ opacity: hoveredId === video.id ? 1 : 0 }} />
                                </div>
                            </div>
                        </div>
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%', pointerEvents: 'none', opacity: 0.3 }} />
                    </div>
                ))}
            </div>
        </div>
    );
};


// --- OPTION 3: COMMAND CONSOLE ---
const VariantConsole: React.FC = () => {
    const [activeId, setActiveId] = useState(videos[0].id);
    const activeVideo = videos.find(v => v.id === activeId) || videos[0];

    return (
        <div className="container" style={{ marginBottom: '100px' }}>
            <div style={{ color: '#666', marginBottom: '20px', fontFamily: 'monospace' }}>// OPTION 03: COMMAND CONSOLE</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '0', border: '1px solid #333', height: '600px' }}>
                {/* Main Player */}
                <div style={{ borderRight: '1px solid #333', position: 'relative', backgroundColor: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '100%', height: '100%', position: 'absolute', backgroundImage: 'radial-gradient(circle, #222 1px, transparent 1px)', backgroundSize: '30px 30px', opacity: 0.2 }}></div>
                    <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}>
                        <div style={{ width: '80px', height: '80px', border: '1px solid var(--color-red-ops)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 0 20px rgba(255,0,0,0.2)' }}>
                            <Play fill="var(--color-red-ops)" color="var(--color-red-ops)" size={32} style={{ marginLeft: '4px' }} />
                        </div>
                        <h3 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{activeVideo.title}</h3>
                        <div style={{ fontFamily: 'monospace', color: '#666' }}>// {activeVideo.id} // SIGNAL: LOCKED</div>
                    </div>
                    {/* HUD Elements */}
                    <div style={{ position: 'absolute', top: '20px', left: '20px', fontFamily: 'monospace', color: 'var(--color-red-ops)', fontSize: '0.8rem' }}>LIVE FEED</div>
                    <div style={{ position: 'absolute', bottom: '20px', right: '20px', fontFamily: 'monospace', color: '#666', fontSize: '0.8rem' }}>1080p // 60FPS</div>
                </div>

                {/* Playlist */}
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    {videos.map((video) => (
                        <div
                            key={video.id}
                            onClick={() => setActiveId(video.id)}
                            style={{
                                flex: 1,
                                display: 'flex',
                                alignItems: 'center',
                                padding: '0 30px',
                                gap: '20px',
                                borderBottom: '1px solid #333',
                                cursor: 'pointer',
                                backgroundColor: activeId === video.id ? '#111' : 'transparent',
                                transition: 'background-color 0.2s'
                            }}
                        >
                            <div style={{ width: '12px', height: '12px', backgroundColor: activeId === video.id ? 'var(--color-red-ops)' : '#333', borderRadius: '50%', boxShadow: activeId === video.id ? '0 0 10px var(--color-red-ops)' : 'none' }}></div>
                            <div>
                                <div style={{ fontFamily: 'monospace', color: activeId === video.id ? '#fff' : '#666', marginBottom: '5px', fontSize: '0.9rem' }}>{video.id}</div>
                                <div style={{ fontWeight: 600, color: activeId === video.id ? '#fff' : '#888' }}>{video.title}</div>
                            </div>
                            <div style={{ marginLeft: 'auto', opacity: activeId === video.id ? 1 : 0 }}>
                                <ChevronRight color="var(--color-red-ops)" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export const YouTubeSection: React.FC = () => {
    return (
        <section style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: 'var(--space-4xl) 0',
            borderBottom: '1px solid #111',
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
        }}>
            <div className="container">
                {/* Header */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'end',
                    marginBottom: 'var(--space-3xl)',
                    borderBottom: '1px solid #333',
                    paddingBottom: '20px'
                }}>
                    <div>
                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--color-red-ops)',
                            marginBottom: '10px',
                            fontFamily: 'monospace'
                        }}>
                            <Radio size={16} className="animate-pulse" />
                            <span>VISUAL INTELLIGENCE</span>
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            fontWeight: 700,
                            letterSpacing: '-0.02em',
                            margin: 0
                        }}>
                            FIELD COMMS
                        </h2>
                    </div>
                </div>
            </div>

            {/* Render 2 Options */}
            <VariantGrid />
            <VariantConsole />


        </section>
    );
};
