import { Home, Gamepad2, Users, Gift, ShoppingBag, MessageSquare, Trophy, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { icon: Home, label: "Home", active: true },
  { icon: Gamepad2, label: "Games" },
  { icon: Users, label: "Team" },
  { icon: Gift, label: "Rewards" },
  { icon: ShoppingBag, label: "Store" },
  { icon: MessageSquare, label: "Chat" },
  { icon: Trophy, label: "Leaderboard" },
  { icon: Settings, label: "Settings" },
];

export function GameSidebar() {
  return (
    <div className="w-20 bg-gradient-to-b from-gaming-dark to-gaming-card border-r border-gaming-border flex flex-col items-center py-6 animate-slide-in-left">
      {/* Logo */}
      <div className="w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl mb-8 flex items-center justify-center glow-border">
        <span className="text-2xl font-bold text-primary-foreground">R</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4">
        {navigation.map((item, index) => (
          <button
            key={item.label}
            className={cn(
              "w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group relative",
              "hover:scale-110 hover:bg-gaming-card-hover hover:shadow-[var(--glow-primary)]",
              item.active 
                ? "bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-[var(--glow-primary)]" 
                : "bg-gaming-card text-muted-foreground hover:text-foreground"
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <item.icon className="w-5 h-5" />
            
            {/* Tooltip */}
            <div className="absolute left-16 bg-gaming-card px-3 py-2 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-gaming-border whitespace-nowrap z-50">
              {item.label}
            </div>
          </button>
        ))}
      </nav>
    </div>
  );
}