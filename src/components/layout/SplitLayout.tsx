import React from 'react';
import { Grid } from '../layout/Grid';

type SplitLayoutProps = {
    left: React.ReactNode;
    right: React.ReactNode;
    ratio?: '60-40' | '70-30' | '50-50';
    className?: string;
    style?: React.CSSProperties;
    reverseMobile?: boolean;
};

export const SplitLayout: React.FC<SplitLayoutProps> = ({
    left,
    right,
    ratio = '60-40',
    className = '',
    style
}) => {
    // 60/40 of 12 columns: 7/5 roughly. Or 8/4 (2/1).
    // 70/30 of 12 columns: 8/4 or 9/3.
    // 50/50 of 12 columns: 6/6.

    // Let's use 7/5 for 60/40 (approx 58/41).
    // Let's use 8/4 for a cleaner grid alignment (66/33).

    let leftSpan = 7;
    if (ratio === '70-30') leftSpan = 8;
    if (ratio === '50-50') leftSpan = 6;

    const rightSpan = 12 - leftSpan;

    return (
        <Grid className={className} style={style}>
            <Grid.Column span={leftSpan} className="split-left" style={{ height: '100%' }}>
                {left}
            </Grid.Column>
            <Grid.Column span={rightSpan} className="split-right" style={{ height: '100%' }}>
                {right}
            </Grid.Column>
        </Grid>
    );
};
