import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Grid } from './Grid';
import '../../styles/variables.css';

export const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(true);
    const lastScrollY = React.useRef(0);
    const [time, setTime] = useState(new Date());
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Background logic
            setScrolled(currentScrollY > 20);

            // Hide/Show logic
            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                // Scrolling DOWN
                setVisible(false);
            } else {
                // Scrolling UP or at top
                setVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        const timer = setInterval(() => setTime(new Date()), 1000);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(timer);
        };
    }, []);

    const formatTime = (date: Date) => {
        return date.toLocaleTimeString('en-US', {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    };

    const styles = {
        header: {
            position: 'fixed' as const,
            top: 0,
            width: '100%',
            backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 1000,
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            transition: 'all 300ms cubic-bezier(0.2, 0.8, 0.2, 1)',
            padding: scrolled ? 'var(--space-sm) 0' : 'var(--space-md) 0',
            transform: visible ? 'translateY(0)' : 'translateY(-100%)',
        },
        navContainer: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative' as const,
        },
        logoArea: {
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-sm)',
            textDecoration: 'none',
            color: 'inherit'
        },
        logo: {
            fontWeight: '900',
            fontSize: '1.1rem',
            letterSpacing: '-0.02em',
            textTransform: 'uppercase' as const,
            fontFamily: 'var(--font-sans)',
        },
        statusBadge: {
            fontSize: '0.65rem',
            fontFamily: 'monospace',
            backgroundColor: '#000',
            color: '#fff',
            padding: '2px 6px',
            borderRadius: '2px',
            letterSpacing: '0.05em',
        },
        menu: {
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
        },
        link: {
            fontSize: '0.8rem',
            fontWeight: '600',
            textTransform: 'uppercase' as const,
            letterSpacing: '0.05em',
            position: 'relative' as const,
            color: 'var(--color-black)',
            opacity: 0.7,
            transition: 'opacity 0.2s ease',
            textDecoration: 'none'
        },
        utility: {
            fontFamily: 'monospace',
            fontSize: '0.75rem',
            color: '#666',
            display: 'flex',
            gap: 'var(--space-md)',
            borderLeft: '1px solid #ddd',
            paddingLeft: 'var(--space-md)',
            marginLeft: 'var(--space-md)',
        }
    };


    return (
        <header style={styles.header}>
            <Grid>
                <Grid.Column>
                    <div style={styles.navContainer}>
                        {/* Left: Logo & Status */}
                        <Link to="/" style={styles.logoArea}>
                            <div style={styles.logo}>
                                ATMA NIRBHAR<span style={{ color: 'var(--color-red-ops)' }}>.</span>SOCH
                            </div>
                            <div style={styles.statusBadge}>
                                SYS.ONLINE
                            </div>
                        </Link>

                        {/* Right: Nav & Utility */}
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <nav style={styles.menu}>
                                {['Briefs', 'Operations', 'Intelligence', 'Archives'].map((item) => (
                                    <Link
                                        key={item}
                                        to={`/#${item.toLowerCase()}`}
                                        style={styles.link}
                                        onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                        onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                                    >
                                        {item}
                                    </Link>
                                ))}
                                <Link
                                    to="/about"
                                    style={{
                                        ...styles.link,
                                        opacity: location.pathname === '/about' ? 1 : 0.7,
                                        color: location.pathname === '/about' ? 'var(--color-red-ops)' : 'var(--color-black)',
                                        fontWeight: location.pathname === '/about' ? '800' : '600'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = location.pathname === '/about' ? '1' : '0.7'}
                                >
                                    About Us
                                </Link>
                                <Link
                                    to="/books"
                                    style={{
                                        ...styles.link,
                                        opacity: location.pathname === '/books' ? 1 : 0.7,
                                        color: location.pathname === '/books' ? 'var(--color-red-ops)' : 'var(--color-black)',
                                        fontWeight: '800',
                                        border: location.pathname === '/books' ? '1px solid var(--color-red-ops)' : '1px solid transparent',
                                        padding: '4px 12px',
                                        borderRadius: '4px',
                                        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.opacity = '1';
                                        if (location.pathname !== '/books') {
                                            e.currentTarget.style.borderColor = '#ddd';
                                        }
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.opacity = location.pathname === '/books' ? '1' : '0.7';
                                        if (location.pathname !== '/books') {
                                            e.currentTarget.style.borderColor = 'transparent';
                                        }
                                    }}
                                >
                                    Books
                                </Link>
                            </nav>

                            {/* Utility Area */}
                            <div style={styles.utility}>
                                <div style={{ cursor: 'pointer' }} onClick={() => window.location.href = '#contact'}>
                                    <span style={{ color: 'var(--color-red-ops)' }}>●</span> LIVE UPLINK
                                </div>
                                <div>
                                    UTC <span style={{ color: 'var(--color-black)', fontWeight: 'bold' }}>{formatTime(time)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid.Column>
            </Grid>
        </header>
    );
};
