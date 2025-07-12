import { GameSidebar } from "@/components/GameSidebar";
import { TopBar } from "@/components/TopBar";
import { HeroSection } from "@/components/HeroSection";
import { CharacterCards } from "@/components/CharacterCards";
import { StatsSection } from "@/components/StatsSection";
import { GameChat } from "@/components/GameChat";

const Index = () => {
  return (
    <div className="min-h-screen p-4 relative overflow-hidden" style={{
      background: `
        radial-gradient(circle at 20% 80%, rgba(28, 100, 58, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(45, 100, 55, 0.08) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(28, 100, 58, 0.05) 0%, transparent 40%),
        linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #141414 75%, #0d0d0d 100%)
      `
    }}>
      {/* Studio atmosphere effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/2 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
      </div>
      
      <div className="flex gap-4 h-screen relative z-10">
        {/* Sidebar */}
        <GameSidebar />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Top Bar */}
          <TopBar />
          
          {/* Main Content Area */}
          <div className="flex-1 flex gap-4">
            {/* Content */}
            <div className="flex-1 gaming-card gaming-card-center p-6 space-y-8 overflow-y-auto">
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
      </div>
      
      {/* Enhanced floating decorative elements */}
      <div className="fixed top-20 left-32 w-4 h-4 bg-primary/30 rounded-full animate-float pointer-events-none blur-sm" />
      <div className="fixed top-40 right-96 w-2 h-2 bg-accent/40 rounded-full animate-float-delay pointer-events-none blur-sm" />
      <div className="fixed bottom-32 left-40 w-3 h-3 bg-primary/25 rounded-full animate-float pointer-events-none blur-sm" />
      <div className="fixed top-60 left-1/4 w-5 h-5 bg-gaming-glow/20 rounded-full animate-float-delay pointer-events-none blur-md" />
      <div className="fixed bottom-40 right-1/3 w-6 h-6 bg-primary/15 rounded-full animate-float pointer-events-none blur-lg" />
    </div>
  );
};

export default Index;
