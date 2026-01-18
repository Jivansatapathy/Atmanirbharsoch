import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { books } from '../data/books';
import { Grid } from '../components/layout/Grid';

const BookDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const book = books.find(b => b.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!book) {
        return (
            <div style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#000',
                color: '#fff',
                fontFamily: 'monospace'
            }}>
                <div style={{ color: 'var(--color-red-ops)', fontSize: '2rem', marginBottom: '20px' }}>404</div>
                <div style={{ letterSpacing: '0.2em', textTransform: 'uppercase' }}>Record Not Found in Archives</div>
                <button
                    onClick={() => navigate('/books')}
                    style={{
                        marginTop: '40px',
                        background: 'transparent',
                        border: '1px solid #333',
                        color: '#fff',
                        padding: '12px 24px',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                    }}
                >
                    Return to Library
                </button>
            </div>
        );
    }

    return (
        <div style={{
            backgroundColor: '#000',
            color: '#fff',
            minHeight: '100vh',
            paddingTop: '160px',
            paddingBottom: '120px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Aesthetic */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1000px',
                background: `radial-gradient(circle at 20% 30%, ${book.imageColor}22 0%, transparent 70%)`,
                pointerEvents: 'none',
                opacity: 0.4
            }} />

            <Grid>
                <Grid.Column>
                    {/* Breadcrumb / Back */}
                    <button
                        onClick={() => navigate('/books')}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: '#666',
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            marginBottom: 'var(--space-4xl)',
                            transition: 'color 0.3s'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
                    >
                        <span style={{ fontSize: '1.2rem' }}>←</span> Back to Archives
                    </button>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(300px, 450px) 1fr',
                        gap: 'var(--space-4xl)',
                        alignItems: 'start'
                    }}>
                        {/* LEFT: Book Cover Art */}
                        <div style={{
                            position: 'sticky',
                            top: '120px'
                        }}>
                            <div style={{
                                width: '100%',
                                aspectRatio: '2/3',
                                backgroundColor: '#111',
                                borderRadius: '4px',
                                overflow: 'hidden',
                                boxShadow: `0 40px 100px rgba(0,0,0,0.8), 0 0 40px ${book.imageColor}11`,
                                border: '1px solid #222',
                                position: 'relative'
                            }}>
                                {book.imageUrl ? (
                                    <img
                                        src={book.imageUrl}
                                        alt={book.title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                ) : (
                                    <div style={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '40px',
                                        textAlign: 'center'
                                    }}>
                                        <div style={{
                                            position: 'absolute',
                                            top: '40px',
                                            left: '40px',
                                            fontFamily: 'monospace',
                                            fontSize: '0.7rem',
                                            color: '#333'
                                        }}>
                                            SECURE ARCHIVE RE-00{book.id}
                                        </div>
                                        <div style={{
                                            fontSize: '1rem',
                                            fontWeight: 'bold',
                                            color: 'rgba(255,255,255,0.1)',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.3em'
                                        }}>
                                            Visual Data <br /> Redacted
                                        </div>
                                    </div>
                                )}

                                {/* Spine Accent */}
                                <div style={{
                                    position: 'absolute',
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: '8px',
                                    backgroundColor: book.imageColor,
                                    opacity: 0.6
                                }} />
                            </div>

                            <div style={{
                                marginTop: 'var(--space-2xl)',
                                padding: 'var(--space-xl)',
                                border: '1px solid #111',
                                borderRadius: '4px',
                                backgroundColor: 'rgba(255,255,255,0.02)'
                            }}>
                                <h4 style={{
                                    fontSize: '0.65rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.2em',
                                    color: '#444',
                                    marginBottom: '16px'
                                }}>Technical Specifications</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                    {book.specifications?.map((spec, i) => (
                                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                                            <span style={{ color: '#666' }}>{spec.label}</span>
                                            <span style={{ color: '#aaa', fontFamily: 'monospace' }}>{spec.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* RIGHT: Content */}
                        <div>
                            <div style={{
                                fontSize: '0.85rem',
                                color: 'var(--color-red-ops)',
                                fontWeight: '700',
                                textTransform: 'uppercase',
                                letterSpacing: '0.3em',
                                marginBottom: 'var(--space-lg)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <span style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-red-ops)' }} />
                                {book.genre}
                            </div>

                            <h1 style={{
                                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                                fontWeight: '900',
                                letterSpacing: '-0.04em',
                                lineHeight: 1,
                                margin: '0 0 var(--space-xl) 0',
                                textTransform: 'uppercase'
                            }}>
                                {book.title}
                            </h1>

                            <div style={{
                                fontSize: '1.25rem',
                                color: '#888',
                                marginBottom: 'var(--space-3xl)',
                                fontStyle: 'italic'
                            }}>
                                authored by <span style={{ color: '#fff' }}>{book.author}</span>
                            </div>

                            <div style={{
                                display: 'flex',
                                gap: 'var(--space-xl)',
                                marginBottom: 'var(--space-4xl)',
                                borderBottom: '1px solid #111',
                                paddingBottom: 'var(--space-xl)'
                            }}>
                                <div>
                                    <div style={{ fontSize: '0.65rem', color: '#444', textTransform: 'uppercase', marginBottom: '4px' }}>Release</div>
                                    <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{book.releaseDate}</div>
                                </div>
                                <div style={{ width: '1px', backgroundColor: '#111' }} />
                                <div>
                                    <div style={{ fontSize: '0.65rem', color: '#444', textTransform: 'uppercase', marginBottom: '4px' }}>Category</div>
                                    <div style={{ fontSize: '1rem', fontWeight: 'bold' }}>{book.category}</div>
                                </div>
                                <div style={{ width: '1px', backgroundColor: '#111' }} />
                                <div>
                                    <div style={{ fontSize: '0.65rem', color: '#444', textTransform: 'uppercase', marginBottom: '4px' }}>Archive ID</div>
                                    <div style={{ fontSize: '1rem', fontWeight: 'bold', fontFamily: 'monospace' }}>SOCH/RE/{book.id.padStart(3, '0')}</div>
                                </div>
                            </div>

                            <div style={{
                                fontSize: '1.2rem',
                                lineHeight: 1.8,
                                color: '#ccc',
                                marginBottom: 'var(--space-4xl)',
                                maxWidth: '800px'
                            }}>
                                <p style={{ marginBottom: '24px' }}>{book.description}</p>
                                <p style={{ color: '#888' }}>{book.longDescription}</p>
                            </div>

                            <div style={{
                                display: 'flex',
                                gap: 'var(--space-xl)',
                                flexWrap: 'wrap'
                            }}>
                                <button style={{
                                    backgroundColor: 'var(--color-red-ops)',
                                    color: '#fff',
                                    border: 'none',
                                    padding: '16px 40px',
                                    fontSize: '0.9rem',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.2em',
                                    cursor: 'pointer',
                                    borderRadius: '2px',
                                    transition: 'all 0.3s',
                                    boxShadow: '0 10px 20px rgba(255, 0, 0, 0.2)'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = '#d40000';
                                        e.currentTarget.style.transform = 'translateY(-2px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--color-red-ops)';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                    }}
                                >
                                    Pre-Order Volume
                                </button>
                                <button style={{
                                    backgroundColor: 'transparent',
                                    color: '#fff',
                                    border: '1px solid #333',
                                    padding: '16px 40px',
                                    fontSize: '0.9rem',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.2em',
                                    cursor: 'pointer',
                                    borderRadius: '2px',
                                    transition: 'all 0.3s'
                                }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
                                        e.currentTarget.style.borderColor = '#444';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.backgroundColor = 'transparent';
                                        e.currentTarget.style.borderColor = '#333';
                                    }}
                                >
                                    Request Brief
                                </button>
                            </div>

                            {/* Warning / Disclaimers */}
                            <div style={{
                                marginTop: 'var(--space-4xl)',
                                padding: 'var(--space-2xl)',
                                borderLeft: '2px solid var(--color-red-ops)',
                                backgroundColor: 'rgba(255,0,0,0.02)',
                                maxWidth: '600px'
                            }}>
                                <div style={{ fontSize: '0.7rem', fontWeight: '900', color: 'var(--color-red-ops)', marginBottom: '8px', textTransform: 'uppercase' }}>
                                    Security Protocol Notice
                                </div>
                                <div style={{ fontSize: '0.8rem', color: '#666', lineHeight: 1.5 }}>
                                    Access to this publication is monitored and recorded. Unauthorized redistribution of tactical data is a violation of the National Intelligence Act.
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid.Column>
            </Grid>
        </div>
    );
};

export default BookDetailPage;
