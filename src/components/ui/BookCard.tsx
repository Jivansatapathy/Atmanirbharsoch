import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BookCardProps {
    id: string;
    title: string;
    author: string;
    description: string;
    releaseDate: string;
    imageColor: string;
    genre: string;
    imageUrl?: string;
    category?: string;
}

export const BookCard: React.FC<BookCardProps> = ({
    id,
    title,
    author,
    description,
    releaseDate,
    imageColor,
    genre,
    imageUrl
}) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/books/${id}`)}
            style={{
                backgroundColor: '#111',
                border: '1px solid #222',
                padding: 'var(--space-xl)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: 'var(--space-lg)',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '4px'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 0, 0, 0.4)';
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.6), 0 0 20px rgba(255,0,0,0.1)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#222';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
            }}
        >
            {/* Book Spine/Decor */}
            <div style={{
                position: 'absolute',
                left: 0,
                top: 0,
                bottom: 0,
                width: '4px',
                backgroundColor: imageColor,
                opacity: 0.8,
                zIndex: 2
            }} />

            {/* Cover Image Container */}
            <div style={{
                width: '100%',
                aspectRatio: '2/3',
                backgroundColor: '#1a1a1a',
                marginBottom: 'var(--space-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden',
                borderRadius: '2px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
            }}>
                {imageUrl ? (
                    <img
                        src={imageUrl}
                        alt={title}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                    />
                ) : (
                    <div style={{
                        textAlign: 'center',
                        fontSize: '0.8rem',
                        color: 'rgba(255,255,255,0.2)',
                        fontWeight: 'bold',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            fontSize: '0.6rem',
                            color: '#444'
                        }}>SOCH ARCHIVE</div>
                        <span>Cover Art<br />Classified</span>
                    </div>
                )}

                {/* Overlay Vignette */}
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.4))',
                    pointerEvents: 'none'
                }} />
            </div>

            <div style={{ flex: 1 }}>
                <div style={{
                    fontSize: '0.65rem',
                    color: 'var(--color-red-ops)',
                    fontWeight: 'bold',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em'
                }}>
                    {genre}
                </div>
                <h3 style={{
                    fontSize: '1.4rem',
                    marginBottom: '6px',
                    fontWeight: '700',
                    lineHeight: '1.1',
                    letterSpacing: '-0.02em',
                    color: '#fff'
                }}>{title}</h3>
                <div style={{
                    fontSize: '0.85rem',
                    color: '#666',
                    marginBottom: 'var(--space-md)',
                    fontStyle: 'italic'
                }}>by {author}</div>
                <p style={{
                    fontSize: '0.9rem',
                    lineHeight: '1.6',
                    color: '#aaa',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                }}>
                    {description}
                </p>
            </div>

            <div style={{
                borderTop: '1px solid #222',
                paddingTop: 'var(--space-lg)',
                marginTop: 'var(--space-md)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontSize: '0.6rem', color: '#444', textTransform: 'uppercase' }}>Available</span>
                    <span style={{ fontSize: '0.75rem', color: '#888', fontFamily: 'monospace', fontWeight: 'bold' }}>
                        {releaseDate}
                    </span>
                </div>
                <button style={{
                    background: 'transparent',
                    border: '1px solid #333',
                    color: '#fff',
                    fontSize: '0.7rem',
                    padding: '8px 16px',
                    cursor: 'pointer',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    transition: 'all 0.3s'
                }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#fff';
                        e.currentTarget.style.color = '#000';
                        e.currentTarget.style.borderColor = '#fff';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.borderColor = '#333';
                    }}
                >
                    Pre-Order
                </button>
            </div>
        </div>
    );
};
