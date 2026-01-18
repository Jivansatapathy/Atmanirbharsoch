import React from 'react';
import { SplitLayout } from '../layout/SplitLayout';
import { Button } from '../ui/Button';

export const SystemIntelligence: React.FC = () => {
    return (
        <section style={{ padding: 'var(--space-4xl) 0', borderTop: '1px solid #eee' }}>
            <SplitLayout
                ratio="60-40"
                left={
                    <div style={{ paddingRight: 'var(--space-xl)' }}>
                        <h2 style={{ marginBottom: 'var(--space-md)' }}>SYSTEM INTELLIGENCE</h2>
                        <h3 style={{ fontSize: 'var(--text-h3)', marginBottom: 'var(--space-md)', fontWeight: 'var(--font-weight-medium)' }}>
                            Autonomous decision-making at the edge.
                        </h3>
                        <p>
                            The core of the Oversight platform is the Neural Governance Engine (NGE).
                            Unlike passive monitoring tools, NGE actively interprets telemetry data against
                            pre-defined operational parameters.
                        </p>
                        <p>
                            When a threshold is breached, the system doesn't just alert; it adapts.
                            Workloads are rerouted, bandwidth is throttled, and security protocols are
                            automatically escalated to Defcon 3.
                        </p>
                        <div style={{ marginTop: 'var(--space-lg)' }}>
                            <Button variant="secondary">Read Technical Brief</Button>
                        </div>
                    </div>
                }
                right={
                    <div style={{
                        height: '100%',
                        width: '100%',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '4px', // Slight radius to match tactical theme
                        border: '1px solid #333'
                    }}>
                        <img
                            src="/operational_brief_intel.png"
                            alt="Operational Intelligence Map"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                display: 'block',
                                filter: 'grayscale(100%) contrast(1.2) brightness(0.8)' // Tactical look
                            }}
                        />
                        {/* Optional Overlay to tie it in */}
                        <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                            boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8)',
                            pointerEvents: 'none'
                        }}></div>
                    </div>
                }
            />
        </section>
    );
};
