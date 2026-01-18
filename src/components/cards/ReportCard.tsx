import { TacticalCard } from "@/components/ui/TacticalCard";
import { FileText, Calendar, Download } from "lucide-react";

interface ReportCardProps {
  title: string;
  abstract: string;
  category: string;
  date: string;
  classification: string;
}

export const ReportCard = ({
  title,
  abstract,
  category,
  date,
  classification,
}: ReportCardProps) => {
  return (
    <TacticalCard className="group cursor-pointer">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 border border-primary/50 flex items-center justify-center bg-primary/10">
            <FileText className="w-5 h-5 text-primary" />
          </div>
          <div>
            <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest block">
              {category}
            </span>
            <span className="classification-badge text-[10px] mt-1">{classification}</span>
          </div>
        </div>
        <Download className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="font-tactical text-lg tracking-wide group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3 font-mono">
          {abstract}
        </p>
        
        {/* Footer */}
        <div className="pt-3 border-t border-border flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
            <Calendar className="w-3 h-3 text-primary" />
            <span>{date}</span>
          </div>
          <span className="text-xs font-mono text-primary uppercase tracking-wider group-hover:underline">
            Read Report →
          </span>
        </div>
      </div>
    </TacticalCard>
  );
};
