import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const HobbiesAndHyperfixations = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="shadow-subtle hover:shadow-elegant transition-all duration-300 bg-card border border-border">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 h-auto justify-between hover:bg-transparent"
      >
        <div className="text-left space-y-2">
          <h3 className="text-xl font-serif font-medium text-foreground">
            Hobbies and Hyperfixations
          </h3>
        </div>
        
        <div className="ml-4">
          {isOpen ? (
            <ChevronDown className="h-5 w-5 text-primary" />
          ) : (
            <ChevronRight className="h-5 w-5 text-primary" />
          )}
        </div>
      </Button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-none opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="min-h-[400px] border-t border-border p-6">
            <div className="text-foreground/90 leading-relaxed">
              <p className="text-foreground/90 leading-relaxed">Content is coming soon.</p>
            </div>

        </div>
      </div>
    </Card>
  );
}; 