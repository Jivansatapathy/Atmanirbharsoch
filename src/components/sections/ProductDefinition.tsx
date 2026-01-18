import React from 'react';
import { SplitLayout } from '../layout/SplitLayout';
import { Button } from '../ui/button-legacy';

export const ProductDefinition: React.FC = () => {
    return (
        <section style={{ padding: 'var(--space-4xl) 0' }}>
            <SplitLayout
                ratio="70-30"
                left={
                    <div>
                        <h2 style={{ marginBottom: 'var(--space-lg)' }}>STRATEGIC<br />OVERSIGHT</h2>
                        <p>
                            In high-stakes environments, ambiguity is a liability. Oversight eliminates signal noise,
                            delivering raw, unadulterated data streams to decision-makers in real-time.
                            We do not interpret; we reveal.
                        </p>
                        <p>
                            Our architecture transforms chaotic inputs into structured, actionable intelligence.
                            By ensuring data integrity at the source, we allow operators to execute with
                            absolute confidence.
                        </p>
                        <div style={{ marginTop: 'var(--space-lg)' }}>
                            <Button variant="tertiary">Explore Architecture &rarr;</Button>
                        </div>
                    </div>
                }
                right={
                    <div style={{
                        borderLeft: '1px solid var(--color-black)',
                        paddingLeft: 'var(--space-md)',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}>
                        <h3 style={{ fontSize: 'var(--text-body)', textTransform: 'uppercase', color: '#666' }}>
                            Operational Summary
                        </h3>
                        <ul style={{ listStyle: 'none', marginTop: 'var(--space-sm)' }}>
                            <li style={{ marginBottom: 'var(--space-xs)', fontWeight: 'var(--font-weight-medium)' }}>
                                Latency: &lt; 20ms
                            </li>
                            <li style={{ marginBottom: 'var(--space-xs)', fontWeight: 'var(--font-weight-medium)' }}>
                                Uptime: 99.999%
                            </li>
                            <li style={{ fontWeight: 'var(--font-weight-medium)' }}>
                                Security: Level 5
                            </li>
                        </ul>
                    </div>
                }
            />
        </section>
    );
};
