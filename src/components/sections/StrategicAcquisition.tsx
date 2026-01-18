import React from 'react';
import { SplitLayout } from '../layout/SplitLayout';
import { Button } from '../ui/button-legacy';
import { Crosshair } from 'lucide-react';

export const StrategicAcquisition: React.FC = () => {
    return (
        <section style={{ padding: 'var(--space-4xl) 0', borderTop: '1px solid #111', backgroundColor: '#050505' }}>
            <div className="container" style={{ marginBottom: 'var(--space-xl)' }}>
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    marginBottom: '10px',
                    color: 'var(--color-red-ops)',
                    fontFamily: 'monospace',
                    letterSpacing: '0.1em',
                    fontSize: '0.8rem'
                }}>
                    <Crosshair size={14} /> TACTICAL CASE FILE: MRCA-2.0
                </div>
            </div>

            <SplitLayout
                ratio="50-50"
                left={
                    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', paddingRight: 'var(--space-lg)' }}>
                        {/* Tactical Graphic / Image */}
                        <div style={{
                            position: 'relative',
                            flex: 1,
                            minHeight: '400px',
                            backgroundColor: '#111',
                            border: '1px solid #333',
                            overflow: 'hidden'
                        }}>
                            {/* Placeholder for Jet Image */}
                            <div style={{
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(45deg, #111 25%, #1a1a1a 25%, #1a1a1a 50%, #111 50%, #111 75%, #1a1a1a 75%, #1a1a1a 100%)',
                                backgroundSize: '40px 40px',
                                opacity: 0.2
                            }} />

                            <div style={{
                                position: 'absolute',
                                bottom: '20px',
                                left: '20px',
                                padding: '10px',
                                background: 'rgba(0,0,0,0.8)',
                                border: '1px solid #444',
                                fontFamily: 'monospace',
                                fontSize: '0.75rem',
                                color: '#aaa'
                            }}>
                                <div style={{ color: '#fff', fontWeight: 'bold', marginBottom: '4px' }}>SUBJECT: SU-57 FELON / RAFALE-M</div>
                                <div>STATUS: PROCUREMENT ANALYSIS</div>
                                <div style={{ color: 'var(--color-red-ops)' }}>Risk Level: MODERATE</div>
                            </div>

                            {/* HUD Elements */}
                            <div style={{ position: 'absolute', top: '10px', right: '10px', width: '20px', height: '2px', background: 'var(--color-red-ops)' }} />
                            <div style={{ position: 'absolute', top: '10px', right: '10px', width: '2px', height: '20px', background: 'var(--color-red-ops)' }} />
                            <div style={{ position: 'absolute', bottom: '10px', left: '10px', width: '20px', height: '2px', background: 'var(--color-red-ops)' }} />
                            <div style={{ position: 'absolute', bottom: '10px', left: '10px', width: '2px', height: '20px', background: 'var(--color-red-ops)' }} />
                        </div>
                    </div>
                }
                right={
                    <div style={{ paddingLeft: 'var(--space-xl)' }}>
                        <h2 style={{
                            fontSize: '2.5rem',
                            lineHeight: 1.1,
                            marginBottom: 'var(--space-lg)',
                            fontWeight: 800,
                            color: '#ffffff'
                        }}>
                            STRATEGIC<br />
                            <span style={{ color: '#666' }}>ACQUISITION.</span>
                        </h2>

                        <p style={{ fontSize: '1.1rem', color: '#ccc', marginBottom: 'var(--space-2xl)', lineHeight: 1.6 }}>
                            In-depth analysis of the Multi-Role Combat Aircraft (MRCA) procurement lifecycle.
                            Our models predict a <strong>34% cost overrun</strong> in foreign acquisitions compared to indigenous development cycles (AMCA).
                        </p>

                        {/* Editorial Highlights */}
                        <div style={{
                            borderLeft: '2px solid var(--color-red-ops)',
                            paddingLeft: '20px',
                            marginBottom: 'var(--space-2xl)',
                            background: 'linear-gradient(90deg, rgba(255,0,0,0.05) 0%, transparent 100%)',
                            padding: '20px'
                        }}>
                            <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem', color: '#fff' }}>Editorial Assessment</h3>
                            <p style={{ fontStyle: 'italic', color: '#aaa', margin: 0, lineHeight: 1.6 }}>
                                "While the unit cost remains a contentious point in parliamentary debates, the strategic necessity of a 4.5 Gen interim solution cannot be overstated. The real question isn't price—it's the <strong>technology transfer depth</strong> that will define the legacy of this deal."
                            </p>
                            <div style={{ marginTop: '10px', fontSize: '0.8rem', color: 'var(--color-red-ops)', fontFamily: 'monospace' }}>
                                — DEFENSE INTELLIGENCE BUREAU
                            </div>
                        </div>

                        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 var(--space-2xl) 0', color: '#888' }}>
                            {['Lifecycle Cost Analysis', 'Technology Transfer Compliance', 'Geopolitical Risk Assessment'].map((item, i) => (
                                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                    <div style={{ width: '6px', height: '6px', background: 'var(--color-red-ops)' }} />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <Button variant="primary">
                            ACCESS FULL DOSSIER
                        </Button>
                    </div>
                }
            />
        </section>
    );
};
