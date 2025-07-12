import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import jettImage from "@/assets/jett-character.jpg";
import chamberImage from "@/assets/chamber-character.jpg";
import sovaImage from "@/assets/sova-character.jpg";

const characters = [
  { 
    name: "Jett", 
    role: "Duelist",
    color: "from-blue-500 to-cyan-400",
    description: "Swift and agile",
    image: jettImage
  },
  { 
    name: "Chamber", 
    role: "Sentinel",
    color: "from-amber-500 to-yellow-400",
    description: "Precise marksman",
    image: chamberImage
  },
  { 
    name: "Sova", 
    role: "Initiator",
    color: "from-purple-500 to-pink-400",
    description: "Information gatherer",
    image: sovaImage
  },
];

export function CharacterCards() {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Popular Characters</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="icon" className="gaming-card hover:bg-gaming-card-hover border-gaming-border">
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" className="gaming-card hover:bg-gaming-card-hover border-gaming-border">
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {characters.map((character, index) => (
          <div 
            key={character.name} 
            className="floating-card group cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="p-6">
              {/* Character image */}
              <div className={`w-full h-48 bg-gradient-to-br ${character.color} rounded-lg mb-4 relative overflow-hidden`}>
                <img 
                  src={character.image} 
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">{character.name}</h3>
                  <p className="text-white/80 text-sm">{character.role}</p>
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-white/60 rounded-full animate-ping" />
                <div className="absolute top-8 right-8 w-1 h-1 bg-white/40 rounded-full animate-pulse" />
              </div>
              
              <p className="text-muted-foreground text-sm mb-4">{character.description}</p>
              
              <Button 
                variant="outline" 
                className="w-full gaming-card hover:bg-gaming-card-hover border-gaming-border group-hover:border-primary/50 transition-all duration-300"
              >
                Select Character
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}