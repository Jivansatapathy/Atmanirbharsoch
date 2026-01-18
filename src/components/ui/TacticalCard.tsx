import { type ReactNode } from 'react';

interface TacticalCardProps {
    children: ReactNode;
    className?: string;
}

export const TacticalCard = ({ children, className = '' }: TacticalCardProps) => {
    return (
        <div
            className={`
        relative
        border border-border
        bg-card
        p-6
        transition-all duration-300
        hover:border-primary/50
        hover:shadow-lg hover:shadow-primary/10
        ${className}
      `}
        >
            {children}
        </div>
    );
};
