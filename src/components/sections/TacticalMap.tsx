import React, { useState, useEffect } from 'react';
import {
    Globe,
    Radio,
    Shield,
    Activity,
    Wifi,
    Lock,
    Cpu,
    Crosshair
} from 'lucide-react';

const LiveLog: React.FC = () => {
    const [logs, setLogs] = useState<string[]>([]);
    const messages = [
        "SIGNAL DETECTED [Sector 4]",
        "ENCRYPTION HANDSHAKE: ACK",
        "SAT-LINK: OPTIMAL",
        "PACKET INTERCEPT: 44kb",
        "NODE 882: ONLINE",
        "THREAT LEVEL: LOW",
        "SCANNING FREQUENCIES...",
        "DATA STREAM: ESTABLISHED",
        "PING: 12ms",
        "AUTH TOKEN: REFRESHED"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            const msg = messages[Math.floor(Math.random() * messages.length)];
            const time = new Date().toLocaleTimeString('en-US', { hour12: false });
            setLogs(prev => [`[${time}] ${msg}`, ...prev].slice(0, 8));
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ fontFamily: 'monospace', fontSize: '0.75rem', color: '#0f0', opacity: 0.8 }}>
            <div style={{ borderBottom: '1px solid #333', marginBottom: '10px', paddingBottom: '5px', color: '#666' }}>
                Event Log // LIVE
            </div>
            {logs.map((log, i) => (
                <div key={i} style={{ marginBottom: '4px', opacity: 1 - (i * 0.1) }}>
                    {log}
                </div>
            ))}
        </div>
    );
};

const Spectrum: React.FC = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'flex-end', height: '60px', gap: '2px', opacity: 0.7 }}>
            {[...Array(20)].map((_, i) => (
                <div
                    key={i}
                    style={{
                        width: '4px',
                        backgroundColor: 'var(--color-red-ops)',
                        height: `${Math.random() * 100}%`,
                        animation: `pulse 0.5s infinite alternate ${i * 0.05}s`
                    }}
                />
            ))}
            <style>{`
                @keyframes pulse {
                    0% { height: 10%; opacity: 0.3; }
                    100% { height: 100%; opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export const TacticalMap: React.FC = () => {
    return (
        <section style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: 'var(--space-4xl) 0',
            overflow: 'hidden',
            position: 'relative',
            borderBottom: '1px solid #222'
        }}>
            {/* Background Grid Pattern */}
            <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: 'linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: 0.3,
                pointerEvents: 'none'
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>

                {/* Dashboard Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-xl)' }}>
                    <div>
                        <h2 style={{
                            fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                            margin: 0,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <Activity color="var(--color-red-ops)" />
                            Live Theatre Monitoring
                        </h2>
                        <span style={{ fontFamily: 'monospace', color: '#666', fontSize: '0.9rem' }}>
                            GLOBAL_OPS // SECTOR_7 // REALTIME
                        </span>
                    </div>
                    <div style={{ textAlign: 'right', display: 'flex', gap: '20px' }}>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-red-ops)' }}>4,192</div>
                            <div style={{ fontSize: '0.7rem', color: '#666' }}>ACTIVE NODES</div>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>99.9%</div>
                            <div style={{ fontSize: '0.7rem', color: '#666' }}>UPTIME</div>
                        </div>
                    </div>
                </div>

                {/* Dashboard Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(250px, 1fr) 2fr minmax(250px, 1fr)',
                    gap: 'var(--space-lg)',
                    minHeight: '400px'
                }}>

                    {/* LEFT PANEL: System Status */}
                    <div style={{
                        border: '1px solid #222',
                        backgroundColor: '#050505',
                        padding: 'var(--space-lg)',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between'
                    }}>
                        <div>
                            <h3 style={{ fontSize: '0.9rem', color: '#888', borderBottom: '1px solid #333', paddingBottom: '10px', marginTop: 0 }}>SYSTEM STATUS</h3>

                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><Wifi size={14} /> SAT-LINK:</span>
                                <span style={{ color: '#0f0', fontSize: '0.9rem' }}>OPTIMAL</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><Lock size={14} /> ENCRYPTION:</span>
                                <span style={{ color: '#0f0', fontSize: '0.9rem' }}>AES-256</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}><Cpu size={14} /> CPU LOAD:</span>
                                <span style={{ color: '#fff', fontSize: '0.9rem' }}>12%</span>
                            </div>
                        </div>

                        <div>
                            <h3 style={{ fontSize: '0.9rem', color: '#888', borderBottom: '1px solid #333', paddingBottom: '10px' }}>SPECTRUM ANALYSIS</h3>
                            <Spectrum />
                        </div>
                    </div>

                    {/* CENTER PANEL: The MAP */}
                    <div style={{
                        border: '1px solid #333',
                        position: 'relative',
                        backgroundColor: '#020202',
                        overflow: 'hidden',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        {/* Map Grid */}
                        <div style={{
                            position: 'absolute', inset: 0,
                            backgroundImage: 'radial-gradient(#222 1px, transparent 1px)',
                            backgroundSize: '20px 20px',
                            opacity: 0.5
                        }} />

                        {/* Scanning Line */}
                        <div style={{
                            position: 'absolute', top: 0, left: 0, width: '100%', height: '2px',
                            background: 'var(--color-red-ops)',
                            boxShadow: '0 0 10px var(--color-red-ops)',
                            opacity: 0.5,
                            animation: 'scan 3s linear infinite'
                        }} />
                        <style>{`@keyframes scan { 0% { top: 0%; opacity:0; } 10% { opacity:1; } 90% { opacity:1; } 100% { top: 100%; opacity:0; } }`}</style>

                        {/* Central Globe */}
                        <div style={{ position: 'relative' }}>
                            <Globe size={200} strokeWidth={0.5} style={{ opacity: 0.3, color: 'var(--color-red-ops)' }} />
                            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '10px', height: '10px', background: 'var(--color-red-ops)', borderRadius: '50%', boxShadow: '0 0 20px var(--color-red-ops)' }} />

                            {/* Blips */}
                            <div style={{ position: 'absolute', top: '30%', left: '70%', width: '6px', height: '6px', background: '#fff', borderRadius: '50%', animation: 'blink 2s infinite' }} />
                            <div style={{ position: 'absolute', top: '60%', left: '20%', width: '6px', height: '6px', background: '#fff', borderRadius: '50%', animation: 'blink 3s infinite 0.5s' }} />
                            <div style={{ position: 'absolute', top: '20%', left: '40%', width: '6px', height: '6px', background: '#fff', borderRadius: '50%', animation: 'blink 1.5s infinite 1s' }} />
                        </div>

                        {/* HUD Corners */}
                        <div style={{ position: 'absolute', top: '10px', left: '10px', borderTop: '2px solid #555', borderLeft: '2px solid #555', width: '20px', height: '20px' }} />
                        <div style={{ position: 'absolute', top: '10px', right: '10px', borderTop: '2px solid #555', borderRight: '2px solid #555', width: '20px', height: '20px' }} />
                        <div style={{ position: 'absolute', bottom: '10px', left: '10px', borderBottom: '2px solid #555', borderLeft: '2px solid #555', width: '20px', height: '20px' }} />
                        <div style={{ position: 'absolute', bottom: '10px', right: '10px', borderBottom: '2px solid #555', borderRight: '2px solid #555', width: '20px', height: '20px' }} />

                        <div style={{ position: 'absolute', bottom: '15px', left: '50%', transform: 'translateX(-50%)', fontFamily: 'monospace', fontSize: '0.8rem', color: 'var(--color-red-ops)', display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <Radio size={12} className="animate-pulse" /> LIVE_FEED
                        </div>
                    </div>

                    {/* RIGHT PANEL: Activity Log & Targets */}
                    <div style={{
                        border: '1px solid #222',
                        backgroundColor: '#050505',
                        padding: 'var(--space-lg)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px'
                    }}>
                        {/* Target Acquisition */}
                        <div>
                            <h3 style={{ fontSize: '0.9rem', color: '#888', borderBottom: '1px solid #333', paddingBottom: '10px', marginTop: 0 }}>ACTIVE TARGETS</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
                                <Crosshair size={32} color="var(--color-red-ops)" />
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: '#fff' }}>TARGET_ALPHA</div>
                                    <div style={{ fontSize: '0.7rem', color: '#666', fontFamily: 'monospace' }}>34.05°N, 118.24°W</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                <Shield size={32} color="#444" />
                                <div>
                                    <div style={{ fontSize: '0.8rem', color: '#fff' }}>DEFENSE_GRID</div>
                                    <div style={{ fontSize: '0.7rem', color: '#666', fontFamily: 'monospace' }}>STATUS: ARMING</div>
                                </div>
                            </div>
                        </div>

                        {/* Live Logs */}
                        <div style={{ flex: 1, overflow: 'hidden' }}>
                            <LiveLog />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
