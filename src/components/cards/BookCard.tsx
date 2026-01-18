import { TacticalCard } from "@/components/ui/TacticalCard";
import { Book, Calendar, User } from "lucide-react";

interface BookCardProps {
  title: string;
  author: string;
  description: string;
  category: string;
  publishDate: string;
  coverImage?: string;
}

export const BookCard = ({
  title,
  author,
  description,
  category,
  publishDate,
  coverImage,
}: BookCardProps) => {
  return (
    <TacticalCard className="group cursor-pointer">
      {/* Cover Image Area */}
      <div className="relative aspect-[3/4] mb-4 bg-secondary overflow-hidden">
        {coverImage ? (
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Book className="w-16 h-16 text-muted-foreground" />
          </div>
        )}
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="classification-badge text-[10px]">{category}</span>
        </div>
        {/* Red edge glow on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-l-2 border-primary" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="font-tactical text-lg tracking-wide group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 font-mono">
          {description}
        </p>
        
        {/* Metadata */}
        <div className="pt-3 border-t border-border space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <User className="w-3 h-3 text-primary" />
            <span>{author}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <Calendar className="w-3 h-3 text-primary" />
            <span>{publishDate}</span>
          </div>
        </div>
      </div>
    </TacticalCard>
  );
};
