import { Play, Star, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import phoenixImage from "@/assets/phoenix-hero.jpg";

export function HeroSection() {
  return (
    <div className="relative h-96 gaming-card overflow-hidden animate-fade-in-up">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-gaming-dark via-gaming-card to-transparent opacity-90" />
      
      {/* Character/Game image */}
      <div className="absolute right-0 top-0 w-1/2 h-full overflow-hidden">
        <img 
          src={phoenixImage} 
          alt="Phoenix Character"
          className="w-full h-full object-cover object-center animate-float"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-gaming-dark/60 via-transparent to-gaming-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col justify-center">
        <div className="mb-2">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
            <Star className="w-4 h-4 mr-1" />
            Popular
          </span>
        </div>
        
        <h1 className="text-5xl font-bold text-glow mb-4">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Valorant
          </span>
        </h1>
        
        <p className="text-muted-foreground text-lg mb-2 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipiscing elit ut et massa mi aliquam in hendrerit feli.
        </p>
        
        <div className="flex items-center gap-4 mb-6">
          <div className="text-sm">
            <span className="text-muted-foreground">Agent</span>
            <div className="flex items-center gap-2 mt-1">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              <span className="font-medium">Phoenix</span>
            </div>
          </div>
          
          <div className="text-sm">
            <span className="text-muted-foreground">Wins</span>
            <div className="font-bold text-xl text-primary">23%</div>
          </div>
          
          <div className="text-sm">
            <span className="text-muted-foreground">KD</span>
            <div className="font-bold text-xl">1.21</div>
          </div>
          
          <div className="text-sm">
            <span className="text-muted-foreground">Avg Score</span>
            <div className="font-bold text-xl">234</div>
          </div>
        </div>
        
        <Button className="gaming-button w-fit group">
          <Play className="w-4 h-4 mr-2" />
          Play Now
          <ChevronRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
}

function Gamepad2({ className }: { className?: string }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <line x1="6" x2="10" y1="12" y2="12"/>
      <line x1="8" x2="8" y1="10" y2="14"/>
      <line x1="15" x2="15.01" y1="13" y2="13"/>
      <line x1="18" x2="18.01" y1="11" y2="11"/>
      <rect width="20" height="12" x="2" y="6" rx="2"/>
    </svg>
  );
}