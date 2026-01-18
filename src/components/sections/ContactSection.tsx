import React, { useState } from 'react';
import { Send, Shield, Lock, MapPin, Radio } from 'lucide-react';

export const ContactSection: React.FC = () => {
    const [formState, setFormState] = useState({
        identity: '',
        org: '',
        clearance: '',
        payload: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section style={{
            backgroundColor: '#050505',
            color: '#fff',
            padding: 'var(--space-4xl) 0',
            borderTop: '1px solid #222',
            position: 'relative'
        }}>

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>

                {/* Header */}
                <div style={{ marginBottom: 'var(--space-2xl)', borderBottom: '1px solid #222', paddingBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                    <div>
                        <h2 style={{
                            fontSize: 'clamp(2rem, 4vw, 3rem)',
                            margin: 0,
                            textTransform: 'uppercase',
                            letterSpacing: '-0.02em',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '15px'
                        }}>
                            <Radio color="var(--color-red-ops)" className="animate-pulse" />
                            Secure Uplink
                        </h2>
                        <span style={{ fontFamily: 'monospace', color: '#666' }}>ESTABLISH_COMMUNICATION // ENCRYPTED</span>
                    </div>
                    <div style={{ fontFamily: 'monospace', color: 'var(--color-red-ops)', fontSize: '0.8rem' }}>
                        CHANNEL: OPEN
                    </div>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 2fr',
                    gap: 'var(--space-2xl)',
                }}>

                    {/* LEFT: Channel Info */}
                    <div>
                        <div style={{ marginBottom: '40px' }}>
                            <h3 style={{ fontSize: '1rem', color: '#888', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '20px' }}>
                                Secure Coordinates
                            </h3>

                            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                                <MapPin color="var(--color-red-ops)" />
                                <div>
                                    <div style={{ fontWeight: 700 }}>OPERATIONS CENTRE</div>
                                    <div style={{ color: '#888', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                                        Sector 7, New Delhi<br />
                                        Strategic Command Grid
                                    </div>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                                <Shield color="var(--color-red-ops)" />
                                <div>
                                    <div style={{ fontWeight: 700 }}>DIRECT LINE</div>
                                    <div style={{ color: '#888', fontFamily: 'monospace', fontSize: '0.9rem' }}>
                                        +91-SECRET-LINE<br />
                                        Auth: 882-Alpha
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div style={{
                            padding: '20px',
                            border: '1px dashed #333',
                            backgroundColor: '#0a0a0a',
                            fontFamily: 'monospace',
                            fontSize: '0.8rem',
                            color: '#666'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                <Lock size={14} color="#0f0" />
                                <span style={{ color: '#fff' }}>ENCRYPTION PROTOCOL ACTIVE</span>
                            </div>
                            <p style={{ margin: 0 }}>
                                All transmissions are monitored and logged directly to the mission core. Ensure clearance level before transmitting sensitive operational data.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT: Transmission Form */}
                    <div style={{
                        backgroundColor: '#000',
                        border: '1px solid #222',
                        padding: '40px',
                        position: 'relative'
                    }}>
                        {/* Corner Accents */}
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '20px', height: '20px', borderTop: '2px solid var(--color-red-ops)', borderLeft: '2px solid var(--color-red-ops)' }} />
                        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '20px', height: '20px', borderBottom: '2px solid var(--color-red-ops)', borderRight: '2px solid var(--color-red-ops)' }} />

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                            <div>
                                <label style={{ display: 'block', color: '#666', fontSize: '0.75rem', fontFamily: 'monospace', marginBottom: '5px' }}>IDENTITY [NAME]</label>
                                <input
                                    type="text"
                                    name="identity"
                                    value={formState.identity}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#050505',
                                        border: '1px solid #333',
                                        color: '#fff',
                                        padding: '10px 15px',
                                        fontFamily: 'monospace',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                            <div>
                                <label style={{ display: 'block', color: '#666', fontSize: '0.75rem', fontFamily: 'monospace', marginBottom: '5px' }}>AFFILIATION [ORG]</label>
                                <input
                                    type="text"
                                    name="org"
                                    value={formState.org}
                                    onChange={handleChange}
                                    style={{
                                        width: '100%',
                                        backgroundColor: '#050505',
                                        border: '1px solid #333',
                                        color: '#fff',
                                        padding: '10px 15px',
                                        fontFamily: 'monospace',
                                        outline: 'none'
                                    }}
                                />
                            </div>
                        </div>

                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', color: '#666', fontSize: '0.75rem', fontFamily: 'monospace', marginBottom: '5px' }}>CLEARANCE LEVEL [SUBJECT]</label>
                            <input
                                type="text"
                                name="clearance"
                                value={formState.clearance}
                                onChange={handleChange}
                                style={{
                                    width: '100%',
                                    backgroundColor: '#050505',
                                    border: '1px solid #333',
                                    color: '#fff',
                                    padding: '10px 15px',
                                    fontFamily: 'monospace',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <div style={{ marginBottom: '30px' }}>
                            <label style={{ display: 'block', color: '#666', fontSize: '0.75rem', fontFamily: 'monospace', marginBottom: '5px' }}>DATA PAYLOAD [MESSAGE]</label>
                            <textarea
                                name="payload"
                                value={formState.payload}
                                onChange={handleChange}
                                rows={5}
                                style={{
                                    width: '100%',
                                    backgroundColor: '#050505',
                                    border: '1px solid #333',
                                    color: '#fff',
                                    padding: '10px 15px',
                                    fontFamily: 'monospace',
                                    outline: 'none',
                                    resize: 'none'
                                }}
                            />
                        </div>

                        <button style={{
                            backgroundColor: 'var(--color-red-ops)',
                            color: '#fff',
                            border: 'none',
                            padding: '15px 30px',
                            fontFamily: 'monospace',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            transition: 'all 0.3s'
                        }}>
                            INITIATE TRANSMISSION <Send size={16} />
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};
