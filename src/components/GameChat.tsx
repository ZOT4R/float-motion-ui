import { Send, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const chatUsers = [
  { id: 1, name: "Alex", avatar: "from-blue-500 to-cyan-400", online: true },
  { id: 2, name: "Sarah", avatar: "from-pink-500 to-rose-400", online: true },
  { id: 3, name: "Mike", avatar: "from-green-500 to-emerald-400", online: false },
  { id: 4, name: "Emma", avatar: "from-purple-500 to-violet-400", online: true },
  { id: 5, name: "Josh", avatar: "from-amber-500 to-orange-400", online: true },
];

const messages = [
  { user: "Alex", message: "GG everyone!", time: "2m ago" },
  { user: "Sarah", message: "Ready for the next match?", time: "5m ago" },
  { user: "Mike", message: "Nice clutch on Bind!", time: "8m ago" },
];

export function GameChat() {
  return (
    <div className="w-80 gaming-card gaming-card-right m-4 flex flex-col animate-slide-in-right" style={{ height: 'calc(100vh - 2rem)' }}>
      {/* Header */}
      <div className="p-4 border-b border-gaming-border/30">
        <h3 className="font-semibold text-lg mb-3">Group Chat</h3>
        
        {/* Online users */}
        <div className="flex -space-x-2">
          {chatUsers.map((user) => (
            <div key={user.id} className="relative">
              <div 
                className={`w-8 h-8 bg-gradient-to-r ${user.avatar} rounded-full border-2 border-gaming-card flex items-center justify-center text-xs font-bold text-white`}
              >
                {user.name[0]}
              </div>
              {user.online && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gaming-card animate-pulse" />
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 overflow-y-auto">
        {messages.map((msg, index) => (
          <div 
            key={index} 
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center text-xs font-bold">
                {msg.user[0]}
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium text-sm">{msg.user}</span>
                  <span className="text-xs text-muted-foreground">{msg.time}</span>
                </div>
                <div className="bg-gaming-card-hover rounded-lg px-3 py-2 text-sm">
                  {msg.message}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Input */}
      <div className="p-4 border-t border-gaming-border/30">
        <div className="flex space-x-2">
          <Input 
            placeholder="Type message here..." 
            className="bg-gaming-card-hover border-gaming-border focus:border-primary/50"
          />
          <Button size="icon" className="gaming-button">
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}