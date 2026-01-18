export interface Book {
    id: string;
    title: string;
    author: string;
    description: string;
    longDescription?: string;
    releaseDate: string;
    imageColor: string;
    genre: string;
    category: string;
    imageUrl?: string;
    specifications?: {
        label: string;
        value: string;
    }[];
}

export const books: Book[] = [
    {
        id: '1',
        title: 'Tactical Autonomy: The New Frontier',
        author: 'N. S. Varma',
        description: 'An in-depth analysis of autonomous defense systems and their strategic implications in modern territorial sovereignty.',
        longDescription: 'Tactical Autonomy explores the rapid evolution of autonomous systems in modern warfare. From drone swarms to AI-driven command nodes, this volume dissects the technical and ethical challenges of delegating lethal authority to machines. N. S. Varma provides a comprehensive framework for understanding how these technologies rewrite the rules of engagement and national defense strategy.',
        releaseDate: 'Q3 2026',
        imageColor: '#1a2a6c',
        genre: 'Strategic Theory',
        category: 'Strategic',
        imageUrl: '/images/books/tactical_autonomy.png',
        specifications: [
            { label: 'Classification', value: 'Level 4 Restricted' },
            { label: 'File Type', value: 'Hardbound / Digital' },
            { label: 'Pagination', value: '412 Pages' },
            { label: 'Subject', value: 'Autonomous Systems' }
        ]
    },
    {
        id: '2',
        title: 'Sovereign Intelligence',
        author: 'A. K. Sharma',
        description: 'Exploring the intersection of national security and decentralized cyber intelligence frameworks.',
        longDescription: 'In an era of borderless cyber threats, Sovereign Intelligence argues for a decentralized approach to national security. A. K. Sharma outlines a vision for intelligence frameworks that are resilient, transparent, and fundamentally aligned with democratic values, yet capable of withstanding the most sophisticated state-sponsored attacks.',
        releaseDate: 'Q4 2026',
        imageColor: '#b21f1f',
        genre: 'Cyber Defense',
        category: 'Intelligence',
        imageUrl: '/images/books/sovereign_intelligence.png',
        specifications: [
            { label: 'Classification', value: 'Level 3 Restricted' },
            { label: 'File Type', value: 'Hardbound' },
            { label: 'Pagination', value: '328 Pages' },
            { label: 'Subject', value: 'Cyber Intelligence' }
        ]
    },
    {
        id: '3',
        title: 'Maritime Silhouettes',
        author: 'R. Malhotra',
        description: 'A study on underwater surveillance networks and their role in maintaining dominance in the Indian Ocean region.',
        longDescription: 'The underwater battlespace is the final frontier of regional dominance. Maritime Silhouettes provides an unprecedented look at the sensor networks and stealth technologies currently being deployed across the Indian Ocean basin. R. Malhotra combines technical analysis with geopolitical insight to explain why the next great conflict may be decided beneath the waves.',
        releaseDate: 'Q1 2027',
        imageColor: '#2c3e50',
        genre: 'Naval Intelligence',
        category: 'Tactical',
        imageUrl: '/images/books/maritime_silhouettes.png',
        specifications: [
            { label: 'Classification', value: 'Level 5 Top Secret' },
            { label: 'File Type', value: 'Hardbound' },
            { label: 'Pagination', value: '550 Pages' },
            { label: 'Subject', value: 'Naval Operations' }
        ]
    },
    {
        id: '4',
        title: 'The Neural Command',
        author: 'Dr. S. Reddy',
        description: 'How AI-driven command structures are redefining the OODA loop in high-intensity kinetic environments.',
        longDescription: 'As the speed of modern combat outpaces human cognition, the OODA loop—Observe, Orient, Decide, Act—must be augmented by artificial intelligence. Dr. S. Reddy examines the transition from human-centric to neural command structures, highlighting the critical role of data fusion and algorithmic decision support in achieving tactical overmatch.',
        releaseDate: 'Q2 2027',
        imageColor: '#1e1e1e',
        genre: 'Military AI',
        category: 'Strategic',
        imageUrl: '/images/books/neural_command.png',
        specifications: [
            { label: 'Classification', value: 'Level 4 Restricted' },
            { label: 'File Type', value: 'Digital Only' },
            { label: 'Pagination', value: '280 Pages' },
            { label: 'Subject', value: 'AI Strategy' }
        ]
    },
    {
        id: '5',
        title: 'Ghost Signals',
        author: 'Vikram Singh',
        description: 'Unraveling the history and future of electronic warfare and signal obfuscation techniques.',
        longDescription: 'Control the spectrum, control the battlefield. Ghost Signals traces the evolution of electronic warfare from simple jamming to modern cognitive radio and signal obfuscation. Vikram Singh provides a technical deep dive into how forces can remain invisible while operating in an increasingly contested electromagnetic environment.',
        releaseDate: 'Q3 2027',
        imageColor: '#4b1248',
        genre: 'Electronic Warfare',
        category: 'Tactical',
        specifications: [
            { label: 'Classification', value: 'Level 4 Restricted' },
            { label: 'File Type', value: 'Hardbound' },
            { label: 'Pagination', value: '380 Pages' },
            { label: 'Subject', value: 'Electronic Warfare' }
        ]
    },
    {
        id: '6',
        title: 'Project Atmanirbhar',
        author: 'Team SOCH',
        description: 'The definitive guide to Indias journey towards indigenous defense manufacturing and global leadership.',
        longDescription: 'Project Atmanirbhar is the chronicled history and future roadmap of India’s strategic independence in defense. This collaborative effort from Team SOCH details the policy shifts, technological breakthroughs, and industrial partnerships that are transforming India from a major importer to a global powerhouse in defense hardware and software.',
        releaseDate: 'Q4 2027',
        imageColor: '#000000',
        genre: 'National Policy',
        category: 'Strategic',
        specifications: [
            { label: 'Classification', value: 'Public Release' },
            { label: 'File Type', value: 'Hardbound / Digital' },
            { label: 'Pagination', value: '600 Pages' },
            { label: 'Subject', value: 'Self-Reliance' }
        ]
    }
];
