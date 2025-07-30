import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  title: string;
  children: React.ReactNode;
}

export const CategoryCard = ({ title, children }: CategoryCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="shadow-subtle hover:shadow-elegant transition-all duration-300 bg-card border border-border">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            className="w-full p-6 h-auto justify-between hover:bg-transparent"
          >
            <div className="text-left space-y-2">
              <h3 className="text-xl font-serif font-medium text-foreground">
                {title}
              </h3>
            </div>
            
            <div className="ml-4">
              <ChevronRight className={cn(
                "h-5 w-5 text-primary transition-transform duration-300 ease-in-out",
                isOpen && "rotate-90"
              )} />
            </div>
          </Button>
        </CollapsibleTrigger>

        <CollapsibleContent className="overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up">
          <div className="min-h-[400px] border-t border-border p-6">
            <div className="text-foreground/90 leading-[1.15] space-y-4 [&_p]:mb-0 [&_div]:mb-0 [&_h1]:mb-0 [&_h2]:mb-0 [&_h3]:mb-0 [&_h4]:mb-0 [&_h5]:mb-0 [&_h6]:mb-0">
              {children}
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
}; 