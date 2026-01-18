import React from 'react';
import { Grid } from '../layout/Grid';

interface TeamMember {
    name: string;
    role: string;
    category: 'Start' | 'Mentors' | 'Team';
}

const members: TeamMember[] = [
    // Guidance Pillar / Founders
    { name: 'Late Dr (Mrs) Manju Narang', role: 'Founder & CEO', category: 'Start' },
    { name: 'Ms Sonia Narang', role: 'Founder & CEO', category: 'Start' },
    { name: 'Brigadier Anshuman Narang, Retired', role: 'Co-founder & Director', category: 'Start' },

    // Mentors
    { name: 'Lieutenant General Rakesh Sharma Retired', role: 'Mentor', category: 'Mentors' },
    { name: 'Air Marshal Diptendu Choudhury', role: 'Mentor', category: 'Mentors' },
    { name: 'Rear Admiral Monty Khanna', role: 'Mentor', category: 'Mentors' },
    { name: 'Major General PJS Sandhu', role: 'Mentor', category: 'Mentors' },
    { name: 'Major General Mandip Singh', role: 'Mentor', category: 'Mentors' },
    { name: 'Brigadier Sanal Kumar', role: 'Mentor', category: 'Mentors' },

    // Team / Staff
    { name: 'Ms Gitanjali Sinha Roy', role: 'Honorary Adjunct Research Fellow', category: 'Team' },
    { name: 'Ms Ansuhruti Narang', role: 'Director Social Media & East Asia Section', category: 'Team' },
    { name: 'Mr Zorawar Singh Gill', role: 'Research Intern', category: 'Team' },
    { name: 'Colonel Vipul Deswal', role: 'Events Management', category: 'Team' },
    { name: 'Mr Gagan Wadhwa', role: 'Accountant', category: 'Team' }
];

const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
    const [hover, setHover] = React.useState(false);

    return (
        <div
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
                borderRadius: '16px',
                background: 'linear-gradient(145deg, #111, #050505)',
                padding: 'var(--space-xl) var(--space-lg)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                border: hover ? '1px solid var(--color-red-ops)' : '1px solid #222',
                transform: hover ? 'translateY(-5px) scale(1.02)' : 'translateY(0) scale(1)',
                boxShadow: hover ? '0 10px 30px rgba(255, 30, 30, 0.15)' : 'none',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            {/* Status Indicator - Indian Flag */}
            <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '24px',
                height: '16px',
                borderRadius: '2px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.5)',
                overflow: 'hidden'
            }}>
                <img
                    src="/team_flag_india.png"
                    alt="India"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
            </div>

            <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                overflow: 'hidden',
                marginBottom: 'var(--space-md)',
                border: '2px solid #333',
                backgroundColor: '#000',
                boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)'
            }}>
                <img
                    src="/team_profile_soldier.png"
                    alt="Profile"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        filter: 'grayscale(100%)',
                        transition: 'transform 0.5s ease',
                        transform: hover ? 'scale(1.1)' : 'scale(1)'
                    }}
                />
            </div>

            <h3 style={{
                fontSize: '1.1rem',
                margin: '0 0 var(--space-xs) 0',
                color: '#fff',
                letterSpacing: '0.02em'
            }}>
                {member.name}
            </h3>

            <div style={{
                fontSize: '0.85rem',
                color: 'var(--color-red-ops)',
                fontFamily: 'monospace',
                textTransform: 'uppercase',
                fontWeight: 'bold',
                letterSpacing: '0.05em',
                opacity: 1
            }}>
                {member.role}
            </div>
        </div>
    );
};

export const TeamSection: React.FC = () => {
    return (
        <section style={{ padding: 'var(--space-4xl) 0', borderTop: '1px solid #222', backgroundColor: '#050505' }}>
            <Grid>
                <Grid.Column span={12} style={{ marginBottom: 'var(--space-3xl)', textAlign: 'center' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: 'var(--space-md)', color: '#fff', letterSpacing: '-0.03em' }}>
                        TEAM ATMA NIRBHAR SOCH
                    </h2>
                    <div style={{
                        color: 'var(--color-red-ops)',
                        fontFamily: 'monospace',
                        letterSpacing: '2px',
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                        opacity: 1
                    }}>
                        GUIDANCE PILLAR & OPERATIVES
                    </div>
                </Grid.Column>

                {members.map((member, index) => (
                    <Grid.Column key={index} span={3} style={{ marginBottom: 'var(--space-xl)' }}>
                        <TeamCard member={member} />
                    </Grid.Column>
                ))}
            </Grid>
        </section>
    );
};
