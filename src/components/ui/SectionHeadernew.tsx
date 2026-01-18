import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  classification?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = ({
  title,
  subtitle,
  classification,
  align = "left",
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn(
        "mb-12",
        align === "center" && "text-center",
        className
      )}
    >
      {classification && (
        <div className={cn("mb-4", align === "center" && "flex justify-center")}>
          <span className="classification-badge">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            {classification}
          </span>
        </div>
      )}
      <h2 className="font-tactical text-3xl md:text-4xl tracking-widest mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground font-mono text-sm max-w-2xl">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-6 h-px bg-gradient-to-r from-primary via-primary/50 to-transparent",
          align === "center" && "from-transparent via-primary to-transparent max-w-md mx-auto"
        )}
      />
    </div>
  );
};
