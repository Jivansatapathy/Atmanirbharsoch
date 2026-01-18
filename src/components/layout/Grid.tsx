import React from 'react';

type GridProps = {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
    style?: React.CSSProperties;
};

export const Grid: React.FC<GridProps> & { Column: typeof Column } = ({
    children,
    className = '',
    as: Component = 'div',
    style: userStyle
}) => {
    const style: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: 'repeat(var(--grid-columns), 1fr)',
        gap: 'var(--grid-gutter)',
        width: '100%',
        maxWidth: 'var(--grid-max-width)',
        margin: '0 auto',
        padding: '0 var(--space-md)',
        ...userStyle
    };

    return (
        <Component style={style} className={className}>
            {children}
        </Component>
    );
};

type ColumnProps = {
    children: React.ReactNode;
    span?: number;
    className?: string;
    style?: React.CSSProperties;
};

const Column: React.FC<ColumnProps> = ({
    children,
    span = 12,
    className = '',
    style: customStyle
}) => {
    const style = {
        gridColumn: `span ${span}`,
        ...customStyle
    } as React.CSSProperties;

    return (
        <div style={style} className={className}>
            {children}
        </div>
    );
};

Grid.Column = Column;
