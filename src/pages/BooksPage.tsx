import React, { useEffect, useState } from 'react';
import { BookCard } from '../components/ui/BookCard';
import { Grid } from '../components/layout/Grid';
import { books } from '../data/books';

const categories = ['All Volumes', 'Strategic', 'Tactical', 'Intelligence'];

const BooksPage: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState('All Volumes');
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const filteredBooks = books.filter(book => {
        const matchesCategory = activeCategory === 'All Volumes' || book.category === activeCategory;
        const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
            book.genre.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

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
            {/* Background Aesthetic Elements */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '800px',
                background: 'radial-gradient(circle at 80% 0%, rgba(255, 0, 0, 0.08) 0%, transparent 60%)',
                pointerEvents: 'none',
                opacity: 0.6
            }} />

            {/* Grid Pattern Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: 'radial-gradient(#222 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                maskImage: 'linear-gradient(to bottom, white, transparent)',
                opacity: 0.2,
                pointerEvents: 'none'
            }} />

            <Grid>
                <Grid.Column>
                    {/* Header Section */}
                    <div style={{ marginBottom: 'var(--space-4xl)', position: 'relative' }}>
                        <div style={{
                            fontSize: '0.85rem',
                            color: 'var(--color-red-ops)',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            letterSpacing: '0.3em',
                            marginBottom: 'var(--space-md)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <span style={{ width: '40px', height: '1px', backgroundColor: 'var(--color-red-ops)' }} />
                            Restricted Library
                        </div>
                        <h1 style={{
                            fontSize: 'clamp(3.5rem, 8vw, 6rem)',
                            fontWeight: '900',
                            letterSpacing: '-0.05em',
                            margin: 0,
                            lineHeight: 0.9,
                            textTransform: 'uppercase'
                        }}>
                            Tactical <br />
                            <span style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}>
                                Publications
                            </span>
                        </h1>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            marginTop: 'var(--space-xl)',
                            flexWrap: 'wrap',
                            gap: 'var(--space-xl)'
                        }}>
                            <div style={{ maxWidth: '550px' }}>
                                <p style={{
                                    fontSize: '1.15rem',
                                    color: '#888',
                                    lineHeight: 1.6,
                                    margin: 0
                                }}>
                                    Access redacted intelligence reports, foundational texts, and strategic forecasts.
                                    Authored by leading experts in <span style={{ color: '#fff' }}>autonomous defense.</span>
                                </p>
                                <div style={{
                                    marginTop: '12px',
                                    fontSize: '0.7rem',
                                    color: '#444',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em'
                                }}>
                                    [ DECLASSIFIED: LEVEL 4 ACCESS REQUIRED ]
                                </div>
                            </div>

                            <div style={{
                                fontFamily: 'monospace',
                                fontSize: '0.75rem',
                                color: '#444',
                                textAlign: 'right',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em'
                            }}>
                                Total Records: 0{books.length}<br />
                                Search Index: Active<br />
                                Ref: {new Date().getTime().toString(16).toUpperCase()}
                            </div>
                        </div>
                    </div>

                    {/* Filter & Search Bar */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        borderBottom: '1px solid #111',
                        marginBottom: 'var(--space-3xl)',
                        position: 'sticky',
                        top: '80px',
                        backgroundColor: 'rgba(0,0,0,0.9)',
                        backdropFilter: 'blur(20px)',
                        zIndex: 100,
                        paddingBottom: '4px',
                        flexWrap: 'wrap',
                        gap: 'var(--space-xl)'
                    }}>
                        <div style={{ display: 'flex', gap: 'var(--space-2xl)' }}>
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setActiveCategory(category)}
                                    style={{
                                        background: 'none',
                                        border: 'none',
                                        padding: 'var(--space-md) 0',
                                        fontSize: '0.75rem',
                                        fontWeight: '700',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.2em',
                                        color: activeCategory === category ? '#fff' : '#444',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        transition: 'color 0.3s'
                                    }}
                                >
                                    {category}
                                    {activeCategory === category && (
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '-1px',
                                            left: 0,
                                            right: 0,
                                            height: '2px',
                                            backgroundColor: 'var(--color-red-ops)',
                                            boxShadow: '0 0 10px var(--color-red-ops)'
                                        }} />
                                    )}
                                </button>
                            ))}
                        </div>

                        <div style={{ position: 'relative', marginBottom: '8px' }}>
                            <input
                                type="text"
                                placeholder="Search archives..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{
                                    backgroundColor: '#111',
                                    border: '1px solid #222',
                                    color: '#fff',
                                    padding: '8px 16px',
                                    paddingLeft: '35px',
                                    fontSize: '0.8rem',
                                    borderRadius: '2px',
                                    width: '250px',
                                    outline: 'none',
                                    transition: 'border-color 0.3s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = '#444'}
                                onBlur={(e) => e.target.style.borderColor = '#222'}
                            />
                            <svg
                                style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.3 }}
                                width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                    </div>

                    {/* Books Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                        gap: 'var(--space-3xl)',
                        animation: 'fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
                    }}>
                        {filteredBooks.map(book => (
                            <BookCard key={book.id} {...book} />
                        ))}
                    </div>

                    {filteredBooks.length === 0 && (
                        <div style={{
                            textAlign: 'center',
                            padding: 'var(--space-4xl)',
                            color: '#444',
                            textTransform: 'uppercase',
                            letterSpacing: '0.2em',
                            fontSize: '0.9rem',
                            border: '1px dashed #111',
                            borderRadius: '4px'
                        }}>
                            No records found matching your query.
                        </div>
                    )}
                </Grid.Column>
            </Grid>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                ::placeholder {
                    color: #333;
                    text-transform: uppercase;
                    letter-spacing: 0.1em;
                    font-size: 0.7rem;
                }
            `}</style>
        </div>
    );
};

export default BooksPage;
