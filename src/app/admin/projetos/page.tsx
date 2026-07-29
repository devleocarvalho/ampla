import Link from "next/link";
import { Plus, Search, MapPin, Calendar, HardHat } from "lucide-react";
import { projetos } from "@/data/projetos";

export default function ProjetosPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Projetos</h1>
          <p className="text-muted-foreground mt-2">Gerencie todas as obras e projetos da construtora.</p>
        </div>
        <button className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors font-medium">
          <Plus className="h-5 w-5" />
          <span>Novo Projeto</span>
        </button>
      </div>

      <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Buscar projetos..." 
              className="w-full pl-9 pr-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-sm"
            />
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1.5 text-sm border border-border rounded-md hover:bg-background transition-colors text-foreground">Filtrar</button>
            <button className="px-3 py-1.5 text-sm border border-border rounded-md hover:bg-background transition-colors text-foreground">Exportar</button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="text-xs text-muted-foreground uppercase bg-background/50 border-b border-border">
              <tr>
                <th className="px-6 py-4 font-medium">Projeto</th>
                <th className="px-6 py-4 font-medium">Progresso</th>
                <th className="px-6 py-4 font-medium">Status</th>
                <th className="px-6 py-4 font-medium">Prazo</th>
                <th className="px-6 py-4 font-medium">Responsável</th>
                <th className="px-6 py-4 font-medium text-right">Ações</th>
              </tr>
            </thead>
            <tbody>
              {projetos.map((projeto) => (
                <tr key={projeto.id} className="border-b border-border hover:bg-background/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-medium text-foreground">{projeto.title}</div>
                    <div className="text-xs text-muted-foreground flex items-center mt-1">
                      <MapPin className="h-3 w-3 mr-1" /> {projeto.local}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-full bg-background rounded-full h-2 max-w-[100px] border border-border">
                        <div 
                          className={`h-1.5 rounded-full ${projeto.progresso === 100 ? 'bg-green-500' : 'bg-primary'}`}
                          style={{ width: `${projeto.progresso}%` }}
                        ></div>
                      </div>
                      <span className="text-xs font-medium text-foreground">{projeto.progresso}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      projeto.status === 'Em construção' ? 'bg-green-500/10 text-green-500' :
                      projeto.status === 'Atrasado' ? 'bg-red-500/10 text-red-500' :
                      projeto.status === 'Concluído' ? 'bg-blue-500/10 text-blue-500' :
                      'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {projeto.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      {projeto.prazo}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-foreground">
                      <HardHat className="h-4 w-4 mr-2 text-muted-foreground" />
                      {projeto.responsavel}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link href={`/admin/projetos/${projeto.id}`} className="text-primary hover:underline font-medium text-sm">
                      Gerenciar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-border flex items-center justify-between text-sm text-muted-foreground">
          <span>Mostrando {projetos.length} projetos</span>
        </div>
      </div>
    </div>
  );
}
