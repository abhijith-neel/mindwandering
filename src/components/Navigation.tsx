import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-center">
          <div className="flex items-center space-x-8 relative">
            <Link
              to="/"
              className={cn(
                "text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative pb-1",
                isActive("/") && "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-muted-foreground after:transition-all after:duration-300"
              )}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={cn(
                "text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative pb-1",
                isActive("/about") && "after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-muted-foreground after:transition-all after:duration-300"
              )}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;