
import { Link } from 'react-router-dom';
import { Grid } from './Grid';
import { Lock } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: 'var(--space-4xl) 0 var(--space-xl)',
            borderTop: '1px solid #222',
            marginTop: 0
        }}>
            <Grid>
                {/* Column 1: Brand */}
                <Grid.Column span={4}>
                    <div style={{ marginBottom: '20px' }}>
                        <Link to="/" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '20px',
                            textDecoration: 'none',
                            color: 'inherit'
                        }}>
                            <div style={{
                                fontWeight: '900',
                                fontSize: '1.25rem',
                                letterSpacing: '-0.02em',
                                textTransform: 'uppercase',
                                fontFamily: 'var(--font-sans)',
                            }}>
                                ATMA NIRBHAR<span style={{ color: 'var(--color-red-ops)' }}>.</span>SOCH
                            </div>
                        </Link>
                        <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6', maxWidth: '300px' }}>
                            Advanced strategic intelligence and autonomous defense monitoring systems.
                            Ensuring sovereignty through technological superiority.
                        </p>
                    </div>
                </Grid.Column>

                {/* Column 2: Main Menu */}
                <Grid.Column span={2}>
                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', color: '#444', marginBottom: '20px' }}>
                        Command Menu
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <li><a href="#briefs" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'monospace' }}>Briefs</a></li>
                        <li><a href="#operations" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'monospace' }}>Operations</a></li>
                        <li><a href="#intelligence" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'monospace' }}>Intelligence</a></li>
                        <li><a href="#archives" style={{ color: '#888', textDecoration: 'none', fontSize: '0.9rem', fontFamily: 'monospace' }}>Archives</a></li>
                    </ul>
                </Grid.Column>

                {/* Column 3: Publications */}
                <Grid.Column span={3}>
                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', color: '#444', marginBottom: '20px' }}>
                        Publications
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <li><Link to="/books" style={{ color: '#666', textDecoration: 'none', fontSize: '0.85rem' }}>Books</Link></li>
                        <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '0.85rem' }}>Monographs</a></li>
                        <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '0.85rem' }}>Net Assessments</a></li>
                        <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '0.85rem' }}>GEOINT Briefs</a></li>
                        <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '0.85rem' }}>OSINT Briefs</a></li>
                        <li><a href="#" style={{ color: '#666', textDecoration: 'none', fontSize: '0.85rem' }}>News Bulletin</a></li>
                    </ul>
                </Grid.Column>

                {/* Column 4: Legal & Status */}
                <Grid.Column span={3}>
                    <h4 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.8rem', color: '#444', marginBottom: '20px' }}>
                        System Status
                    </h4>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#0f0', fontSize: '0.8rem', fontFamily: 'monospace', marginBottom: '20px' }}>
                        <div style={{ width: '8px', height: '8px', background: '#0f0', borderRadius: '50%', boxShadow: '0 0 5px #0f0' }} />
                        ALL SYSTEMS ONLINE
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <li><a href="#" style={{ color: '#444', textDecoration: 'none', fontSize: '0.8rem' }}>Security Clearance</a></li>
                        <li><a href="#" style={{ color: '#444', textDecoration: 'none', fontSize: '0.8rem' }}>Data Privacy</a></li>
                    </ul>
                </Grid.Column>
            </Grid>

            {/* Bottom Bar */}
            <div className="container" style={{ marginTop: 'var(--space-3xl)', paddingTop: 'var(--space-lg)', borderTop: '1px solid #111', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '0.7rem', color: '#444', fontFamily: 'monospace' }}>
                    © 2026 ATMA NIRBHAR SOCH. CLASSIFIED.
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '0.7rem', color: '#444', fontFamily: 'monospace' }}>
                    <Lock size={12} /> SECURE CONNECTION // 2048-BIT
                </div>
            </div>
        </footer>
    );
};
