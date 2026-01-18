import React, { useRef } from 'react';
import { Book, Video, ArrowRight } from 'lucide-react';

type Product = {
    id: string;
    type: 'Book' | 'Course';
    title: string;
    price: string;
    description: string;
    color: string;
};

const products: Product[] = [
    {
        id: '1',
        type: 'Book',
        title: 'Strategic Deterrence in the AI Age',
        price: '₹1,499',
        description: 'Comprehensive analysis of autonomous systems in modern warfare doctrine.',
        color: '#ff4444' // Tactical Red
    },
    {
        id: '2',
        type: 'Course',
        title: 'OSINT Masterclass: Level 1',
        price: '₹5,999',
        description: 'Foundational techniques for open-source intelligence gathering and verification.',
        color: '#4488ff' // Intel Blue
    },
    {
        id: '3',
        type: 'Book',
        title: 'The Grey Zone Doctrine',
        price: '₹1,299',
        description: 'Understanding non-kinetic warfare and sub-threshold conflict strategies.',
        color: '#ff4444'
    },
    {
        id: '4',
        type: 'Course',
        title: 'Satellite Imagery Analysis',
        price: '₹8,499',
        description: 'Advanced GEOINT techniques for identifying military assets from space.',
        color: '#4488ff'
    },
    {
        id: '5',
        type: 'Book',
        title: 'Cyber-Psychological Operations',
        price: '₹1,799',
        description: 'The intersection of cyber warfare and cognitive influence campaigns.',
        color: '#ff4444'
    }
];

export const StoreSection: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = React.useState(false);
    const hasInitialized = useRef(false);

    React.useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        let animationFrameId: number;

        const scroll = () => {
            if (container) {
                // Initial Center Logic
                if (!hasInitialized.current && container.scrollWidth > 0) {
                    // Start at roughly the center of the first set (1/4 of total duplicated width)
                    container.scrollLeft = container.scrollWidth / 4;
                    hasInitialized.current = true;
                }

                if (!isPaused) {
                    // Seamless Loop Logic
                    // If we've scrolled past the width of the original set (approx half total width), 
                    // reset to 0. The content is duplicated, so 0 looks identical to 'halfway'.
                    if (container.scrollLeft >= container.scrollWidth / 2) {
                        container.scrollLeft = 0;
                    } else {
                        container.scrollLeft += 1; // Speed
                    }
                }
            }
            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    return (
        <section style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: 'var(--space-4xl) 0',
            borderBottom: '1px solid #111',
            position: 'relative',
            overflow: 'hidden'
        }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Header */}
            <div className="container" style={{ marginBottom: 'var(--space-xl)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                            margin: 0,
                            textTransform: 'uppercase',
                            letterSpacing: '-0.02em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px'
                        }}>
                            Knowledge Arsenal
                        </h2>
                        <span style={{ fontFamily: 'monospace', color: '#666', fontSize: '0.9rem' }}>
                            FOSTERING STRATEGIC THOUGHT // RESOURCES
                        </span>
                    </div>

                    {/* Scroll Indicators (Visual Only) */}
                    <div style={{ display: 'flex', gap: '5px' }}>
                        <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-red-ops)' }} />
                        <div style={{ width: '10px', height: '2px', backgroundColor: '#333' }} />
                        <div style={{ width: '10px', height: '2px', backgroundColor: '#333' }} />
                    </div>
                </div>
            </div>

            {/* Carousel Container */}
            <div
                ref={scrollContainerRef}
                style={{
                    display: 'flex',
                    gap: 'var(--space-lg)',
                    overflowX: 'hidden', // Hide scrollbar, programmatic only
                    padding: '0 var(--space-md) var(--space-xl)',
                    paddingLeft: 'max(var(--space-md), calc((100vw - var(--grid-max-width)) / 2))',
                }}
            >
                {/* ORIGINAL SET */}
                {products.map((product) => (
                    <div
                        key={`orig-${product.id}`}
                        style={{
                            flex: '0 0 320px',
                            backgroundColor: '#050505',
                            border: '1px solid #222',
                            position: 'relative',
                            display: 'flex', // Changed to inline-flex for nowrap container
                            flexDirection: 'column',
                            height: '420px',
                            transition: 'transform 0.3s ease, border-color 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = product.color;
                            e.currentTarget.style.transform = 'translateY(-5px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#222';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        {/* Image Placeholder */}
                        <div style={{
                            height: '200px',
                            background: `linear-gradient(135deg, #111 0%, ${product.color}22 100%)`,
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottom: '1px solid #222'
                        }}>
                            {product.type === 'Book' ?
                                <Book size={64} color={product.color} strokeWidth={1} style={{ opacity: 0.8 }} /> :
                                <Video size={64} color={product.color} strokeWidth={1} style={{ opacity: 0.8 }} />
                            }

                            <div style={{
                                position: 'absolute', top: '10px', right: '10px',
                                fontFamily: 'monospace', fontSize: '0.7rem',
                                color: '#fff', backgroundColor: '#000',
                                padding: '4px 8px', border: `1px solid ${product.color}`
                            }}>
                                {product.type.toUpperCase()}
                            </div>
                        </div>

                        {/* Content */}
                        <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.25rem', margin: '0 0 10px 0', lineHeight: 1.3 }}>{product.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: '#888', margin: '0 0 20px 0', flex: 1, lineHeight: 1.5 }}>
                                {product.description}
                            </p>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fff' }}>
                                    {product.price}
                                </span>
                                <button style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: product.color,
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    cursor: 'pointer',
                                    padding: 0
                                }}>
                                    ACQUIRE <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* DUPLICATED SET FOR SEAMLESS SCROLL */}
                {products.map((product) => (
                    <div
                        key={`copy-${product.id}`}
                        style={{
                            flex: '0 0 320px',
                            backgroundColor: '#050505',
                            border: '1px solid #222',
                            position: 'relative',
                            display: 'inline-flex', // Changed to inline-flex for nowrap container
                            flexDirection: 'column',
                            height: '420px',
                            transition: 'transform 0.3s ease, border-color 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = product.color;
                            e.currentTarget.style.transform = 'translateY(-5px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#222';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        {/* Image Placeholder */}
                        <div style={{
                            height: '200px',
                            background: `linear-gradient(135deg, #111 0%, ${product.color}22 100%)`,
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottom: '1px solid #222'
                        }}>
                            {product.type === 'Book' ?
                                <Book size={64} color={product.color} strokeWidth={1} style={{ opacity: 0.8 }} /> :
                                <Video size={64} color={product.color} strokeWidth={1} style={{ opacity: 0.8 }} />
                            }

                            <div style={{
                                position: 'absolute', top: '10px', right: '10px',
                                fontFamily: 'monospace', fontSize: '0.7rem',
                                color: '#fff', backgroundColor: '#000',
                                padding: '4px 8px', border: `1px solid ${product.color}`
                            }}>
                                {product.type.toUpperCase()}
                            </div>
                        </div>

                        {/* Content */}
                        <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.25rem', margin: '0 0 10px 0', lineHeight: 1.3 }}>{product.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: '#888', margin: '0 0 20px 0', flex: 1, lineHeight: 1.5 }}>
                                {product.description}
                            </p>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fff' }}>
                                    {product.price}
                                </span>
                                <button style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: product.color,
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    cursor: 'pointer',
                                    padding: 0
                                }}>
                                    ACQUIRE <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* DUPLICATE SET (For Loop) */}
                {products.map((product) => (
                    <div
                        key={`dup-${product.id}`}
                        style={{
                            flex: '0 0 320px',
                            backgroundColor: '#050505',
                            border: '1px solid #222',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            height: '420px',
                            transition: 'transform 0.3s ease, border-color 0.3s ease',
                            cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = product.color;
                            e.currentTarget.style.transform = 'translateY(-5px)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = '#222';
                            e.currentTarget.style.transform = 'translateY(0)';
                        }}
                    >
                        {/* Image Placeholder */}
                        <div style={{
                            height: '200px',
                            background: `linear-gradient(135deg, #111 0%, ${product.color}22 100%)`,
                            position: 'relative',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderBottom: '1px solid #222'
                        }}>
                            {product.type === 'Book' ?
                                <Book size={64} color={product.color} strokeWidth={1} style={{ opacity: 0.8 }} /> :
                                <Video size={64} color={product.color} strokeWidth={1} style={{ opacity: 0.8 }} />
                            }

                            <div style={{
                                position: 'absolute', top: '10px', right: '10px',
                                fontFamily: 'monospace', fontSize: '0.7rem',
                                color: '#fff', backgroundColor: '#000',
                                padding: '4px 8px', border: `1px solid ${product.color}`
                            }}>
                                {product.type.toUpperCase()}
                            </div>
                        </div>

                        {/* Content */}
                        <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ fontSize: '1.25rem', margin: '0 0 10px 0', lineHeight: 1.3, whiteSpace: 'normal' }}>{product.title}</h3>
                            <p style={{ fontSize: '0.9rem', color: '#888', margin: '0 0 20px 0', flex: 1, lineHeight: 1.5, whiteSpace: 'normal' }}>
                                {product.description}
                            </p>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                                <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#fff' }}>
                                    {product.price}
                                </span>
                                <button style={{
                                    background: 'transparent',
                                    border: 'none',
                                    color: product.color,
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '5px',
                                    cursor: 'pointer',
                                    padding: 0
                                }}>
                                    ACQUIRE <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Spacer for proper end padding */}
                <div style={{ flex: '0 0 1px' }} />
            </div>
        </section>
    );
};
