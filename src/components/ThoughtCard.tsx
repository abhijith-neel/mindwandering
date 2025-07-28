import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface ThoughtCardProps {
  title: string;
  date: string;
  preview: string;
  content?: string;
  linkTo?: string;
  tags?: string[];
}

const ThoughtCard = ({ title, date, preview, content, linkTo, tags }: ThoughtCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="p-6 shadow-subtle hover:shadow-elegant transition-all duration-300 bg-card border border-border">
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <h3 className="text-xl font-serif font-medium text-foreground leading-tight">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
          
          {linkTo && (
            <Button
              variant="ghost"
              size="sm"
              className="ml-4 text-primary hover:text-primary-foreground hover:bg-primary"
              asChild
            >
              <a href={linkTo} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>

        <p className="text-foreground/90 leading-relaxed">
          {preview}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {content && (
          <>
            <Button
              variant="ghost"
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-2 text-primary hover:text-primary-foreground hover:bg-primary p-0 h-auto font-normal"
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
              {isExpanded ? "Show less" : "Read more"}
            </Button>

            <div
              className={cn(
                "overflow-hidden transition-all duration-300 ease-in-out",
                isExpanded ? "max-h-none opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <div className="pt-4 space-y-4 border-t border-border">
                <div className="prose prose-sm max-w-none text-foreground/90">
                  {content.split('\n').map((paragraph, index) => (
                    <p key={index} className="leading-relaxed mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </Card>
  );
};

export default ThoughtCard;