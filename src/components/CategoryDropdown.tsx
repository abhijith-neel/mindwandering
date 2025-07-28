import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Canvas } from "./Canvas";
import { cn } from "@/lib/utils";

interface CategoryDropdownProps {
  title: string;
  description?: string;
  categoryId: string;
}

export const CategoryDropdown = ({ title, description, categoryId }: CategoryDropdownProps) => {
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
            {title}
          </h3>
          {description && (
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
          )}
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
        <div className="border-t border-border">
          <Canvas categoryId={categoryId} />
        </div>
      </div>
    </Card>
  );
};