import Link from "next/link";
import { LayoutDashboard, FolderKanban, CalendarDays, Calculator, FileText, Settings, LogOut, Building2 } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Projetos", href: "/admin/projetos", icon: FolderKanban },
  { name: "Planejamento", href: "/admin/planejamento", icon: CalendarDays },
  { name: "Contábil & Fiscal", href: "/admin/contabil", icon: Calculator },
  { name: "Relatórios", href: "/admin/relatorios", icon: FileText },
  { name: "Configurações", href: "/admin/configuracoes", icon: Settings },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-card border-r border-border h-screen flex flex-col fixed left-0 top-0">
      <div className="h-20 flex items-center px-6 border-b border-border">
        <Link href="/" className="flex items-center space-x-2">
          <Building2 className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight text-foreground">Ampla<span className="text-primary">.</span></span>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className="flex items-center space-x-3 px-4 py-3 rounded-md text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors font-medium"
            >
              <Icon className="h-5 w-5" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <button className="flex items-center space-x-3 px-4 py-3 w-full rounded-md text-muted-foreground hover:bg-red-500/10 hover:text-red-500 transition-colors font-medium">
          <LogOut className="h-5 w-5" />
          <span>Sair</span>
        </button>
      </div>
    </aside>
  );
}
