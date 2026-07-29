import { TrendingUp, FolderKanban, Users, AlertTriangle } from "lucide-react";
import { projetos } from "@/data/projetos";

export default function AdminDashboard() {
  const projetosAtivos = projetos.filter((p) => p.status === "Em construção").length;
  const projetosConcluidos = projetos.filter((p) => p.status === "Concluído").length;
  const alertas = projetos.filter((p) => p.status === "Atrasado").length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Visão Geral</h1>
        <p className="text-muted-foreground mt-2">Acompanhe o progresso da construtora em tempo real.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Projetos Ativos</h3>
            <div className="p-2 bg-primary/10 rounded-md">
              <FolderKanban className="h-4 w-4 text-primary" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">{projetosAtivos}</p>
          <p className="text-xs text-muted-foreground mt-2">
            {projetosConcluidos} concluídos
          </p>
        </div>

        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Orçamento Total</h3>
            <div className="p-2 bg-primary/10 rounded-md">
              <TrendingUp className="h-4 w-4 text-primary" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">R$ 172.5M</p>
          <p className="text-xs text-green-500 mt-2 flex items-center">
            <TrendingUp className="h-3 w-3 mr-1" />
            Dentro da meta
          </p>
        </div>

        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Colaboradores</h3>
            <div className="p-2 bg-primary/10 rounded-md">
              <Users className="h-4 w-4 text-primary" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">340</p>
          <p className="text-xs text-muted-foreground mt-2">Em {projetosAtivos} frentes de obra</p>
        </div>

        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Alertas Críticos</h3>
            <div className="p-2 bg-red-500/10 rounded-md">
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">{alertas}</p>
          <p className="text-xs text-red-500 mt-2">Projetos atrasados</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Progresso dos projetos */}
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-foreground mb-6">Progresso por Projeto</h3>
          <div className="space-y-6">
            {projetos.map((projeto) => (
              <div key={projeto.id}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="font-medium text-foreground">{projeto.title}</span>
                  <span className={`font-bold ${projeto.progresso === 100 ? 'text-green-500' : 'text-primary'}`}>
                    {projeto.progresso}%
                  </span>
                </div>
                <div className="w-full bg-background rounded-full h-2.5 border border-border">
                  <div 
                    className={`h-full rounded-full transition-all ${projeto.progresso === 100 ? 'bg-green-500' : 'bg-primary'}`}
                    style={{ width: `${projeto.progresso}%` }}
                  ></div>
                </div>
                <p className="text-xs text-muted-foreground mt-1">{projeto.responsavel} · {projeto.local}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Avisos Recentes */}
        <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
          <h3 className="text-lg font-bold text-foreground mb-4">Avisos Recentes</h3>
          <div className="space-y-4">
            {[
              { title: "Nota Fiscal #1234 rejeitada", time: "Há 2 horas", type: "error" },
              { title: "Concretagem da Laje 2 concluída", time: "Há 4 horas", type: "success" },
              { title: "Medição do mês disponível", time: "Ontem", type: "info" },
              { title: "Licença ambiental renovada", time: "Há 2 dias", type: "success" },
            ].map((alert, i) => (
              <div key={i} className="flex items-start space-x-3 p-3 rounded-md bg-background border border-border">
                <div className={`h-2 w-2 mt-1.5 rounded-full ${alert.type === 'error' ? 'bg-red-500' : alert.type === 'success' ? 'bg-green-500' : 'bg-primary'}`}></div>
                <div>
                  <p className="text-sm font-medium text-foreground">{alert.title}</p>
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
