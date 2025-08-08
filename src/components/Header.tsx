import { Button } from "@/components/ui/enhanced-button";
import { TrendingUp } from "lucide-react";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-accent/20 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-accent">
              <TrendingUp className="w-6 h-6 text-accent-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">Cognate Market</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#assets" className="text-muted-foreground hover:text-accent transition-colors">
              Assets
            </a>
            <a href="#accounts" className="text-muted-foreground hover:text-accent transition-colors">
              Account Types
            </a>
            <a href="/platform" className="text-muted-foreground hover:text-accent transition-colors">
              Platform
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="trading" size="sm">
              Login
            </Button>
            <Button variant="premium" size="sm">
              Start Trading
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};