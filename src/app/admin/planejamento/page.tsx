import { Calendar, Filter, Clock, CheckCircle2 } from "lucide-react";

export default function PlanejamentoPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">Planejamento</h1>
          <p className="text-muted-foreground mt-2">Cronogramas e alocação de recursos das obras.</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 bg-background border border-border text-foreground px-4 py-2 rounded-md hover:bg-card transition-colors font-medium">
            <Filter className="h-5 w-5" />
            <span>Filtros</span>
          </button>
          <button className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors font-medium">
            <Calendar className="h-5 w-5" />
            <span>Novo Cronograma</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-card border border-border rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-foreground mb-4">Cronograma Geral (Gantt Simplificado)</h2>
            <div className="space-y-6">
              {[
                { task: "Fundações - Ed. Infinity", start: 10, duration: 20, color: "bg-blue-500" },
                { task: "Estrutura - Ed. Infinity", start: 30, duration: 40, color: "bg-primary" },
                { task: "Terraplanagem - Galpão Rodoanel", start: 0, duration: 15, color: "bg-green-500" },
                { task: "Alvenaria - Cond. Reserva", start: 20, duration: 30, color: "bg-yellow-500" },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div className="flex justify-between text-xs text-muted-foreground mb-1">
                    <span className="font-medium text-foreground">{item.task}</span>
                    <span>15 dias</span>
                  </div>
                  <div className="w-full bg-background rounded-full h-3 border border-border relative">
                    <div 
                      className={`absolute h-full rounded-full ${item.color} opacity-80 hover:opacity-100 transition-opacity cursor-pointer`}
                      style={{ left: `${item.start}%`, width: `${item.duration}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              <div className="flex justify-between text-xs text-muted-foreground pt-2 border-t border-border mt-4">
                <span>Semana 1</span>
                <span>Semana 2</span>
                <span>Semana 3</span>
                <span>Semana 4</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl shadow-sm p-6">
            <h2 className="text-lg font-bold text-foreground mb-4">Próximas Entregas</h2>
            <div className="space-y-4">
              {[
                { title: "Laje Térreo - Ed. Infinity", date: "Amanhã", icon: Clock, color: "text-yellow-500" },
                { title: "Projeto Executivo - Galpão", date: "Em 3 dias", icon: Clock, color: "text-muted-foreground" },
                { title: "Sondagem - Sede Corp", date: "Concluído", icon: CheckCircle2, color: "text-green-500" },
              ].map((task, i) => (
                <div key={i} className="flex items-start space-x-3 p-3 rounded-md bg-background border border-border">
                  <task.icon className={`h-5 w-5 mt-0.5 ${task.color}`} />
                  <div>
                    <p className="text-sm font-medium text-foreground">{task.title}</p>
                    <p className="text-xs text-muted-foreground">{task.date}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-4 text-sm font-medium text-primary hover:underline">Ver todas as entregas</button>
          </div>
        </div>
      </div>
    </div>
  );
}
