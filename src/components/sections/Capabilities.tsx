import React, { useState } from 'react';
import { Grid } from '../layout/Grid';

interface CapabilityItem {
    id: string;
    title: string;
    description: string;
}

const items: CapabilityItem[] = [
    {
        id: '01',
        title: 'REAL-TIME SYNCHRONIZATION',
        description: 'Instantaneous data replication across distributed nodes. Zero latency.'
    },
    {
        id: '02',
        title: 'PREDICTIVE ANOMALY DETECTION',
        description: 'AI-driven heuristic scanning to identify irregularities before they manifest as failures.'
    },
    {
        id: '03',
        title: 'ENCRYPTED DATA TRANSPORT',
        description: 'Military-grade encryption for moving data at rest and in transit.'
    },
];

export const Capabilities: React.FC = () => {
    const [hoveredId, setHoveredId] = useState<string | null>(null);

    return (
        <section style={{ padding: 'var(--space-4xl) 0', backgroundColor: '#fafafa' }}>
            <Grid>
                <Grid.Column span={12}>
                    <h2 style={{ marginBottom: 'var(--space-xl)' }}>SYSTEM CAPABILITIES</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}>
                        {items.map((item) => (
                            <div
                                key={item.id}
                                onMouseEnter={() => setHoveredId(item.id)}
                                onMouseLeave={() => setHoveredId(null)}
                                style={{
                                    padding: 'var(--space-md)',
                                    borderLeft: `2px solid ${hoveredId === item.id ? 'var(--color-red-ops)' : 'transparent'}`,
                                    transition: 'border-left-color 200ms ease',
                                    cursor: 'default'
                                }}
                            >
                                <div style={{
                                    fontSize: 'var(--text-xs)',
                                    color: hoveredId === item.id ? 'var(--color-red-ops)' : '#999',
                                    marginBottom: 'var(--space-2xs)',
                                    fontWeight: 'bold',
                                    transition: 'color 200ms ease'
                                }}>
                                    {item.id}
                                </div>
                                <h3 style={{ fontSize: 'var(--text-h3)', marginBottom: 'var(--space-xs)' }}>
                                    {item.title}
                                </h3>
                                <p style={{ margin: 0, color: '#444' }}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Grid.Column>
            </Grid>
        </section>
    );
};
