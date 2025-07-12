import { Search, Bell, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function TopBar() {
  return (
    <div className="h-16 gaming-card gaming-card-top mx-4 mt-4 flex items-center justify-between px-6 animate-fade-in-up">
      {/* Greeting */}
      <div>
        <h1 className="text-lg font-semibold">
          Good Morning, <span className="text-primary">Ar Rafi</span>
        </h1>
      </div>
      
      {/* Search and actions */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Tap here to search"
            className="pl-10 w-64 bg-gaming-card-hover border-gaming-border focus:border-primary/50"
          />
        </div>
        
        {/* Notifications */}
        <Button variant="outline" size="icon" className="gaming-card hover:bg-gaming-card-hover border-gaming-border relative">
          <Bell className="w-4 h-4" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse" />
        </Button>
        
        {/* Profile */}
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <div className="text-sm font-medium">Ux With Rafi...</div>
            <div className="text-xs text-muted-foreground">7,654 Viewers</div>
          </div>
          <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-primary-foreground" />
          </div>
        </div>
      </div>
    </div>
  );
}