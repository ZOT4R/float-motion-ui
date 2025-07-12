import { Clock, Target, Shield } from "lucide-react";

const stats = [
  {
    icon: Clock,
    label: "Total Hour Play",
    value: "12,340h",
    change: "+10%",
    color: "text-blue-400"
  },
  {
    icon: Target,
    label: "Fighting Time",
    value: "9,648h",
    change: "+7%",
    color: "text-green-400"
  },
  {
    icon: Shield,
    label: "Defence Time",
    value: "10,437h",
    change: "+15%",
    color: "text-purple-400"
  }
];

export function StatsSection() {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
      <h2 className="text-2xl font-bold mb-6">Your Statistics</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={stat.label}
            className="stat-card group hover:scale-105 transition-transform duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative z-10">
              <div className={`inline-flex p-3 rounded-lg bg-gaming-card-hover mb-4 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              
              <div className="mb-2">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
              
              <div className="flex items-center">
                <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                <span className="text-muted-foreground text-sm ml-1">from last month</span>
              </div>
            </div>
            
            {/* Animated background glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          </div>
        ))}
      </div>
    </div>
  );
}