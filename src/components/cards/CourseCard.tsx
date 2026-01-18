import { TacticalCard } from "@/components/ui/TacticalCard";
import { Play, Clock, BookOpen } from "lucide-react";

interface CourseCardProps {
  title: string;
  instructor: string;
  description: string;
  duration: string;
  modules: number;
  level: string;
  thumbnail?: string;
}

export const CourseCard = ({
  title,
  instructor,
  description,
  duration,
  modules,
  level,
  thumbnail,
}: CourseCardProps) => {
  return (
    <TacticalCard className="group cursor-pointer">
      {/* Thumbnail Area */}
      <div className="relative aspect-video mb-4 bg-secondary overflow-hidden">
        {thumbnail ? (
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center grid-pattern">
            <Play className="w-12 h-12 text-muted-foreground" />
          </div>
        )}
        
        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full border-2 border-primary flex items-center justify-center bg-background/80 red-glow">
            <Play className="w-6 h-6 text-primary ml-1" />
          </div>
        </div>

        {/* Level Badge */}
        <div className="absolute top-3 right-3">
          <span className="classification-badge text-[10px]">{level}</span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="font-tactical text-lg tracking-wide group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-xs text-primary font-mono uppercase tracking-wider">
          {instructor}
        </p>
        <p className="text-sm text-muted-foreground line-clamp-2 font-mono">
          {description}
        </p>
        
        {/* Metadata */}
        <div className="pt-3 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <Clock className="w-3 h-3 text-primary" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <BookOpen className="w-3 h-3 text-primary" />
            <span>{modules} Modules</span>
          </div>
        </div>
      </div>
    </TacticalCard>
  );
};
