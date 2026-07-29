"use client";

import { TrendingUp, FolderKanban, Users, AlertTriangle, Building2, Landmark, ShieldAlert, ArrowDownRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useProjects } from "@/context/ProjectContext";

export default function AdminDashboard() {
  const { projetosList: projetos } = useProjects();

  const projetosAtivos = projetos.filter((p) => p.status === "Em construção").length;
  const projetosConcluidos = projetos.filter((p) => p.status === "Concluído").length;
  const atrasados = projetos.filter((p) => p.status === "Atrasado").length;

  return (
    <div className="space-y-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Visão Global e Controladoria</h1>
        <p className="text-muted-foreground mt-2">Indicadores agregados de todas as obras, saúde financeira e conformidade da construtora.</p>
      </div>

      {/* KPIs Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Obras Ativas</h3>
            <div className="p-2 bg-primary/10 rounded-md">
              <FolderKanban className="h-4 w-4 text-primary" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">{projetosAtivos}</p>
          <p className="text-xs text-muted-foreground mt-2">
            {projetosConcluidos} concluídas no portfólio
          </p>
        </div>

        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Faturamento Contratado</h3>
            <div className="p-2 bg-green-500/10 rounded-md">
              <TrendingUp className="h-4 w-4 text-green-500" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">R$ 172.5M</p>
          <p className="text-xs text-green-500 mt-2 flex items-center">
            <ArrowUpRight className="h-3 w-3 mr-1" />
            Receita bruta prevista
          </p>
        </div>

        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Caixa Atual (Sede)</h3>
            <div className="p-2 bg-blue-500/10 rounded-md">
              <Landmark className="h-4 w-4 text-blue-500" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">R$ 14.2M</p>
          <p className="text-xs text-muted-foreground mt-2">Capital de giro disponível</p>
        </div>

        <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-muted-foreground">Obras em Risco</h3>
            <div className="p-2 bg-red-500/10 rounded-md">
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </div>
          </div>
          <p className="text-3xl font-bold text-foreground">{atrasados}</p>
          <p className="text-xs text-red-500 mt-2 font-medium">Atenção imediata necessária</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Painel Financeiro Global */}
        <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold text-foreground">Desempenho Financeiro Agregado</h3>
            <Link href="/admin/contabil" className="text-sm text-primary hover:underline font-medium">
              Ver DRE Completa
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="p-4 bg-background border border-border rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Receita Realizada (YTD)</p>
              <p className="text-lg font-bold text-green-600">R$ 84.500.000</p>
            </div>
            <div className="p-4 bg-background border border-border rounded-lg">
              <p className="text-xs text-muted-foreground mb-1">Custos Totais (YTD)</p>
              <p className="text-lg font-bold text-red-600">R$ 62.100.000</p>
            </div>
            <div className="p-4 bg-background border border-border rounded-lg border-l-4 border-l-blue-500">
              <p className="text-xs text-muted-foreground mb-1">Lucro Bruto Agregado</p>
              <p className="text-lg font-bold text-blue-600">R$ 22.400.000</p>
              <p className="text-[10px] font-medium text-muted-foreground mt-1">Margem: 26.5%</p>
            </div>
          </div>

          <h4 className="text-sm font-bold text-foreground mb-4 border-b border-border pb-2">Status Físico-Financeiro por Obra</h4>
          <div className="space-y-5">
            {projetos.map((projeto) => (
              <div key={projeto.id} className="relative">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-medium text-foreground flex items-center">
                    <Building2 className="h-3 w-3 mr-1.5 text-muted-foreground" />
                    {projeto.title}
                  </span>
                  <span className={`font-bold ${projeto.progresso === 100 ? 'text-green-500' : 'text-primary'}`}>
                    {projeto.progresso}% Físico
                  </span>
                </div>
                {/* Barra de Progresso Físico */}
                <div className="w-full bg-background rounded-full h-1.5 border border-border mb-1">
                  <div 
                    className={`h-full rounded-full transition-all ${projeto.progresso === 100 ? 'bg-green-500' : 'bg-primary'}`}
                    style={{ width: `${projeto.progresso}%` }}
                  ></div>
                </div>
                {/* Simulação de Barra Financeira (Medições Faturadas) */}
                <div className="w-full bg-background rounded-full h-1.5 border border-border">
                  <div 
                    className={`h-full rounded-full transition-all bg-green-500/50`}
                    style={{ width: `${Math.max(0, projeto.progresso - 10)}%` }} // Simula que financeiro está levemente atrasado em relação ao físico
                  ></div>
                </div>
              </div>
            ))}
            <div className="flex justify-end space-x-4 text-[10px] text-muted-foreground mt-2">
              <div className="flex items-center"><div className="w-2 h-2 bg-primary rounded-full mr-1"></div> Avanço Físico</div>
              <div className="flex items-center"><div className="w-2 h-2 bg-green-500/50 rounded-full mr-1"></div> Avanço Financeiro (Faturado)</div>
            </div>
          </div>
        </div>

        {/* Alertas Fiscais e Compliance */}
        <div className="space-y-6">
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-foreground flex items-center">
                <ShieldAlert className="h-5 w-5 mr-2 text-yellow-500" />
                Alertas Fiscais
              </h3>
            </div>
            <div className="space-y-4">
              {[
                { obra: "Edifício Infinity", imposto: "ISS (SME SP)", vcto: "Vence em 2 dias", status: "Pendente", tipo: "warning" },
                { obra: "Galpão Rodoanel", imposto: "INSS Retido", vcto: "Vence hoje!", status: "Crítico", tipo: "danger" },
                { obra: "Condomínio Reserva", imposto: "Licença Ambiental", vcto: "Regularizado", status: "Ok", tipo: "success" },
              ].map((alerta, i) => (
                <div key={i} className={`p-3 rounded-md border ${alerta.tipo === 'danger' ? 'bg-red-500/10 border-red-500/20' : alerta.tipo === 'warning' ? 'bg-yellow-500/10 border-yellow-500/20' : 'bg-background border-border'}`}>
                  <div className="flex justify-between items-start">
                    <div>
                      <p className={`text-sm font-bold ${alerta.tipo === 'danger' ? 'text-red-700' : alerta.tipo === 'warning' ? 'text-yellow-700' : 'text-foreground'}`}>
                        {alerta.imposto}
                      </p>
                      <p className="text-xs text-muted-foreground">{alerta.obra}</p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${alerta.tipo === 'danger' ? 'bg-red-500 text-white' : alerta.tipo === 'warning' ? 'bg-yellow-500 text-white' : 'bg-green-500/20 text-green-700'}`}>
                      {alerta.vcto}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
            <h3 className="text-sm font-bold text-foreground mb-4">Subempreiteiros (Contratos)</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm border-b border-border pb-2">
                <span className="text-muted-foreground">Total Ativos</span>
                <span className="font-bold">24 contratos</span>
              </div>
              <div className="flex justify-between items-center text-sm border-b border-border pb-2">
                <span className="text-muted-foreground">Medições a Pagar (Semana)</span>
                <span className="font-bold text-red-500">R$ 450.000</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-muted-foreground">Regularidade Fiscal</span>
                <span className="font-bold text-green-500">100% CND Ok</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
