
import { useEffect, useRef, useState } from "react";
import { Canvas as FabricCanvas } from "fabric";

interface CanvasProps {
  categoryId: string;
}

export const Canvas = ({ categoryId }: CanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new FabricCanvas(canvasRef.current, {
      width: 800,
      height: 400,
      backgroundColor: "#ffffff",
      selection: false,
      interactive: false,
    });

    // Disable all interactions
    canvas.isDrawingMode = false;
    canvas.hoverCursor = 'default';
    canvas.moveCursor = 'default';
    canvas.defaultCursor = 'default';

    setFabricCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, []);

  return (
    <div className="space-y-4 p-4 bg-background rounded-lg border border-border">
      {/* Canvas Display Only */}
      <div className="border border-border rounded-lg overflow-hidden shadow-subtle">
        <canvas ref={canvasRef} className="max-w-full" />
      </div>
      
      <p className="text-sm text-muted-foreground text-center italic">
        Canvas for {categoryId.replace('-', ' ')} - content will be managed elsewhere
      </p>
    </div>
  );
};
