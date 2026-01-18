import React from 'react';
import { Grid } from '../layout/Grid';

interface CaseStudy {
    id: string;
    codename: string;
    date: string;
    theater: string;
    summary: string;
    status: 'DECLASSIFIED' | 'REDACTED';
    image: string;
}

const cases: CaseStudy[] = [
    {
        id: 'OP-492',
        codename: 'SILENT HORIZON',
        date: '2025.11.02',
        theater: 'PACIFIC // MARITIME',
        summary: 'Autonomous swarm deployment for area denial. 98% efficacy rate achieved in simulated contested waters.',
        status: 'DECLASSIFIED',
        image: '/archive_thumb_maritime.png'
    },
    {
        id: 'OP-551',
        codename: 'OBSIDIAN ECHO',
        date: '2025.10.14',
        theater: 'EASTERN EURO // CYBER',
        summary: 'Counter-offensive against state-sponsored infrastructure targeting. Nullified threat vectors within 400ms.',
        status: 'DECLASSIFIED',
        image: '/archive_thumb_cyber.png'
    },
    {
        id: 'OP-601',
        codename: 'MIDNIGHT VECTOR',
        date: '2025.09.30',
        theater: 'ORBITAL // LEO',
        summary: 'Asset realignment for precision telemetry coverage. [REDACTED] anomaly detected and resolved.',
        status: 'REDACTED',
        image: '/archive_thumb_orbital.png'
    },
    {
        id: 'OP-410',
        codename: 'IRON CLAD',
        date: '2025.08.12',
        theater: 'MENA // LAND',
        summary: 'Supply chain resilience test under active disruption conditions. Logistic integrity maintained.',
        status: 'DECLASSIFIED',
        image: '/archive_thumb_land.png'
    }
];

export const CaseStudyIndex: React.FC = () => {
    return (
        <section style={{ padding: 'var(--space-4xl) 0', borderTop: '1px solid var(--color-black)' }}>
            <Grid>
                <Grid.Column span={12}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-xl)' }}>
                        <h2>OPERATIONAL ARCHIVES</h2>
                        <div style={{ fontFamily: 'monospace', fontSize: 'var(--text-xs)' }}>
                            INDEX: 2025_Q4
                        </div>
                    </div>
                </Grid.Column>

                {cases.map((study) => (
                    <Grid.Column key={study.id} span={6} style={{
                        marginBottom: 'var(--space-2xl)',
                        paddingRight: 'var(--space-lg)',
                        borderTop: '1px solid #E5E5E5',
                        paddingTop: 'var(--space-md)'
                    }}>
                        <div style={{
                            width: '100%',
                            aspectRatio: '16/9',
                            marginBottom: 'var(--space-md)',
                            backgroundColor: '#eee',
                            overflow: 'hidden',
                            border: '1px solid #ddd'
                        }}>
                            <img
                                src={study.image}
                                alt={study.codename}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    filter: 'grayscale(100%) contrast(1.1)', // Tactical uniformity
                                    display: 'block'
                                }}
                            />
                        </div>

                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            fontSize: 'var(--text-xs)',
                            color: '#666',
                            marginBottom: 'var(--space-xs)',
                            fontFamily: 'monospace'
                        }}>
                            <span>{study.date}</span>
                            <span>{study.theater}</span>
                        </div>

                        <h3 style={{
                            fontSize: 'var(--text-h3)',
                            marginBottom: 'var(--space-sm)',
                            textTransform: 'uppercase'
                        }}>
                            {study.codename}
                        </h3>

                        <div style={{
                            display: 'inline-block',
                            backgroundColor: study.status === 'REDACTED' ? '#000' : 'var(--color-red-ops)',
                            color: '#fff',
                            fontSize: '10px',
                            fontWeight: 'bold',
                            padding: '2px 6px',
                            marginBottom: 'var(--space-md)'
                        }}>
                            {study.status}
                        </div>

                        <p style={{ fontSize: 'var(--text-body)', lineHeight: '1.6' }}>
                            {study.summary}
                        </p>

                        <a href="#" style={{
                            fontSize: 'var(--text-sm)',
                            fontWeight: 'bold',
                            textDecoration: 'underline',
                            marginTop: 'var(--space-sm)',
                            display: 'inline-block'
                        }}>
                            FULL BRIEF &rarr;
                        </a>
                    </Grid.Column>
                ))}
            </Grid>
        </section>
    );
};
