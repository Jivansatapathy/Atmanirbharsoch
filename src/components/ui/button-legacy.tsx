import React from 'react';
import '../../styles/components/buttons.css';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    className = '',
    children,
    ...props
}) => {
    return (
        <button
            className={`btn btn-${variant} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
