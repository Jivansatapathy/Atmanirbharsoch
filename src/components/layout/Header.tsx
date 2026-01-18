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

            setScrolled(currentScrollY > 20);

            if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
                setVisible(false);
            } else {
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
            gap: '24px',
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
                        <Link to="/" style={styles.logoArea}>
                            <div style={styles.logo}>
                                ATMA NIRBHAR<span style={{ color: 'var(--color-red-ops)' }}>.</span>SOCH
                            </div>
                            <div style={styles.statusBadge}>
                                SYS.ONLINE
                            </div>
                        </Link>

                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <nav style={styles.menu}>
                                <Link
                                    to="/#intelligence"
                                    style={styles.link}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                                >
                                    Intelligence
                                </Link>

                                <Link
                                    to="/#operations"
                                    style={styles.link}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                                >
                                    Operations
                                </Link>

                                <Link
                                    to="/about"
                                    style={{
                                        ...styles.link,
                                        opacity: location.pathname === '/about' ? 1 : 0.7,
                                        color: location.pathname === '/about' ? 'var(--color-red-ops)' : 'var(--color-black)',
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                    onMouseLeave={(e) => e.currentTarget.style.opacity = location.pathname === '/about' ? '1' : '0.7'}
                                >
                                    About Us
                                </Link>

                                <div style={{ position: 'relative', display: 'inline-block' }}
                                    onMouseEnter={(e) => {
                                        const dropdown = e.currentTarget.querySelector('.dropdown-content') as HTMLElement;
                                        if (dropdown) dropdown.style.display = 'block';
                                    }}
                                    onMouseLeave={(e) => {
                                        const dropdown = e.currentTarget.querySelector('.dropdown-content') as HTMLElement;
                                        if (dropdown) dropdown.style.display = 'none';
                                    }}
                                >
                                    <span style={{
                                        ...styles.link,
                                        cursor: 'pointer',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '4px'
                                    }}>
                                        Our Publications ▾
                                    </span>
                                    <div className="dropdown-content" style={{
                                        display: 'none',
                                        position: 'absolute',
                                        top: '100%',
                                        right: 0,
                                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                                        backdropFilter: 'blur(20px)',
                                        minWidth: '180px',
                                        boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                                        borderRadius: '8px',
                                        marginTop: '8px',
                                        border: '1px solid rgba(0,0,0,0.05)',
                                        zIndex: 1000,
                                        overflow: 'hidden'
                                    }}>
                                        <Link to="/#briefs" style={{
                                            display: 'block',
                                            padding: '12px 20px',
                                            fontSize: '0.8rem',
                                            fontWeight: '600',
                                            color: 'var(--color-black)',
                                            textDecoration: 'none',
                                            transition: 'background 0.2s',
                                            borderBottom: '1px solid rgba(0,0,0,0.05)'
                                        }}
                                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
                                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                        >
                                            BRIEFS
                                        </Link>
                                        <Link to="/#archives" style={{
                                            display: 'block',
                                            padding: '12px 20px',
                                            fontSize: '0.8rem',
                                            fontWeight: '600',
                                            color: 'var(--color-black)',
                                            textDecoration: 'none',
                                            transition: 'background 0.2s',
                                            borderBottom: '1px solid rgba(0,0,0,0.05)'
                                        }}
                                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
                                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                        >
                                            ARCHIVES
                                        </Link>
                                        <Link to="/books" style={{
                                            display: 'block',
                                            padding: '12px 20px',
                                            fontSize: '0.8rem',
                                            fontWeight: '600',
                                            color: location.pathname === '/books' ? 'var(--color-red-ops)' : 'var(--color-black)',
                                            textDecoration: 'none',
                                            transition: 'background 0.2s'
                                        }}
                                            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
                                            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                        >
                                            BOOKS
                                        </Link>
                                    </div>
                                </div>

                                <Link
                                    to="/contact"
                                    style={{
                                        fontSize: '0.8rem',
                                        fontWeight: '700',
                                        textTransform: 'uppercase' as const,
                                        letterSpacing: '0.05em',
                                        color: '#fff',
                                        backgroundColor: '#000',
                                        padding: '8px 16px',
                                        borderRadius: '6px',
                                        textDecoration: 'none',
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        transition: 'all 0.3s ease',
                                        border: '1px solid #000'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--color-red-ops)';
                                        e.currentTarget.style.borderColor = 'var(--color-red-ops)';
                                        e.currentTarget.style.transform = 'translateY(-1px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = '#000';
                                        e.currentTarget.style.borderColor = '#000';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    Contact Us
                                    <span style={{ fontSize: '0.9rem' }}>↗</span>
                                </Link>
                            </nav>

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
