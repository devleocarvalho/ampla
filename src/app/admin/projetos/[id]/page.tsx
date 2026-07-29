"use client";

import { useState, useEffect, use } from "react";
import { projetos, Projeto } from "@/data/projetos";
import { ArrowLeft, CheckCircle2, Clock, AlertTriangle, AlertCircle, Save } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

// Extendemos o tipo localmente para suportar 'atrasada' na UI
type EtapaStatus = "concluida" | "andamento" | "pendente" | "atrasada";
type EtapaLocal = { nome: string; status: EtapaStatus };

export default function GestaoProjetoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const projetoBase = projetos.find((p) => p.id === resolvedParams.id);

  if (!projetoBase) {
    notFound();
  }

  // Estado Local (Simulando o Banco de Dados)
  const [etapas, setEtapas] = useState<EtapaLocal[]>(
    projetoBase.etapas as EtapaLocal[]
  );
  const [statusGeral, setStatusGeral] = useState(projetoBase.status);
  const [progresso, setProgresso] = useState(projetoBase.progresso);

  // Recalcular progresso sempre que as etapas mudarem
  useEffect(() => {
    if (etapas.length === 0) return;
    
    const concluidas = etapas.filter(e => e.status === "concluida").length;
    const novoProgresso = Math.round((concluidas / etapas.length) * 100);
    setProgresso(novoProgresso);

    // Lógica para sinalizar atraso automaticamente
    const temAtraso = etapas.some(e => e.status === "atrasada");
    
    if (novoProgresso === 100) {
      setStatusGeral("Concluído");
    } else if (temAtraso) {
      setStatusGeral("Atrasado");
    } else if (novoProgresso > 0 && statusGeral === "Planejamento") {
      setStatusGeral("Em construção");
    } else if (!temAtraso && statusGeral === "Atrasado") {
      setStatusGeral("Em construção"); // Remove o atraso se a etapa atrasada for resolvida
    }

  }, [etapas]);

  const mudarStatusEtapa = (index: number, novoStatus: EtapaStatus) => {
    const novasEtapas = [...etapas];
    novasEtapas[index].status = novoStatus;
    setEtapas(novasEtapas);
  };

  const getStatusIcon = (status: EtapaStatus) => {
    switch (status) {
      case "concluida": return <CheckCircle2 className="h-5 w-5 text-green-500" />;
      case "andamento": return <Clock className="h-5 w-5 text-blue-500" />;
      case "atrasada": return <AlertTriangle className="h-5 w-5 text-red-500" />;
      default: return <div className="h-5 w-5 rounded-full border-2 border-muted-foreground/30" />;
    }
  };

  const getStatusColorGeral = (status: string) => {
    switch (status) {
      case "Concluído": return "bg-green-500/10 text-green-600 border-green-200";
      case "Atrasado": return "bg-red-500/10 text-red-600 border-red-200";
      case "Em construção": return "bg-blue-500/10 text-blue-600 border-blue-200";
      default: return "bg-yellow-500/10 text-yellow-600 border-yellow-200";
    }
  };

  return (
    <div className="space-y-8 pb-12">
      {/* Cabeçalho */}
      <div>
        <Link href="/admin/projetos" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-4 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Voltar para Lista de Projetos
        </Link>
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground">{projetoBase.title}</h1>
            <p className="text-muted-foreground mt-2">Painel Interativo de Evolução da Obra</p>
          </div>
          <button className="flex items-center space-x-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors font-medium shadow-sm">
            <Save className="h-4 w-4" />
            <span>Salvar Alterações</span>
          </button>
        </div>
      </div>

      {/* Aviso de Mock */}
      <div className="bg-yellow-500/10 border border-yellow-500/20 text-yellow-700 p-4 rounded-lg flex items-start space-x-3">
        <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
        <div className="text-sm">
          <p className="font-bold">Modo de Demonstração (Client-Side)</p>
          <p>Esta tela é um protótipo interativo. O progresso é calculado automaticamente com base no checklist de etapas abaixo. Se houver alguma etapa sinalizada como "Atrasada", o status da obra também muda automaticamente para alertar os gestores.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Coluna Principal: Evolução e Checklist */}
        <div className="lg:col-span-2 space-y-6">
          
          <div className="bg-card border border-border rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">Status Geral e Progresso</h2>
              <select 
                value={statusGeral}
                onChange={(e) => setStatusGeral(e.target.value)}
                className={`px-3 py-1.5 rounded-md border text-sm font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 ${getStatusColorGeral(statusGeral)}`}
              >
                <option value="Planejamento">Planejamento</option>
                <option value="Em construção">Em construção</option>
                <option value="Atrasado">Atrasado</option>
                <option value="Concluído">Concluído</option>
              </select>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-muted-foreground">Evolução Física da Obra</span>
                <span className={progresso === 100 ? "text-green-500" : "text-primary"}>{progresso}%</span>
              </div>
              <div className="w-full bg-background rounded-full h-4 border border-border overflow-hidden">
                <div 
                  className={`h-full transition-all duration-500 ease-out ${
                    progresso === 100 ? 'bg-green-500' : 
                    statusGeral === 'Atrasado' ? 'bg-red-500' : 
                    'bg-primary'
                  }`}
                  style={{ width: `${progresso}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-bold text-foreground">Checklist de Etapas (Cronograma)</h2>
              <p className="text-sm text-muted-foreground mt-1">Marque as etapas concluídas ou sinalize atrasos para recalcular o progresso.</p>
            </div>
            <div className="divide-y divide-border">
              {etapas.map((etapa, index) => (
                <div key={index} className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-background/50 transition-colors">
                  <div className="flex items-center space-x-3">
                    {getStatusIcon(etapa.status)}
                    <span className={`font-medium ${etapa.status === 'concluida' ? 'text-muted-foreground line-through' : 'text-foreground'}`}>
                      {etapa.nome}
                    </span>
                  </div>
                  <div className="flex space-x-2 shrink-0">
                    <button 
                      onClick={() => mudarStatusEtapa(index, "pendente")}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${etapa.status === 'pendente' ? 'bg-muted text-muted-foreground border-transparent' : 'bg-background hover:bg-muted border-border'}`}
                    >
                      Pendente
                    </button>
                    <button 
                      onClick={() => mudarStatusEtapa(index, "andamento")}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${etapa.status === 'andamento' ? 'bg-blue-500/10 text-blue-600 border-blue-200' : 'bg-background hover:bg-blue-50/50 border-border'}`}
                    >
                      Em Andamento
                    </button>
                    <button 
                      onClick={() => mudarStatusEtapa(index, "atrasada")}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${etapa.status === 'atrasada' ? 'bg-red-500/10 text-red-600 border-red-200' : 'bg-background hover:bg-red-50/50 border-border'}`}
                    >
                      Atrasada
                    </button>
                    <button 
                      onClick={() => mudarStatusEtapa(index, "concluida")}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md border transition-colors ${etapa.status === 'concluida' ? 'bg-green-500/10 text-green-600 border-green-200' : 'bg-background hover:bg-green-50/50 border-border'}`}
                    >
                      Concluir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Coluna Lateral: Resumo */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl shadow-sm p-6">
            <h3 className="font-bold text-foreground mb-4">Detalhes do Contrato</h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-muted-foreground">Responsável</p>
                <p className="font-medium text-foreground">{projetoBase.responsavel}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Prazo Previsto</p>
                <p className="font-medium text-foreground">{projetoBase.prazo}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Localização</p>
                <p className="font-medium text-foreground">{projetoBase.local}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Valor Estimado</p>
                <p className="font-medium text-foreground">{projetoBase.valor}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
