interface SectionHeaderProps {
    title: string;
    subtitle: string;
    classification: string;
}

export const SectionHeader = ({ title, subtitle, classification }: SectionHeaderProps) => {
    return (
        <div className="space-y-4">
            <div className="flex items-center gap-2">
                <div className="h-px w-12 bg-primary" />
                <span className="text-xs font-mono uppercase tracking-wider text-primary">
                    {classification}
                </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight">
                {title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
                {subtitle}
            </p>
        </div>
    );
};
