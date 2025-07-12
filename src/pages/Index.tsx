import { GameSidebar } from "@/components/GameSidebar";
import { TopBar } from "@/components/TopBar";
import { HeroSection } from "@/components/HeroSection";
import { CharacterCards } from "@/components/CharacterCards";
import { StatsSection } from "@/components/StatsSection";
import { GameChat } from "@/components/GameChat";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gaming-dark via-background to-gaming-card flex">
      {/* Sidebar */}
      <GameSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <TopBar />
        
        {/* Main Content Area */}
        <div className="flex-1 flex">
          {/* Content */}
          <div className="flex-1 p-6 space-y-8 overflow-y-auto">
            {/* Hero Section */}
            <HeroSection />
            
            {/* Character Cards */}
            <CharacterCards />
            
            {/* Stats Section */}
            <StatsSection />
          </div>
          
          {/* Chat Sidebar */}
          <GameChat />
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="fixed top-20 left-32 w-4 h-4 bg-primary/20 rounded-full animate-float pointer-events-none" />
      <div className="fixed top-40 right-96 w-2 h-2 bg-accent/30 rounded-full animate-float-delay pointer-events-none" />
      <div className="fixed bottom-32 left-40 w-3 h-3 bg-primary/15 rounded-full animate-float pointer-events-none" />
    </div>
  );
};

export default Index;
