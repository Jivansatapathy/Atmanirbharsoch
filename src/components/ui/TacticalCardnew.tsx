import { type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface TacticalCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  style?: CSSProperties;
}

export const TacticalCard = ({ children, className, hover = true, style }: TacticalCardProps) => {
  return (
    <div
      className={cn(
        "tactical-card",
        hover && "hover:border-primary/50 hover:bg-card/80",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};
