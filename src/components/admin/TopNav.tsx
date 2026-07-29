import { Bell, Search, User } from "lucide-react";

export default function TopNav() {
  return (
    <header className="h-20 bg-background border-b border-border flex items-center justify-between px-8 sticky top-0 z-10 ml-64">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Buscar projetos, relatórios..." 
            className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-sm text-foreground"
          />
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <button className="relative text-muted-foreground hover:text-foreground transition-colors">
          <Bell className="h-6 w-6" />
          <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-3 border-l border-border pl-6">
          <div className="text-right hidden md:block">
            <p className="text-sm font-medium text-foreground">Eng. Carlos</p>
            <p className="text-xs text-muted-foreground">Administrador</p>
          </div>
          <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
            <User className="h-5 w-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
